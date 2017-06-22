import React from 'react'
import Field from '../Field/Field'
import PlacesAutocomplete from 'react-places-autocomplete'
import colors from '../../styles/colors'

const styles = {
  fontFamily: 'inherit',
  fontSize: '16px',
  color: colors.userInput,
  width: '100%',
  boxSizing: 'border-box',
  display: 'block',
  paddingTop: '7px',
  paddingLeft: '6px',
  paddingRight: '6px',
  paddingBottom: '6px',
  borderRadius: '3px',
  border: `1px solid ${colors.outline}`
}

class AddressField extends Field {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
      geocodeResults: null,
      loading: false
    }
    this.update = address => this.setState({address})
  }

  renderInput() {
    const { input, label, placeholder } = this.props

    return (
      <PlacesAutocomplete
        value={this.state.address}
        placeholder={placeholder === undefined ? label : placeholder}
        onChange={this.update}
        onSelect={this.update}
        styles={{input: styles}}
        inputName={input.name}
      >
      </PlacesAutocomplete>
    )
  }
}

export default AddressField
