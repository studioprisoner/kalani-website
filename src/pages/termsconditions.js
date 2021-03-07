import Head from 'next/head';
import Link from 'next/link';
import Footer from 'components/Footer';

const Terms = () => {
    return (
        <div>
            <Head>
                <title>Kalani Co - Terms and Conditions</title>
            </Head>

            <div className="bg-white mt-1">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <div>
                    <h2 className="text-3xl font-extrabold text-gray-900">
                    Terms &amp; Conditions
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">Can’t find the answer you’re looking for? Reach out to our <Link href="/contact"><a className="font-medium text-indigo-600 hover:text-indigo-500">customer support</a></Link> team.</p>
                </div>
                <div className="mt-12 lg:mt-0 lg:col-span-2">
                    <dl className="space-y-12">
                    <div>
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                        1. Acceptance
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                        (a) By using this website, you agree to be bound by these terms and conditions.
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                        (b) You should review our terms carefully and immediately stop using this website if you do not agree to the terms. For clarity, if you continue to use this website, your conduct will constitute acceptance of the terms.
                        </dd>
                    </div>

                    <div>
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                        2. Orders
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                        (a) You can place an order by making the order on this website or by emailing us at contact@kalanico.com.au
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                        (b) We may accept or reject an order, or any variation or modification of an order, in our sole discretion.
                        </dd>
                    </div>

                    <div>
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                        3. Pricing and payment
                        </dt>
                        <dt className="text-base leading-6 mt-1 font-medium text-gray-700">
                            3.1 Pricing
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                        (a) Our pricing will be in accordance with our then current price list which will be notified to you prior to you placing an order.
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                        (b) All price indications or price lists provided by us are subject to alteration without prior notice. For clarity, we will not change the price of any goods after we accept your order. In the case of Subscription Offerings, the updated pricing will be applied to you in your next invoice. 
                        </dd>
                        <dt className="text-base leading-6 mt-1 font-medium text-gray-700">
                            3.2 Payment For orders the full price must be paid upon our acceptance of your order.
                        </dt>
                        <dt className="text-base leading-6 mt-1 font-medium text-gray-700">
                            3.3 Failure to pay If you fail to pay for your order, we will:
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                        (a) not commence processing the order until payment is received; or
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (b) not provide you with the goods or arrange delivery until we receive payment.
                        </dd>
                        <dt className="text-base leading-6 mt-1 font-medium text-gray-700">
                            3.4 Payment methods
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                            (a) All payments must be made in cash, via a credit card provider, or by electronic funds transfer to our bank account.
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                        (b) If you pay for any goods via a credit card provider, we reserve the right to charge you a credit card processing fee proportionate to the amount that we incur for processing the relevant payment.
                        </dd>
                    </div>

                    <div>
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                        4. Returns
                        </dt>
                        <dt className="text-base leading-6 mt-1 font-medium text-gray-700">
                            4.1 Australian Consumer Law
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                            (a) Our goods come with guarantees that cannot be excluded under the Australian Consumer Law. You are entitled to a replacement or refund for a major failure and compensation for any other reasonably foreseeable loss or damage. You are also entitled to have the goods repaired or replaced if the goods fail to be of acceptable quality and the failure does not amount to a major failure.
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                        (b) These terms and conditions will apply only to the extent to which they do not infringe the Australian Consumer Law.
                        </dd>
                        <dt className="text-base leading-6 mt-1 font-medium text-gray-700">
                            4.2 Flowers
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                            (a) We do not offer or provide returns or exchanges on our flowers if you change your mind after placing or receiving your order;
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (b) There may be variations to the reference images used on this website for any flowers you may order. Images provided on our website are for illustrative purposes only. We will not accept the return or exchange of any flowers due to any variation between the flowers you receive and reference images on this website; and
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (c) It is important to allow time for your flowers to settle after being transported as shipping can take a toll on our flowers. In this case, if you handle the flowers with care you may restore their condition. We cannot accept the return of any flowers damaged while in transit (to the maximum extent permitted by law). However, we will use reasonable efforts to assist you to contact the delivery service provider in this case.
                        </dd>
                        <dt className="text-base leading-6 mt-1 font-medium text-gray-700">
                            4.3 Other products
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                            (a) We will offer a store credit for returns of other products, returned within 7 days of receipt and in new condition, to the maximum amount of the product purchased, excluding delivery fees.
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (b) To return your order, please email contact@kalnico.com.au with your order details and reason for return.
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (c) You will be solely responsible for paying the shipping or postal costs for returning your goods unless the item is damaged, defective or incorrectly received, and are responsible for the return of the goods in their original condition, free from defect.
                        </dd>
                        <dt className="text-base leading-6 mt-1 font-medium text-gray-700">
                            4.4 Damaged goods
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                        If you believe that the goods may be defective or damaged, please send an image to contact@kalnico.com.au and we will come back to you with a response as soon as possible.
                        </dd>
                    </div>
                    <div>
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                            5. Acceptance
                        </dt>
                        <dt className="text-base leading-6 mt-1 font-medium text-gray-700">
                            5.1 Risk and title Risk in and title to the goods passes to you immediately upon the courier loading the goods for delivery at our warehouse. You agree to take full responsibility for any loss or damage which takes place after the courier loads the goods for delivery at our warehouse.
                        </dt>
                        <dt className="text-base leading-6 mt-1 font-medium text-gray-700">
                            5.2 Third party service
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                            (a) You expressly acknowledge that the courier is a third-party delivery service. We do not control how they provide their services nor their delivery timeframes. However, we will use reasonable efforts to ensure that goods are delivered within a reasonable period of time.
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (b) We are not responsible for and will not pay for any loss, damages, costs or expenses related to the courier’s delivery services, including (but not limited to):
                        </dd>
                        <dd className="mt-1 pl-6 italic text-sm text-gray-500">
                            (i) any damage caused to the goods once the goods are loaded by the courier at our Premises (including during transport or delivery);
                        </dd>
                        <dd className="mt-1 pl-6 italic text-sm text-gray-500">
                            (ii) any damage caused to your property while the goods are being transported or delivered;
                        </dd>
                        <dd className="mt-1 pl-6 italic text-sm text-gray-500">
                            (iii) if the goods are lost, stolen or misplaced by the courier; or(iv)if the courier fails to deliver the goods within a notified or estimated timeframe for delivery.
                        </dd>
                        <dt className="text-base leading-6 mt-1 font-medium text-gray-700">
                            5.3 Authority to leave unattended The courier will have an authority to leave the goods unattended at the delivery location at your sole risk, unless you request otherwise by emailing us at contact@kalanico.com.au 
                        </dt>
                    </div>
                    <div>
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                            6. Promotions 
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                            If we run any promotions, you may need to separately agree to any applicable terms which regulate those promotions. In the event of a direct inconsistency between the terms which regulate a promotion and these terms, the terms and conditions regulating the promotion will prevail to the extent of that inconsistency.
                        </dd>
                    </div>
                    <div>
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                            7. Returns and refunds
                        </dt>
                        <dt className="text-base leading-6 mt-1 font-medium text-gray-700">
                            7.1 Australian Consumer Law
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                            (a) Our goods come with guarantees that cannot be excluded under the Australian Consumer Law. You are entitled to a replacement or refund for a major failure and compensation for any other reasonably foreseeable loss or damage. You are also entitled to have the goods repaired or replaced if the goods fail to be of acceptable quality and the failure does not amount to a major failure.
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (b) These terms and conditions will apply only to the extent to which they do not infringe the Australian Consumer Law.
                        </dd>
                        <dt className="text-base leading-6 mt-1 font-medium text-gray-700">
                            7.2 FlowersAs flowers are a natural product:
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                            (a) we do not offer or provide returns or exchanges on these items if you change your mind after placing or receiving your order;
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (b) there may be variations to the reference images used on this website for any flowers you may order. Images provided on our website are for illustrative purposes only. We will not accept the return or exchange of any flowers due to any variation between the flowers you receive and reference images on this website; and
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (c) it is important to allow time for your flowers to settle after being transported as shipping can take a toll on our flowers. In this case, if you handle the flowers with care you may restore their condition. We cannot accept the return of any flowers damaged while in transit(to the maximum extent permitted by law). However, we will use reasonable efforts to assist you to contact the delivery service provider in this case.
                        </dd>
                        <dt className="text-base leading-6 mt-1 font-medium text-gray-700">
                            7.3 Incorrect items If you have received an item in error, please email us at contact@kalanico.com.au so that we can resolve the error for you as soon as possible.
                        </dt>
                        <dt className="text-base leading-6 mt-1 font-medium text-gray-700">
                            7.4 Damaged goods If you believe that the goods may be defective or damaged, please send an image to contact@kalanico.com.au and we will come back to you with a response as soon as possible.
                        </dt>
                        <dt className="text-base leading-6 mt-1 font-medium text-gray-700">
                            7.5 How to return an item
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                            (a) If we agree in writing to a return of goods, you must:
                        </dd>
                        <dd className="mt-1 pl-6 italic text-sm text-gray-500">
                            (i) post the goods back to us in their original condition, in their original packaging and with all tags attached; and
                        </dd>
                        <dd className="mt-1 pl-6 italic text-sm text-gray-500">
                            (ii) email us your receipt or proof of purchase, along with the return postage tracking number. If goods are posted to us without a tracking number, we will not issue a refund or send an exchange until the returned goods arrive to us.
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (b) You will be solely responsible for paying the shipping or postal costs for returning your goods unless the item is damaged, defective or incorrectly received.
                        </dd>
                    </div>
                    <div>
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                            8. Limitation of liability
                        </dt>
                        <dt className="text-base leading-6 mt-1 font-medium text-gray-700">
                            8.1 Access and accuracy of information To the maximum extent permitted by law, including the Australian Consumer Law, we make no representations or warranties in relation to this website or any content contained herein, including (without limitation) representations or warranties that the website and its content will be:
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                            (a) complete, accurate or up-to-date;
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (b) able to be accessed without interruption; or
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (c) free from:
                        </dd>
                        <dd className="mt-1 pl-6 italic text-sm text-gray-500">
                            (i) technical, typographical or photographic errors; or
                        </dd>
                        <dd className="mt-1 pl-6 italic text-sm text-gray-500">
                            (ii) cyber security risks.
                        </dd>
                        <dt className="text-base leading-6 mt-1 font-medium text-gray-700">
                            8.2 Limitations
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                            (a) To the maximum extent permitted by law, including the Australian Consumer Law, we will not be liable to you in relation to:
                        </dd>
                        <dd className="mt-1 pl-6 italic text-sm text-gray-500">
                            (i) any direct or indirect loss (including consequential loss), damage or expense, irrespective of the manner in which that loss, damage or expense occurs, that you may suffer or incur in connection with these terms, the goods, or your inability to use or access this website; and
                        </dd>
                        <dd className="mt-1 pl-6 italic text-sm text-gray-500">
                            (ii) any interference, damage or harm to your computer (or related infrastructure) which occurs in connection with your use of this website (or any linked website).
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (b) You must take appropriate precautions to ensure that you use this website in a safe manner, including by screening all content of this website for cyber security threats.
                        </dd>
                    </div>
                    <div>
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                            9. Links 
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                            We do not accept responsibility for external materials linked to or otherwise accessible through this website. We do not review third party sites nor do we control their content. Any links provided to you on this website are merely done for your convenience. These links are not an endorsement of any aspect of the linked website (including any goods or services provided therein).
                        </dd>
                    </div>
                    <div>
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                            10. Intellectual property 
                        </dt>
                        <dt className="text-base leading-6 mt-1 font-medium text-gray-700">
                            10.1 Acknowledgment You acknowledge and agree that:
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                            (a) this website is owned by us;
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (b) the information and material published on this website is subject to Australian intellectual property laws. By accessing this website, you agree to abide by all copyright notices and other restrictions provided in connection with the website and in any associated content; and
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (c) we own all of the intellectual property rights arising from or in connection with his website (including its content and any updates or modifications of same) and the goods(unless those intellectual property rights are owned by third party parties).
                        </dd>
                        <dt className="text-base leading-6 mt-1 font-medium text-gray-700">
                            10.2 Restrictions Unless we expressly agree otherwise in writing (and except as permitted by law):
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                            (a) nothing in this website may be construed as directly or indirectly granting any license or other right in connection with any information contained within this website, other than as expressly set out in these terms;
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (b) we do not grant or transfer to you any title, interest or rights in connection with this website or any content contained herein. However, we do hereby grant you a single, non-transferable, non-exclusive and revocable license to access this website and view the content contained herein in accordance with the terms;
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (c) you must not modify, copy, adapt, reproduce, distribute, transfer, transmit, display any aspect of this website as your own, upload to a third party platform, publish, transmit or otherwise distribute the content of this website in any way;
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (d) you must not reverse engineer, exploit to your advantage, reproduce, republish, license, create derivative works from, or sell any content contained on this website;
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (e) you must not use this website or any of the content contained herein to generate any revenue (including advertising revenue); and
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (f) you may not use any material on this website for your personal or a related parties benefit or advantage, unless such benefit or advantage is derived directly from the appropriate use and enjoyment of any goods purchased on this website.
                        </dd>
                    </div>
                    <div>
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                            11. General
                        </dt>
                        <dt className="text-base leading-6 mt-1 font-medium text-gray-700">
                            11.1 Miscellaneous
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                            (a) The laws of the state of Victoria in the Commonwealth of Australia govern this agreement. Each party irrevocably and unconditionally submits to the non-exclusive jurisdiction of the courts in the state of Victoria.
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (b) The Terms contain the entire agreement between the parties about its subject matter. Any previous understanding, agreement, representation or warranty relating to that subject matter is replaced by this agreement and has no further effect.
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (c) Both parties represent and warrant that they have the power to enter into these terms and have obtained all necessary authorisations to allow them to do so.
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (d) No failure or delay by either party in exercising any right, power or privilege under these terms will impair the same or operate as a waiver of the same nor will any single or partial exercise of any right, power or privilege preclude any further exercise of the same or the exercise of any other right, power or privilege.
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (e) Any provision of these terms which is unenforceable or partly unenforceable is, where possible, to be severed to the extent necessary to make the terms enforceable, unless this would materially change the intended effect of the terms.
                        </dd>
                        <dt className="text-base leading-6 mt-1 font-medium text-gray-700">
                            11.2 Assignment
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                            (a) You may not assign or otherwise transfer any or all of your rights and obligations under the terms without our prior written consent.
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (b) We may assign, transfer or novate any or all of our rights and obligations under the terms without receiving your prior written consent
                        </dd>
                        <dt className="text-base leading-6 mt-1 font-medium text-gray-700">
                            11.3 Amendments
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                            (a)You acknowledge and agree that we may amend the terms from time to time by notifying you in writing. These changes will be deemed to take effect on and from the earlier of the following to occur: 
                        </dd>
                        <dd className="mt-1 pl-6 italic text-sm text-gray-500">
                            (i) the date on which you accept such changes;
                        </dd>
                        <dd className="mt-1 pl-6 italic text-sm text-gray-500">
                            (ii) at such time as you make a further request for us to provide goods to you; or
                        </dd>
                        <dd className="mt-1 pl-6 italic text-sm text-gray-500">
                            (iii) in the case of Subscription Offerings, after a period of seven calendar days after we notified you of the amendments, provided that you have not objected to such changes in writing prior.
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (b) It is important that you regularly check the term
                        </dd>
                    </div>
                    <div>
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                            12. Definitions
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                            In these terms, unless the context otherwise requires, the following words and phrases have the following meanings:
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (a) “Australian Consumer Law” means Schedule 2 of the Competition and Consumer Act 2010 (Cth) and its associated regulations as amended;
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (b) “courier” means a third-party courier on our preferred supplier list at the relevant time;
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (c) “flowers” means any plant and flower products supplied by us in connection with the terms; 
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (d) “goods” means any goods to be made, processed or supplied by us in connection with these terms, including homewares and flowers. For the avoidance of doubt, goods includes an individual good;
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (e) “homewares” means any homewares to be made, manufactured, processed or supplied by us in connection with the terms;
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (f)“order” means an order for goods made in accordance with these terms. For the avoidance of doubt, an order is an offer made by you to us, and it includes orders made under a Subscription Offering;
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (g)“we,” “us”, “our”, "I" or “Kalani Co” means Jordyn Goodwin ABN 23 933 996 430; and
                        </dd>
                        <dd className="mt-2 text-base text-gray-500">
                            (h)“you” or “your” means any person or entity purchasing the goods or a party to these terms.
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

export default Terms;