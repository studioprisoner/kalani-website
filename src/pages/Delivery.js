import Head from 'next/head';
import Link from 'next/link';
import Footer from 'components/Footer';

const Delivery = () => {
    return (
        <div>
            <Head>
                <title>Kalani Co - Delivery</title>
            </Head>

            <div className="bg-white mt-1">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <div>
                    <h2 className="text-3xl font-extrabold text-gray-900">
                    Delivery
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">Can’t find the answer you’re looking for? Reach out to our <Link href="/contact"><a className="font-medium text-indigo-600 hover:text-indigo-500">customer support</a></Link> team.</p>
                </div>
                <div className="mt-12 lg:mt-0 lg:col-span-2">
                    <dl className="space-y-12">
                    <div>
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                        Deliveries
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                            Currently we are only delivering to Melbourne and Metro areas. If you purchase an item and are outside our delivery zones, we will contact you and issue you a refund on the card used to pay. Returns will take 5-7 working days to appear on your card.
                        </dd>
                    </div>
                    </dl>
                </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Delivery;