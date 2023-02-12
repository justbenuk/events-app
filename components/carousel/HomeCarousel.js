import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

//components
import CarouselItem from './CarouselItem';
export default function HomeCarousel( { events } ) {
    return (
        <Carousel showThumbs={ false } autoPlay infiniteLoop showStatus={ false }>
            { events.map( ( event ) => (
                <CarouselItem key={ event.id } event={ event } />
            ) ) }
        </Carousel>
    )
}
