import { createSelector } from 'reselect';

const user = (state) => state.auth;

export const getUserData = createSelector(user, (data) => data.userData || {});
