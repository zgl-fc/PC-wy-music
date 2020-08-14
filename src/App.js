import React from 'react';
import { memo } from 'react';
import { Provider } from 'react-redux'

import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom'

import routes from './router'
import store from './store';

import ScrollTop from '@/components/scroll-top'
import AppFooter from '@/components/app-footer'
import AppHeader from '@/components/app-header'
import PlayBar from '@/pages/song/app-player-bar'



export default memo(function () {
  return (
    <Provider store={store}>
      <HashRouter>
        <ScrollTop/>
        <AppHeader/>
        {renderRoutes(routes)}
        <AppFooter/>
        <PlayBar/>
      </HashRouter>
    </Provider>
  );
})
