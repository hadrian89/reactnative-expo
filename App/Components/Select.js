import React from 'react'
import { Picker } from 'native-base';
import styles from '../style'

export default ({ selectedValue, options, onValueChange, ...props }) => (

  <Picker
    {...props}
    selectedValue={selectedValue}
    style={{ height: 50, width: 100 }}
    style={[styles.select]}
    placeholderTextColor="#a0a0a0"
    onValueChange={value => onValueChange(value)}>
    <Picker.Item key={-1} value={0} label="Select Card" />
    {options.map((s, i) => {
      return <Picker.Item key={i} value={s} label={s} />
    })}
  </Picker>
)
