"use client";


import { useEffect, useState } from "react";

import Link from "next/link";

import Image from "next/image";

import {

  FiMenu,

  FiX,

  FiCalendar,

  FiUsers,

  FiAward,

  FiInfo,

  FiArrowRight,

} from "react-icons/fi";

import { AnimatePresence, motion } from "framer-motion";



import { DelegateForm } from "@/components/sections/DelegateForm";

import { SponsorForm } from "@/components/sections/SponsorForm";

import { FormModal } from "@/components/common/FormModal";


const navItems = [

  { label: "Home", href: "/#home", icon: null },

  { label: "About", href: "/#about", icon: FiInfo },

  { label: "Speakers", href: "/#speakers", icon: FiUsers },

  { label: "Partners", href: "/#partners", icon: FiUsers },

  { label: "Past Events", href: "/#past-events", icon: FiCalendar },

  { label: "Awards", href: "/#awards", icon: FiAward },

];



export function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [showDelegateForm, setShowDelegateForm] = useState(false);

  const [showSponsorForm, setShowSponsorForm] = useState(false);



  // Handle registration links opened directly through the URL.

  useEffect(() => {

    const checkHash = () => {

      const hash = window.location.hash;



      if (hash.startsWith("#delegateenquiry")) {

        setShowDelegateForm(true);

        setShowSponsorForm(false);

      } else if (hash.startsWith("#sponsorenquiry")) {

        setShowSponsorForm(true);

        setShowDelegateForm(false);

      }

    };



    checkHash();

    window.addEventListener("hashchange", checkHash);



    return () => {

      window.removeEventListener("hashchange", checkHash);

    };

  }, []);



  // Keep the header subtle while scrolling.

  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(window.scrollY > 20);

    };



    handleScroll();



    window.addEventListener("scroll", handleScroll, {

      passive: true,

    });



    return () => {

      window.removeEventListener("scroll", handleScroll);

    };

  }, []);



  // Lock page scrolling while the mobile menu is open.

  useEffect(() => {

    if (!mobileMenuOpen) return;



    const handleEscape = (event: KeyboardEvent) => {

      if (event.key === "Escape") {

        setMobileMenuOpen(false);

      }

    };



    window.addEventListener("keydown", handleEscape);



    return () => {

      window.removeEventListener("keydown", handleEscape);

    };

  }, [mobileMenuOpen]);



  const handleNavClick = (

    e: React.MouseEvent<HTMLAnchorElement>,

    href: string

  ) => {

    e.preventDefault();

    setMobileMenuOpen(false);



    const hash = href.split("#")[1];



    if (!hash) {

      window.location.href = href;

      return;

    }



    const element = document.getElementById(hash);



    // Navigate to the home page if the target isn't on this page.

    if (!element) {

      window.location.href = href;

      return;

    }



    const headerOffset = 100;

    const elementPosition =

      element.getBoundingClientRect().top + window.scrollY;



    window.history.pushState(

      null,

      "",

      `${window.location.pathname}${window.location.search}#${hash}`

    );



    window.scrollTo({

      top: Math.max(0, elementPosition - headerOffset),

      behavior: "smooth",

    });

  };



  const openDelegateForm = () => {

    window.history.pushState(

      null,

      "",

      `${window.location.pathname}${window.location.search}#delegateenquiry`

    );



    setMobileMenuOpen(false);

    setShowSponsorForm(false);

    setShowDelegateForm(true);

  };



  const openSponsorForm = () => {

    window.history.pushState(

      null,

      "",

      `${window.location.pathname}${window.location.search}#sponsorenquiry`

    );



    setMobileMenuOpen(false);

    setShowDelegateForm(false);

    setShowSponsorForm(true);

  };



  const closeForms = () => {

    window.history.pushState(

      null,

      "",

      window.location.pathname + window.location.search

    );



    setShowDelegateForm(false);

    setShowSponsorForm(false);

  };



  return (

    <>

      {/* Editorial navigation */}

      <header

        className={`sticky top-0 z-50 w-full border-b border-[#DCE6EF] bg-[#F5F8FB]/95 backdrop-blur-xl transition-shadow duration-300 ${

          isScrolled ? "shadow-[0_4px_20px_rgba(16,39,70,0.08)]" : ""

        }`}

      >

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

          <div className="flex min-h-[76px] items-center justify-between gap-5 lg:min-h-[88px]">

            {/* Logo */}

            <Link

              href="/#home"

              onClick={(e) => handleNavClick(e, "/#home")}

              aria-label="CIO Tech Leadership home"

              className="flex shrink-0 items-center"

            >

              <Image

                src="/logo.png"

                alt="CIO Tech Leadership"

                width={220}

                height={60}

                priority

                className="h-15 w-auto object-contain sm:h-16"

              />

            </Link>



            {/* Desktop navigation */}

            <nav

              aria-label="Main navigation"

              className="hidden items-center gap-1 lg:flex"

            >

              {navItems.map((item) => (

                <Link

                  key={item.href}

                  href={item.href}

                  onClick={(e) => handleNavClick(e, item.href)}

                  className="group relative px-3 py-3 text-[13px] font-medium text-[#52657A] transition-colors duration-200 hover:text-[#102746] xl:px-3.5"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-px origin-left scale-x-0 bg-[#0D9488] transition-transform duration-300 group-hover:scale-x-100" />

                </Link>

              ))}

            </nav>



            {/* Desktop calls to action */}

            <div className="hidden shrink-0 items-center gap-3 lg:flex">

              <button

                type="button"

                onClick={openSponsorForm}

                className="inline-flex items-center gap-2 px-2 py-3 text-[12px] font-medium text-[#52657A] transition-colors hover:text-[#0D9488] xl:px-3"

              >

                Partner with us

              </button>



              <button

                type="button"

                onClick={openDelegateForm}

                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#102746] px-4 py-3 text-[12px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0B2E68] hover:shadow-md xl:px-5"

              >

                Request a pass

                <FiArrowRight size={15} />

              </button>

            </div>



            {/* Mobile controls */}

            <div className="flex items-center gap-2 lg:hidden">

              <button

                type="button"

                onClick={openDelegateForm}

                className="hidden rounded-lg bg-[#102746] px-4 py-3 text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#0B2E68] sm:inline-flex"

              >

                Request a pass

              </button>



              <button

                type="button"

                onClick={() => setMobileMenuOpen((open) => !open)}

                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}

                aria-expanded={mobileMenuOpen}

                aria-controls="mobile-navigation"

                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#C7D6E5] bg-white/70 text-[#102746] transition-colors hover:bg-white"

              >

                {mobileMenuOpen ? (

                  <FiX size={21} />

                ) : (

                  <FiMenu size={21} />

                )}

              </button>

            </div>

          </div>

        </div>



        {/* Mobile navigation */}

        <AnimatePresence initial={false}>

          {mobileMenuOpen && (

            <motion.div

              id="mobile-navigation"

              initial={{ height: 0, opacity: 0 }}

              animate={{ height: "auto", opacity: 1 }}

              exit={{ height: 0, opacity: 0 }}

              transition={{ duration: 0.25, ease: "easeInOut" }}

              className="overflow-hidden border-t border-[#DCE6EF] bg-[#F5F8FB] lg:hidden"

            >

              <nav

                aria-label="Mobile navigation"

                className="mx-auto max-w-7xl px-5 pb-5 pt-3 sm:px-8"

              >

                {navItems.map((item, index) => {

                  const Icon = item.icon;



                  return (

                    <motion.div

                      key={item.href}

                      initial={{ opacity: 0, y: 5 }}

                      animate={{ opacity: 1, y: 0 }}

                      transition={{ delay: index * 0.035 }}

                    >

                      <Link

                        href={item.href}

                        onClick={(e) => handleNavClick(e, item.href)}

                        className="flex items-center justify-between border-b border-[#DCE6EF] py-4 text-sm text-[#102746] transition-colors hover:text-[#0D9488]"

                      >

                        <span className="flex items-center gap-3">

                          {Icon && (

                            <Icon

                              size={16}

                              className="text-[#0D9488]"

                            />

                          )}



                          <span>{item.label}</span>

                        </span>



                        <FiArrowRight

                          size={15}

                          className="text-[#0D9488]"

                        />

                      </Link>

                    </motion.div>

                  );

                })}



                {/* Mobile action buttons */}

                <div className="grid gap-3 pt-5 sm:grid-cols-2">

                  <button

                    type="button"

                    onClick={openSponsorForm}

                    className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#C7D6E5] px-4 py-3 text-sm font-semibold text-[#102746] transition-colors hover:bg-white"

                  >

                    Partner with us

                    <FiArrowRight size={15} />

                  </button>



                  <button

                    type="button"

                    onClick={openDelegateForm}

                    className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#102746] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0B2E68] hover:shadow-md"

                  >

                    Request your executive pass

                    <FiArrowRight size={15} />

                  </button>

                </div>



                {/* Event details */}

                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#52657A]">

                  <span className="inline-flex items-center gap-1.5">

                    <FiCalendar size={13} />

                    12 November 2026

                  </span>



                  <span className="text-[#B7C7D8]">/</span>



                  <span>New Delhi, India</span>

                </div>

              </nav>

            </motion.div>

          )}

        </AnimatePresence>

      </header>



      {/* Delegate registration modal */}

      <FormModal

        open={showDelegateForm}

        onClose={closeForms}

        title="Request Your Executive Pass"

      >

        <DelegateForm />

      </FormModal>



      {/* Partnership enquiry modal */}

      <FormModal

        open={showSponsorForm}

        onClose={closeForms}

        title="Partner with CIO Tech"

      >

        <SponsorForm />

      </FormModal>

    </>

  );

}
