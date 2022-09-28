import React from 'react'
import PropTypes from 'prop-types'

const Button = () => {

    const url = '/eventpage';

  return (
    <button 
      onClick={() => window.location.replace(url)} 
      className='btn'>
        <h1 className='btn-text'>
            🎉 Create my event
        </h1>
    </button>
  )
}

export default Button