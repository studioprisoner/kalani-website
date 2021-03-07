import Head from 'next/head';
import Link from 'next/link';
import Footer from 'components/Footer';

const About = () => {
    return (
        <div>
            <Head>
                <title>Kalani Flowers - Our Journey</title>
            </Head>
            <div className="relative bg-white mt-1">
                <div className="lg:absolute lg:inset-0">
                    <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
                    <img className="w-full object-cover lg:absolute lg:h-full" src="../images/jordyn.jpg" alt="" />
                    </div>
                </div>
                <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
                    <div className="lg:col-start-2 lg:pl-8">
                    <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                        <h2 className="leading-6 text-rose-bud-500 font-semibold tracking-wide uppercase">Who are we</h2>
                        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-mongoose-500 sm:text-4xl">About Kalani.Co</h3>
                        <p className="mt-8 text-lg text-gray-500">My name is Jodyn and I am the owner and creative director of Kalani.Co</p>
                        <div className="mt-5 prose prose-indigo text-gray-500">
                        <p>I decided to start this business after the unpredictable pandemic of 2020 because I was creating and gifting flower after flower arrangement for friends, shared with the thought that : "I hope these cheer you up since you can't leave your home!</p>
                        <p>My creativity was challenged, and I was inspired to bring my passion and adoration for flowers to more than just friends and family.</p>
                        <p>At Kalani.Co my hope is that my dried flower arrangments will bring much love and joy into every space they enter, whether that be a home, an office, or a special event. What better way to tell someone you are thinking of them than with a stunning bunch of real flowers that last. They will be reminded of you for much lonver than a week!</p>
                        <p>Check out latest products <Link href="/products"><a className="font-semibold underline text-rose-bud-500 hover:text-apricot-peach-500">here</a></Link></p>
                        <h3 className="text-apricot-peach-500">What are dried flowers and how do I care for them?</h3>
                        <p>Dried flowers are real flowers that undergo a careful preservation process that prolong their natural beauty so that you can enjoy them for a lifetime. Dried flowers are pollen free, non-toxic, non-corrosive and non-chemical reactive making your blooms safe and allergy free.</p>
                        <p>To care for Kalani.Co flowers, ensure you place them in a spot that avoides direct sunlight so that the colour does not fade; keep them in a cool and dry space that is free from humidity and finally, remember you do not need to water your flowers!</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;