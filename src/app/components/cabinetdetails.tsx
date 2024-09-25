import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Lightbox, { Slide } from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

export type ImageDetail = {
    src: StaticImageData;
    alt: string;
    x: string; // x-coordinate for the tooltip on the main image
    y: string; // y-coordinate for the tooltip on the main image
    description: string; // description for the tooltip
};

type Image = {
    src: StaticImageData;
    alt: string;
};

type CabinetDetailsProps = {
    mainImage: Image;
    details: ImageDetail[];
};

const CabinetDetails: React.FC<CabinetDetailsProps> = ({ mainImage, details }: { mainImage: Image, details: ImageDetail[]}) => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const slides: Slide[] = details.map(detail => detail.src);

    const toggleOpen = (state: boolean) => () => setOpen(state);

    const openLightbox = (index: number) => () => {
        setIndex(index);
        setOpen(true);
    }

    const updateIndex = ({ index: current }: { index: number }) => setIndex(current);

    return (
        <div className="relative">
            <Image src={mainImage.src} alt="Main Cabinet Image" />
            {details.map((detail, idx) => (
                <div
                    key={idx}
                    className="absolute top-0 left-0 transform cursor-pointer"
                    style={{ top: detail.y, left: detail.x }}
                    onClick={openLightbox(idx)}
                >
                    <span className="bg-red-500 rounded-full w-3 h-3"></span>
                    <span className="text-white text-xs">{detail.description}</span>
                </div>
            ))}
            {/* <Lightbox
                open={open}
                close={toggleOpen(false)}
                index={index}
                slides={slides}
                on={{ view: updateIndex }}
                animation={{ fade: 0 }}
                controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
            /> */}
        </div>
    );
}

export default CabinetDetails;
