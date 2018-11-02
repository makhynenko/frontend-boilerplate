import { combineReducers } from 'redux';
import { reducers as list } from 'views/list/duck';
import { reducers as global } from 'views/duck';

export const rootReducer = combineReducers({
    list,
    global,
});
