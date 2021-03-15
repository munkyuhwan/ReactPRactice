// defin action
import * as types from './BulletinActionType';

export const increaseLike = (index) => {
    type: types.INCREASE_LIKE,
    index
}

export const goDetail = (index) => {
    type: types.GO_DETAIL,
    index
}

export const goWrite = () => {
    type: types.GO_WRITE
}


