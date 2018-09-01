import * as React from 'react'
import { FieldProps } from 'formik'
import Geosuggest, { Suggest } from 'react-geosuggest'

export class LocationField extends React.PureComponent<FieldProps<any> & {}> {
  onSuggestSelect = (place: Suggest) => {
    console.log(place)
  }

  render() {
    // const {
    //   field: { onChange, onBlur: _, ...field },
    //   form: { touched, errors, setFieldValue },
    //   ...props
    // } = this.props

    return (
      <Geosuggest
        placeholder="Start typing!"
        onSuggestSelect={this.onSuggestSelect}
        location={new google.maps.LatLng(0, 0)}
        radius={20}
      />
    )
  }
}
