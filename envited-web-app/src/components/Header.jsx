import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = () => {

    return (
        <div className='header'>
            <img className='landing-page-image' src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220928T085815Z&X-Amz-Expires=86400&X-Amz-Signature=13ad91bf39fa80f8bec6ad3c8aeb59776c61752f088f3bf113f4e4a1644e3848&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject'/>

            <h1 className='imagine-if-header'>
                Imagine if
                <br />
                <br />
                had events
            </h1>

            <h1 className='snapchat-header'>
                Snapchat
            </h1>

            <h3 className='landing-page-h3'>
                Easily host and share events with your friends across any social media.
            </h3>

            <Button/>
        </div>
    )
}

export default Header