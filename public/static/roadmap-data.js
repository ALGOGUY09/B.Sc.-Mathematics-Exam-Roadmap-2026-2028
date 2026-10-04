// Authoritative handoff data, normalized to a scoped ES module.
export const roadmap = {
  "QUARTERS": [
    {
      "id": "q0",
      "label": "Jan–Mar",
      "yr": "2026",
      "span": "Jan–Mar 2026",
      "short": "Q1 26",
      "state": "past"
    },
    {
      "id": "q1",
      "label": "Apr–Jun",
      "yr": "2026",
      "span": "Apr–Jun 2026",
      "short": "Q2 26",
      "state": "past"
    },
    {
      "id": "q2",
      "label": "Jul–Sep",
      "yr": "2026",
      "span": "Jul–Sep 2026",
      "short": "Q3 26",
      "state": "now"
    },
    {
      "id": "q3",
      "label": "Oct–Dec",
      "yr": "2026",
      "span": "Oct–Dec 2026",
      "short": "Q4 26",
      "state": "now"
    },
    {
      "id": "q4",
      "label": "Jan–Mar",
      "yr": "2027",
      "span": "Jan–Mar 2027",
      "short": "Q1 27",
      "state": "next"
    },
    {
      "id": "q5",
      "label": "Apr–Jun",
      "yr": "2027",
      "span": "Apr–Jun 2027",
      "short": "Q2 27",
      "state": "next"
    },
    {
      "id": "q6",
      "label": "Jul–Sep",
      "yr": "2027",
      "span": "Jul–Sep 2027",
      "short": "Q3 27",
      "state": "next"
    },
    {
      "id": "q7",
      "label": "Oct–Dec",
      "yr": "2027",
      "span": "Oct–Dec 2027",
      "short": "Q4 27",
      "state": "next"
    },
    {
      "id": "q8",
      "label": "Jan–Mar",
      "yr": "2028",
      "span": "Jan–Mar 2028",
      "short": "Q1 28",
      "state": "far"
    },
    {
      "id": "q9",
      "label": "Apr–Jun",
      "yr": "2028",
      "span": "Apr–Jun 2028",
      "short": "Q2 28",
      "state": "far"
    }
  ],
  "TRACKS": [
    {
      "id": "govt",
      "name": "Govt & UPSC",
      "route": "job",
      "blurb": "Central & state government services"
    },
    {
      "id": "banking",
      "name": "Banking & Regulators",
      "route": "job",
      "blurb": "PSU banks, RBI, SEBI, insurance"
    },
    {
      "id": "defence",
      "name": "Defence & State Govt",
      "route": "job",
      "blurb": "Officer entry, state PSCs"
    },
    {
      "id": "pg",
      "name": "PG Entrance",
      "route": "pg",
      "blurb": "M.Sc. / M.Stat / MCA admissions"
    },
    {
      "id": "research",
      "name": "Research & Academia",
      "route": "pg",
      "blurb": "PhD, JRF, faculty eligibility"
    },
    {
      "id": "mba",
      "name": "MBA Entrance",
      "route": "pg",
      "blurb": "IIMs, XLRI, Symbiosis, NMIMS"
    }
  ],
  "ROUTES": {
    "job": {
      "id": "job",
      "name": "Job Route",
      "sub": "Graduate → government post",
      "accent": "job"
    },
    "pg": {
      "id": "pg",
      "name": "PG Route",
      "sub": "Graduate → master’s → research",
      "accent": "pg"
    }
  },
  "PRIMARY": [
    {
      "id": "upsc-cse",
      "name": "UPSC Civil Services (CSE)",
      "short": "UPSC CSE",
      "track": "govt",
      "route": "job",
      "rank": 1,
      "pattern": "Prelims · Mains (9 papers) · Interview",
      "eligibility": {
        "flag": "after",
        "text": "Any bachelor’s degree. Age 21–32 (GEN); 6 attempts. 2026 pass-out can attempt CSE 2027."
      },
      "salary": "₹56,100 basic",
      "salaryLong": "Level 10 · in-hand ₹1.0–1.1 L/mo · ₹15–18 L/yr by year 5",
      "prep": "18–24 mo",
      "vacancies": "1,016 (2026)",
      "difficulty": "Extreme",
      "competition": "~8.19 L registered · ~5.49 L appeared · 13,343 shortlisted for Mains",
      "site": "https://upsc.gov.in",
      "fee": "₹100 (Gen/OBC/EWS)",
      "note": "Highest prestige and ceiling. Prelims 2026 already held on 24/05/2026 — the live target is the 2027 cycle.",
      "events": [
        {
          "q": "q0",
          "date": "04/02/2026",
          "label": "Notification 2026",
          "type": "notif",
          "past": true
        },
        {
          "q": "q1",
          "date": "24/05/2026",
          "label": "Prelims 2026",
          "type": "exam",
          "past": true
        },
        {
          "q": "q4",
          "date": "13/01/2027",
          "label": "Notification 2027",
          "type": "notif"
        },
        {
          "q": "q4",
          "date": "02/02/2027",
          "label": "Application closes",
          "type": "app"
        },
        {
          "q": "q5",
          "date": "23/05/2027",
          "label": "Prelims 2027",
          "type": "exam",
          "hero": true
        },
        {
          "q": "q6",
          "date": "Sep 2027",
          "label": "Mains 2027",
          "type": "stage",
          "tentative": true
        }
      ]
    },
    {
      "id": "ssc-cgl",
      "name": "SSC CGL",
      "short": "SSC CGL",
      "track": "govt",
      "route": "job",
      "rank": 2,
      "pattern": "Tier 1 (CBT) · Tier 2 · no interview for most",
      "eligibility": {
        "flag": "now",
        "text": "Any bachelor’s. Age 18–32 as on 1 Aug 2026. Final-year students may apply provisionally."
      },
      "salary": "₹44,900 basic",
      "salaryLong": "Level 4–8 · ASO Level 7 ₹75,889/mo in-hand · JSO Level 6 ₹53,682–64,362/mo",
      "prep": "6–12 mo",
      "vacancies": "~10,731 (2026)",
      "difficulty": "Hard",
      "competition": "2025: 28.15 L applied · 1,39,395 cleared Tier 1 · 15,118 shortlisted",
      "site": "https://ssc.gov.in",
      "fee": "₹100 (Gen/OBC/EWS)",
      "note": "Best all-round graduate option. JSO / Statistical Investigator route needs Statistics as a degree subject OR 60% in Class XII Maths.",
      "events": [
        {
          "q": "q1",
          "date": "21/05/2026",
          "label": "Notification 2026",
          "type": "notif",
          "past": true
        },
        {
          "q": "q2",
          "date": "30/09–30/10/2026",
          "label": "Tier 1 (CBT)",
          "type": "exam",
          "hero": true
        },
        {
          "q": "q3",
          "date": "Dec 2026",
          "label": "Tier 2 · JSO Paper II",
          "type": "exam"
        },
        {
          "q": "q4",
          "date": "Mar 2027",
          "label": "Notification 2027",
          "type": "notif",
          "tentative": true
        }
      ]
    },
    {
      "id": "rbi-grb",
      "name": "RBI Grade B (DR)",
      "short": "RBI Grade B",
      "track": "banking",
      "route": "job",
      "rank": 2,
      "pattern": "Phase 1 · Phase 2 (ESI + FM) · Interview",
      "eligibility": {
        "flag": "cond",
        "text": "Graduate, minimum 60% aggregate usually required for General. Age 21–30. Verify the percentage rule against the notification."
      },
      "salary": "₹78,450 basic",
      "salaryLong": "In-hand ₹1.0–1.55 L/mo · CTC widely quoted ₹26–34 L",
      "prep": "10–14 mo",
      "vacancies": "Hundreds of seats",
      "difficulty": "Extreme",
      "competition": "~2–3 L apply · under 0.1% selection · RBI does not publish appear counts",
      "site": "https://rbi.org.in",
      "fee": "₹850 (Gen) approx.",
      "note": "Best pay-to-prestige ratio among the regulators. The 2026 window closed on 20/05/2026 — target the next cycle.",
      "events": [
        {
          "q": "q1",
          "date": "29/04/2026",
          "label": "Notification 2026",
          "type": "notif",
          "past": true
        },
        {
          "q": "q1",
          "date": "20/05/2026",
          "label": "Registration closes",
          "type": "app",
          "past": true
        },
        {
          "q": "q2",
          "date": "Jun 2026",
          "label": "Phase 1",
          "type": "exam",
          "past": true
        },
        {
          "q": "q3",
          "date": "Annual cycle",
          "label": "Phase 2 + Interview",
          "type": "stage",
          "tentative": true
        }
      ]
    },
    {
      "id": "sbi-po",
      "name": "SBI Probationary Officer",
      "short": "SBI PO",
      "track": "banking",
      "route": "job",
      "rank": 3,
      "pattern": "Prelims · Mains · Group exercise + Interview",
      "eligibility": {
        "flag": "now",
        "text": "Graduate. Age 21–30. Final-year students eligible on provisional basis."
      },
      "salary": "₹48,480 basic",
      "salaryLong": "In-hand ₹78,000–85,000/mo · CTC ₹12–14 L",
      "prep": "6–10 mo",
      "vacancies": "1,500 (2026)",
      "difficulty": "Hard",
      "competition": "~10–12 L apply for 1,500 seats · under 0.15% of applicants",
      "site": "https://sbi.bank.in/web/careers",
      "fee": "₹750 (Gen/EWS/OBC) · NIL SC/ST/PwBD",
      "note": "Top banking target. Strongest promotion ladder of the PSU banks — Scale I to GM.",
      "events": [
        {
          "q": "q2",
          "date": "Jun 2026",
          "label": "Advertisement 2026",
          "type": "notif",
          "past": true
        },
        {
          "q": "q2",
          "date": "Jul 2026",
          "label": "Prelims",
          "type": "exam",
          "past": true,
          "tentative": true
        },
        {
          "q": "q2",
          "date": "12/09/2026",
          "label": "Mains",
          "type": "exam",
          "hero": true
        },
        {
          "q": "q3",
          "date": "Oct 2026",
          "label": "Group exercise + Interview",
          "type": "stage",
          "tentative": true
        }
      ]
    },
    {
      "id": "ibps-po",
      "name": "IBPS PO (CRP PO/XVI)",
      "short": "IBPS PO",
      "track": "banking",
      "route": "job",
      "rank": 3,
      "pattern": "Prelims · Mains · Interview",
      "eligibility": {
        "flag": "now",
        "text": "Graduate. Age 20–30 as on 1 July 2026. Final-year students eligible provisionally."
      },
      "salary": "₹48,480 basic",
      "salaryLong": "In-hand ₹65,000–78,726/mo · ₹13–18 L/yr by year 5",
      "prep": "6–10 mo",
      "vacancies": "7,365 (2026)",
      "difficulty": "Hard",
      "competition": "~11 L+ applied · under 0.1% of applicants",
      "site": "https://ibps.in",
      "fee": "₹850 (Gen) · ₹175 SC/ST/PwBD",
      "note": "High-volume banking entry — the largest single PO intake of the year.",
      "events": [
        {
          "q": "q2",
          "date": "30/06/2026",
          "label": "Notification",
          "type": "notif",
          "past": true
        },
        {
          "q": "q2",
          "date": "22–23/08/2026",
          "label": "Prelims",
          "type": "exam",
          "past": true
        },
        {
          "q": "q3",
          "date": "04/10/2026",
          "label": "Mains",
          "type": "exam",
          "hero": true
        },
        {
          "q": "q3",
          "date": "Nov 2026",
          "label": "Interview",
          "type": "stage",
          "tentative": true
        }
      ]
    },
    {
      "id": "iit-jam",
      "name": "IIT JAM (MA Mathematics)",
      "short": "IIT JAM",
      "track": "pg",
      "route": "pg",
      "rank": 2,
      "pattern": "Computer-based · 60 questions · 3 hours (MCQ + MSQ + NA)",
      "eligibility": {
        "flag": "now",
        "text": "Bachelor’s with Mathematics/Statistics for 2 years. Final-year students eligible to appear."
      },
      "salary": "M.Sc. → ₹6–14 LPA",
      "salaryLong": "Analytics / data science ₹6–14 LPA · academia ₹5–6 LPA start · ₹12–20 L/yr by year 5",
      "prep": "8–12 mo",
      "vacancies": "Thousands of M.Sc. seats",
      "difficulty": "Hard",
      "competition": "~80,000–1 L appear · ~10–15% qualify (qualifying ≠ admission)",
      "site": "https://jam.iitkgp.ac.in",
      "fee": "₹1,000 (Female/SC/ST/PwD) · ₹2,000 per paper",
      "note": "Premier mathematics PG route. Registration opened 05/09/2026 — this one is live right now.",
      "events": [
        {
          "q": "q2",
          "date": "05/09/2026",
          "label": "Registration opens",
          "type": "app",
          "hero": true
        },
        {
          "q": "q3",
          "date": "Oct 2026",
          "label": "Registration closes",
          "type": "app",
          "tentative": true
        },
        {
          "q": "q4",
          "date": "14/02/2027",
          "label": "JAM 2027 exam",
          "type": "exam",
          "hero": true
        },
        {
          "q": "q4",
          "date": "Mar 2027",
          "label": "Result · counselling",
          "type": "result",
          "tentative": true
        }
      ]
    },
    {
      "id": "gate",
      "name": "GATE (MA Mathematics / ST Statistics)",
      "short": "GATE",
      "track": "pg",
      "route": "pg",
      "rank": 2,
      "pattern": "Computer-based · 65 questions · 3 hours",
      "eligibility": {
        "flag": "now",
        "text": "Bachelor’s in a relevant discipline. Final-year students eligible."
      },
      "salary": "PSU ₹8–12 LPA",
      "salaryLong": "PSU start ₹8–12 LPA · PhD stipend ₹37,000–42,000/mo · ₹15–25 L/yr by year 5",
      "prep": "8–12 mo",
      "vacancies": "Seats + PSU cutoffs vary",
      "difficulty": "Hard",
      "competition": "~7–9 L appear across all papers · maths/stats sub-papers smaller",
      "site": "https://gate2027.iitm.ac.in",
      "fee": "₹1,000 (Female/SC/ST/PwD) · ₹2,000 per paper",
      "note": "Dual purpose: M.Tech/M.Sc.-PhD admission at IITs/IISc AND PSU recruitment (DRDO, ISRO, NTPC, BARC).",
      "events": [
        {
          "q": "q2",
          "date": "27/08/2026",
          "label": "Registration opens",
          "type": "app",
          "hero": true
        },
        {
          "q": "q3",
          "date": "05/10/2026",
          "label": "Registration closes (extended)",
          "type": "app"
        },
        {
          "q": "q4",
          "date": "06–21/02/2027",
          "label": "GATE 2027 exam",
          "type": "exam",
          "hero": true
        },
        {
          "q": "q4",
          "date": "Mar 2027",
          "label": "Result · scorecard",
          "type": "result",
          "tentative": true
        }
      ]
    },
    {
      "id": "cat",
      "name": "CAT (MBA at IIMs)",
      "short": "CAT",
      "track": "mba",
      "route": "pg",
      "rank": 2,
      "pattern": "VARC · DILR · QA · 2 hours total",
      "eligibility": {
        "flag": "now",
        "text": "Bachelor’s with minimum 50% (45% SC/ST). Final-year students eligible."
      },
      "salary": "Top IIM ₹20–35 LPA",
      "salaryLong": "Top IIM median ₹20–35 LPA · others ₹8–15 LPA · ₹30–60 L/yr by year 5",
      "prep": "6–12 mo",
      "vacancies": "~5,000–6,000 IIM seats",
      "difficulty": "Extreme",
      "competition": "~2.5–3 L appear · ~1% reach top IIMs · ~2% any IIM",
      "site": "https://iimcat.ac.in",
      "fee": "₹2,500 (Gen) · ₹1,250 SC/ST/PwD",
      "note": "Highest ceiling of any route here — but only if you convert a top IIM. Registration closes 15/09/2026.",
      "events": [
        {
          "q": "q2",
          "date": "03/08/2026",
          "label": "Registration opens",
          "type": "app",
          "past": true
        },
        {
          "q": "q2",
          "date": "15/09/2026",
          "label": "Registration closes",
          "type": "app",
          "hero": true
        },
        {
          "q": "q3",
          "date": "29/11/2026",
          "label": "CAT 2026 exam",
          "type": "exam",
          "hero": true
        },
        {
          "q": "q4",
          "date": "Jan 2027",
          "label": "Result · GD/PI calls",
          "type": "result",
          "tentative": true
        }
      ]
    },
    {
      "id": "isi",
      "name": "ISI Admission (M.Stat / M.Math)",
      "short": "ISI M.Stat",
      "track": "research",
      "route": "pg",
      "rank": 2,
      "pattern": "Written test (maths-heavy) + Interview",
      "eligibility": {
        "flag": "now",
        "text": "Bachelor’s with Mathematics as a full subject and a strong maths background. Final-year students eligible."
      },
      "salary": "Quant ₹12–25 LPA",
      "salaryLong": "Industry (quant/data) ₹12–25 LPA · ₹20–40 L/yr by year 10",
      "prep": "12–18 mo",
      "vacancies": "Small cohorts per programme",
      "difficulty": "Extreme",
      "competition": "~5,000–15,000 per programme · very low conversion",
      "site": "https://admission.isical.ac.in",
      "fee": "~₹1,000–2,000",
      "note": "The gold standard for mathematics careers in India. 2026 cycle closed 04/04/2026, test held 02/05/2026.",
      "events": [
        {
          "q": "q0",
          "date": "04/04/2026",
          "label": "Applications close",
          "type": "app",
          "past": true
        },
        {
          "q": "q1",
          "date": "02/05/2026",
          "label": "Admission test 2026",
          "type": "exam",
          "past": true
        },
        {
          "q": "q4",
          "date": "Mar 2027",
          "label": "Applications 2027",
          "type": "app",
          "tentative": true
        },
        {
          "q": "q5",
          "date": "May 2027",
          "label": "Admission test 2027",
          "type": "exam",
          "hero": true,
          "tentative": true
        }
      ]
    },
    {
      "id": "tifr",
      "name": "TIFR GS (Mathematics PhD)",
      "short": "TIFR GS",
      "track": "research",
      "route": "pg",
      "rank": 3,
      "pattern": "Written test + Interview",
      "eligibility": {
        "flag": "after",
        "text": "Bachelor’s or Master’s in Mathematics. Integrated PhD open after graduation."
      },
      "salary": "JRF ₹37–42k/mo",
      "salaryLong": "JRF stipend ₹37,000–42,000/mo · research or faculty track thereafter",
      "prep": "12–18 mo",
      "vacancies": "Small pool",
      "difficulty": "Very Hard",
      "competition": "Niche applicant pool · low conversion",
      "site": "https://www.tifr.res.in/academics/",
      "fee": "~₹1,000 (fee waiver available)",
      "note": "Research-focused integrated PhD at TIFR CAM. Application deadline falls 25/10/2026 — the nearest hard deadline on this chart.",
      "events": [
        {
          "q": "q3",
          "date": "25/10/2026",
          "label": "Application deadline",
          "type": "app",
          "hero": true
        },
        {
          "q": "q3",
          "date": "13/12/2026",
          "label": "GS-2027 written test",
          "type": "exam",
          "hero": true
        },
        {
          "q": "q4",
          "date": "Jan 2027",
          "label": "Interviews",
          "type": "stage",
          "tentative": true
        }
      ]
    }
  ],
  "SECONDARY": [
    {
      "id": "nimcet",
      "name": "NIMCET (MCA at NITs)",
      "track": "pg",
      "date": "06/06/2026",
      "q": "q1",
      "flag": "now",
      "why": "IT pivot · ~1,000 MCA seats · needs Maths as a subject",
      "site": "https://nimcet.admissions.nic.in/",
      "elig": "Bachelor’s with Mathematics or Statistics as one of the subjects.",
      "pattern": "Computer-based · Mathematics / Reasoning / CS / English",
      "difficulty": "Moderate",
      "competition": "~30,000–50,000 appear",
      "prep": "6–9 mo",
      "salary": "₹4–9 LPA start",
      "career": "Good — MCA → software / IT / data roles",
      "fee": "~₹2,500 (Gen)",
      "rec": "IT pivot for mathematics graduates. About 1,000 MCA seats across NITs and IIITs.",
      "route": "pg",
      "isSecondary": true
    },
    {
      "id": "cuetpg",
      "name": "CUET PG (M.Sc.)",
      "track": "pg",
      "date": "1–25/03/2027",
      "q": "q4",
      "flag": "now",
      "why": "Broad central-university PG · DU, BHU, JNU, HCU",
      "site": "https://exams.nta.nic.in/cuet-pg/",
      "elig": "Bachelor’s; final-year students eligible.",
      "pattern": "Computer-based, domain-specific",
      "difficulty": "Hard",
      "competition": "~5 lakh+ appear",
      "prep": "6–10 mo",
      "salary": "₹5–12 LPA after M.Sc.",
      "career": "Good",
      "fee": "₹400–1,200 per paper (varies)",
      "rec": "Broad central-university PG route — DU, BHU, JNU, HCU.",
      "route": "pg",
      "isSecondary": true
    },
    {
      "id": "cmi",
      "name": "CMI (M.Sc. Maths/CS)",
      "track": "research",
      "date": "02/05/2026",
      "q": "q1",
      "flag": "now",
      "why": "Elite maths research · clashed with ISI on 02 May",
      "site": "https://www.cmi.ac.in/admissions/",
      "elig": "Bachelor’s with strong Mathematics.",
      "pattern": "Written test + interview",
      "difficulty": "Very Hard",
      "competition": "Small pool",
      "prep": "10–15 mo",
      "salary": "₹8–20 LPA",
      "career": "Very strong — research / PhD",
      "fee": "~₹1,000–2,000",
      "rec": "Elite mathematics research. The 2026 test fell on the same day as ISI — 02 May.",
      "route": "pg",
      "isSecondary": true
    },
    {
      "id": "csirnet",
      "name": "CSIR UGC NET (Math Sci)",
      "track": "research",
      "date": "17–18/07/2026",
      "q": "q2",
      "flag": "after",
      "why": "JRF + Assistant Professor · needs M.Sc. first",
      "site": "https://csirnet.nta.nic.in/",
      "elig": "M.Sc. or integrated M.Sc. in Mathematics/Statistics, minimum 55% (50% SC/ST).",
      "pattern": "MCQ · Part A/B/C · negative marking",
      "difficulty": "Hard",
      "competition": "June 2026: 1,87,739 registered · 1,413 JRF qualified",
      "prep": "10–14 mo",
      "salary": "JRF stipend ₹37,000–42,000/mo",
      "career": "Strong — Professor scales",
      "fee": "₹1,000 (Gen) · ₹500 SC/ST/PwBD",
      "rec": "Key for research and teaching. Needs an M.Sc. first, so this is a 2028+ target.",
      "route": "pg",
      "isSecondary": true
    },
    {
      "id": "ugcnet",
      "name": "UGC NET (Mathematics)",
      "track": "research",
      "date": "14–19/12/2026",
      "q": "q3",
      "flag": "after",
      "why": "Teaching eligibility · needs PG degree",
      "site": "https://ugcnet.nta.nic.in/",
      "elig": "Master’s with 55% (50% reserved); final-year PG eligible provisionally.",
      "pattern": "2 papers — Teaching/Research Aptitude + subject",
      "difficulty": "Hard",
      "competition": "~10–15 lakh appear",
      "prep": "8–12 mo",
      "salary": "Asst Prof Level 10 · ₹57,700 basic",
      "career": "Strong — Professor / Dean",
      "fee": "₹1,150 (Gen)",
      "rec": "Teaching eligibility. Like CSIR NET, it needs a PG degree first.",
      "route": "pg",
      "isSecondary": true
    },
    {
      "id": "acet",
      "name": "ACET (Actuarial entry)",
      "track": "research",
      "date": "05/12/2026",
      "q": "q3",
      "flag": "now",
      "why": "Highest long-term maths payoff · Fellow ₹30–50 L+",
      "site": "https://www.actuariesindia.org/about-acet",
      "elig": "Class 12 pass or higher (student or appearing).",
      "pattern": "Online MCQs — Maths, Stats, English, Logic",
      "difficulty": "Moderate",
      "competition": "~3,000–5,000 per sitting",
      "prep": "6–12 mo",
      "salary": "Fresher actuary ₹4–7 LPA",
      "salaryLong": "₹30–50 L+ as a Fellow",
      "career": "Very strong — Fellow actuary",
      "fee": "~₹1,500–1,800",
      "rec": "High long-term mathematics payoff. You can start this while still a student — the entry bar is deliberately low.",
      "route": "pg",
      "isSecondary": true
    },
    {
      "id": "xat",
      "name": "XAT (XLRI MBA)",
      "track": "mba",
      "date": "03/01/2027",
      "q": "q4",
      "flag": "now",
      "why": "Strong HR / Business Management brand",
      "site": "https://xatonline.in/",
      "elig": "Bachelor’s. Final-year students eligible.",
      "pattern": "Decision Making · Verbal · Quant · GK",
      "difficulty": "Hard",
      "competition": "~1 lakh appear",
      "prep": "6–10 mo",
      "salary": "XLRI ₹20–30 LPA",
      "career": "Very strong — HR / Business Management",
      "fee": "₹2,200 (Gen)",
      "rec": "Strong HR and Business Management brand.",
      "route": "pg",
      "isSecondary": true
    },
    {
      "id": "cmat",
      "name": "CMAT (AICTE MBA)",
      "track": "mba",
      "date": "07/02/2027",
      "q": "q4",
      "flag": "now",
      "why": "Accessible MBA route · higher success than CAT",
      "site": "https://cmat.nta.nic.in/",
      "elig": "Bachelor’s. Final-year students eligible.",
      "pattern": "Quant · Reasoning · Language · GK · Innovation",
      "difficulty": "Moderate",
      "competition": "~50,000+ appear",
      "prep": "4–8 mo",
      "salary": "₹6–12 LPA start",
      "career": "Good",
      "fee": "₹2,500 (Gen)",
      "rec": "Accessible MBA route with a notably higher success rate than CAT.",
      "route": "pg",
      "isSecondary": true
    },
    {
      "id": "snap",
      "name": "SNAP (Symbiosis MBA)",
      "track": "mba",
      "date": "13/19/26-12/2026",
      "q": "q3",
      "flag": "now",
      "why": "Three attempts in one window",
      "site": "https://www.snaptest.org/",
      "elig": "Bachelor’s. Final-year students eligible.",
      "pattern": "General · Quant · Reasoning",
      "difficulty": "Moderate",
      "competition": "~50,000+ appear",
      "prep": "4–8 mo",
      "salary": "₹8–16 LPA start",
      "career": "Good",
      "fee": "₹2,250 per test",
      "rec": "Three separate sittings in one window — you get multiple attempts.",
      "route": "pg",
      "isSecondary": true
    },
    {
      "id": "nmat",
      "name": "NMAT by GMAC (NMIMS)",
      "track": "mba",
      "date": "02/11–19/12/2026",
      "q": "q3",
      "flag": "now",
      "why": "Adaptive · three attempts allowed",
      "site": "https://www.mba.com/exams/nmat",
      "elig": "Bachelor’s. Final-year students eligible.",
      "pattern": "Quant · Language · Logical (adaptive)",
      "difficulty": "Moderate",
      "competition": "~50,000+ appear",
      "prep": "4–8 mo",
      "salary": "₹10–18 LPA start",
      "career": "Good",
      "fee": "~₹2,800 per attempt",
      "rec": "Adaptive test with three attempts allowed.",
      "route": "pg",
      "isSecondary": true
    },
    {
      "id": "sebi",
      "name": "SEBI Grade A",
      "track": "banking",
      "date": "Annual cycle",
      "q": "q3",
      "flag": "cond",
      "why": "Elite regulator · generalist stream needs PG",
      "site": "https://www.sebi.gov.in",
      "elig": "Bachelor’s or Master’s; the generalist stream needs a professional or PG qualification. Maximum age 30.",
      "pattern": "Phase 1 · Phase 2 · Interview",
      "difficulty": "Extreme",
      "competition": "Very selective",
      "prep": "10–14 mo",
      "salary": "₹62,500 basic · gross ~₹1.84 L/mo",
      "career": "Very strong — Grade A → Executive Director",
      "fee": "₹1,000 (Gen) approx.",
      "rec": "Elite regulator, but eligibility is narrow — check the stream rules before committing.",
      "route": "job",
      "isSecondary": true
    },
    {
      "id": "nabard",
      "name": "NABARD Grade A",
      "track": "banking",
      "date": "Annual cycle",
      "q": "q3",
      "flag": "now",
      "why": "Rural development focus · revised scale ₹62,500",
      "site": "https://nabard.org",
      "elig": "Bachelor’s (any) or PG. Age 21–30.",
      "pattern": "Phase 1 · Phase 2 (ESI/ARD + optional) · Interview",
      "difficulty": "Hard",
      "competition": "~1–2 lakh apply",
      "prep": "8–12 mo",
      "salary": "₹62,500 revised basic · gross ~₹1.6 L/mo",
      "career": "Very strong — Grade B → C → GM",
      "fee": "₹800 (Gen)",
      "rec": "Agriculture and rural development focus.",
      "route": "job",
      "isSecondary": true
    },
    {
      "id": "lic-aao",
      "name": "LIC AAO",
      "track": "banking",
      "date": "Aug–Sep 2026",
      "q": "q2",
      "flag": "now",
      "why": "High pay insurance route · ₹1.0–1.26 L/mo",
      "site": "https://licindia.in",
      "elig": "Graduate. Age 21–30.",
      "pattern": "Prelims · Mains · Interview",
      "difficulty": "Hard",
      "competition": "~5–8 lakh apply",
      "prep": "8–12 mo",
      "salary": "In-hand ~₹1.0–1.26 L/mo",
      "career": "Strong — Chief Manager onwards",
      "fee": "₹700–900 (Gen)",
      "rec": "High-pay insurance route.",
      "route": "job",
      "isSecondary": true
    },
    {
      "id": "niacl",
      "name": "NIACL AO",
      "track": "banking",
      "date": "Annual cycle",
      "q": "q3",
      "flag": "now",
      "why": "Secondary insurance route",
      "site": "https://nationalinsurance.nic.co.in",
      "elig": "Graduate. Age 21–30.",
      "pattern": "Prelims · Mains · Interview",
      "difficulty": "Hard",
      "competition": "Lakhs apply",
      "prep": "6–10 mo",
      "salary": "In-hand ~₹85,000–95,000/mo",
      "career": "Strong",
      "fee": "₹700 (Gen)",
      "rec": "Secondary insurance route.",
      "route": "job",
      "isSecondary": true
    },
    {
      "id": "ibps-clk",
      "name": "IBPS Clerk",
      "track": "banking",
      "date": "10–11/10/2026",
      "q": "q3",
      "flag": "now",
      "why": "Largest intake · lower bar · 11,663 vacancies",
      "site": "https://ibps.in",
      "elig": "Graduate. Age 20–28.",
      "pattern": "Prelims · Mains (no interview)",
      "difficulty": "Moderate",
      "competition": "~15–20 lakh apply",
      "prep": "4–8 mo",
      "salary": "In-hand ~₹38,000–45,000/mo",
      "career": "Moderate — promotion to Officer",
      "fee": "₹850 (Gen) · ₹175 SC/ST",
      "rec": "Largest intake of any banking route, with the lowest entry bar.",
      "route": "job",
      "isSecondary": true
    },
    {
      "id": "rbi-asst",
      "name": "RBI Assistant",
      "track": "banking",
      "date": "Annual cycle",
      "q": "q3",
      "flag": "now",
      "why": "Regulator entry · promotion path to Grade A",
      "site": "https://rbi.org.in",
      "elig": "Graduate. Age 20–28.",
      "pattern": "Prelims · Mains · Language test",
      "difficulty": "Moderate",
      "competition": "~10 lakh+ apply",
      "prep": "4–8 mo",
      "salary": "In-hand ~₹45,000–50,000/mo",
      "career": "Moderate — promotion to Grade A",
      "fee": "₹450 (Gen)",
      "rec": "Regulator entry with a real promotion path to Grade A.",
      "route": "job",
      "isSecondary": true
    },
    {
      "id": "cds",
      "name": "UPSC CDS I",
      "track": "defence",
      "date": "12/04/2026",
      "q": "q1",
      "flag": "cond",
      "why": "Officer entry · hinges on age under 24/25",
      "site": "https://upsc.gov.in",
      "elig": "Graduate (IMA/OTA); Engineering for INA/AFA. IMA age 19–24, OTA 19–25; unmarried for IMA.",
      "pattern": "Written (English + GK + Maths) · SSB 5-day · Medical",
      "difficulty": "Hard",
      "competition": "~2–3 lakh apply · 458 seats (CDS 2026)",
      "prep": "12–18 mo",
      "salary": "Level 10 · ₹56,100 + MSP ₹15,500",
      "career": "Steady — Colonel / Major General over 25–30 yrs",
      "fee": "₹200 (Gen) · NIL Female/SC/ST",
      "rec": "Officer entry that hinges entirely on age — under 24 for IMA.",
      "route": "job",
      "isSecondary": true
    },
    {
      "id": "capf",
      "name": "UPSC CAPF (AC)",
      "track": "defence",
      "date": "19/07/2026",
      "q": "q2",
      "flag": "cond",
      "why": "Paramilitary officer · age 20–25 window",
      "site": "https://upsc.gov.in",
      "elig": "Bachelor’s. Age 20–25 (relaxations apply).",
      "pattern": "Written (2 papers) · PET/PST · Medical · Interview",
      "difficulty": "Hard",
      "competition": "~3–4 lakh apply",
      "prep": "12–15 mo",
      "salary": "Level 10 · ₹56,100 basic · gross ~₹90k/mo",
      "career": "Good — up to DG level",
      "fee": "₹200 (Gen) · exempt Female/SC/ST",
      "rec": "Paramilitary officer route with a narrow age window.",
      "route": "job",
      "isSecondary": true
    },
    {
      "id": "afcat",
      "name": "AFCAT (Air Force)",
      "track": "defence",
      "date": "Mid-2026",
      "q": "q2",
      "flag": "cond",
      "why": "Flying needs Maths + Physics at 10+2",
      "site": "https://afcat.cdac.in/",
      "elig": "Graduate. Flying 20–24; Ground Duty 20–26. Maths and Physics at 10+2 required for Flying.",
      "pattern": "Online test · AFSB · Medical",
      "difficulty": "Hard",
      "competition": "~1–2 lakh apply",
      "prep": "10–14 mo",
      "salary": "Level 10 · ₹56,100 + flying pay · gross ~₹1.0–1.3 L/mo",
      "career": "Strong",
      "fee": "₹550–900 (Gen)",
      "rec": "Fitness and age dependent.",
      "route": "job",
      "isSecondary": true
    },
    {
      "id": "iss",
      "name": "UPSC ISS (Statistical)",
      "track": "govt",
      "date": "19/06/2026",
      "q": "q1",
      "flag": "cond",
      "why": "High IF statistics papers present in your degree",
      "site": "https://upsc.gov.in",
      "elig": "Bachelor’s with Statistics, Mathematical Statistics or Applied Statistics as one of the subjects throughout.",
      "pattern": "Written 6 papers (GS, Eng, Stat I–IV) · Interview",
      "difficulty": "Very Hard",
      "competition": "Small applicant pool · single-digit-hundred seats",
      "prep": "15–18 mo",
      "salary": "Level 10 · ₹56,100 basic",
      "career": "High — Director / Deputy CS scales",
      "fee": "₹100 (Gen) · exempt Female/SC/ST/PwBD",
      "rec": "High value IF statistics papers appear in your degree. A pure mathematics B.Sc. without statistics papers is not eligible.",
      "route": "job",
      "isSecondary": true
    },
    {
      "id": "chsl",
      "name": "SSC CHSL",
      "track": "govt",
      "date": "2026 window",
      "q": "q2",
      "flag": "now",
      "why": "2,536 posts · LDC/DEO · backup option",
      "site": "https://ssc.gov.in",
      "elig": "Class 12 pass. Age 18–27 as on 1 Aug 2026.",
      "pattern": "Tier 1 · Tier 2 · Typing / Skill test",
      "difficulty": "Moderate",
      "competition": "~20–25 lakh apply",
      "prep": "4–8 mo",
      "salary": "Level 2–4 · ₹19,900–25,500 basic · in-hand ~₹30–40k/mo",
      "career": "Moderate — promotion to Assistant",
      "fee": "₹100 (Gen) · exempt SC/ST/Female/ESM",
      "rec": "Backup option with 2,536 posts.",
      "route": "job",
      "isSecondary": true
    },
    {
      "id": "cpo",
      "name": "SSC CPO (Sub-Inspector)",
      "track": "govt",
      "date": "2026 window",
      "q": "q2",
      "flag": "now",
      "why": "1,871 vacancies · needs physical fitness",
      "site": "https://ssc.gov.in",
      "elig": "Bachelor’s. Age 20–25 (Delhi Police / CAPF); SI Fire CISF 18–23.",
      "pattern": "Paper 1 (CBT) · PET/PST · Paper 2 · Medical",
      "difficulty": "Moderate",
      "competition": "~5–6 lakh apply",
      "prep": "6–10 mo",
      "salary": "Level 6 · ₹35,400 basic · in-hand ~₹50–58k/mo",
      "career": "Good — Inspector / ACP",
      "fee": "₹100 (Gen) · exempt SC/ST/Female/ESM",
      "rec": "Good if you are physically fit.",
      "route": "job",
      "isSecondary": true
    },
    {
      "id": "rrb-ntpc",
      "name": "RRB NTPC (Graduate)",
      "track": "govt",
      "date": "2026 window",
      "q": "q2",
      "flag": "now",
      "why": "5,165 vacancies · largest raw intake",
      "site": "https://indianrailways.gov.in",
      "elig": "Bachelor’s for graduate posts (Level 6); Class 12 for undergraduate posts.",
      "pattern": "CBT 1 · CBT 2 · Typing / Skill · Document verification · Medical",
      "difficulty": "Moderate",
      "competition": "~1.2 crore applications — a historic high for NTPC",
      "prep": "6–10 mo",
      "salary": "Level 6 · ₹35,400 basic · in-hand ~₹45–55k/mo",
      "career": "Moderate",
      "fee": "₹500 (Gen, partly refundable) · ₹250 SC/ST/Female",
      "rec": "Largest raw intake of any route on this chart — 5,165 vacancies.",
      "route": "job",
      "isSecondary": true
    },
    {
      "id": "state-psc",
      "name": "State PSC Statistical Officer",
      "track": "govt",
      "date": "Mar 2026 onward",
      "q": "q0",
      "flag": "now",
      "why": "Maths is a listed subject · Kerala PSC, RPSC, WBPSC",
      "site": "https://keralapsc.gov.in",
      "elig": "Bachelor’s in Maths / Stats / Economics / Commerce with Statistics (varies by state); some require PG.",
      "pattern": "Written + interview (varies by state)",
      "difficulty": "Moderate",
      "competition": "State-level, moderate pools",
      "prep": "6–10 mo",
      "salary": "Level 6–7 equivalent · ₹35,400–44,900 basic",
      "career": "Good",
      "fee": "State fees ₹100–250",
      "rec": "Mathematics is a listed subject for posts like Kerala PSC Statistical Assistant and RPSC Statistical Officer. Domicile or language rules may apply.",
      "route": "job",
      "isSecondary": true
    },
    {
      "id": "ies",
      "name": "UPSC IES (Economics)",
      "track": "govt",
      "date": "11/02/2026",
      "q": "q0",
      "flag": "after",
      "why": "Requires a Master’s in Economics — not open to you yet",
      "site": "https://upsc.gov.in",
      "elig": "PG degree in Economics / Econometrics / Applied Economics.",
      "pattern": "Written 6 papers · Interview",
      "difficulty": "Very Hard",
      "competition": "Small pool",
      "prep": "24 mo",
      "salary": "Level 10 · ₹56,100 basic",
      "career": "High",
      "fee": "₹100 (Gen)",
      "rec": "Not open to you yet — it requires a Master’s in Economics.",
      "route": "job",
      "isSecondary": true
    },
    {
      "id": "psu-gate",
      "name": "PSU via GATE (DRDO/ISRO/BARC)",
      "track": "research",
      "date": "After Feb 2027",
      "q": "q4",
      "flag": "after",
      "why": "Scientist ‘B’ · ₹8–12 LPA start · rides on your GATE score",
      "site": "https://www.isro.gov.in",
      "elig": "Bachelor’s or Master’s in a relevant branch; your GATE score is used.",
      "pattern": "GATE score + interview",
      "difficulty": "Hard",
      "competition": "Lakhs compete",
      "prep": "8–12 mo",
      "salary": "₹8–12 LPA start (Scientist ‘B’ ~₹56,100 basic)",
      "career": "Strong",
      "fee": "GATE fee + PSU application",
      "rec": "Research PSU route — DRDO, ISRO, BARC, NTPC, ONGC. It rides on your GATE score, so keeping it open costs nothing extra.",
      "route": "pg",
      "isSecondary": true
    },
    {
      "id": "ifoa",
      "name": "IFoA / IAI Professional",
      "track": "research",
      "date": "Multiple sittings",
      "q": "q3",
      "flag": "after",
      "why": "15+ exams over 5–10 yrs · 1–2% become Fellows",
      "site": "https://actuariesindia.org",
      "elig": "ACET followed by a series of professional exams (CB1–CB3, CS, CM, CP, SP, SA).",
      "pattern": "15+ professional exams over 5–10 years",
      "difficulty": "Extreme (long)",
      "competition": "Global",
      "prep": "36–72 mo",
      "salary": "₹12–20 LPA with 5–6 exams cleared",
      "salaryLong": "₹30–60 L/yr as a Fellow",
      "career": "Very strong",
      "fee": "~₹2,500–15,000 per exam",
      "rec": "Long but elite — only 1–2% of candidates become Fellows.",
      "route": "pg",
      "isSecondary": true
    },
    {
      "id": "bed-ctet",
      "name": "B.Ed. + CTET / State TET",
      "track": "govt",
      "date": "Rolling · twice yearly",
      "q": "q2",
      "flag": "after",
      "why": "Only if school teaching is the goal",
      "site": "https://ctet.nic.in/",
      "elig": "Bachelor’s; B.Ed. entrance after graduation, then TET after B.Ed.",
      "pattern": "Entrance + TET paper",
      "difficulty": "Moderate",
      "competition": "Large",
      "prep": "12–18 mo",
      "salary": "KG–12 teacher ₹3–6 LPA start",
      "career": "Moderate",
      "fee": "₹600–1,000",
      "rec": "Only worth it if school teaching is the goal.",
      "route": "job",
      "isSecondary": true
    }
  ],
  "PLAN": {
    "q0": {
      "title": "Finish the degree",
      "do": [
        "Sit university final-year exams",
        "Start SSC CGL quant + reasoning"
      ],
      "open": [
        "State PSC Statistical Officer forms"
      ],
      "sit": [
        "UPSC IES notif 11/02",
        "UPSC CSE notif 04/02"
      ],
      "watch": "Balance final-year study against exam prep"
    },
    "q1": {
      "title": "Sit the first papers",
      "do": [
        "Decide Govt vs PG — this fork shapes everything after",
        "Begin CAT quant"
      ],
      "open": [
        "CUET PG applications"
      ],
      "sit": [
        "CDS I 12/04",
        "ISI + CMI tests 02/05",
        "SSC CGL notif 21/05",
        "UPSC CSE Prelims 24/05"
      ],
      "watch": "ISI and CMI fell on the same day — 02 May"
    },
    "q2": {
      "title": "The heavy quarter",
      "do": [
        "Strong push on CGL + IBPS PO",
        "Start CAT mocks",
        "CGL Tier 1 practice"
      ],
      "open": [
        "IBPS PO notif 30/06",
        "CAT reg to 15/09",
        "GATE reg 27/08–05/10",
        "IIT JAM reg from 05/09",
        "NMAT + SNAP reg"
      ],
      "sit": [
        "NIMCET 06/06",
        "ISS 19/06",
        "CAPF AC 19/07",
        "CSIR/UGC NET 17–18/07",
        "IBPS PO Prelims 22–23/08",
        "SBI PO Mains 12/09",
        "CGL Tier 1 from 30/09"
      ],
      "watch": "CGL, GATE and CAT all overlap here — plan your slots early"
    },
    "q3": {
      "title": "Deadlines bite",
      "do": [
        "CGL Tier 1 peak",
        "GATE syllabus in full",
        "CGL Tier 2 (JSO Paper II)"
      ],
      "open": [
        "TIFR deadline 25/10",
        "PSU applications"
      ],
      "sit": [
        "IBPS PO Mains 04/10",
        "IBPS Clerk Prelims 10–11/10",
        "CAT 29/11",
        "ACET 05/12",
        "TIFR GS test 13/12",
        "SNAP 13/19/26/12",
        "UGC NET 14–19/12"
      ],
      "watch": "TIFR closes 25/10 — nearest hard deadline on the chart"
    },
    "q4": {
      "title": "PG season",
      "do": [
        "Apply UPSC CSE 2027 (13/01–02/02)",
        "MBA interviews",
        "GATE/JAM/CMAT peak prep"
      ],
      "open": [
        "UPSC CSE notif 13/01",
        "CUET PG reg"
      ],
      "sit": [
        "XAT 03/01",
        "CMAT 07/02",
        "GATE 06–21/02",
        "IIT JAM 14/02"
      ],
      "watch": "IIT JAM on 14 Feb may clash a GATE slot"
    },
    "q5": {
      "title": "Results land",
      "do": [
        "Post-grad admissions",
        "UPSC Prelims 2027 prep",
        "Mains / PG prep"
      ],
      "open": [
        "—"
      ],
      "sit": [
        "CDS I 2027 ~Apr",
        "UPSC CSE Prelims 23/05",
        "ISI/CMI tests ~May",
        "NIMCET ~Jun",
        "ISS ~Jun"
      ],
      "watch": "ISI/CMI land in early May again"
    },
    "q6": {
      "title": "Consolidate",
      "do": [
        "Mains preparation if you cleared Prelims 2027"
      ],
      "open": [
        "—"
      ],
      "sit": [
        "CAPF AC + CSIR/UGC NET June 2027 cycle"
      ],
      "watch": "A quieter quarter — use it for depth, not breadth"
    },
    "q7": {
      "title": "Second cycle opens",
      "do": [
        "Repeat or upgrade your best route"
      ],
      "open": [
        "GATE 2028 reg",
        "IIT JAM 2028 reg"
      ],
      "sit": [
        "IBPS PO Prelims 2027",
        "SSC CGL 2027 Tier 1",
        "SBI PO Mains",
        "IBPS PO Mains",
        "IBPS Clerk Prelims",
        "CAT 2027",
        "NMAT window",
        "UGC NET Dec 2027",
        "ACET Dec 2027"
      ],
      "watch": "You now have one full cycle of real results to plan from"
    },
    "q8": {
      "title": "Third cycle",
      "do": [
        "Targeted retake — only the exams that actually moved"
      ],
      "open": [
        "UPSC CSE 2028 notif",
        "SSC CGL 2028 notif",
        "CUET PG 2028"
      ],
      "sit": [
        "XAT 2028",
        "GATE 2028",
        "IIT JAM 2028",
        "CMAT 2028"
      ],
      "watch": "—"
    },
    "q9": {
      "title": "Outcome window",
      "do": [
        "Convert your strongest result"
      ],
      "open": [
        "Rolling cycles"
      ],
      "sit": [
        "CUET PG 2028"
      ],
      "watch": "Most 2026-cycle aspirants land their post by here"
    }
  },
  "SOURCES": [
    [
      "UPSC Annual Calendar 2027",
      "https://www.upsc.gov.in/sites/default/files/Calendar-Year-2027-Engl-200526.pdf"
    ],
    [
      "UPSC CSE 2026 Prelims",
      "https://www.upsc.gov.in/examinations/Civil%20Services%20%28Preliminary%29%20Examination%2C%202026"
    ],
    [
      "UPSC ISS / IES 2026",
      "https://www.upsc.gov.in/examinations/Indian%20Economic%20Service%20-%20Indian%20Statistical%20Service%20Examination%2C%202026"
    ],
    [
      "UPSC CDS I 2026",
      "https://www.upsc.gov.in/examinations/Combined%20Defence%20Services%20Examination%20%28I%29%2C%202026"
    ],
    [
      "SSC CGL 2026 notification",
      "https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_cgl_2026.pdf"
    ],
    [
      "IBPS PO XVI notification",
      "https://www.ibps.in/wp-content/uploads/Detailed-Notification_CRP-PO-XVI_Final_V1_30.06.2026.pdf"
    ],
    [
      "SBI PO 2026 advertisement",
      "https://sbi.bank.in/csfile/18062026_1_Detailed_Adv.2026.pdf"
    ],
    [
      "RBI Grade B 2026",
      "https://ibpsreg.ibps.in/rbisbmar26/"
    ],
    [
      "GATE 2027 important dates",
      "https://gate2027.iitm.ac.in/important_dates"
    ],
    [
      "IIT JAM 2027 brochure",
      "https://jam.iitkgp.ac.in/docs/Info_Brochure.pdf"
    ],
    [
      "CUET PG 2027 dates (NTA)",
      "https://exams.nta.nic.in/cuet-pg/"
    ],
    [
      "ISI Admission 2026",
      "https://admission.isical.ac.in/"
    ],
    [
      "TIFR GS-2027 advertisement",
      "https://www.tifr.res.in/academics/gs_advertisement.php"
    ],
    [
      "CAT 2026 (IIM)",
      "https://iimcat.ac.in/"
    ],
    [
      "ACET (Institute of Actuaries of India)",
      "https://www.actuariesindia.org/about-acet"
    ],
    [
      "CSIR UGC NET June 2026 result",
      "https://www.newindianexpress.com/india/2026/Sep/11/csir-ugc-net-results-declared-1413-candidates-make-the-cut-for-jrf"
    ]
  ],
  "FLAG_META": {
    "now": {
      "label": "Eligible now",
      "short": "Now",
      "desc": "You can act on this in the current cycle"
    },
    "after": {
      "label": "Needs further study",
      "short": "Later",
      "desc": "Requires a PG degree or graduation first"
    },
    "cond": {
      "label": "Conditional",
      "short": "Check",
      "desc": "Depends on a subject, percentage or age check"
    }
  }
};
