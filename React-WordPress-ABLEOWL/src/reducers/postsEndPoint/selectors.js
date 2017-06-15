import { createSelector } from 'reselect';

const postsSelector = state => state.get('posts');
const postsInfoSelector = createSelector([postsSelector], posts => posts.get('posts'));
const currentPostSelector = createSelector([postsSelector], posts => posts.get('currentPost'))

export {
  postsSelector,
  postsInfoSelector,
  currentPostSelector,
};
