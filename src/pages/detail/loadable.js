import React from 'react';
import Loadable from 'react-loadable';
import MyLoadingComponent from '../../common/loading';
const LoadableComponent = Loadable({
    loader: () => import('./'), // 这里的import是异步加载的新语法 ./ = ./index.js
    // loading() {
    //     return <div>Loading.......</div>
    // },
    loading: MyLoadingComponent,
    delay: 300, // 可以不设置 默认是200ms 
});

export default () => <LoadableComponent />