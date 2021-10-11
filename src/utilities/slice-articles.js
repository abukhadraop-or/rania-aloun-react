import _ from 'lodash';

/**
 * Slices array of articles based on desired page size.
 *
 * @param {object[]} items Articles to be paginated.
 * @param {number}   pageNumber Current page number in page.
 * @return  {array} Array of sliced articles.
 */
export default (items, pageNumber) => {
  const pageSize = 3;

  const startIndex = (pageNumber - 1) * pageSize;

  const slicedArray = _(items).slice(startIndex).take(pageSize).value();

  return slicedArray;
};
