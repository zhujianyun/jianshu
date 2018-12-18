import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    title: '',
    author: {},
    content: ''
});
export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                author: action.author,
                content: action.content,
            });
        default: 
            return state;
    }
}