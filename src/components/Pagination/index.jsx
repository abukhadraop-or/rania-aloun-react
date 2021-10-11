import React from 'react';
import _ from 'lodash';
import ProbTypes from 'prop-types';
import {
  PagesContainer,
  PagesList,
  PageNumber,
  PageButton,
} from './pagination.styles';

/**
 * Pagination component for showing number of pages at the bottom of the page.
 *
 * @param {number}   itemsCount Number of articles to be displayed and paginated.
 * @param {function} onPageChange Changes the selected page number.
 * @return {JSX.Element} Pages numbers in a component at the bottom of the page.
 */
function Pagination({ itemsCount, onPageChange }) {
  let isNeeded = true;
  const paginate = () => {
    const pageSize = 3;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) isNeeded = false;
    const pages = _.range(1, pagesCount + 1);
    return pages;
  };

  const pages = paginate();

  if (isNeeded) {
    return (
      <PagesContainer>
        <PagesList>
          {pages.map((page) => (
            <PageNumber key={page}>
              <PageButton onClick={() => onPageChange(page)}>{page}</PageButton>
            </PageNumber>
          ))}
        </PagesList>
      </PagesContainer>
    );
  }
  return null;
}

Pagination.propTypes = {
  itemsCount: ProbTypes.number.isRequired,
  onPageChange: ProbTypes.func.isRequired,
};

export default Pagination;
