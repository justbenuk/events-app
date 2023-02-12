// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import events from '@/pages/api/data.json'

export default function handler( req, res ) {
    res.status( 200 ).json( { events } )
}
