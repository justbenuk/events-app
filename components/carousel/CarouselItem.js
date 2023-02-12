import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; //

export default function CarouselItem( { event } ) {
    return (
        <div className='relative'>
            <img src={ event.image } className='h-[600px]' />
            <div className='absolute top-0 left-0 h-full w-full bg-black/75'>
                <div className='flex flex-col items-center justify-center h-full'>
                    <h1 className='text-white text-5xl mb-3'>{ event.title }</h1>
                    <p className='text-white text-2xl'>With { event.performers }</p>
                </div>
            </div>

        </div>
    )
}
