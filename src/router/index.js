import React from 'react'
import { Redirect } from "react-router-dom";

import FCDiscover from '@/pages/discover'
import FCRecommend from "../pages/discover/c-pages/recommend";
import FCRanking from "../pages/discover/c-pages/ranking";
import FCPlayList from "../pages/discover/c-pages/play-list";
import FCDjradio from "../pages/discover/c-pages/djradio";
import FCArtist from "../pages/discover/c-pages/artist";
import FCAlbum from "../pages/discover/c-pages/album";

import FCSong from "@/pages/song";


import FCFriend from '@/pages/friend'
import FCMine from '@/pages/mine'


const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to='/discover' />
    )
  },
  {
    path: '/discover',
    component: FCDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend" />
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
        path: "/discover/playlist",
        component: FCPlayList
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
    path: '/mine',
    component: FCMine
  },
  {
    path: '/friend',
    component: FCFriend
  },
  {
    path: '/song/:id',
    component: FCSong
  }
]

export default routes;