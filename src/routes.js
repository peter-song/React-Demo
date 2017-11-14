/**
 * Created by songzhongkun on 2017/11/14.
 */
'use strict';

import React from 'react';
import appRoot from './AppRoot';
import MainFrame from './MainFrame';

import Bill from './page/Bill';
import Ship from './page/Ship';
import Fleet from './page/Fleet';
import Basic from './page/Basic';
import Login from './page/Login';
import Detail from './page/Detail';
import Notice from './page/Notice';

export default [
  {
    component: appRoot,
    routes: [
      {
        path: '/login',
        exact : true,
        component: Login,
      },
      {
        component: MainFrame,
        routes: [
          {
            path: '/',
            exact : true,
            component: Basic,
          },
          {
            path: '/basic',
            component: Basic,
          },
          {
            path: '/detail',
            component: Detail,
          },
          {
            path: '/bill',
            component: Bill,
          },
          {
            path: '/notice',
            component: Notice,
          },
          {
            path: '/fleet',
            component: Fleet,
          },
          {
            path: '/ship',
            component: Ship,
          },
        ]
      },
    ]
  }
];