
import Layout from '@/components/layout/Layout'

//components
import HomeCarousel from '@/components/carousel/HomeCarousel'
import EventItem from '@/components/event/EventItem'

// data
import { API_URL } from '@/config/config'

export default function Home( { events } ) {
  return (
    <Layout>
      <div className='h-full'>
        <HomeCarousel events={ events } />
        <div className='mt-4 container mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            { events.map( ( event ) => (
              <EventItem key={ event.id } event={ event } />
            ) ) }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {

  // get the events
  const res = await fetch( `${API_URL}/api/events` )
  // return the events
  const data = await res.json()

  return {
    props: { events: data.events.slice( 0, 4 ) }
  }
}
