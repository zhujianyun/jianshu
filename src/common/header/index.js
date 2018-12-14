import React, { Component } from 'react';
import { toJS } from 'immutable';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { 
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
 } from './style';
import { constants } from 'fs';
class Header extends Component {
    render() {
        const { focused, list, handleInputFocus, handleInputBlur } = this.props;
        return (
            <HeaderWrapper>
                <Logo href="/"></Logo>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载APP</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe602;</i>
                    </NavItem>
                    <NavItem className="right">登录</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={300}
                            classNames='slide'
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => {handleInputFocus(list)}}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe606;</i>
                        {this.geteListArea()}
                    </SearchWrapper>
                    <Addition>
                        <Button className='writing'><i className="iconfont">&#xe754;</i>写文章</Button>
                        <Button className="reg">注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
           
        )
    }
    geteListArea() {
        const { focused, list, page, totalPage, mouseIn, handleChangePage, handleMouseEnter, handleMouseLeave } = this.props;
        const newList = list.toJS();
        const pageList = [];
        if(newList.length) {
            for(let i = (page - 1) * 10; i < page * 10; i++) {
                if(newList[i]) {
                    pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>);
                }
            }
        }
        if(focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => {handleChangePage(page, totalPage, this.spinIcon)}}>
                            <i ref={icon => {this.spinIcon = icon}} className='iconfont'>&#xe746;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>{pageList}</SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null;
        }
    }
}
const mapStateToProps = (state) => ({
    focused: state.getIn(['header', 'focused']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
});
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/g, '');
            if(originAngle) {
                originAngle = parseInt(originAngle, 10);
            }else {
                originAngle = 0;
            }
            spin.style.transfrom = `rotate(${originAngle + 360}deg)`;
            if(page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            }else {
                dispatch(actionCreators.changePage(1));
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);