import React from 'react'
import EventHeader from '../components/EventHeader';
import EventDetails from '../components/EventDetails';

function LandingPage() {

    return (
        <div className='event-page-container'>
            <EventHeader />
            <EventDetails />
        </div>
    );
}

export default LandingPage;