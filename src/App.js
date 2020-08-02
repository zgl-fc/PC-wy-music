import React from 'react';
import { memo } from 'react';

import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom'
import routes from './router'

import AppFooter from '@/components/app-footer'
import AppHeader from '@/components/app-header'



export default memo(function () {
  return (
    <HashRouter>
      <AppHeader></AppHeader>
      {renderRoutes(routes)}
      <AppFooter></AppFooter>
    </HashRouter>
  );
})
