import React from 'react'
import { connect } from 'react-redux'

import PostDisplay from './PostDisplay'
import { fetchPosts, fetchUsers } from '../actions'

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts()
    this.props.fetchUsers()
  }
  renderPostList() {
    return this.props.posts.map(post => {
      return (
        <div className="ui cards" key={post.id}>
          <PostDisplay post={post} />
        </div>
      )
    })
  }

  render() {
    return (
      <div className="post-list ui segment">
        { this.renderPostList() }
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const innerFunc = connect(mapStateToProps, { fetchPosts, fetchUsers })
export default innerFunc(PostList)