import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthStateInterface } from '../types/auth-state.interface';

const authFeatureSelector = createFeatureSelector<AuthStateInterface>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationErrors
);
