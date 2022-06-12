import { GET_SUN, GET_MERCURY, GET_VENUS, GET_EARTH, GET_MARS, GET_JUPITER, GET_SATURN, GET_URANUS, GET_NEPTUNE, GET_PLUTO } from './actions';

const initalState = {
  activeModule: "Sun",
};

export default function reducer(state = initalState, action) {
  switch (action.type) {
    case GET_SUN: {
      return {
        ...state,
        activeModule: "Sun"
      }
    }
    case GET_MERCURY: {
      return {
        ...state,
        activeModule: "Mercury"
      }
    }
    case GET_VENUS: {
      return {
        ...state,
        activeModule: "Venus"
      }
    }
    case GET_EARTH: {
      return {
        ...state,
        activeModule: "Earth"
      }
    }
    case GET_MARS: {
      return {
        ...state,
        activeModule: "Mars"
      }
    }
    case GET_JUPITER: {
      return {
        ...state,
        activeModule: "Jupiter"
      }
    }
    case GET_SATURN: {
      return {
        ...state,
        activeModule: "Saturn"
      }
    }
    case GET_URANUS: {
      return {
        ...state,
        activeModule: "Uranus"
      }
    }
    case GET_NEPTUNE: {
      return {
        ...state,
        activeModule: "Neptune"
      }
    }
    case GET_PLUTO: {
      return {
        ...state,
        activeModule: "Pluto"
      }
    }
    default: {
      return state;
    }
  }
}
