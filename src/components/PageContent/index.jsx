import React, { useEffect, useState } from 'react';
import Tags from 'components/Tags';
import Articles from 'components/Articles';
import Pagination from 'components/Pagination';
import getArticles from 'services/articles-service';
import config from 'config.json';
import { Container, InnerContainer } from './page-content.styles';

/**
 * Component holding the page content in the home page, it handles pageChange and TagsSelect.
 *
 * @return {JSX.Element} Container holding Tags and Articles and pages numbers.
 */
function PageContent() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedTag, setSelectedTag] = useState('allArticles');
  const [totalArticles, setTotalArticles] = useState(0);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data } = await getArticles(currentPage, config.pageSize);
      setArticles(data.articles);
      setTotalArticles(data.totalItems);
    };
    fetchArticles();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <Container>
      <Tags onTagSelect={handleTagSelect} />
      <InnerContainer>
        <Articles
          articles={articles}
          selectedTag={selectedTag}
          currentPage={currentPage}
        />
        <Pagination
          totalArticles={totalArticles}
          onPageChange={handlePageChange}
        />
      </InnerContainer>
    </Container>
  );
}

export default PageContent;
