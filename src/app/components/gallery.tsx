'use client'

import { Card } from '@nextui-org/react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Lightbox, { Slide, SlideImage } from 'yet-another-react-lightbox';
import not_found from './../../../public/images/not_found.svg';
import NextJsImage from './NextJsImage';
import "yet-another-react-lightbox/styles.css";


type Image = {
    src: StaticImageData;
    alt: string;
};

type GalleryProps = {
    images: Image[];
    title: string;
    className?: string;
}

const notFound = [
    not_found,
];

const Gallery: React.FC<GalleryProps> = ({ images, title = 'Title', className = '' }: { images: Image[]; title: string; className?: string; }) => {
    const [open, setOpen] = React.useState(false);
    const [index, setIndex] = React.useState(0);
    // Map images[] to slides[]
    const slides: Slide[] = images != null ? images.map((image, index) => ( image.src )) : notFound;
    const toggleOpen = (state: boolean) => () => setOpen(state);

    const toggleLightbox = (index: number) => () => {
        setIndex(index);
        setOpen(true);
    }

    const updateIndex = ({ index: current }: { index: number }) =>
        setIndex(current);
    return (
        <section id="gallery" className={`m-t-4 flex flex-col justify-center ${className} w-full h-full`}>
            <h2 id="title" className="text-center m-10 font-display text-yellow-400 lg:text-6xl text-4xl">{title}</h2>
            <div className='gap-3 px-3 sm:px-0 flex flex-row flex-wrap justify-center w-full h-full'>
                {images != null ? images.map((image, index) => (
                    <div key={index} className="basis-full sm:basis-2/4 md:basis-1/4 ">
                        <Image
                                alt={image.alt}
                                className="z-0 rounded object-cover hover:scale-105 transition-all duration-500"
                                src={image.src}
                                onClick={toggleLightbox(index)}
                            />
                    </div>

                )) : <div></div>}
            </div>
            {/* Open lightbox with index
                close
            */}
            <Lightbox
                open={open}
                close={toggleOpen(false)}
                index={index}
                slides={slides}   
                render={{ slide: NextJsImage }}
                on={{ view: updateIndex }}
                animation={{ fade: 0 }}
                controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
            />
        </section>
    )
}

export default Gallery;
