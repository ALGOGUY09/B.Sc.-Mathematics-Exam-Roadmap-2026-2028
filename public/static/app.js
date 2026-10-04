import { roadmap } from './roadmap-data.js';
const { QUARTERS, TRACKS, ROUTES, PRIMARY, SECONDARY, PLAN, SOURCES, FLAG_META } = roadmap;
// Calendar calculations use India's calendar date, not the viewer's timezone.
const indiaParts = new Intl.DateTimeFormat('en-GB', {timeZone:'Asia/Kolkata',year:'numeric',month:'numeric',day:'numeric'}).formatToParts(new Date());
const part = key => Number(indiaParts.find(p => p.type === key).value);
const TODAY = Date.UTC(part('year'), part('month') - 1, part('day'));
const referenceDate = `${String(part('day')).padStart(2,'0')}/${String(part('month')).padStart(2,'0')}/${part('year')}`;
const currentQuarter = (part('year') - 2026) * 4 + Math.floor((part('month') - 1) / 3);
const quarterState = q => { const i = QUARTERS.indexOf(q); return i < currentQuarter ? 'past' : i === currentQuarter ? 'now' : i >= 8 ? 'far' : 'next'; };
const state = {route:'all', tracks:new Set(TRACKS.map(t=>t.id)), nowOnly:false, view:'swimlane', alsoOpen:true};
const app = document.getElementById('roadmap-app');
const drawerRoot = document.getElementById('drawer-root');
const tooltipRoot = document.getElementById('tooltip-root');
let lastFocused = null;
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const trackStyle = id => `style="--tc:var(--t-${esc(id)})"`;
const swatch = '<span class="swatch" aria-hidden="true"></span>';
const mark = (event, ring=false) => `<i class="mk mk-${event.type}${ring ? ' mk-ring' : ''}" aria-hidden="true"></i>`;
const days = date => Math.round((date-TODAY)/86400000);
export function parseDate(value) {
  const s = String(value || '').trim();
  let m = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  if (m) return Date.UTC(+m[3], +m[2]-1, +m[1]);
  m = s.match(/^(\d{1,2})[–-](\d{1,2})\/(\d{1,2})\/(\d{4})/);
  if (m) return Date.UTC(+m[4], +m[3]-1, +m[1]);
  m = s.match(/^(\d{1,2})\/(\d{1,2})\s*[–-]\s*\d{1,2}\/\d{1,2}\/(\d{4})/);
  if (m) return Date.UTC(+m[3], +m[2]-1, +m[1]);
  m = s.match(/^([A-Za-z]{3})[a-z]*(?:\s*[–-]\s*[A-Za-z]+)?\s+(\d{4})/);
  if(m){const month = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'].indexOf(m[1].toLowerCase()); if(month>=0) return Date.UTC(+m[2],month,1);}
  return null;
}
const relative = n => n < 0 ? `${Math.abs(n)}d ago` : n === 0 ? 'today' : n < 45 ? `in ${n}d` : n < 400 ? `in ${Math.round(n/30.4)} mo` : `in ${(n/365).toFixed(1)} yr`;
const done = event => {const q=QUARTERS.find(q=>q.id===event.q); const d=parseDate(event.date); return (q && quarterState(q)==='past') || (d!==null && days(d)<-25);};
const sortedEvents = exam => [...(exam.events||[])].sort((a,b) => QUARTERS.findIndex(q=>q.id===a.q)-QUARTERS.findIndex(q=>q.id===b.q) || (parseDate(a.date)??Infinity)-(parseDate(b.date)??Infinity));
const nextAction = exam => sortedEvents(exam).find(event=>!done(event));
const flag = (key, compact=false) => `<span class="flag flag-${esc(key)}" title="${esc(FLAG_META[key]?.desc)}">${esc(FLAG_META[key]?.[compact ? 'short' : 'label'] || key)}</span>`;
const allExams = [...PRIMARY,...SECONDARY];
function visibleData() {
 const allowed = ex => state.tracks.has(ex.track) && (state.route==='all'||ex.route===state.route) && (!state.nowOnly||(ex.eligibility?.flag || ex.flag)==='now');
 return {primary:PRIMARY.filter(allowed),secondary:SECONDARY.filter(allowed)};
}
function nextMilestone(exams){return exams.flatMap(exam=>exam.events.map(ev=>({...ev,exam,dateValue:parseDate(ev.date)}))).filter(ev=>ev.dateValue!==null && days(ev.dateValue)>=0).sort((a,b)=>a.dateValue-b.dateValue)[0];}
function segment(group, values, selected) {return `<div class="segmented" role="group" aria-label="${group}">${values.map(([value,label])=>`<button class="segment ${selected===value?'active':''}" data-${group}="${value}" aria-pressed="${selected===value}">${label}</button>`).join('')}</div>`;}
function header(primary,secondary){
 const next = nextMilestone(primary);
 return `<header id="roadmap-header"><div class="title-rule"></div><div class="title-content"><div><p class="kicker micro">Examination &amp; Career Roadmap · India</p><h1>B.Sc. Mathematics <span>—</span> <em>Exam Roadmap</em> 2026–2028</h1><p class="subtitle">Ten primary routes across six tracks, laid against ten quarters. Every date, fee and pay figure is drawn from the workbook’s verified source sheet.</p></div><div class="stats" aria-live="polite"><div class="stat"><span class="stat-value">${primary.length}</span><span class="micro">primary routes</span></div><div class="stat"><span class="stat-value">${secondary.length}</span><span class="micro">also-consider</span></div><div class="stat"><span class="stat-value">${next ? days(next.dateValue)===0?'today':days(next.dateValue)+'d':'—'}</span><span class="micro">${next?'to '+esc(next.exam.short):'next deadline'}</span></div></div></div><div class="meta-strip"><span><b class="micro">Reference date</b> ${referenceDate}</span><span><b class="micro">Position</b> final-year graduate, Oct 2026</span><span><b class="micro">Next milestone</b> ${next?esc(next.label)+' — '+esc(next.date)+' ('+esc(next.exam.short)+')':'No dated milestones remain'}${next?.tentative?'<span class="projected">projected</span>':''}</span><button class="text-link" data-action="sources">Sources &amp; caveats →</button></div></header>`;
}
function controls(){return `<nav class="controls" aria-label="Timeline filters"><div class="control-group"><span class="micro">Route</span>${segment('route',[['all','Both'],['job','Job route'],['pg','PG route']],state.route)}</div><div class="control-group"><span class="micro">Tracks</span><div class="track-chips">${TRACKS.map(t=>`<button class="track-chip ${state.tracks.has(t.id)?'active':''}" ${trackStyle(t.id)} data-track="${t.id}" aria-pressed="${state.tracks.has(t.id)}" title="${esc(t.blurb)} · double-click to isolate">${swatch}${esc(t.name)}</button>`).join('')}</div></div><div class="control-group"><span class="micro">View</span>${segment('view',[['swimlane','Swimlane'],['planner','Planner'],['fork','Fork']],state.view)}</div><div class="control-group control-end"><button class="eligibility-toggle ${state.nowOnly?'active':''}" role="switch" aria-checked="${state.nowOnly}" data-action="eligible"><span class="toggle-track" aria-hidden="true"></span>Eligible now only</button><button class="reset" data-action="reset">Reset</button></div></nav>`;}
function legend(){return `<section class="legend" aria-label="Chart legend"><span class="micro">Milestone marks</span>${[['notif','Notification'],['app','Application window'],['exam','Exam day'],['stage','Later stage'],['result','Result']].map(([type,label])=>`<span class="legend-item">${mark({type})} ${label}</span>`).join('')}<span class="legend-divider"></span><span class="legend-item">${mark({type:'stage'},true)} your next action</span><span class="legend-divider"></span><span class="micro">Eligibility</span>${['now','cond','after'].map(f=>flag(f)).join('')}</section>`;}
function eventButton(exam,event,index,planner=false){
 const hero = event===nextAction(exam);
 return `<button data-exam="${esc(exam.id)}" data-event="${index}" ${trackStyle(exam.track)} class="${planner?'planner-event':'event-chip'}${hero?' hero':''}${done(event)?' done':''}" aria-label="${esc(exam.short)}: ${esc(event.label)}, ${esc(event.date)}${event.tentative?', projected':''}">${mark(event,hero)}<span class="event-text"><span class="event-date">${esc(event.date)}</span><span class="event-label">${esc(event.label)}</span>${planner?`<span class="micro">${esc(exam.short)}</span>`:''}</span></button>`;
}
function swimlane(exams){return `<article class="card-shell" aria-label="Swimlane view"><div class="chart-scroll" tabindex="0" aria-label="Exam timeline; scroll horizontally for later quarters"><div class="quarter-head"><div></div>${QUARTERS.map(q=>`<div class="quarter-cell state-${quarterState(q)}"><span class="quarter-year">${q.yr}</span><span class="quarter-label">${q.label}</span>${quarterState(q)==='now'?'<span class="quarter-now">you are here</span>':''}</div>`).join('')}</div>${TRACKS.map(t=>{const rows=exams.filter(ex=>ex.track===t.id).sort((a,b)=>a.rank-b.rank);if(!rows.length)return '';return `<section ${trackStyle(t.id)}><h2 class="track-heading">${swatch}${esc(t.name)}<span class="micro">${rows.length} route${rows.length>1?'s':''}</span></h2>${rows.map(ex=>`<div class="exam-row"><button class="exam-label" data-exam="${ex.id}"><span class="exam-name">${esc(ex.short)}</span><span class="exam-meta"><b>#${ex.rank}</b><span>${esc(ex.prep)}</span></span>${flag(ex.eligibility.flag,true)}</button>${QUARTERS.map(q=>{const events=ex.events.filter(e=>e.q===q.id);return `<div class="event-cell state-${quarterState(q)}${events.length?' has-events':''}">${events.map(event=>eventButton(ex,event,ex.events.indexOf(event))).join('')}</div>`}).join('')}</div>`).join('')}</section>`}).join('')}</div><footer class="chart-foot"><span>${mark({type:'stage'},true)} ringed mark = your next action on that route</span><span>faded cells = quarter already passed</span><span>click any mark for the full timeline</span></footer></article>`;}
function planner(exams){return `<article class="card-shell chart-scroll" tabindex="0" aria-label="Quarterly planner; scroll horizontally"><div class="planner-rail">${QUARTERS.map(q=>{const plan=PLAN[q.id];const status=quarterState(q);const events=exams.flatMap(ex=>ex.events.filter(e=>e.q===q.id).map(event=>({ex,event}))).sort((a,b)=>(parseDate(a.event.date)??Infinity)-(parseDate(b.event.date)??Infinity));return `<section class="planner-column"><header class="planner-head state-${status}"><div class="planner-head-top"><span class="micro">${esc(q.span)}</span>${status==='now'?'<span class="status-tag current">now</span>':status==='past'?'<span class="status-tag">closed</span>':''}</div><h3>${esc(plan.title)}</h3></header><div class="planner-body">${plan.do?.length?`<section class="plan-block"><h4 class="micro plan-heading">Do this</h4><ul class="plan-list">${plan.do.map(v=>`<li>${esc(v)}</li>`).join('')}</ul></section>`:''}${plan.open?.filter(v=>v!=='—').length?`<section class="plan-block"><h4 class="micro plan-heading">Opens / closes</h4><ul class="plan-list open">${plan.open.filter(v=>v!=='—').map(v=>`<li>${esc(v)}</li>`).join('')}</ul></section>`:''}${events.length?`<section class="plan-block"><h4 class="micro plan-heading">Sitting on the calendar</h4><div class="planner-events">${events.map(({ex,event})=>eventButton(ex,event,ex.events.indexOf(event),true)).join('')}</div></section>`:''}</div>${plan.watch&&plan.watch!=='—'?`<footer class="watch-strip"><span class="micro">Watch</span>${esc(plan.watch)}</footer>`:''}</section>`}).join('')}</div></article>`;}
function fork(exams){return `<div class="decision-heading micro">The decision</div><div class="fork-grid">${['job','pg'].map(side=>{const route=ROUTES[side];const rows=exams.filter(e=>e.route===side);return `<section class="fork-column card-shell" style="--route-color:var(--${side==='job'?'accent':'accent2'})"><header class="fork-head"><span class="fork-letter">${side==='job'?'A':'B'}</span><div><h2>${esc(route.name)}</h2><p>${esc(route.sub)}</p></div><span class="micro">${rows.length} routes</span></header>${TRACKS.filter(t=>t.route===side).map(t=>{const entries=rows.filter(e=>e.track===t.id);return entries.length?`<section class="fork-track" ${trackStyle(t.id)}><h3 class="track-caption micro">${swatch}${esc(t.name)}</h3>${entries.map(ex=>{const next=nextAction(ex);return `<button class="fork-card" data-exam="${ex.id}"><span class="fork-card-top"><span class="fork-card-name">${esc(ex.short)}</span>${flag(ex.eligibility.flag,true)}</span><span class="fork-next">${next?`<b>${esc(next.date)}</b><span>${esc(next.label)}</span>`:'Cycle complete — see full timeline'}</span><span class="fork-card-foot"><span>${esc(ex.salary)}</span><span>${esc(ex.prep)}</span></span></button>`}).join('')}</section>`:''}).join('')}${!rows.length?'<p class="secondary-why">No routes on this side match your filters.</p>':''}</section>`}).join('')}</div><aside class="fork-note"><b>Not mutually exclusive.</b> SSC CGL, IBPS PO and SBI PO sit on the job side but a PG degree keeps every research route open afterwards. The workbook’s own ranking puts UPSC CSE, SSC CGL, CAT, RBI Grade B, IIT JAM and GATE in the top tier — the same six appear on both sides of this fork.</aside>`;}
function also(items){return `<section class="also-section" id="also-consider"><button class="also-head" data-action="also" aria-expanded="${state.alsoOpen}" aria-controls="also-routes"><span class="also-caret">${state.alsoOpen?'−':'+'}</span><span class="also-title">Also consider</span><span class="micro">${items.length} further routes</span><span class="also-hint">${state.alsoOpen?'collapse':'lower-priority options from the same workbook'}</span></button>${state.alsoOpen?`<div class="also-body" id="also-routes">${TRACKS.map(t=>{const entries=items.filter(e=>e.track===t.id);return entries.length?`<section class="also-group"><h3 class="track-caption micro" ${trackStyle(t.id)}>${swatch}${esc(t.name)}</h3><div class="also-items">${entries.map(ex=>`<button class="also-card" data-exam="${esc(ex.id)}"><span class="also-name">${esc(ex.name)}<i class="flag-dot ${ex.flag}" aria-hidden="true"></i></span><span class="also-date">${esc(ex.date)}</span><span class="also-why">${esc(ex.why)}</span><span class="also-more micro">details →</span></button>`).join('')}</div></section>`:''}).join('')}${items.length?'':'<p class="secondary-why">No further routes match these filters.</p>'}</div>`:''}</section>`;}
function render(){
 const {primary,secondary}=visibleData();
 const focusKey = document.activeElement?.dataset;
 const focusSelector = focusKey?.track?`[data-track="${focusKey.track}"]`:focusKey?.route?`[data-route="${focusKey.route}"]`:focusKey?.view?`[data-view="${focusKey.view}"]`:focusKey?.action?`[data-action="${focusKey.action}"]`:null;
 tooltipRoot.innerHTML='';
 app.innerHTML=header(primary,secondary)+controls()+legend()+`<section class="timeline-section" id="timeline-section" aria-label="Examination timeline">${primary.length?(state.view==='swimlane'?swimlane(primary):state.view==='planner'?planner(primary):fork(primary)):`<div class="empty-state"><h2>No routes match these filters</h2><p>Try another track or route, turn off “Eligible now only”, or use Reset to see every option.</p><button class="text-link" data-action="reset">Reset filters →</button></div>`}</section>`+also(secondary)+`<footer class="page-footer"><span>Workbook-backed · India B.Sc. Mathematics · 2026–2028<br>Projected dates are planning guides, not confirmed schedules.</span><div class="footer-actions"><button class="text-link" data-action="sources">Sources &amp; caveats →</button><button class="text-link" data-action="print">Print / save PDF ↗</button></div></footer>`;
 if(focusSelector) app.querySelector(focusSelector)?.focus({preventScroll:true});
}
function specs(entries){return `<dl class="spec-grid">${entries.filter(([,v])=>v).map(([label,value])=>`<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join('')}</dl>`;}
function shell(content,track){
 lastFocused=document.activeElement;tooltipRoot.innerHTML='';document.body.style.overflow='hidden';
 drawerRoot.innerHTML=`<div class="scrim" data-action="close" aria-hidden="true"></div><aside class="drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title" ${track?trackStyle(track):''}>${content}</aside>`;
 drawerRoot.querySelector('.close-drawer').focus();
}
const closeButton = '<button class="close-drawer" data-action="close" aria-label="Close details">✕</button>';
function showExam(id){
 const ex=allExams.find(e=>e.id===id);if(!ex)return;
 const track=TRACKS.find(t=>t.id===ex.track);const next=nextAction(ex);
 const head=`<div class="drawer-bar"></div><header class="drawer-head"><span class="drawer-track micro">${swatch}${esc(track.name)}<span class="drawer-route">${ex.route==='job'?'Job route':'PG route'}</span></span>${closeButton}</header><h2 id="drawer-title">${esc(ex.name)}</h2><div class="drawer-flags">${flag(ex.eligibility?.flag||ex.flag)}${ex.difficulty?`<span class="drawer-tag">${esc(ex.difficulty)}</span>`:''}${ex.prep?`<span class="drawer-tag">${esc(ex.prep)} prep</span>`:''}</div>`;
 const timeline=ex.events?`<section aria-label="Full exam timeline"><h3 class="timeline-caption micro">Full timeline · notification → exam → result</h3>${sortedEvents(ex).map(ev=>`<div class="detail-event ${done(ev)?'done':''} ${ev===next?'hero':''}"><span class="detail-rail">${mark(ev,ev===next)}</span><div><div class="detail-date">${esc(ev.date)}${parseDate(ev.date)!==null?`<span class="relative-tag">${relative(days(parseDate(ev.date)))}</span>`:''}</div><div class="detail-label">${esc(ev.label)}${ev.tentative?'<span class="projected">projected</span>':''}</div></div></div>`).join('')}</section>`:'';
 const details=ex.events?specs([['Pattern',ex.pattern],['Vacancies / seats',ex.vacancies],['Starting pay',ex.salary],['Pay trajectory',ex.salaryLong],['Competition',ex.competition],['Application fee',ex.fee]]):specs([['Pattern',ex.pattern],['Competition',ex.competition],['Starting pay',ex.salary],['Pay trajectory',ex.salaryLong],['Application fee',ex.fee],['Career growth',ex.career]]);
 shell(head+(!ex.events?`<p class="secondary-date">${esc(ex.date)}</p><p class="secondary-why">${esc(ex.why)}</p>`:'')+`<p class="eligibility-copy">${esc(ex.eligibility?.text || ex.elig || 'Check the official notification for current eligibility rules.')}</p>`+timeline+details+`<aside class="read-note"><span class="micro">Read this</span>${esc(ex.note||ex.rec||ex.why)}</aside>`+(ex.site?`<a class="portal-link" href="${esc(ex.site)}" target="_blank" rel="noopener noreferrer">Official portal <span>${esc(ex.site.replace(/^https?:\/\//,'').replace(/\/$/,''))}</span> ↗</a>`:''),ex.track);
}
function showSources(){shell(`<header class="drawer-head"><span class="micro">Sources &amp; caveats</span>${closeButton}</header><h2 id="drawer-title">Where this data comes from</h2><p class="eligibility-copy">Every figure on the chart traces to the workbook’s <b>Verified Sources</b> sheet, compiled from official notifications and calendars in 2026. Dates marked <span class="projected">projected</span> are tentative entries — treat them as a planning guide, not a confirmed schedule.</p><section aria-label="Research caveats">${[['2026 cycles already closed.','UPSC CSE Prelims, ISI/CMI, RBI Grade B and ISS fell before October 2026. The live targets are the 2027 cycles.'],['2027–28 dates are projections.','Except where an official calendar exists (UPSC 2027), later dates are annual-cycle estimates.'],['Salary figures vary by basis.','The workbook mixes basic pay, in-hand estimates, gross salary and CTC. Read each figure’s label; these are not directly comparable or guaranteed.'],['Eligibility is a first pass.','Percentage thresholds, age, subject rules and degree-completion dates must be re-checked against each notification.']].map(([title,text])=>`<p class="caveat"><b>${title}</b> ${text}</p>`).join('')}</section><nav class="sources-list" aria-label="Official sources">${SOURCES.map(([name,url],i)=>`<a class="source-link" href="${esc(url)}" target="_blank" rel="noopener noreferrer"><span class="micro">${String(i+1).padStart(2,'0')}</span><span>${esc(name)}</span><span>↗</span></a>`).join('')}</nav>`);}
function closeDrawer(){drawerRoot.innerHTML='';document.body.style.overflow='';lastFocused?.focus({preventScroll:true});lastFocused=null;}
function reset(){state.route='all';state.tracks=new Set(TRACKS.map(t=>t.id));state.nowOnly=false;render();}
app.addEventListener('click',e=>{
 const button=e.target.closest('button');if(!button)return;
 const data=button.dataset;
 if(data.exam){showExam(data.exam);return;}
 if(data.route){state.route=data.route;render();return;}
 if(data.view){state.view=data.view;render();return;}
 if(data.track){state.tracks.has(data.track)?state.tracks.delete(data.track):state.tracks.add(data.track);render();return;}
 if(data.action==='eligible'){state.nowOnly=!state.nowOnly;render();}
 if(data.action==='reset')reset();
 if(data.action==='also'){state.alsoOpen=!state.alsoOpen;render();}
 if(data.action==='sources')showSources();
 if(data.action==='print')window.print();
});
// Track double-click isolation survives rerendering between pointer clicks.
let previousTrack=null;let previousClick=0;
app.addEventListener('pointerdown',e=>{const button=e.target.closest('[data-track]');if(!button)return;const now=performance.now();if(button.dataset.track===previousTrack&&now-previousClick<400){setTimeout(()=>{state.tracks=new Set([button.dataset.track]);render();},0);previousTrack=null;}else{previousTrack=button.dataset.track;previousClick=now;}});
app.addEventListener('dblclick',e=>{const button=e.target.closest('[data-track]');if(button){state.tracks=new Set([button.dataset.track]);render();}});
app.addEventListener('pointerover',e=>{
 const chip=e.target.closest('.event-chip');if(!chip || chip.contains(e.relatedTarget))return;
 const ex=PRIMARY.find(ex=>ex.id===chip.dataset.exam);const ev=ex.events[Number(chip.dataset.event)];const r=chip.getBoundingClientRect();const d=parseDate(ev.date);
 tooltipRoot.innerHTML=`<aside class="tooltip" role="tooltip" ${trackStyle(ex.track)}><span class="micro">${swatch}${esc(ex.short)}</span><strong>${esc(ev.label)}</strong><p>${esc(ev.date)}${d!==null?' · '+relative(days(d)):''}</p><p>${esc(FLAG_META[ex.eligibility.flag].label)}${ev.tentative?' · projected':''}</p><footer>click for full timeline</footer></aside>`;
 const tip=tooltipRoot.firstElementChild;tip.style.left=`${Math.max(8,Math.min(r.left,window.innerWidth-280))}px`;tip.style.top=`${r.bottom+window.scrollY+8}px`;
});
app.addEventListener('pointerout',e=>{const chip=e.target.closest('.event-chip');if(chip&&!chip.contains(e.relatedTarget))tooltipRoot.innerHTML='';});
drawerRoot.addEventListener('click',e=>{if(e.target.closest('[data-action="close"]'))closeDrawer();});
document.addEventListener('keydown',e=>{
 if(!drawerRoot.firstElementChild)return;
 if(e.key==='Escape'){e.preventDefault();closeDrawer();}
 if(e.key==='Tab'){const elements=[...drawerRoot.querySelectorAll('button,a[href]')];const first=elements[0],last=elements.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}
});
window.addEventListener('resize',()=>{tooltipRoot.innerHTML='';});
render();
