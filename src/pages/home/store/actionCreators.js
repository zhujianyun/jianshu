import axios from 'axios';
import { fromJS } from 'immutable';
import * as constants from './constants';
const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
});
export const getHomeData = () => ((dispatch) => {
    axios.get('/api/home.json').then(res => {
        const result = res.data.data;
        dispatch(changeHomeData(result));
    }).catch( err => {
        console.log(err);
    });
});


const addHomeList = (list, page) => ({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(list),
    page: page, 
})
export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then(res => {
            const list = res.data.data;
            dispatch(addHomeList(list, page + 1));
        }).catch( err => {
            console.log(err);
        });
    }
}

export const toggleTopShow = (flag) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    flag,
})