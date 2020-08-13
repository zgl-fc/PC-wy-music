import { combineReducers } from 'redux-immutable'

import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store'
import { reducer as playerReducer } from '../pages/song/store'

const cReducer = combineReducers({
  recommend:recommendReducer,
  song:playerReducer
});

export default cReducer;