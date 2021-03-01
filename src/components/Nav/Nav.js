import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';

import useCart from 'hooks/use-cart';

const Nav = () => {

  const { subtotal } = useCart();
  const [isOpen, setisOpen] = useState(false);

    function handleClick(){
        setisOpen(!isOpen);
    }

  return (
    <nav className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* -- Mobile menu button */}
                        <button onClick={handleClick} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        {/*-- Icon when menu is closed.
                        /*--
                            Heroicon name: menu

                            Menu open: "hidden", Menu closed: "block"
                            */}
                        <svg className={`h-6 w-6 ${isOpen ? "hidden" : "block" }`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokedLineJoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        {/* Icon when menu open */}
                        <svg className={`h-6 w-6 ${isOpen ? "block" : "hidden" }`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokedLineJoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <a href="/" title="Home">
                            <img className="block lg:hidden h-12 w-auto" src="../images/kalani-flower.svg" alt="Kalani Collective" />
                            </a>
                            <a href="/">
                            <img className="hidden lg:block h-12 w-auto" src="../images/kalani-logo.svg" alt="Kalani Collective" />
                            </a>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"*/}
                            <Link href="/about">
                            <a className="border-transparent text-mongoose-600 hover:border-rose-bud-600 hover:text-mongoose-800 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                About
                            </a>
                            </Link>
                            <Link href="/products">
                            <a className="border-transparent text-mongoose-600 hover:border-rose-bud-600 hover:text-mongoose-800 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Products
                            </a>
                            </Link>
                            <Link href="/contact">
                            <a className="border-transparent text-mongoose-600 hover:border-rose-bud-600 hover:text-mongoose-800 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Contact
                            </a>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* Profile dropdown */}
                        <div className="ml-3 relative">
                        <div className="rounded-md shadow">
                        <Link href="/cart">
                            <a className="inline-flex items-center px-1 py-1 lg:px-4 lg:py-2 border border-transparent text-sm lg:font-medium lg:text-base rounded-md text-rose-bud-500 bg-almond-300 hover:bg-almond-400 hover:text-rose-bud-500">
                            <FaShoppingCart/> <span className="pl-2">{subtotal}</span>
                            </a>
                        </Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                {/*
                    Mobile menu, toggle classNamees based on menu state.

                    Menu open: "block", Menu closed: "hidden"
                */}
                <div className={`sm:hidden ${isOpen ? "block" : "hidden"}`}>
                    <div className="pt-2 pb-4 space-y-1">
                    {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                    <Link href="/about">
                        <a className="border-transparent text-mongoose-500 hover:bg-almond-300 hover:border-rose-bud-500 hover:text-rose-bud-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">About</a>
                    </Link>
                    <Link href="/products">
                        <a className="border-transparent text-mongoose-500 hover:bg-almond-300 hover:border-rose-bud-500 hover:text-rose-bud-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Products</a>
                    </Link>
                    <Link href="/contact">
                        <a className="border-transparent text-mongoose-500 hover:bg-almond-300 hover:border-rose-bud-500 hover:text-rose-bud-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Contact</a>
                    </Link>
                    </div>
                </div>
                </nav>
  )
}

export default Nav;