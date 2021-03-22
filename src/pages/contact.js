import Head from 'next/head';
import { useState } from 'react';
import Footer from 'components/Footer';

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = useState({
    full_name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        email: '',
        message: ''
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }

  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }

  const handleOnSubmit = async e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    const text = await res.text()
    handleResponse(res.status, text)
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
                            <h2 className="text-6xl lg:text-6xl text-mongoose-500 sm:text-3xl font-maldives">
                                Get In Touch
                            </h2>
                            <p className="mt-3 text-lg leading-6 text-gray-500">
                                Have any questions about any products? Have a collaboration idea? Use the form or send me an email and we'll chat!
                            </p>
                            <dl className="mt-8 text-base text-gray-500">
                                <div className="mt-3">
                                    <dt className="sr-only">Email</dt>
                                    <dd className="flex">
                                        <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokedlinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span className="ml-3">
                                            jordyn@kalani-co.com.au
                                        </span>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
                        <div className="max-w-lg mx-auto lg:max-w-none">
                        <form onSubmit={handleOnSubmit} className="grid grid-cols-1 gap-y-6">
                            <div>
                                <label htmlFor="full_name" className="sr-only">Full name</label>
                                <input type="text" name="full_name" value={inputs.full_name} required id="full_name" onChange={handleOnChange} autoComplete="name" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-rose-bud-500 focus:border-rose-bud-500 border-gray-300 rounded-md" placeholder="Full name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input id="email" name="email" type="email" value={inputs.email} required onChange={handleOnChange} autoComplete="email" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-rose-bud-500 focus:border-rose-bud-500 border-gray-300 rounded-md" placeholder="Email" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="sr-only">Phone</label>
                                <input type="text" name="phone" id="phone" value={inputs.phone} onChange={handleOnChange} autoComplete="tel" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-rose-bud-500 focus:border-rose-bud-500 border-gray-300 rounded-md" placeholder="Phone" />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">Message</label>
                                <textarea id="message" name="message" value={inputs.message} rows="4" onChange={handleOnChange} className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-rose-bud-500 focus:border-rose-bud-500 border-gray-300 rounded-md" placeholder="Message"></textarea>
                            </div>
                            <div>
                                <button type="submit" disabled={status.submitting} className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-rose-bud-500 bg-almond-300 hover:bg-almond-400 md:py-4 md:text-lg md:px-10">
                                {!status.submitting
                                    ? !status.submitted
                                        ? 'Submit'
                                        : 'Submitted'
                                    : 'Submitting...'}
                                </button>
                            </div>
                            </form>
                            <div>
                            {status.info.error && (
                                <div className="error">Error: {status.info.msg}</div>
                            )}
                            {!status.info.error && status.info.msg && (
                                <div className="success">{status.info.msg}</div>
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