import RNG from '_utils/chance';

const seasonModifiers = {
  spring: {
    rain: 80
  },

  summer: {
    rain: 30
  },

  autumn: {
    rain: 10
  },

  winter: {
    snow: 50,
    cold: 100,
    fair: 20
  }
};

const possibleWeatherEvents = [
  'fair',
  'rain',
  'hot',
  'snow',
  'cold'
];

const getNextWeather = (gameState) => {

  const calendar = gameState.calendar;
  const {
    season
  } = calendar.toJS();

  const modifiersArray = possibleWeatherEvents.map(weatherEvent => {
    if (weatherEvent === 'fair' && season !== 'winter') return 100;
    return seasonModifiers[season][weatherEvent] || 0;
  });

  const nextWeather = RNG.weighted(possibleWeatherEvents, modifiersArray);
  return nextWeather;
};

function getNextSeason(currentSeason) {
  switch (currentSeason) {
    case 'spring':
      return 'summer';
    case 'summer':
      return 'autumn';
    case 'autumn':
      return 'winter';
    case 'winter':
      return 'spring';
    default:
      throw new Error(`no next season for ${currentSeason}`);
  }
}

export const UPDATE_CALENDAR = 'UPDATE_CALENDAR';
export function updateCalendar() {
  return (dispatch, getState) => {
    const { calendar } = getState();
    const currentTick = calendar.get('tick');
    const currentDate = calendar.get('date');
    const currentSeason = calendar.get('season');
    const currentYear = calendar.get('year');

    const nextCalendar = {
      date: currentDate,
      season: currentSeason,
      year: currentYear,
      tick: currentTick + 1,
      weather: getNextWeather(getState())
    };

    if (currentDate === 15) {

      if (currentSeason === 'winter') {
        // increment year
        nextCalendar.year = currentYear + 1;
      }

      nextCalendar.season = getNextSeason(currentSeason);
      nextCalendar.date = 1;
      // switch season, reset date to 1
    }

    else {
      nextCalendar.date = currentDate + 1;
      // increment date
    }

    dispatch({
      type: UPDATE_CALENDAR,
      options: nextCalendar
    });
  };
}
