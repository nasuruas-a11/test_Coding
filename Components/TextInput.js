import React from 'react'

const TextInput = ({ name = '', value = '',handleChange,      type = "text"
}) => {
  return (
    <div>
      <input 
       name={name}
       type={type}
       value={value}
       onChange={handleChange}
      />
    </div>
  )
}

export default TextInput
