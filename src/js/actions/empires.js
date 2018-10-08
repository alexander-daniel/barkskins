import RNG from '_utils/chance';

export const UPDATE_EMPIRE = 'UPDATE_EMPIRE';
export function updateEmpire(empireID, empire) {
  return {
    type: UPDATE_EMPIRE,
    empireID,
    empire
  };
}

export function createEmpire() {
  return (dispatch) => {
    try {
      const empire = {
        id: RNG.hash()
      };
      dispatch(updateEmpire(empire.id, empire));
    }

    catch (err) {
      console.error(err);
    }
  };
}
