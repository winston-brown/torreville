import React from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { Link } from "@nextui-org/react";
import { Card, CardFooter } from '@nextui-org/react';

type Image = {
    src: StaticImageData;
    alt: string;
    link?: string;
};

type ShowCaseProps = {
    images: Image[];
    title: string;
    brandName: string;
    cols?: string;
    className?: string;
};


const ShowCase: React.FC<ShowCaseProps> = ({ images, title, brandName, className, cols = '4' }: { images: Image[]; title: string; brandName: string; className?: string; cols?: string; }) => {
    const gridClass = cols === '4' ? 'sm:grid-cols-4' : `sm:grid-cols-${cols}`;

    return (
        <section className={`flex flex-col items-center ${className}`}>
            <h2 id="title" className="text-center mb-20 font-display text-yellow-400 lg:text-6xl text-4xl">{title}</h2>
            <div className={`grid ${gridClass} grid-cols-1 gap-6 mx-20 w-4/5`}>
                {images != null ? images.map((image, index) => (
                    <Card key={index} isFooterBlurred className="mb-6 sm:mb-0 h-[300px] rounded-t-md border-b-8 border-yellow-400 rounded-b-none">
                        <Image
                            alt={image.alt}
                            className="z-0 w-full h-full -translate-y-6 object-cover hover:scale-105 transition-all duration-500"
                            src={image.src}
                        />
                        <CardFooter className="absolute bg-gradient-to-t from-zinc-900/60 from-50% to-zinc-100/0 bottom-0 border-t-1 border-yellow-400 z-10 justify-between">
                            <Link href={`${image.link}`} className='flex-col items-start'>
                                <p className="text-md text-yellow-600 uppercase font-bold">{brandName}</p>
                                <h4 className="text-yellow-400 font-medium text-2xl">{image.alt}</h4>
                            </Link>
                        </CardFooter>
                    </Card>
                )) : <div></div>}
            </div>
        </section>
    );
};

export default ShowCase;
