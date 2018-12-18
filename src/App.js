import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import store from './store';
import Header from './common/header';
import { GloablStyle } from './style';
import { Iconfont } from './statics/iconfont/iconfont';
import Home from './pages/home';
// import Detail from './pages/detail';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <GloablStyle />
            <Iconfont />
            <Header />
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/detail" component={Detail}></Route>
            <Route exact path="/write" component={Write}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
  export default App;
