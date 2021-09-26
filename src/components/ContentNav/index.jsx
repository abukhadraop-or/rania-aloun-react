import React from 'react';
import { NavBar, NavElement } from './content-nav';

/**
 * Component for showing the navigation bar above articles.
 */
function index() {
  return (
    <NavBar>
      <NavElement>Global Feed</NavElement>
    </NavBar>
  );
}

export default index;
