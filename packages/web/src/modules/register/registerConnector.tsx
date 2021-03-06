import * as React from 'react'
import { RegisterController } from '@airbnb/controller'

import { RegisterView } from './ui/RegisterView'
import { RouteComponentProps } from 'react-router-dom'

export class RegisterConnector extends React.PureComponent<
  RouteComponentProps<{}>
> {
  onFinish = () => {
    this.props.history.push('/m/confirm-email', {
      message: 'Please check your email to confirm your account.'
    })
  }

  render() {
    return (
      <RegisterController>
        {({ submit }) => (
          <RegisterView onFinish={this.onFinish} submit={submit} />
        )}
      </RegisterController>
    )
  }
}
