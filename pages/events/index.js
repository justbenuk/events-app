import React from 'react'

// conponents
import Layout from '@/components/layout/Layout'
import EventItem from '@/components/event/EventItem'

export default function EventsPage( { events } ) {
  console.log( events )
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

  const res = await fetch( 'http://localhost:3000/api/events' )

  //return data
  const data = await res.json()
  return {
    props: { events: data.events }
  }
}
