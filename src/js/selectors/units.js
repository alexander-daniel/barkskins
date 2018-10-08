import { createSelector } from 'reselect';

export const selectUnitsAsList = state => state.units.toList();
export const selectUnits = state => state.units;

export const getIdleUnits = createSelector(
  selectUnits,
  (units) => units.filter((u) => u.get('currentTask') === 'idle')
);
