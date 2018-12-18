import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable'; 

const changeDetail = (result) => ({
    type: constants.CHANGE_DETAIL,
    title: result.title,
    // 如果获取的某项数据是对象的话，要用fromJS()转成immutable对象
    author: fromJS(result.author), // 坑。。。。。
    content: result.content
});
export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then(res => {
            const result = res.data.data;
            dispatch(changeDetail(result));
        }).catch(err => {
            console.log(err);
        });
    }
}