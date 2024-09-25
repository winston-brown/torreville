// components/CabinetDetails.tsx

import React, { useState } from 'react';
import CabinetDetails, { ImageDetail } from '@/app/components/cabinetdetails';
import American_Style_Base_Cabinet from './../../../../public/images/american-collections-details/American-Style-Base-Cabinet.png';
import U_0_625_plywood_box_compressor from './../../../../public/images/american_collection/U-0.625-plywood-box-compressor.jpg';
import _0_625_back_compressor from './../../../../public/images/american_collection/0.625-back-compressor.jpg';
import U_dovetail_drawer_box_compressor from './../../../../public/images/american_collection/U-dovetail-drawer-box-compressor.jpg';
import flush_frame_compressor from './../../../../public/images/american_collection/flush-frame-compressor.jpg';
import U_and_UF_0_shelf_compressor from './../../../../public/images/american_collection/U-and-UF-0-shelf-compressor.jpg';
import under_mount_softclose_track_hd from './../../../../public/images/american_collection/under-mount-softclose-track-hd.jpg';
import full_overlay_hd from './../../../../public/images/american_collection/full-overlay-hd.jpg';

const details: ImageDetail[] = [
    {
        src: U_0_625_plywood_box_compressor,
        alt: '5/8″ Premium Plywood Box',
        x: "10%", // Adjust the position accordingly
        y: "20%", // Adjust the position accordingly
        description: 'Our cabinet bodies for our American Collection are made with premium 5/8 inch thick plywood. This extra thickness helps make the body of our cabinets very sturdy so that they will last a long time.'
    },
    {
        src: _0_625_back_compressor,
        alt: 'Full 5/8″ Thick Plywood Back Panel',
        x: "20%", // Adjust the position accordingly
        y: "30%", // Adjust the position accordingly
        description: 'Our back panel is a full 5/8 inch thick plywood panel; the same strong material used for the rest of the body. The back panel is an area where many other companies will cut corners. It is common to find cabinet bodies with flimsy back panels made from 1/8 inch or 1/4 inch MDF that is reinforced with 3-inch strips of plywood.'
    },
    {
        src: U_dovetail_drawer_box_compressor,
        alt: 'Dovetail Drawer Box',
        x: "30%", // Adjust the position accordingly
        y: "40%", // Adjust the position accordingly
        description: 'All our drawer boxes for our American Collection are made with hardwood and they feature a dovetail construction to make them strong and long lasting. If you use wooden drawers, dovetails are to drawer boxes as anti-lock brakes are to new cars. If a company doesn’t have them they are cutting some serious corners and you should be concerned about the rest of their product.'
    },
    {
        src: flush_frame_compressor,
        alt: '3/4″ Flush Frame',
        x: "40%", // Adjust the position accordingly
        y: "50%", // Adjust the position accordingly
        description: 'Our frame and door are both made with real wood, no MDF or plywood. The frame is ¾ inch thick and it is flush with the inside of the body. This design gives you a clean flush transition from the frame to the body.'
    },
    {
        src: U_and_UF_0_shelf_compressor,
        alt: '3/4″ Premium Plywood Shelf',
        x: "50%", // Adjust the position accordingly
        y: "60%", // Adjust the position accordingly
        description: 'The shelves in all of our cabinets are made from 3/4 inch plywood. The removable shelves inside of cabinets is one more area where many companies cut corners to save themselves money by only offering a 1/2 inch thick shelf.'
    },
    {
        src: under_mount_softclose_track_hd,
        alt: 'Under Mount Soft-Close Track',
        x: "60%", // Adjust the position accordingly
        y: "70%", // Adjust the position accordingly
        description: 'Our under mount soft-close tracks insure that all our drawers will close softly and gently every time. Having the tracks in an under mount position is more visibly appealing and provides a strong place to mount the drawer.'
    },
    {
        src: full_overlay_hd,
        alt: 'Full Overlay',
        x: "70%", // Adjust the position accordingly
        y: "80%", // Adjust the position accordingly
        description: 'When we say full overlay, we mean it! Our cabinets are designed with precision and care to make our doors and drawer fronts line up and truly cover the cabinet and frame with only the absolute minimum amount of frame visible through the tiny gaps between doors.'
    }
];



const LuxeBlancaDetails: React.FC = () => {
    return (
      <div className="p-4">
        <h2 className="text-center mb-20 font-display text-yellow-400 lg:text-6xl text-4xl">American Style Base Cabinet</h2>
        <CabinetDetails mainImage={{ src: American_Style_Base_Cabinet, alt: 'American style base cabinet cutaway view' }} details={details} />
      </div>
    );
  }
  
  export default LuxeBlancaDetails;
