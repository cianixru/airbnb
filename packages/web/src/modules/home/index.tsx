import * as React from 'react'
import { Link } from 'react-router-dom'

export class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <div>
          <Link to="/login">Login | </Link>
        </div>
        <div>
          <Link to="/register">Register</Link>
        </div>
      </div>
    )
  }
}
