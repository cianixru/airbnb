import * as React from 'react'
import { Form as AntForm, Icon, Button } from 'antd'
import { withFormik, FormikProps, Field, Form } from 'formik'
import { InputField } from '../../shared/InputField'
import {
  NormalizedErrorMap,
  ForgotPasswordChangeMutationVariables
} from '@airbnb/controller'
import { changePasswordSchema } from '@airbnb/common'

const FormItem = AntForm.Item

interface FormValues {
  newPassword: string
}

interface Props {
  onFinish: () => void
  token: string
  submit: (
    values: ForgotPasswordChangeMutationVariables
  ) => Promise<NormalizedErrorMap | null>
}

class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    return (
      <Form style={{ display: 'flex' }}>
        <div style={{ width: 400, margin: 'auto' }}>
          <Field
            name="newPassword"
            prefix={
              <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} /> as any
            }
            type="password"
            placeholder="New Password"
            component={InputField}
          />
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Change Password
            </Button>
          </FormItem>
        </div>
      </Form>
    )
  }
}

export const ChangePasswordView = withFormik<Props, FormValues>({
  validationSchema: changePasswordSchema,
  mapPropsToValues: () => ({ newPassword: '' }),
  handleSubmit: async ({ newPassword }, { props, setErrors }) => {
    const errors = await props.submit({ newPassword, key: props.token })
    if (errors) {
      setErrors(errors)
    } else {
      props.onFinish()
    }
  }
})(C)
