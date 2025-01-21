import React from 'react'

export const RadioButton = ({ label, value, selectedValue, onChange }) => {
  return (
    <label className='inline-flex items-center gap-1 rounded border-2 border-neutral-primary px-3 py-0.5'>
      <input
        type='radio'
        name='cheese'
        value={value}
        className={`h-4 w-4 appearance-none rounded-full border-2 border-neutral-200 ${selectedValue == value ? 'bg-brand-primary' : ''}`}
        onChange={() => onChange(value)}
        checked={selectedValue === value}
      />
      {label}
    </label>
  )
}
