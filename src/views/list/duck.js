import { createAction, handleActions } from 'redux-actions';
import { put, call } from 'redux-saga/effects';
import { safeTakeEvery } from 'helpers/saga';
import { getAll } from 'api/advert';

// Actions
const FETCH = 'list/FETCH';
const FETCH_SUCCESS = 'management/companyList/FETCH_SUCCESS';
const SELECT_ITEM = 'management/companyList/SELECT_ITEM';

export const actions = {
    fetch: createAction(FETCH),
    fetchSuccess: createAction(FETCH_SUCCESS),
    selectItem: createAction(SELECT_ITEM),
};

const initialState = {
    dataList: [],
    selectedItem: undefined,
};

export const reducers = handleActions({
    [FETCH_SUCCESS]: (state, action) => ({ ...state, dataList: action.payload }),
    [SELECT_ITEM]: (state, action) => ({ ...state, selectedItem: action.payload }),
}, initialState);

function* fetchItems() {
    const dataListRaw = yield call(getAll);
    yield put(actions.fetchSuccess(dataListRaw.data))
}

export function* saga() {
    yield safeTakeEvery(FETCH, fetchItems);
}
