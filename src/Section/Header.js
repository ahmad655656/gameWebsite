import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const products = [
  {
    id: 0,
    name: "Games",
    description: "Get a better understanding of your traffic",
    href: "/games",
    icon: ChartPieIcon,
  },
  {
    id: 20,
    name: "Devlopers",
    description: "Speak directly to your customers",
    href: "/devlopers",
    icon: CursorArrowRaysIcon,
  },
  {
    id: 10,
    name: "Platforms",
    description: "Your customers’ data will be safe and secure",
    href: "/platforms",
    icon: FingerPrintIcon,
  },
  {
    id: 17,
    name: "Geners",
    description: "Connect with third-party tools",
    href: "/genres",
    icon: SquaresPlusIcon,
  },
  {
    id: 22,
    name: "Publishers",
    description: "Build strategic funnels that will convert",
    href: "/publishers",
    icon: ArrowPathIcon,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="fixed w-[100vw] z-[2] top-0 h-[100px] bg-navBar">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 mx-auto text-links max-w-7xl lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className=" flex-row items-center flex gap-[5px] -m-1.5 p-1.5">
            <img src={'https://i.pinimg.com/564x/d2/65/35/d265358d77f2482412c3e64ea2f32766.jpg'} className='rounded-[50%] w-[50px] h-[50px] '></img>
            <span className="text-3xl font-black text-logo">HAEDARA<span className="text-mainText">TUBE</span></span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="w-6 h-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center text-sm font-semibold leading-6 transition-all duration-700 ease-in-out text-links etxt hover:text-hoverLink gap-x-1">
              Game_Pages
              <ChevronDownIcon
                aria-hidden="true"
                className="flex-none w-5 h-5"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute bg-mainBackground -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="relative flex items-center p-4 text-sm leading-6 rounded-lg group gap-x-6 hover:bg-gray-50"
                  >
                    <div className="flex items-center justify-center flex-none rounded-lg h-11 w-11 bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="w-6 h-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        to={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
            </PopoverPanel>
          </Popover>

          <Link to="/about" className="text-sm font-semibold leading-6 transition-all duration-700 ease-in-out text-links etxt hover:text-hoverLink">
            About
          </Link>
          <Link to="/contact" className="text-sm font-semibold leading-6 transition-all duration-700 ease-in-out text-links etxt hover:text-hoverLink">
            Contact
          </Link>
          <Link to="/fqs" className="text-sm font-semibold leading-6 transition-all duration-700 ease-in-out text-links etxt hover:text-hoverLink">
            FQS
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="/signin" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10 " />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto text-title bg-navBar sm:max-w-sm">
          <div className="flex items-center justify-between text-mainText">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="w-auto h-8"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="w-6 h-6" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6">
              <div className="py-6 space-y-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-[25px] font-semibold leading-7">
                    Product
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-6 space-y-6">
                    {products.map((item) => (
                      <Link
                        key={item.id}
                        as="a"
                        to={item.href}
                        className="block py-2 pl-6 pr-3 text-2xl font-semibold leading-7 rounded-lg"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  to="/about"
                  className="block text-[25px] px-3 py-2 -mx-3 text-[20px] font-semibold leading-7 rounded-lg"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block text-[25px] px-3 py-2 -mx-3 text-[20px] font-semibold leading-7 rounded-lg"
                >
                  Contact
                </Link>
                <Link
                  to="/fqs"
                  className="block text-[25px] px-3 py-2 -mx-3 text-[20px] font-semibold leading-7 rounded-lg"
                >
                  FQS
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to="/signin"
                  className="-mx-3 text-[25px] block rounded-lg px-3 py-2.5 text-[20px] font-semibold leading-7"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}