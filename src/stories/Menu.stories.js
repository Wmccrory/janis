import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { checkA11y } from '@storybook/addon-a11y';
import { Route, Link, MemoryRouter } from 'react-router-dom';

import Menu from 'js/page_sections/Menu/Menu';
import MenuItem from 'js/page_sections/Menu/MenuItem';
import navigation from '__tmpdata/navigation';


storiesOf('Menu', module)
  .addDecorator(checkA11y)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Menu open', () => (
    <Menu
      isOpen={true}
      toggleMenu={linkTo('Menu' , 'Menu closed')}
    />
  ))
  .add('Menu closed', () => (
    <Menu
      isOpen={false}
      toggleMenu={linkTo('Menu', 'Menu open')}
    />
  ))
  .add('MenuItem closed', () => (
    <ul className="coa-Menu__list">
      <MenuItem
        id={1}
        theme={navigation.data.allThemes.edges[1].node}
        openSection={1}
        handleSublistToggle={linkTo('Menu', 'MenuItem open')}
        handleMenuToggle={action('handleMenuToggle')}
      />
    </ul>
  ))
  .add('MenuItem open', () => (
    <ul className="coa-Menu__list">
      <MenuItem
        id={1}
        theme={navigation.data.allThemes.edges[1].node}
        openSection={10}
        handleSublistToggle={linkTo('Menu', 'MenuItem closed')}
        handleMenuToggle={action('handleMenuToggle')}
      />
    </ul>
  ))