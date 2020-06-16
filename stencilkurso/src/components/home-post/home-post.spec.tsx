import { newSpecPage } from '@stencil/core/testing';
import { HomePost } from './home-post';

describe('home-post', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HomePost],
      html: `<home-post></home-post>`,
    });
    expect(page.root).toEqualHtml(`
      <home-post>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </home-post>
    `);
  });
});
