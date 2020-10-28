import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setcategories }) => {
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (dato) => {
    setInputValue(dato.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim().length > 2) {
      setcategories(inputValue)
      setInputValue('')
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Add category</h2>
        <input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
        ></input>
      </form>
    </>
  )
}

AddCategory.propTypes = {
  setcategories: PropTypes.func.isRequired,
}
