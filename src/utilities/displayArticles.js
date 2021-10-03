import filter from './filterArticles';
import paginate from './sliceArticles';

/**
 * Function filters and paginates the articles based on tag and page selection.
 *
 * @param {object[]} articles Passes articles to be handled.
 * @param {string} selectedTag Selected tag for articles to be filtered.
 * @param {number} currentPage Selected page for articles to be previewed.
 * @return {object} Object holding the paginated articles and the total count of them.
 */
export default (articles, selectedTag, currentPage) => {
  let filtered = articles;
  if (selectedTag !== 'allArticles') filtered = filter(articles, selectedTag);
  const paginatedArticles = paginate(filtered, currentPage);
  return { data: paginatedArticles, totalCount: filtered.length };
};
