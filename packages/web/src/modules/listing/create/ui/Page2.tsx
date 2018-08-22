import * as React from 'react'
import { Field } from 'formik'
import { InputField } from '../../../../modules/shared/InputField'

export const Page2 = () => (
  <>
    <Field
      name="price"
      label="Price"
      placeholder="Price"
      useNumberComponent={true}
      component={InputField}
    />
    <Field
      name="beds"
      label="Beds"
      placeholder="Beds"
      useNumberComponent={true}
      component={InputField}
    />
    <Field
      name="guests"
      label="Guests"
      placeholder="Guests"
      useNumberComponent={true}
      component={InputField}
    />
  </>
)
