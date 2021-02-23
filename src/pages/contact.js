import Head from 'next/head';
import Footer from 'components/Footer';

function Contact() {
    
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
                    <div class="absolute inset-0">
                        <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
                    </div>
                    <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
                        <div className="bg-almond-200 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
                            <div className="max-w-lg mx-auto">
                                <h2 class="text-2xl font-extrabold tracking-tight text-mongoose-500 sm:text-3xl">
                                    Get In Touch
                                </h2>
                                <p class="mt-3 text-lg leading-6 text-gray-500">
                                    Have any questions about any products? Have a collaboration idea? Use the form, send me an email or send me a text and we'll chat!
                                </p>
                                <dl className="mt-8 text-base text-gray-500">
                                    <div className="hidden">
                                        <dt class="sr-only">Postal address</dt>
                                        <dd>
                                        <p>742 Evergreen Terrace</p>
                                        <p>Springfield, OR 12345</p>
                                        </dd>
                                    </div>
                                    <div className="mt-6">
                                        <dt className="sr-only">Phone Number</dt>
                                        <dd className="flex">
                                            <svg class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokedLineJoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            <span class="ml-3">
                                                0435 323 543
                                            </span>
                                        </dd>
                                    </div>
                                    <div className="mt-3">
                                        <dt class="sr-only">Email</dt>
                                        <dd className="flex">
                                            <svg class="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokedLineJoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
                            <form onSubmit={contactForm} class="grid grid-cols-1 gap-y-6">
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
                                    <button type="submit" class="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-almond-500 bg-mongoose-500 hover:bg-mongoose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-bud-500">
                                    Submit
                                    </button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
                </div>
            );
        }

export default Contact;