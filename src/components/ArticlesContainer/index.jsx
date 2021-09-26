import React from 'react';
import ProbTypes from 'prop-types';
import Pagination from 'components/Pagination';
import ContentNav from 'components/ContentNav';
import paginate from 'utilities/paginate';
import filter from 'utilities/filter';
import {
  UserImg,
  UserData,
  UserName,
  Container,
  LikedIcon,
  ReadMoreP,
  ArticleTag,
  LikedCount,
  ArticleDate,
  ArticleLink,
  ArticleTitle,
  UserContainer,
  ArticlePreview,
  LikedContainer,
  LastLineContainer,
  FirstLineContainer,
  ArticleTagsContainer,
} from './articles-container';

/**
 * Component for mapping each article to it's preview, with the suitable pagination/filtering based on tags select.
 *  @param {Object} props articles, currentPage, selectedTag
 * @param   {array}    articles         all articles
 * @param   {number}   currentPage      current selected page
 * @param   {string}   selectedTag      selected tag for articles to be filtered
 * @param   {function} onLike           function to like an article
 * @param   {function} handlePageChange function to change page
 */
function ArticlesContainer({
  articles,
  currentPage,
  selectedTag,
  onLike,
  handlePageChange,
}) {
  /**
   * filters articles based on tag selection, and paginates them
   * @return  {array}      paginatedArticles
   * @return  {totalCount} length of filtered articles
   */
  const DisplayedArticles = () => {
    let filtered = articles;
    if (selectedTag) filtered = filter(articles, selectedTag);
    const paginatedArticles = paginate(filtered, currentPage);
    return { data: paginatedArticles, totalCount: filtered.length };
  };

  const { data, totalCount } = DisplayedArticles();
  return (
    <>
      <Container>
        <ContentNav />
        {data.map((item) => (
          // eslint-disable-next-line no-underscore-dangle
          <ArticlePreview key={item._id}>
            <FirstLineContainer>
              <UserContainer>
                <UserImg />
                <UserData>
                  <UserName>{item.userName}</UserName>
                  <ArticleDate>{item.publishDate}</ArticleDate>
                </UserData>
              </UserContainer>
              {/* eslint-disable-next-line no-underscore-dangle */}
              <LikedContainer onClick={() => onLike(item._id)}>
                <LikedIcon />
                <LikedCount>{item.liked}</LikedCount>
              </LikedContainer>
            </FirstLineContainer>
            <ArticleTitle>{item.articleTitle}</ArticleTitle>
            <ArticleLink>{item.link}</ArticleLink>
            <LastLineContainer>
              <ReadMoreP>Read more...</ReadMoreP>
              <ArticleTagsContainer>
                {item.tags.map((tag) => (
                  // eslint-disable-next-line no-underscore-dangle
                  <ArticleTag key={tag._id}>{tag.name}</ArticleTag>
                ))}
              </ArticleTagsContainer>
            </LastLineContainer>
          </ArticlePreview>
        ))}
        <Pagination itemsCount={totalCount} onPageChange={handlePageChange} />
      </Container>
    </>
  );
}

ArticlesContainer.propTypes = {
  articles: ProbTypes.arrayOf(ProbTypes.object).isRequired,
  onLike: ProbTypes.func.isRequired,
  currentPage: ProbTypes.number.isRequired,
  handlePageChange: ProbTypes.func.isRequired,
  selectedTag: ProbTypes.string.isRequired,
};

export default ArticlesContainer;
