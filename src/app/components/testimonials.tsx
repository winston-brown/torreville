import React from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

// Define the Image type
type Image = {
    src: StaticImageData;
    alt: string;
    link?: string;
};

// Modify the Testimonial interface
interface Testimonial {
    name: string;
    business: string;
    message: string;
    image: Image;
}

// Sample static imports (adjust paths as needed)
import fam2 from './../../../public/images/testimonials/fam2.jpg';
import fam4 from './../../../public/images/testimonials/fam4.jpg';
import fam6 from './../../../public/images/testimonials/fam6.jpg';

const testimonialsData: Testimonial[] = [
    {
        name: 'Jacqueline Cantrell',
        business: 'Cantrell Construction',
        message: 'Torreville Cabinetry understands the needs of remodelers. Their cabinets are not just functional but also aesthetically pleasing, making our clients come back for more.',
        image: {
            src: fam2,
            alt: 'Client kitchen',
        },
    },
    {
        name: 'Leonard Hayes',
        business: 'Hayes Homes',
        message: "From traditional to contemporary designs, Torreville offers a range of cabinets that cater to all our clients' tastes. We couldn't ask for a better distributor.",
        image: {
            src: fam4,
            alt: 'Client kitchen',
        },
    },
    {
        name: 'Angela Martinez',
        business: 'Martinez Home Solutions',
        message: 'Their cabinets have been a staple in our projects, and we look forward to many more years of successful collaboration with Torreville Cabinetry. Truly, they are synonymous with excellence.',
        image: {
            src: fam6,
            alt: 'Client kitchen',
        },
    }
];

const Testimonials: React.FC = () => {
    return (
        <div id="Testimonials" className="flex flex-col items-center">
            <h2 id="title" className="text-center mb-20 font-display text-yellow-400 lg:text-6xl text-4xl">
                Testimonials
            </h2>

            {testimonialsData.map((testimonial, index) => (
                <div 
                key={index} 
                className={`flex flex-col md:flex-row mb-10 w-2/3 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className="relative w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0 lg:mb-0 lg:mr-4 h-48 lg:h-52">
                  <Image
                    src={testimonial.image.src}
                    alt={testimonial.image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-md border-b-8 border-yellow-400"
                  />
                </div>
                <div className="flex flex-col justify-center m-4 w-full md:w-2/3 lg:w-3/4">
                  <p className="text-xl text-slate-200 text-justify px-8 mb-2">&quot; {testimonial.message} &quot;</p>
                  <p className="text-yellow-600 text-right pr-8 font-bold">- {testimonial.name}</p>
                </div>
              </div>
            ))}
        </div>
    );
};

export default Testimonials;
