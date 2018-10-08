import { createNewUnit } from '_models/units';

export const UPDATE_UNIT = 'UPDATE_UNIT';
export function updateUnit(unitID, unit) {
  return {
    type: UPDATE_UNIT,
    unitID,
    unit
  };
}

export const UPDATE_UNITS = 'UPDATE_UNITS';
export function updateUnits(units) {
  return {
    type: UPDATE_UNITS,
    units
  };
}

export function createUnit() {
  return (dispatch) => {
    try {
      const unit = createNewUnit();
      dispatch(updateUnit(unit.id, unit));
    }

    catch (err) {
      console.error(err);
    }
  };
}
