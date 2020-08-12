import React from 'react';
import { memo } from 'react';
import { Provider } from 'react-redux'

import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom'

import routes from './router'
import store from './store';

import AppFooter from '@/components/app-footer'
import AppHeader from '@/components/app-header'



export default memo(function () {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppHeader></AppHeader>
        {renderRoutes(routes)}
        <AppFooter></AppFooter>
      </HashRouter>
    </Provider>
  );
})
