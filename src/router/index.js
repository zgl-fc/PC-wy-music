import React from 'react'
import { Redirect } from "react-router-dom";

import FCDiscover from '@/pages/discover'
import FCRecommend from "../pages/discover/c-pages/recommend";
import FCRanking from "../pages/discover/c-pages/ranking";
import FCSongs from "../pages/discover/c-pages/songs";
import FCDjradio from "../pages/discover/c-pages/djradio";
import FCArtist from "../pages/discover/c-pages/artist";
import FCAlbum from "../pages/discover/c-pages/album";


import FCFriend from '@/pages/friend'
import FCMine from '@/pages/mine'


const routes = [
  {
    path:'/',
    exact:true,
    render:() => (
      <Redirect to='/discover'/>
    )
  },
  {
    path:'/discover',
    component:FCDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend"/>
        )
      },
      {
        path: "/discover/recommend",
        component: FCRecommend
      },
      {
        path: "/discover/ranking",
        component: FCRanking
      },
      {
        path: "/discover/songs",
        component: FCSongs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: FCDjradio
      },
      {
        path: "/discover/artist",
        component: FCArtist
      },
      {
        path: "/discover/album",
        component: FCAlbum
      }
    ]
  },
  {
    path:'/mine',
    component:FCMine
  },
  {
    path:'/friend',
    component:FCFriend
  }
]

export default routes;