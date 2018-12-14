import * as constants from './constants';
import axios from 'axios';
export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
})
export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})
export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
})
export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
})
export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
})
export const searchList = (data) => ({
    type: constants.SEARCH_LIST,
    totalPage: Math.ceil(data.length / 10),
    data
})
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then(res => {
            const list = res.data.data;
            dispatch(searchList(list));
        }).catch(err => {
            console.log(err);
        });
    }
}