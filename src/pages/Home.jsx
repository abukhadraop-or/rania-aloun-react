import React from 'react';
import Header from 'components/Header';
import Banner from 'components/Banner';
import PageContent from 'components/PageContent';

/**
 * Component holding the home pages main components
 */
function Home() {
  return (
    <>
      <Header />
      <Banner />
      <PageContent />
    </>
  );
}

export default Home;
