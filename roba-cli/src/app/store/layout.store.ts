import { createReducer, on, createAction, Action, createSelector, createFeatureSelector } from '@ngrx/store';

// state model
export interface LayoutState {
  showSidenav: boolean;
}

const initialState: LayoutState = {
  showSidenav: false
};

// selectors
export const layoutFeatureKey = 'layout';
const getLayoutFeature = createFeatureSelector(layoutFeatureKey);

export const selectShowSideNav = createSelector(
  getLayoutFeature,
  (state: LayoutState) => state.showSidenav
);

// actions
export const toggleSidenav = createAction('[Layout] Toggle Sidenav');
export const openSidenav = createAction('[Layout] Open Sidenav');
export const closeSidenav = createAction('[Layout] Close Sidenav');

// reducer
const rawLayoutReducer = createReducer(
  initialState,
  on(closeSidenav, state => ({...state, showSidenav: false })),
  on(openSidenav, state => ({...state, showSidenav: true })),
  on(toggleSidenav, state => ({...state, showSidenav: !state.showSidenav }))
);

/** Provide reducer in AOT-compilation happy way */
export function layoutReducer(state: LayoutState, action: Action) {
  return rawLayoutReducer(state, action);
}