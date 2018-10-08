export const UPDATE_CALENDAR = 'UPDATE_CALENDAR';
export function updateCalendar(nextCalendar) {
  return {
    type: UPDATE_CALENDAR,
    payload: nextCalendar
  };
}
