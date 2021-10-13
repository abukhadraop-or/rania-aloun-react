import filter from './filter-articles';
import paginate from './slice-articles';

/**
 * Function filters and paginates the articles based on tag and page selection.
 *
 * @param {Object[]} articles Passes articles to be handled.
 * @param {string} selectedTag Selected tag for articles to be filtered.
 * @param {number} currentPage Selected page for articles to be previewed.
 *
 * @return {Object} Object holding the paginated articles and the total count of them.
 */
export default (articles, selectedTag, currentPage) => {
  let filtered = articles;
  if (selectedTag !== 'allArticles') {
    filtered = filter(articles, selectedTag);
  }

  const paginatedArticles = paginate(filtered, currentPage);
  return { data: paginatedArticles, totalCount: filtered.length };
};
