'use client'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import AcmeLogo from "./AcmeLogo";
import React from "react";

const SiteHeader: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Cabinets",
    "Contact Us",
    "About Us",
  ];
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll={true}
      className={`border-b-8 border-yellow-400 ${className}`}
      classNames={{
        base: "bg-black",
        brand: "text-white",
      }}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <AcmeLogo color="#FACC14" />
            <p className="text-yellow-400 font-bold font-display">Torreville Cabinetry</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Link color="primary" href="#" aria-current="page">
                Cabinets
              </Link>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Cabinets gallery"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem>
              <Link color="primary" href="/cabinets/luxe_blanca/">
                Blanca
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link color="primary" href="/cabinets/luxe_blanca/">
                Madera
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link color="primary" href="/cabinets/luxe_blanca/">
                Pure White Gloss
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link color="primary" href="/cabinets/luxe_blanca/">
                Shaker White
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link color="primary" href="/contact-us" aria-current="page">
            Contact Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="primary" href="#">
            About Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <Link href="/contact-us">
          <Button size="sm" color="primary" className="ml-4 sm:ml-0">Get a Quote</Button>
        </Link>
    </Navbar>
  )
}

export default SiteHeader;
