import React, { useState, useEffect } from 'react';
import { getArticles, LikeArticle } from 'services/fakeArticlesService';
import Tags from 'components/Tags';
import { GlobalContainer } from 'components/page-content-containers';
import ArticlesContainer from 'components/ArticlesContainer';

/**
 * Component for holding the structure of articles preview.
 *
 * @return {JSX.Element}
 */
function Articles() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [liked, setLiked] = useState(true);
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    setArticles(getArticles());
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
  };

  /**
   * flips the liked state on each click on the liked button
   * @param   {number} id  id of article
   */
  const handleLiked = (id) => {
    LikeArticle(id, liked);
    setLiked(!liked);
  };

  return (
    <>
      <GlobalContainer>
        <Tags onTagSelect={handleTagSelect} />
        <ArticlesContainer
          articles={articles}
          onLike={handleLiked}
          selectedTag={selectedTag}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </GlobalContainer>
    </>
  );
}

export default Articles;
