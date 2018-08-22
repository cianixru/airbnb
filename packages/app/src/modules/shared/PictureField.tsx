import * as React from 'react'
import { FieldProps } from 'formik'
import { Button } from 'react-native-elements'
import { ImagePicker, Permissions } from 'expo'
import { ReactNativeFile } from 'apollo-upload-client'

export class PictureField extends React.Component<
  FieldProps<any> & { title: string }
> {
  onPress = async () => {
    const permissions = Permissions.CAMERA_ROLL
    const status = await Permissions.getAsync(permissions)
    if (status.status !== 'granted') {
      Permissions.askAsync(permissions)
    }
    const imageResult = await ImagePicker.launchImageLibraryAsync({})
    if (!imageResult.cancelled) {
      const file = new ReactNativeFile({
        uri: imageResult.uri,
        type: imageResult.type,
        name: 'picture'
      })
      const {
        field: { name },
        form: { setFieldValue }
      } = this.props
      setFieldValue(name, file)
    }
  }

  render() {
    const { field, form: _, ...props } = this.props
    return <Button style={{ margin: 20 }} {...props} onPress={this.onPress} />
  }
}
