import * as React from 'react'
import { Link } from 'react-router-dom'

export class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    )
  }
}
