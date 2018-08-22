import * as React from 'react'
import { Field } from 'formik'
import { InputField } from '../../../shared/InputField'
import { TagField } from '../../../shared/TagField'

export const Page3 = () => (
  <>
    <Field
      name="latitude"
      label="Latitude"
      placeholder="Latitude"
      useNumberComponent={true}
      component={InputField}
    />
    <Field
      name="longitude"
      label="Longitude"
      placeholder="Longitude"
      useNumberComponent={true}
      component={InputField}
    />
    <Field name="amenities" placeholder="Amenities" component={TagField} />
  </>
)
