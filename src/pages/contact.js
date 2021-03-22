import Head from 'next/head';
import { useState, useEffect } from 'react';
import Footer from 'components/Footer'; 

function Contact() {

    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if ( window.location.search.includes('success=true') ) {
          setSuccess(true);
        }
      }, []);
      
    
        const contactForm = async event => {
            event.preventDefault()

            const res = await fetch('api/send', {
                body: JSON.stringify({
                    full_name: event.target.full_name.value,
                    email: event.target.email.value,
                    phone: event.target.phone.value,
                    message: event.target.message.value
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            })
            const result = await res.json()
        }

            return (
                <div>
                <div className="relative bg-white mt-1">
                <Head>
                        <title>Kalani Flowers - Get in Touch</title>
                    </Head>
                    <div className="absolute inset-0">
                        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
                    </div>
                    <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
                        <div className="bg-almond-200 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                            <div className="max-w-lg mx-auto">
                                <h2 class="text-6xl lg:text-6xl text-mongoose-500 sm:text-3xl font-maldives">
                                    Get In Touch
                                </h2>
                                <p class="mt-3 text-lg leading-6 text-gray-500">
                                    Have any questions about any products? Have a collaboration idea? Use the form or send me an email and we'll chat!
                                </p>
                                <dl className="mt-8 text-base text-gray-500">
                                    <div className="mt-3">
                                        <dt class="sr-only">Email</dt>
                                        <dd className="flex">
                                            <svg class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokedlinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <span class="ml-3">
                                                jordyn@kalani-co.com.au
                                            </span>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                            <div className="max-w-lg mx-auto lg:max-w-none">
                            <form onSubmit={contactForm} action="/?success=true" class="grid grid-cols-1 gap-y-6">
                                <div>
                                    <label htmlFor="full_name" class="sr-only">Full name</label>
                                    <input type="text" name="full_name" id="full_name" autoComplete="name" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-rose-bud-500 focus:border-rose-bud-500 border-gray-300 rounded-md" placeholder="Full name" />
                                </div>
                                <div>
                                    <label htmlFor="email" class="sr-only">Email</label>
                                    <input id="email" name="email" type="email" autoComplete="email" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-rose-bud-500 focus:border-rose-bud-500 border-gray-300 rounded-md" placeholder="Email" />
                                </div>
                                <div>
                                    <label htmlFor="phone" class="sr-only">Phone</label>
                                    <input type="text" name="phone" id="phone" autoComplete="tel" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-rose-bud-500 focus:border-rose-bud-500 border-gray-300 rounded-md" placeholder="Phone" />
                                </div>
                                <div>
                                    <label htmlFor="message" class="sr-only">Message</label>
                                    <textarea id="message" name="message" rows="4" class="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-rose-bud-500 focus:border-rose-bud-500 border-gray-300 rounded-md" placeholder="Message"></textarea>
                                </div>
                                <div>
                                    <button type="submit" class="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-rose-bud-500 bg-almond-300 hover:bg-almond-400 md:py-4 md:text-lg md:px-10">
                                    Submit
                                    </button>
                                </div>
                                </form>
                                <div>
                                {success && (
                                    <p style={{ color: 'green'}}>
                                        Successfully submitted form!
                                    </p>
                                )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
                </div>
            );
        }

export default Contact;