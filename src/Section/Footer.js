import React from 'react'

export default function Footer() {
  return (
    <div className="flex flex-col items-center w-full">
      <footer className="border-b-[2px] border-solid flex w-[90vw] mx-auto justify-between flex-wrap gap-10 p-10 text-base-content">
        {/* Logo and Image Section */}
        <div className="flex flex-col gap-[20px] items-start w-full sm:w-auto">
          <h1 className="text-4xl font-extrabold text-logo">HaedaraTube</h1>
          <img
            src={
              'https://i.pinimg.com/564x/d2/65/35/d265358d77f2482412c3e64ea2f32766.jpg'
            }
            className="rounded-[60%] w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]"
          />
        </div>

        {/* Services Section */}
        <nav className="flex flex-col items-start gap-[10px] w-full sm:w-auto">
          <h6 className="text-lg font-bold text-title">Services</h6>
          <a className="transition-all duration-300 ease-in-out cursor-pointer text-mainText hover:text-links">
            Branding
          </a>
          <a className="transition-all duration-300 ease-in-out cursor-pointer text-mainText hover:text-links">
            Design
          </a>
          <a className="transition-all duration-300 ease-in-out cursor-pointer text-mainText hover:text-links">
            Marketing
          </a>
          <a className="transition-all duration-300 ease-in-out cursor-pointer text-mainText hover:text-links">
            Advertisement
          </a>
        </nav>

        {/* Company Section */}
        <nav className="flex flex-col items-start gap-[10px] w-full sm:w-auto">
          <h6 className="text-lg font-bold text-title">Company</h6>
          <a className="transition-all duration-300 ease-in-out cursor-pointer text-mainText hover:text-links">
            About us
          </a>
          <a className="transition-all duration-300 ease-in-out cursor-pointer text-mainText hover:text-links">
            Contact
          </a>
          <a className="transition-all duration-300 ease-in-out cursor-pointer text-mainText hover:text-links">
            Jobs
          </a>
          <a className="transition-all duration-300 ease-in-out cursor-pointer text-mainText hover:text-links">
            Press kit
          </a>
        </nav>

        {/* Legal Section */}
        <nav className="flex flex-col items-start gap-[10px] w-full sm:w-auto">
          <h6 className="text-lg font-bold text-title">Legal</h6>
          <a className="transition-all duration-300 ease-in-out cursor-pointer text-mainText hover:text-links">
            Terms of use
          </a>
          <a className="transition-all duration-300 ease-in-out cursor-pointer text-mainText hover:text-links">
            Privacy policy
          </a>
          <a className="transition-all duration-300 ease-in-out cursor-pointer text-mainText hover:text-links">
            Cookie policy
          </a>
        </nav>

        {/* Newsletter Section */}
        <form className="flex flex-col items-start gap-[20px] w-full sm:w-auto">
          <h6 className="text-lg font-bold text-title">Newsletter</h6>
          <fieldset className="flex flex-col items-start gap-[20px] w-full">
            <label className="label">
              <span className="label-text text-logo">Enter your email address</span>
            </label>
            <div className="flex items-center gap-[10px] w-full">
              <input
                type="text"
                placeholder="username@site.com"
                className="w-full border-none outline-none focus-visible:outline-none ring-0 bg-mainBackground text-mainText text-[16px] sm:text-[20px] rounded-[10px] p-2"
              />
              <button className="w-[80px] sm:w-[100px] h-[40px] sm:h-[50px] bg-button transition-all duration-300 ease-in-out cursor-pointer hover:bg-hoverButton rounded-[20px]">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>

      <footer className="p-4 py-[20px] h-[80px] text-center text-mainText">
        <aside>
          <p className="text-center">
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
}
