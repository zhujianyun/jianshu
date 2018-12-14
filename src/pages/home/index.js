import React, { Component } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writter from './components/Writter';
import { action } from './store';

import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop,
} from './style';
class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img"  alt='' src="//upload.jianshu.io/admin_banners/web_images/4582/2db83cc6f08d13c2f83002238ca32b784266c4fb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writter />
                </HomeRight>
                {
                    this.props.showScroll ? (
                        <BackTop onClick={this.handleScrollTop}>
                            <i className='iconfont'>&#xe620;</i>
                        </BackTop>    
                    ) : null
                }
                
            </HomeWrapper>
        )
    }
    handleScrollTop() {
        window.scrollTo(0, 0);
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }
    componentDidMount() {
       this.props.changeHomeData();
       this.bindEvents();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }
}
const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(action.getHomeData());
    },
    changeScrollTopShow() {
        if(document.documentElement.scrollTop > 200) {
            dispatch(action.toggleTopShow(true));
        }else {
            dispatch(action.toggleTopShow(false));
        }
    }
});
export default connect(mapState, mapDispatch)(Home);
