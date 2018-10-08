import { createResolver } from '_utils/resolver';
import RNG from '_utils/chance';

const SEASON_WEATHER_MODIFIERS = {
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

const WEATHER_TYPES = [
  'fair',
  'rain',
  'hot',
  'snow',
  'cold'
];

const getNextWeather = (state) => {

  const calendar = state.calendar;
  const { season } = calendar;

  const modifiersArray = WEATHER_TYPES.map(weatherEvent => {
    if (weatherEvent === 'fair' && season !== 'winter') return 100;
    return SEASON_WEATHER_MODIFIERS[season][weatherEvent] || 0;
  });

  const nextWeather = RNG.weighted(WEATHER_TYPES, modifiersArray);
  return {
    ...state,
    calendar: {
      ...state.calendar,
      weather: nextWeather
    }
  };
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

function updateCalendar(state) {
  const { calendar } = state;
  const currentDate = calendar.date;
  const currentSeason = calendar.season;
  const currentYear = calendar.year;

  const nextCalendar = {
    ...calendar,
    tick: calendar.tick + 1
  };

  // was the last day of the season
  if (currentDate === 15) {
    // switch season, reset date to 1
    nextCalendar.season = getNextSeason(currentSeason);
    nextCalendar.date = 1;

    // Last day of last season
    if (currentSeason === 'winter') {
      // increment year
      nextCalendar.year = currentYear + 1;
    }
  }

  else {
    // only increment date
    nextCalendar.date = currentDate + 1;
  }

  return {
    ...state,
    calendar: nextCalendar
  };
}


const resolveCalendar = createResolver([
  updateCalendar,
  getNextWeather
]);

export default resolveCalendar;
