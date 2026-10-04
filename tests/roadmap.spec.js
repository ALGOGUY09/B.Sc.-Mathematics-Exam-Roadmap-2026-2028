import { test, expect } from '@playwright/test';

const base = process.env.TEST_URL || 'http://localhost:3000';
test.beforeEach(async ({ page }) => {
  await page.clock.install({ time: new Date('2026-10-04T08:00:00Z') });
  await page.goto(base);
  await expect(page.locator('.exam-row')).toHaveCount(10);
});

test('all routes, live calendar position and local fonts load without errors', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await expect(page.locator('.also-card')).toHaveCount(28);
  await expect(page.locator('.quarter-now')).toHaveCount(1);
  await expect(page.locator('.quarter-cell.state-now .quarter-label')).toHaveText('Oct–Dec');
  await expect(page.locator('.meta-strip')).toContainText('04/10/2026');
  await page.evaluate(() => document.fonts.ready);
  expect(await page.evaluate(() => [...document.fonts].every(font => font.status === 'loaded'))).toBe(true);
  expect(errors).toEqual([]);
});

test('route, track and eligibility filters compose and reset', async ({ page }) => {
  await page.locator('[data-route="job"]').click();
  await expect(page.locator('.exam-row')).toHaveCount(5);
  await page.getByRole('switch').click();
  await expect(page.locator('.exam-row')).toHaveCount(3);
  await expect(page.locator('.exam-label .flag-now')).toHaveCount(3);
  await page.locator('[data-track="banking"]').dblclick();
  await expect(page.locator('.exam-row')).toHaveCount(2);
  await expect(page.locator('.track-chip.active')).toHaveCount(1);
  await page.locator('[data-action="reset"]').first().click();
  await expect(page.locator('.exam-row')).toHaveCount(10);
  await expect(page.locator('.also-card')).toHaveCount(28);
});

test('empty state and changing views retain active filters', async ({ page }) => {
  await page.locator('[data-track="defence"]').dblclick();
  await expect(page.getByText('No routes match these filters')).toBeVisible();
  await page.locator('[data-action="reset"]').first().click();
  await page.locator('[data-route="pg"]').click();
  await page.locator('[data-view="planner"]').click();
  await expect(page.locator('.planner-column')).toHaveCount(10);
  await expect(page.locator('[data-route="pg"]')).toHaveAttribute('aria-pressed', 'true');
  await page.locator('[data-view="fork"]').click();
  await expect(page.locator('.fork-column')).toHaveCount(2);
  await expect(page.locator('.fork-card')).toHaveCount(5);
  await page.locator('[data-view="swimlane"]').click();
  await expect(page.locator('.exam-row')).toHaveCount(5);
});

test('primary drawer, projected dates, focus trap and Escape', async ({ page }) => {
  const button = page.locator('.exam-label[data-exam="upsc-cse"]');
  await button.click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(page.locator('#drawer-title')).toHaveText('UPSC Civil Services (CSE)');
  await expect(page.locator('.detail-event')).toHaveCount(6);
  await expect(page.locator('.drawer .projected')).toHaveCount(1);
  const close = page.getByRole('button', { name:'Close details' });
  await expect(close).toBeFocused();
  await page.keyboard.press('Shift+Tab');
  await expect(page.locator('.portal-link')).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(close).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await expect(button).toBeFocused();
});

test('secondary details, scrim close, collapse and official source list', async ({ page }) => {
  await page.locator('.also-card[data-exam="nimcet"]').click();
  await expect(page.locator('.spec-grid')).toContainText('Application fee');
  await expect(page.locator('.portal-link')).toHaveAttribute('href', /nimcet/);
  await page.locator('.scrim').click({position:{x:10,y:10}});
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await page.locator('[data-action="also"]').click();
  await expect(page.locator('.also-card')).toHaveCount(0);
  await page.locator('[data-action="sources"]').first().click();
  await expect(page.locator('.source-link')).toHaveCount(16);
  await expect(page.locator('#drawer-title')).toHaveText('Where this data comes from');
  await page.keyboard.press('Escape');
});

test('hover tooltip and next-action ring are connected to events', async ({ page }) => {
  await page.locator('.event-chip:not(.done)').first().hover();
  await expect(page.getByRole('tooltip')).toBeVisible();
  await expect(page.getByRole('tooltip')).toContainText('click for full timeline');
  expect(await page.locator('.event-chip .mk-ring').count()).toBeGreaterThan(0);
  await page.locator('.title-content').hover();
  await expect(page.getByRole('tooltip')).toHaveCount(0);
});

test('mobile page stays within viewport and timelines scroll', async ({ page }) => {
  await page.setViewportSize({width:390,height:844});
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  const chart = page.locator('.chart-scroll');
  expect(await chart.evaluate(el => el.scrollWidth > el.clientWidth)).toBe(true);
  await page.locator('[data-view="planner"]').click();
  expect(await page.locator('.chart-scroll').evaluate(el => el.scrollWidth > el.clientWidth)).toBe(true);
  await page.locator('[data-view="fork"]').click();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.locator('.fork-card').first().click();
  expect(await page.getByRole('dialog').evaluate(el => el.getBoundingClientRect().width <= window.innerWidth)).toBe(true);
});

test('print layout hides controls and preserves the chart', async ({ page }) => {
  await page.emulateMedia({media:'print'});
  await expect(page.locator('.controls')).toBeHidden();
  await expect(page.locator('.legend')).toBeHidden();
  await expect(page.locator('.also-body')).toBeHidden();
  await expect(page.locator('.exam-row')).toHaveCount(10);
});
