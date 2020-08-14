import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'


import { dicoverMenu } from "@/common/local-data";

import {
  SubHeaderWrapper
} from './style'
export default memo(function SubHeader() {
  return (
    <SubHeaderWrapper>
      <ul className="wrap-v1">
        {
          dicoverMenu.map((item, index) => {
            return (
              <li className="nav-item" key={item.title}>
                <NavLink to={item.link}>
                  {item.title}
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    </SubHeaderWrapper>
  )
})
