"use client"

import Image from 'next/image';
import Showcase from '@/app/components/showcase';
import { motion } from 'framer-motion';

// graphic imports
import heroImage from '../../public/images/luxe_blanca/luxe_blanca_4.jpeg';

import luxe_blanca_1 from '../../public/images/luxe_blanca/luxe_blanca_1.jpeg';
import luxe_madera from '../../public/images/luxe_madera/luxe_madera.jpeg';
import luxe_pure_white_gloss from '../../public/images/luxe_pure_white_gloss/luxe_pure_white_gloss_10.jpeg';
import luxe_shaker_white from '../../public/images/luxe_shaker_white/luxe_shaker_white.jpeg';
import Testimonials from './components/testimonials';




const images = [
  { src: luxe_blanca_1, alt: 'Blanca', link: '/cabinets/luxe_blanca', },
  { src: luxe_madera, alt: 'Madera', },
  { src: luxe_pure_white_gloss, alt: 'Pure White Gloss', },
  { src: luxe_shaker_white, alt: 'Shaker White', },
];

export default function Home() {
  const imageVariants = {
    hidden: { scale: 1.02, x: "0%", y: "3%" },
    visible: { scale: 1.15, x: "5%", y: "0%", transition: { duration: 4 } }
  };

  return (
    <div>
      <main>
        <section id="hero" className="h-[80vh] flex flex-col justify-center items-center relative">
          <div className="relative overflow-hidden w-full h-[75vh]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariants}
              className="absolute z-0 w-full h-full"
            >
              <Image
                layout="fill"
                objectFit="cover"
                alt="Image of a white kitchen"
                src={heroImage}
              />
            </motion.div>
          </div>
          {/* Overlay Text */}
          <div id="overlayText" className="absolute z-10 mt-32 right-0 bottom-[13%] w-2/3 text-center p-10 rounded-l-full">
            {/* Background */}
            <div className="absolute inset-0 bg-black/[0.45] rounded-l-full z-[-1] border-t-1 border-b-1 border-l-1 border-yellow-400"></div>

            {/* Text */}
            <p className="font-display text-yellow-400 lg:text-6xl text-4xl">Luxury by design.</p>
          </div>
        </section>
        <hr className="border-0 bg-yellow-400 h-[0.25em] w-3/4 mx-auto my-16" />
        <Showcase images={images} title="The Luxe Collection" brandName='Luxe' cols='4'></Showcase>
        <hr className="border-0 bg-yellow-400 h-[0.25em] w-3/4 mx-auto my-16" />
        <Testimonials></Testimonials>
      </main>
      <footer>
        <div>SUP!</div>
      </footer>
    </div>
  )
}


