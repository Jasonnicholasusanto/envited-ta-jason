import React from 'react'
import PropTypes from 'prop-types'

const EventHeader = ({title, host}) => {
  return (
    <div>
        <img src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220928T085818Z&X-Amz-Expires=86400&X-Amz-Signature=5b54b01e7c10da72551b210f9e5d198421c24017e322306d5e77bd6f34191ec8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject' className='event-page-image'/>

        <h1 className='event-page-header'>
            {title}
        </h1>

        <h5 className='hosted-by-header'>
            Hosted by {host}
        </h5>
    </div>
  )
}

EventHeader.defaultProps = {
    title: "Birthday Bash",
    host: "Elysia",
}

export default EventHeader