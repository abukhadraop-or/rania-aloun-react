import React, { useEffect, useState } from 'react';
import Tags from 'components/Tags';
import Articles from 'components/Articles';
import Pagination from 'components/Pagination';
import getArticles from 'services/get-articles';
import DisplayArticles from 'utilities/display-articles';
import { Container, InnerContainer } from './page-content.styles';

function PageContent() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState('allArticles');

  useEffect(() => {
    const fetchArticles = async () => {
      const { data } = await getArticles();
      setArticles(data);
    };
    fetchArticles();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleTagSelect = (tag) => {
    setCurrentPage(1);
    setSelectedTag(tag);
  };
  const { totalCount } = DisplayArticles(articles, selectedTag, currentPage);

  return (
    <Container>
      <Tags onTagSelect={handleTagSelect} />
      <InnerContainer>
        <Articles
          articles={articles}
          selectedTag={selectedTag}
          currentPage={currentPage}
        />
        <Pagination itemsCount={totalCount} onPageChange={handlePageChange} />
      </InnerContainer>
    </Container>
  );
}

export default PageContent;
