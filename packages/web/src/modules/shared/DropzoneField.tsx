import React from 'react'
import { FieldProps } from 'formik'
import Dropzone from 'react-dropzone'

export const DropzoneField: React.SFC<FieldProps<any>> = ({
  field: { name }, // { name, value, onChange, onBlur }
  form: { setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  return (
    <Dropzone
      multiple={false}
      accept="image/jpeg, image/png"
      onDrop={([file]) => {
        setFieldValue(name, file)
      }}
      {...props}
    >
      <p>Drop your image here.</p>
    </Dropzone>
  )
}
