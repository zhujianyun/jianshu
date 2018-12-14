import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WritterWrapper, QRCode, WritterList, WritterItem } from '../style';
class Writter extends Component {
    render() {
        const { list, total } = this.props;
        return (
            <WritterWrapper>
                <QRCode>
                    <img className='qrcode-pic' src='http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png' alt=''/>
                    <p className='qrcode-p1'>下载简书手机APP ></p>
                    <p className='qrcode-p2'>随时随地发现和创作内容 </p>
                </QRCode>
                <div className='title'>
                    <span className='left'>推荐作者</span>
                    <span className='right'>
                        <i ref={icon => {this.spinIcon = icon}} className='iconfont'>&#xe746;</i>
                        换一批
                    </span>
                </div>
                <WritterList>
                    {
                        list.splice(0, 4).map((item) => (
                            <WritterItem key={item.get('id')}>
                                <span className='header-pic'><img src={item.get('avatar_source')} alt='' /></span>
                                {
                                    item.get('is_following_user') ? (
                                        <span className='follow following'>
                                            <i className='iconfont'>&#xe659;</i>
                                            <i>已关注</i>
                                        </span>
                                    ) : (
                                        <span className='follow'>
                                            <i className='iconfont'>&#xe61b;</i>
                                            关注
                                        </span>
                                    )
                                }
                                <span className='name'>{item.get('nickname')}</span>
                                <span className='desc'>写了{item.get('total_wordage')}字 · {item.get('total_likes_count')}喜欢</span>
                            </WritterItem>
                        ))
                    }
                </WritterList>
                <div className='more-writter'>
                    查看全部
                    <i className='iconfont'>&#xe626;</i>
                </div>
            </WritterWrapper>
        )
    }
}
const mapState = (state) => ({
    list: state.getIn(['home', 'writterList']),
    total: state.getIn(['home', 'writterTotal']),
});
export default connect(mapState, null)(Writter);
