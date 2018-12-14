import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    writterList: [
        {
            id: 1,
            avatar_source: 'http://upload.jianshu.io/users/upload_avatars/3730494/4a86a2a7-d5b9-47f1-969a-d8ef4711488b.jpg',
            is_following_user: true,
            nickname: '格列柯南',
            total_likes_count: 15664,
            total_wordage: 681295
        },
        {
            id: 2,
            avatar_source: 'http://upload.jianshu.io/users/upload_avatars/6539412/824c3d2f-b0d2-43a6-885a-d2acd37fd364.jpg',
            is_following_user: false,
            nickname: '琪官Kafka',
            total_likes_count: 3776,
            total_wordage: 390141
        },
        {
            id: 3,
            avatar_source: 'http://upload.jianshu.io/users/upload_avatars/10849033/a3e12f47-c81c-4659-9c80-117f8b337408.jpg',
            is_following_user: false,
            nickname: 'lostdays',
            total_likes_count: 1388,
            total_wordage: 187353
        },
        {
            id: 4,
            avatar_source: 'http://upload.jianshu.io/users/upload_avatars/7290998/f64f5ef0-def0-4b26-beb3-b9d88f060ba0.jpg',
            is_following_user: true,
            nickname: '念远怀人',
            total_likes_count: 7399,
            total_wordage: 617237
        },
        {
            id: 5,
            avatar_source: 'http://upload.jianshu.io/users/upload_avatars/677687/c84b99723362.jpg',
            is_following_user: false,
            nickname: '灰土豆',
            total_likes_count: 1627,
            total_wordage: 366775
        },
        {
            id: 6,
            avatar_source: 'http://upload.jianshu.io/users/upload_avatars/5205317/1179d71b-e7c6-4023-89e8-bba25f88272b.jpg',
            is_following_user: false,
            nickname: '遛遛心情的溜妈',
            total_likes_count: 2173,
            total_wordage: 547602
        },
        {
            id: 7,
            avatar_source: 'http://upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg',
            is_following_user: false,
            nickname: '无限猴子',
            total_likes_count: 455,
            total_wordage: 139584
        },
        {
            id: 8,
            avatar_source: 'http://upload.jianshu.io/users/upload_avatars/12665193/828a449f-efbb-4540-b0af-f6c314810515.jpg',
            is_following_user: true,
            nickname: '宇文歡',
            total_likes_count: 1896,
            total_wordage: 237922
        },
        {
            id: 9,
            avatar_source: 'http://upload.jianshu.io/users/upload_avatars/2564926/88bfdbeeb083.jpg',
            is_following_user: false,
            nickname: '王老师八卦美术史',
            total_likes_count: 923,
            total_wordage: 141399
        },
    ],
    writterTotal: 9,
    showScroll: false,
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
            })
        case constants.ADD_ARTICLE_LIST:
            return state.merge({
                articleList: state.get('articleList').concat(action.list),
                articlePage: action.page
            })
        case constants.TOGGLE_SCROLL_TOP: 
            return state.set('showScroll', action.flag);
        default: 
            return state;
    }
}
