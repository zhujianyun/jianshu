import { fromJS } from 'immutable';
import { SEARCH_FOCUS, SEARCH_BLUR, SEARCH_LIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE } from './constants';

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1,
});
export default (state = defaultState, action) => {
    switch(action.type) {
        case SEARCH_FOCUS:
            return state.set('focused', true);
        case SEARCH_BLUR:
            return state.set('focused', false);
        case MOUSE_ENTER:
            return state.set('mouseIn', true);
        case MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case CHANGE_PAGE:
            return state.set('page', action.page);
        case SEARCH_LIST:
            return state.set('totalPage', action.totalPage).set('list', fromJS(action.data));
        default: 
            return state;
    }
}