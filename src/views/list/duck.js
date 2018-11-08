import { createAction, handleActions } from 'redux-actions';
import { put, call } from 'redux-saga/effects';
import { safeTakeEvery } from 'helpers/saga';
import { getAll, getById } from 'api/advert';

// Actions
const FETCH = 'list/FETCH';
const FETCH_SUCCESS = 'management/companyList/FETCH_SUCCESS';
const FETCH_ITEM_SUCCESS = 'management/companyList/FETCH_ITEM_SUCCESS';
const SELECT_ITEM = 'management/companyList/SELECT_ITEM';

export const actions = {
    fetch: createAction(FETCH),
    fetchSuccess: createAction(FETCH_SUCCESS),
    fetchItemSuccess: createAction(FETCH_ITEM_SUCCESS),
    selectItem: createAction(SELECT_ITEM),
};

const initialState = {
    dataList: [],
    selectedItem: undefined,
    itemDetails: undefined,
};

export const reducers = handleActions({
    [FETCH_SUCCESS]: (state, action) => ({ ...state, dataList: action.payload }),
    [SELECT_ITEM]: (state, action) => ({ ...state, selectedItem: action.payload, itemDetails: undefined }),
    [FETCH_ITEM_SUCCESS]: (state, action) => ({ ...state, itemDetails: action.payload }),
}, initialState);

function* fetchItems() {
    const dataListRaw = yield call(getAll);
    yield put(actions.fetchSuccess(dataListRaw.data));
}

function* fetchItem(action) {
    const dataListRaw = yield call(getById, action.payload.id);
    yield put(actions.fetchItemSuccess(dataListRaw.data));
}

export function* saga() {
    yield safeTakeEvery(FETCH, fetchItems);
    yield safeTakeEvery(SELECT_ITEM, fetchItem);
}
