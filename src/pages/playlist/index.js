import React, { memo } from 'react'
import { useLocation,useParams } from 'react-router-dom';

import {
  PlayListWrapper
} from './style'
export default memo(function PlayList(props) {
  console.log('history',props.history);
  console.log('match',props.match);
  console.log('location',props.location);
  console.log(useLocation()); 
  return (
    <PlayListWrapper>
      PlayList
    </PlayListWrapper>
  )
})
