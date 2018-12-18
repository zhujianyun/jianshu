import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { ListWrapper, MoreList } from '../style' ;
import { connect } from 'react-redux';
import { action } from '../store';
class List extends PureComponent {
  render() {
    const { list, page, getMoreList } = this.props;
    return (
      <ListWrapper>
      {
        list.map((item) => (
          // <Link to={'/detail/' + item.get('id')} key={item.get('id')}>
          // <Link to={'/detail?id=' + item.get('id')} key={item.get('id')}>
          // <Link to={{pathname: '/detail', query: {id: item.get('id')}}} key={item.get('id')}>

          <Link to={{pathname: '/detail', state: {id: item.get('id')}}} key={item.get('id')}>
            <div className='list-item'>
            <img 
              src={item.get('imgUrl')}
              className='list-pic'
              alt=''/>
            <div className='list-info'>
              <h3 className='article-title'>{item.get('title')}</h3>
              <p className='article-content'>{item.get('desc')}</p>
              </div>
            </div>
          </Link>
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
