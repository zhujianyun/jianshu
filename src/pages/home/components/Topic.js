import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    TopicWrapper,
    TopicItem,
}
from '../style';
class Topic extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <TopicWrapper>
                {
                    list.map((item) => (
                        <TopicItem key={item.get('id')}>
                            <img
                                className='topic-pic'
                                src={item.get('imgUrl')}
                                alt=''
                            />
                            {item.get('title')}
                        </TopicItem>
                    ))
                }
            </TopicWrapper>
        )
    }
}
// import { combineReducers } from 'redux-immutable'; 
// 所以 state.get('home').get('topicList') === state.home.get('topicList') === state.getIn(['home', 'topicList'])
const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'topicList'])
});
export default connect(mapStateToProps, null)(Topic);
 