import * as React from 'react'
import { Formik, Form, FormikActions } from 'formik'
import { Form as AntForm, Button } from 'antd'
import { RouteComponentProps, Link } from 'react-router-dom'
import { Page1 } from '../../../modules/listing/create/ui/Page1'
import { Page2 } from '../../../modules/listing/create/ui/Page2'
import { Page3 } from '../../../modules/listing/create/ui/Page3'
import { withCreateListing, WithCreateListing } from '@airbnb/controller'
import { ImageFile } from 'react-dropzone'

const FormItem = AntForm.Item

interface FormValues {
  name: string
  picture: ImageFile | null
  category: string
  description: string
  price: number
  beds: number
  guests: number
  latitude: number
  longitude: number
  amenities: string[]
}

interface State {
  page: number
}

// tslint:disable-next-line:jsx-key
const pages = [<Page1 />, <Page2 />, <Page3 />]

class C extends React.PureComponent<
  RouteComponentProps<{}> & WithCreateListing,
  State
> {
  state = {
    page: 0
  }

  submit = async (
    values: FormValues,
    { setSubmitting }: FormikActions<FormValues>
  ) => {
    await this.props.createListing(values)
    setSubmitting(false)
  }

  nextPage = () => this.setState(state => ({ page: state.page + 1 }))

  render() {
    return (
      <Formik<{}, FormValues>
        initialValues={{
          name: '',
          picture: null,
          category: '',
          description: '',
          price: 0,
          beds: 0,
          guests: 0,
          latitude: 0,
          longitude: 0,
          amenities: []
        }}
        onSubmit={this.submit}
      >
        {({ isSubmitting, isValid, values }) => (
          <Form style={{ display: 'flex' }}>
            <div style={{ width: 400, margin: 'auto' }}>
              {pages[this.state.page]}
              {values.picture && <img src={values.picture.preview} />}
              <FormItem>
                <Link to="/logout">Logout</Link>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {this.state.page === pages.length - 1 ? (
                    <div>
                      <Button
                        type="primary"
                        htmlType="submit"
                        disabled={!isValid || isSubmitting}
                      >
                        Create Listing
                      </Button>
                    </div>
                  ) : (
                    <Button
                      type="primary"
                      htmlType="button"
                      onClick={this.nextPage}
                    >
                      Next Page
                    </Button>
                  )}
                </div>
              </FormItem>
            </div>
          </Form>
        )}
      </Formik>
    )
  }
}

export const CreateListingConnector = withCreateListing(C)
