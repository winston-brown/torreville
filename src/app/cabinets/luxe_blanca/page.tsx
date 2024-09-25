'use client'

import Gallery from '@/app/components/gallery';
import luxe_blanca_1 from './../../../../public/images/luxe_blanca/luxe_blanca_1.jpeg';
import luxe_blanca_2 from './../../../../public/images/luxe_blanca/luxe_blanca_2.jpeg';
import luxe_blanca_3 from './../../../../public/images/luxe_blanca/luxe_blanca_3.jpeg';
import luxe_blanca_4 from './../../../../public/images/luxe_blanca/luxe_blanca_4.jpeg';
import luxe_blanca_5 from './../../../../public/images/luxe_blanca/luxe_blanca_5.jpeg';
import luxe_blanca_6 from './../../../../public/images/luxe_blanca/luxe_blanca_6.jpeg';
import luxe_blanca_7 from './../../../../public/images/luxe_blanca/luxe_blanca_7.jpeg';
import SpecTable from '@/app/components/specstable';

const tableData = [
    { key: "Door Style", value: "Flat Panel" },
    { key: "Frame Style", value: "European Frameless" },
    { key: "Door", value: '3/4" MDF with Textured Melamine' },
    { key: "Overlay", value: "Full Overlay with Butt Doors" },
    { key: "Cabinet Interior Finish", value: "Natural Maple Finish" },
    { key: "Exposed Side Skin Panel", value: "Required" },
    { key: "Cabinet Construction", value: "Cam-Lock Construction" },
    { key: "Side", value: '3/4" A-Grade Plywood w/ veneer' },
    { key: "Wall Top & Bottom", value: '3/4" A-Grade Plywood w/ veneer' },
    { key: "Base Bottom", value: '3/4" A-Grade Plywood w/ veneer' },
    { key: "Back Panel", value: '3/4" A-Grade Plywood w/ veneer' },
    { key: "Shelves", value: '3/4" A-Grade Plywood w/ veneer' },
    { key: "Wall Shelf Depth", value: '9-1/2" Full Depth' },
    { key: "Base Shelf Depth", value: '21-3/4" Full Depth' },
    { key: "Drawer Box", value: "Stainless Steel Drawer Slides Soft Close" },
    { key: "Drawer Bottom", value: '3/8" Plywood' },
    { key: "Drawer Construction", value: "Screwed Construction" },
    { key: "Drawer Slides", value: "Stainless Steel Drawer Slides Soft Close" },
    { key: "Door Hinges", value: "Concealed Adjustable Soft Close" },
    { key: "Center Stile", value: "No Center Stile on All Cabinets" },
    { key: "Single Door Cabinet Opening", value: "Can Be Opened on Both Sides" },
    { key: "Cabinet Handles & Knobs", value: "Required for All Cabinets" },
    { key: "CARB2 Compliant", value: "Yes" },
    { key: "Warranty", value: "2 Years" }
];

const tableColumns = [
    { column: 'Feature' },
    { column: 'Specification' },
];

const images = [
    { src: luxe_blanca_1, alt: 'Luxe Blanca 1', },
    { src: luxe_blanca_2, alt: 'Luxe Blanca 2', },
    { src: luxe_blanca_3, alt: 'Luxe Blanca 3', },
    { src: luxe_blanca_4, alt: 'Luxe Blanca 4', },
    { src: luxe_blanca_5, alt: 'Luxe Blanca 5', },
    { src: luxe_blanca_6, alt: 'Luxe Blanca 6', },
    { src: luxe_blanca_7, alt: 'Luxe Blanca 7', },
];

const LuxeBlanaGallery = () => {
    return (
        <div className='w-screen h-full flex flex-col items-center'>
            <Gallery title="Luxe Blanca" images={images}></Gallery>
            <hr className="border-0 bg-yellow-400 h-[0.25em] w-3/4 mx-auto my-16" />
            <div className="flex flex-row">
                <div className='flex-1'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis
                    </p>
                </div>
                <div className='flex-1'>
                    <SpecTable tableData={tableData} tableColumns={tableColumns}></SpecTable>
                </div>
            </div>
            {/* <div>
                <LuxeBlanaGallery></LuxeBlanaGallery>
            </div> */}
        </div>

    )
}

export default LuxeBlanaGallery;
