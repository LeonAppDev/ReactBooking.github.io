import { createSelector } from 'reselect';

const startDateSelector = state => state.get('startDate');
const currentStartDateSelector = createSelector([startDateSelector], startDate => startDate.get('startDate'));
const endDateSelector = state => state.get('endDate');
const currentEndDateSelector = createSelector([endDateSelector], endDate => endDate.get('endDate'));

export {
  startDateSelector,
  currentStartDateSelector,
  endDateSelector,
  currentEndDateSelector,
};
