import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { ChangePasswordView } from './ui/ChangePasswordView'
import { ChangePasswordController } from '@airbnb/controller'

export class ChangePasswordConnector extends React.PureComponent<
  RouteComponentProps<{ key: string }>
> {
  onFinish = () => {
    this.props.history.push('/login')
  }
  render() {
    const {
      match: {
        params: { key }
      }
    } = this.props
    return (
      <ChangePasswordController>
        {({ submit }) => (
          <ChangePasswordView
            onFinish={this.onFinish}
            token={key}
            submit={submit}
          />
        )}
      </ChangePasswordController>
    )
  }
}
