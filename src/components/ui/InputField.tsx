import React from 'react'

export const InputField = ({ label, value, onChange, placeholderText }) => {
  return (
    <>
      <label htmlFor={value} className='text-lg font-semibold'>
        {label}
      </label>
      <input
        type='text'
        value={value}
        onChange={onChange}
        placeholder={placeholderText}
        className='w-full rounded-lg border-2 border-neutral-primary bg-neutral-primary p-1.5 text-sm text-neutral-secondary placeholder:text-neutral-secondary'
      />
    </>
  )
}
