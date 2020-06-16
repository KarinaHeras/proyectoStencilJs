import { newE2EPage } from '@stencil/core/testing';

describe('home-post', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<home-post></home-post>');

    const element = await page.find('home-post');
    expect(element).toHaveClass('hydrated');
  });
});
