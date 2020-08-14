import React, { memo, useState, useCallback, useEffect } from 'react'

import { formatTime } from '@/utils/format-time'
import { getSizeImageY, formatDate } from '@/utils/format-util'
import classnames from 'classnames'

import {
  CommentItemWrapper
} from './style'
export default memo(function CommentItem(props) {
  const { comment = {} } = props
  const [replyHide, setReplyHide] = useState(true)

  //handle
  const user = comment.user || {}
  const beReplied = comment.beReplied[0] || {}

  // hook 
  // 每次进来看看是不是回复的别人评论 决定别人的评论是否显示
  useEffect(() => {
    if (Object.keys(beReplied).length !== 0)
      setReplyHide(false)
  }, [beReplied])

  return (
    <CommentItemWrapper className="clearfix">
      <a href="todo" className="com-avatar">
        <img src={getSizeImageY(user.avatarUrl)} alt="" />
      </a>
      <div className="com-detail">
        <div className="com-con">
          <a href="" className="com-per">{user.nickname}</a>
          ：{comment.content}
        </div>
        <div className={classnames("reply-before", { "hide": replyHide })}>
          <i className="arrow"></i>
          <a href="" className="reply-name">{beReplied.user && beReplied.user.nickname}</a> ：{beReplied.content}
        </div>
        <div className="time-reply">
          <span className="time">{formatTime(comment.time)}</span>
          <a href="javascript:;" className="like">
            <i className="icon-like sprite_btn"></i>
            ({comment.likedCount})
          </a>
          <span className="division">|</span>
          <a href="javascript:;" className="reply">
            回复
          </a>
        </div>
      </div>
    </CommentItemWrapper>
  )
})
