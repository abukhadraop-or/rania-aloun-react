import _ from 'lodash';

/**
 * returns sliced array of articles based on desired page size
 * @param   {array}  items      articles to be paginated
 * @param   {number} pageNumber current page number in page
 * @return  {array} array of sliced articles
 */
export default function paginate(items, pageNumber) {
  const pageSize = 3;

  const startIndex = (pageNumber - 1) * pageSize;

  const slicedArray = _(items).slice(startIndex).take(pageSize).value();

  return slicedArray;
}
