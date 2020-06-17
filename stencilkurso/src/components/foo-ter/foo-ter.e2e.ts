import { newE2EPage } from '@stencil/core/testing';

describe('foo-ter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<foo-ter></foo-ter>');

    const element = await page.find('foo-ter');
    expect(element).toHaveClass('hydrated');
  });
});
