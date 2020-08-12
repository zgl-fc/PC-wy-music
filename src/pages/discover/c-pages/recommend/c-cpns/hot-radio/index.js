import React, { memo } from 'react'

import { hotRadios } from '@/common/local-data'

import FCThemeHeaderSmall from '@/components/theme-header-small'
import {
  HotRadioWrapper
} from './style'
import Item from 'antd/lib/list/Item'
export default memo(function HotRadio() {
  return (
    <HotRadioWrapper>
      <FCThemeHeaderSmall title={'热门主播'} />
      <ul className="radios-list">
        {
          hotRadios.map((item, index) => {
            return (
              <li key={item.picUrl} className="radio-item">
                <a href="/todo">
                  <img src={item.picUrl} alt="" />
                </a>
                <div className="info">
                  <a href="">{item.name}</a>
                  <p className="text-nowrap">{item.position}</p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </HotRadioWrapper>
  )
})
