import React from 'react'
import { connect } from 'react-redux'

class AuthorDisplay extends React.Component {
  render() {
    let user = this.props.users.find(u => u.id === this.props.userId)
    return user ? 
      (<div>{ user.username }</div>) :
      (<div>Loading author...</div>)
  }
}
const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(AuthorDisplay)