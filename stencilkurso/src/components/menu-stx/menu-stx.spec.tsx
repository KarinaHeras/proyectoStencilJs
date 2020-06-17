import { newSpecPage } from '@stencil/core/testing';
import { MenuStx } from './menu-stx';

describe('menu-stx', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MenuStx],
      html: `<menu-stx></menu-stx>`,
    });
    expect(page.root).toEqualHtml(`
      <menu-stx>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </menu-stx>
    `);
  });
});
