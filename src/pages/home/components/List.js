import React, { Component } from 'react';
import { ListWrapper, MoreList } from '../style' ;
import { connect } from 'react-redux';
import { action } from '../store';
class List extends Component {
  render() {
    const { list, page, getMoreList } = this.props;
    return (
      <ListWrapper>
      {
        list.map((item) => (
          <div className='list-item' key={item.get('id')}>
          <img 
          src={item.get('imgUrl')}
          className='list-pic'
          alt=''/>
          <div className='list-info'>
          <h3 className='article-title'>{item.get('title')}</h3>
          <p className='article-content'>{item.get('desc')}</p>
          </div>
          </div>
        ))
      }
      <MoreList onClick={ () => getMoreList(page)}>阅读更多</MoreList>
      </ListWrapper>
      )
  }
}
const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
});
const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(action.getMoreList(page));
  }
})
export default connect(mapState, mapDispatch)(List);
