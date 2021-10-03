import React from 'react';
import { NavBar, NavElement } from './content-nav';

/**
 * Component holding the navigation bar on top of articles.
 *
 * @return {JSX.Element} Navigation bar holding the global feed.
 */
function index() {
  return (
    <NavBar>
      <NavElement>Global Feed</NavElement>
    </NavBar>
  );
}

export default index;
