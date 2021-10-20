/**
 * Filters array of articles based on selected tag.
 *
 * @param {Object[]} items Arrays to be filtered.
 * @param {string}   selectedTag Selected tag.
 *
 * @return {Object[]} Array of filtered articles.
 */
export default (items, selectedTag) => {
  const filteredArticles = items.filter((item) =>
    item.tags.find((tag) => tag.name === selectedTag)
  );

  return filteredArticles;
};
