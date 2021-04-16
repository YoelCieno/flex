import React, { ChangeEvent, ChangeEventHandler, useState } from 'react'

import classes from './flex-form.module.scss'

const FlexForm = ({
  onValueChange,
  values,
}: {
  onValueChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
  values: any
}) => {
  const formValues = [
    { property: 'display', values: ['flex', 'block'] },
    {
      property: 'justifyContent',
      values: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
    },
    {
      property: 'alignItems',
      values: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
    },
    { property: 'flexDirection', values: ['row', 'column'] },
  ]

  const items = [...new Array(10)]

  const capitalize = (value: string) => {
    return value
      .split('-')
      .map(word => word[0].toUpperCase() + word.substring(1))
      .join(' ')
  }

  return (
    <form className={classes.form}>
      {formValues.map((item, i) => (
        <div key={i}>
          <p>{capitalize(item.property)}</p>
          {item.values.map((input, i) => (
            <div key={i}>
              <input
                type='radio'
                name={item.property}
                value={input}
                onChange={onValueChange}
                checked={input === values[item.property]}
              />
              <span>{capitalize(input)}</span>
            </div>
          ))}
        </div>
      ))}
      <div>
        <p>Items</p>
        <select name='items' onChange={onValueChange} value={values.items}>
          {items.map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
    </form>
  )
}

export default FlexForm
