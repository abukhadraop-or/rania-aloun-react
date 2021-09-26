import React from 'react';
import Header from 'components/Header';
import Banner from 'components/Banner';
import Articles from 'components/Articles';

/**
 * Component holding the home pages main components
 */
function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Articles />
    </>
  );
}

export default Home;
