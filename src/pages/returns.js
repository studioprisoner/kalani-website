import Head from 'next/head';
import Link from 'next/link';
import Footer from 'components/Footer';

const Returns = () => {
    return (
        <div>
            <Head>
                <title>Kalani Co - Returns &amp; Refunds</title>
            </Head>

            <div className="bg-white mt-1">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <div>
                    <h2 className="text-3xl font-extrabold text-gray-900">
                    Returns &amp; Refunds
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">Can’t find the answer you’re looking for? Reach out to our <Link href="/contact"><a className="font-medium text-indigo-600 hover:text-indigo-500">customer support</a></Link> team.</p>
                </div>
                <div className="mt-12 lg:mt-0 lg:col-span-2">
                    <dl className="space-y-12">
                    <div>
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                        Australian Consumer Law
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                            (a) Our goods come with guarantees that cannot be excluded under the Australian Consumer Law. You are entitled to a replacement or refund for a major failure and compensation for any other reasonably foreseeable loss or damage. You are also entitled to have the goods repaired or replaced if the goods fail to be of acceptable quality and the failure does not amount to a major failure.
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (b) These terms and conditions will apply only to the extent to which they do not infringe the Australian Consumer Law.
                        </dd>
                    </div>

                    <div>
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                            Flowers
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                            As flowers are a natural product:
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (a) we do not offer or provide returns or exchanges on these items if you change your mind after placing or receiving your order;
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (b) there may be variations to the reference images used on this website for any flowers you may order. Images provided on our website are for illustrative purposes only. We will not accept the return or exchange of any flowers due to any variation between the flowers you receive and reference images on this website; and
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (c) it is important to allow time for your flowers to settle after being transported as shipping can take a toll on our flowers. In this case, if you handle the flowers with care you may restore their condition. We cannot accept the return of any flowers damaged while in transit (to the maximum extent permitted by law). However, we will use reasonable efforts to assist you to contact the delivery service provider in this case.
                        </dd>
                    </div>

                    <div>
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                            Damaged goods
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                            If you believe that the goods may be defective or damaged, please send an image to contact@kalanico.com.au and we will come back to you with a response as soon as possible.
                        </dd>
                    </div>

                    <div>
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                            How to return an item
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                            (a) If we agree in writing to a return of goods, you must:
                        </dd>
                        <dd className="mt-2 pl-6 italic text-sm text-gray-500">
                            (i) post the goods to back to us in their original condition, in their original packaging and with all tags attached; and
                        </dd>
                        <dd className="mt-2 pl-6 italic text-sm text-gray-500">
                            (ii) email us your receipt or proof of purchase, along with the return postage tracking number. If goods are posted to us without a tracking number, we will not issue a refund or send an exchange until the returned goods arrive at our warehouse.
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                        (b) You will be solely responsible for paying the shipping or postal costs for returning your goods unless the item is damaged, defective or incorrectly received.
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

export default Returns;