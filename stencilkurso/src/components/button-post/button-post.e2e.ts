import { newE2EPage } from '@stencil/core/testing';

describe('button-post', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<button-post></button-post>');

    const element = await page.find('button-post');
    expect(element).toHaveClass('hydrated');
  });
});
