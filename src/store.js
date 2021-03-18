// import { combineReducers, createStore } from 'redux';
import { createStore } from 'redux';

// actions.js
export const activateTalent = talent => ({
    type: 'ACTIVATE_TALENT',
    talent,
});

export const deactivateTalent = talent => ({
    type: 'DEACTIVATE_TALENT',
    talent,
});

// reducers.js
export const reducers = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVATE_TALENT':
        return {
            ...state,
            activeTalents: [...state.activeTalents, action.talent]
        }
    case 'DEACTIVATE_TALENT':
        return {
            ...state,
            activeTalents: [...state.activeTalents].filter(talent => talent !== action.talent)
        }
    default:
      return state;
  }
};

// export const reducers = combineReducers({
//     talents,
// });

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
}

const initialState = {
    paths: [
        {
            id: 1,
            label: 'Talent Path 01',
            talents: ['chevron', 'silverware', 'cake', 'crown']
        },
        {
            id: 2,
            label: 'Talent Path 02',
            talents: ['boat', 'scuba', 'lightning', 'skull']
        }
    ],
    activeTalents: [],
    pointBudget: 6
}

export const store = configureStore(initialState);
