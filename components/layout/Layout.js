//core imports
import React, { Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

//components
import Header from '../header/Header'
import Footer from '../footer/Footer'

export default function Layout( { children, title, description } ) {
    const router = useRouter()
    return (
        <Fragment>
            <Head>
                <title>{ title || 'Events Portal' }</title>
                <meta name="description" content={ description || 'A simple NectJS Events Portal' } />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className=''>
                <Header />
                <main className='h-full'>{ children }</main>
                <Footer />
            </div>
        </Fragment>
    )
}
