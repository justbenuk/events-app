import React from 'react'
import Image from 'next/image'

export default function EventItem( { event } ) {
    return (
        <div className='border-2 shadow-xl'>
            <div className='grid gris-cols-1 md:grid-cols-2 gap-4'>
                <img src={ event.image } className='h-[200px] w-full' />
                <div className='flex flex-col justify-between'>
                    <div className='pt-4 text-center'>
                        <h1 className='text-xl font-bold uppercase'>{ event.title }</h1>
                        <p className='text-xs'>With { event.performers }</p>
                    </div>
                    <div>
                        <p className='text-center'>{ event.content }</p>
                    </div>
                    <div className='flex flex-row justify-between'>
                        <p>{ event.date } at { event.time }</p>
                        <p className='px-2'>£ { event.price }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
