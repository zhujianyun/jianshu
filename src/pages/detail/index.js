import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DetailWrapper, AuthorInfo, Content } from './style';
import { action } from './store';
// LoadableComponent可以获取<Route exact path="/detail" component={Detail}></Route>
// 路由里所有的内容，但他所支持的异步加载的组件即index.js就无法获取路由信息了
// 所以我们要借助react-router-dom中的withrouter方法，让indx.js有能力获取router里所有的参数
// 这样this.props.location就不会报错了
import { withRouter } from 'react-router-dom';
class Detail extends Component {
    render() {
        return (
            <DetailWrapper>
                <p className='title'>{this.props.title}</p>
                <AuthorInfo>
                    <img className='pic' src={this.props.author.get('imgUrl')} alt='' />
                    <div className='right'>
                        <span className='name'>{this.props.author.get('name')}</span>
                        <span className='follow'><i className='iconfont'>&#xe61b;</i>关注</span>
                        <div className='info'>{this.props.author.get('info')}</div>
                    </div>
                </AuthorInfo>
                <Content dangerouslySetInnerHTML={{__html: this.props.content}}>
                </Content>
            </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.location.state.id);

        // this.props.getDetail(this.props.location.query.id);
        // this.props.getDetail(this.props.match.params.id);
    }
}
const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    author: state.getIn(['detail', 'author']),
    content: state.getIn(['detail', 'content'])
});
const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(action.getDetail(id));
    }
});
export default connect(mapState, mapDispatch)(withRouter(Detail));
