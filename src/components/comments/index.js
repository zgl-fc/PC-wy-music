import React, { memo } from 'react'



import CommentItem from './comment-item'
import {
  CommentsWrapper,
  InputComment,
  HotComments,
  CommonComments
} from './style'
export default memo(function Comments(props) {
  const { comments = {} } = props
  const hotComments = comments.hotComments || []
  const showTitle = hotComments.length === 0 ? false:true
  const comComents = comments.comments || []
  return (
    <CommentsWrapper>
      <InputComment>
        <div className="u-title">
          <h3>评论</h3>
          <span>共{comments.total}条评论</span>
        </div>
        <div className="input-area">
          <div className="head-img">
            <img src="https://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50" alt="" />
          </div>
          <div className="text-area">
            <textarea name="comment" id="comment" cols="30" placeholder="@"></textarea>
            <div className="btns clearfix">
              <i className="sprite_icon2 emoticon"></i>
              <i className="sprite_icon2 choose"></i>
              <a href="javascript:;" className="com-btn">评论</a>
              <span className="com-count">140</span>
            </div>
          </div>
        </div>
      </InputComment>
      <HotComments>
        {
          showTitle &&
          (<div className="hot-title">
            <h3>精彩评论</h3>
          </div>)
        }
        {
          hotComments.map((item, index) => {
            return (
              <CommentItem comment={item} key={item.commentId} />
            )
          })
        }
      </HotComments>
      <CommonComments>
        {showTitle && <h3 className="com-title">最新评论{comments.total}</h3>}
        {
          comComents.map((item, index) => {
            return (
              <CommentItem comment={item} key={item.commentId} />
            )
          })
        }
      </CommonComments>
    </CommentsWrapper>
  )
})
