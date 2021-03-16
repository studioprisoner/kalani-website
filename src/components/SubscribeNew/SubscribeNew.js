import Link from 'next/link'

function SubscribeNew() {

    const subscribeForm = async event => {
        event.preventDefault()

        const res = await fetch('api/subscribe_new', {
            body: JSON.stringify({
                email: event.target.email.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
        const result = await res.json()
    }

    return (
        <section>
        <div className="bg-mongoose-400">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                <div className="lg:w-auto lg:flex-1">
                    <h2 className="text-3xl text-almond-900 sm:text-6xl font-maldives" id="newsletter-headline">
                        Sign up for our Newsletter
                    </h2>
                    <p className="mt-3 max-w-xl text-lg leading-6 text-mongoose-900">
                    Stay up to date with the latest news from us on new products, deals, tips and more.
                    </p>
                </div>
                <div className="mt-8 lg:mt-0 lg:ml-8">
                <form onSubmit={subscribeForm} className="sm:flex">
                    <label htmlFor="email" className="sr-only">Email Address</label>
                    <input id="email" name="email" type="email" placeholder="you@awesome.com" autoComplete="email" className="w-full px-5 py-3 border border-transparent placeholder-almond-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-rose-bud-500 focus:ring-white focus:border-white sm:max-w-xs rounded-md"/>
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button type="submit" className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-rose-bud-500 bg-almond-300 hover:bg-almond-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">{'✨ Subscribe 💌'}</button>
                    </div>
                </form>
                <div>
                {/* <p className="mt-3 text-sm text-rose-bud-300">{ message }</p> */}
                </div>
                <p className="mt-3 text-sm text-mongoose-900">
                We care about the protection of your data. Read our <Link href="/termsconditions"><a className="text-mongoose-700 font-medium underline hover:text-mongoose-900">Terms &amp; Conditions.</a></Link>
                </p>
                </div>
            </div>
        </div>
    </section>
    );
}

export default SubscribeNew;