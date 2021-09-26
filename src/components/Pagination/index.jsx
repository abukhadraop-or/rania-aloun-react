import React from 'react';
import _ from 'lodash';
import ProbTypes from 'prop-types';
import {
  PagesContainer,
  PagesList,
  PageNumber,
  PageButton,
} from './pagination';

/**
 * pagination component for showing number of pages
 * @param   {number}   itemsCount   number of articles to be displayed and paginated
 * @param   {function} onPageChange changes the selected page number
 */
function index(props) {
  const pageSize = 3;
  const { itemsCount, onPageChange } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

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

index.propTypes = {
  itemsCount: ProbTypes.number.isRequired,
  onPageChange: ProbTypes.func.isRequired,
};

export default index;
