/**
 * returns filtered array of articles based on selected tag
 * @return  {array} array of filtered articles
 */
export default function filter(items, selectedTag) {
  const filtered = items.filter((item) =>
    item.tags.find((tag) => tag.name === selectedTag)
  );

  return filtered;
}
