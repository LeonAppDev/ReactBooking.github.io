import { createSelector } from 'reselect';

const pagesSelector = state => state.get('pages');
const pagesInfoSelector = createSelector([pagesSelector], pages => pages.get('pages'));
const currentPageSelector = createSelector([pagesSelector], pages => pages.get('currentPage'))

export {
  pagesSelector,
  pagesInfoSelector,
  currentPageSelector,
};
