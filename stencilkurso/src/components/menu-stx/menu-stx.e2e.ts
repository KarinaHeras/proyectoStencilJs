import { newE2EPage } from '@stencil/core/testing';

describe('menu-stx', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<menu-stx></menu-stx>');

    const element = await page.find('menu-stx');
    expect(element).toHaveClass('hydrated');
  });
});
