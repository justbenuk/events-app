import React from 'react'

// conponents
import Layout from '@/components/layout/Layout'
import EventItem from '@/components/event/EventItem'

// data
import { API_URL } from '@/config/config'

export default function EventsPage( { events } ) {

  return (
    <Layout title='All Events'>
      <div className='container mx-auto mt-10'>
        {/* events */ }
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          { events.map( ( item ) =>
            <EventItem event={ item } key={ item.id } />
          ) }
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {

  const res = await fetch( `${API_URL}/api/events` )

  //return data
  const data = await res.json()
  return {
    props: { events: data.events }
  }
}
