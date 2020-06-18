import React from 'react'
import moment from 'moment'

import AuthorDisplay from './AuthorDisplay'

const PostDisplay = props => {
  let { title, body, userId } = props.post
  return (
    <div className="card">
      <div className="content">
        <div className="header">{ title }</div>
        <div className="meta">{ moment().calendar() }</div>
        <div className="description">
          { body }
        </div>
        <AuthorDisplay userId={userId} />
      </div>
    </div>
  )
}

export default PostDisplay