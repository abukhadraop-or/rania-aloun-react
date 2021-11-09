import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import ProbTypes from 'prop-types';
import config from 'config';
import {
  PagesList,
  PageNumber,
  PageButton,
  PagesContainer,
} from './pagination.styles';

/**
 * Pagination component for showing number of pages at the bottom of the page.
 *
 * @param {Object}   props Props passed to the pagination component.
 * @param {number}   props.totalArticles Number of articles to be displayed and paginated.
 * @param {Function} props.onPageChange Changes the selected page number.
 *
 * @return {JSX.Element} Pages numbers in a component at the bottom of the page.
 */
function Pagination({ totalArticles, onPageChange }) {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const pagesCount = Math.ceil(totalArticles / config.pageSize);

    const pagesRange = _.range(0, pagesCount);
    setPages(pagesRange);
  }, [totalArticles]);

  return (
    <>
      {pages.length > 1 && (
        <PagesContainer>
          <PagesList>
            {pages.map((page) => (
              <PageNumber key={page}>
                <PageButton onClick={() => onPageChange(page)}>
                  {page}
                </PageButton>
              </PageNumber>
            ))}
          </PagesList>
        </PagesContainer>
      )}
    </>
  );
}

Pagination.propTypes = {
  totalArticles: ProbTypes.number.isRequired,
  onPageChange: ProbTypes.func.isRequired,
};

export default Pagination;
