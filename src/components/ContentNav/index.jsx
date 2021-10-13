import React from 'react';
import { NavBar, NavElement } from './content-nav.styles';

/**
 * Component holding the navigation bar on top of articles.
 *
 * @return {JSX.Element} Navigation bar holding the global feed.
 */
function ContentNav() {
  return (
    <NavBar>
      <NavElement>Global Feed</NavElement>
    </NavBar>
  );
}

export default ContentNav;
