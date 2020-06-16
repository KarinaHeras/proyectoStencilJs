import { newSpecPage } from '@stencil/core/testing';
import { ButtonPost } from './button-post';

describe('button-post', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ButtonPost],
      html: `<button-post></button-post>`,
    });
    expect(page.root).toEqualHtml(`
      <button-post>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </button-post>
    `);
  });
});
