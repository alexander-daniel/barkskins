export const UPDATE_USER = 'UPDATE_USER';
export function updateUser(payload) {
  return {
    type: UPDATE_USER,
    payload
  };
}
