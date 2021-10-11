/**
 * Filters array of articles based on selected tag.
 *
 * @return {array} Array of filtered articles.
 */
export default (items, selectedTag) => {
  const filtered = items.filter((item) =>
    item.tags.find((tag) => tag.name === selectedTag)
  );

  return filtered;
};
