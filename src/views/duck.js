import { createAction, handleActions } from 'redux-actions';
import { takeEvery, put } from 'redux-saga/effects';
import { safeTakeEvery } from 'helpers/saga';

const ERROR = 'global/ERROR';
const WARNING = 'global/WARNING';
const INFO = 'global/INFO';
const SUCCESS = 'global/SUCCESS';
const NOTIFICATION_SHOW = 'global/NOTIFICATION_SHOW';

export const actions = {
    error: createAction(ERROR),
    warning: createAction(WARNING),
    info: createAction(INFO),
    success: createAction(SUCCESS),
    notificationShow: createAction(NOTIFICATION_SHOW),
};

const initialState = {
    user: {
        username: 'FE Developer',
    },
};

const TYPE = {
    ERROR: 'error',
    WARNING: 'warning',
    INFO: 'info',
    SUCCESS: 'success',
};

export const reducers = handleActions({
    [NOTIFICATION_SHOW]: (state, action) => ({
        ...state, notificationMap: action.payload.notification,
    }),
}, initialState);

const getPayload = (type, message) => {
    const time = new Date().toISOString();
    const notification = [{ type, message, time }];
    return { notification };
};

const getPayloadBulk = (type, messages) => {
    const time = new Date().toISOString();
    const notification = messages.map(message => ({ type, message, time }));
    return { notification };
};

export function* globalErrorHandler(gen) {
    try {
        yield* gen();
    } catch (e) {
        if (e.response && e.response.status === 'error code') {
            console.log('Response with special error code'); // eslint-disable-line  no-console
        } else {
            yield put(actions.error(e));
        }
    }
}

function* handleError({ payload: { message } }) {
    if (Array.isArray(message)) {
        yield put(actions.notificationShow(getPayloadBulk(TYPE.ERROR, message)));
        message.map((x) => { throw (x); });
    } else {
        yield put(actions.notificationShow(getPayload(TYPE.ERROR, message)));
        throw (message);
    }
}

function* handleWarning({ payload: { message } }) {
    if (Array.isArray(message)) {
        yield put(actions.notificationShow(getPayloadBulk(TYPE.WARNING, message)));
        message.map((x) => { throw (x); });
    } else {
        yield put(actions.notificationShow(getPayload(TYPE.WARNING, message)));
        throw (message);
    }
}

function* handleInfo({ payload: { message } }) {
    if (Array.isArray(message)) {
        yield put(actions.notificationShow(getPayloadBulk(TYPE.INFO, message)));
    } else {
        yield put(actions.notificationShow(getPayload(TYPE.INFO, message)));
    }
}

function* handleSuccess({ payload: { message } }) {
    if (Array.isArray(message)) {
        yield put(actions.notificationShow(getPayloadBulk(TYPE.SUCCESS, message)));
    } else {
        yield put(actions.notificationShow(getPayload(TYPE.SUCCESS, message)));
    }
}

export function* saga() {
    yield takeEvery(ERROR, handleError); // no "safe" here to avoid recursion.
    yield takeEvery(WARNING, handleWarning); // no "safe" here to avoid recursion.
    yield safeTakeEvery(INFO, handleInfo); // no "safe" here to avoid recursion.
    yield safeTakeEvery(SUCCESS, handleSuccess); // no "safe" here to avoid recursion.
}
