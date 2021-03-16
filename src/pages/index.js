import Helmet from 'react-helmet';
import Link from 'next/link';

import useSite from 'hooks/use-site';
import useCart from 'hooks/use-cart';

import SubscribeNew from 'components/SubscribeNew';
import ProductGrid from 'components/ProductGrid'
import Footer from 'components/Footer';

import products from 'data/products.json';

export default function Home() {

  const { addItem, removeItem } = useCart();

  const { metadata } = useSite();
  const { siteName } = metadata;

  /**
   * handleAddToCart
   */

  function handleAddToCart(e, { id }) {
    addItem({
      id: id,
      quantity: 1
    })
  }

  return (
    <div>
      <Helmet>
        <title>{ siteName }</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-4 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-5xl text-mongoose-500 md:text-6xl lg:text-6xl xl:text-6xl">
              <span className="block text-rose-bud-500 xl:inline font-maldives">Heavenly Flowers</span>
              <span className="block xl:inline font-maldives">Arranged for you</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-mongoose-500 text-base md:mt-5 md:max-w-3xl">
          At Kalani.Co my hope is that my dried flower arrangements will bring much love and joy into the every space they enter.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link href="/products">
                <a className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-rose-bud-500 bg-almond-300 hover:bg-almond-400 md:py-4 md:text-lg md:px-10">
                See our Products
                </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img className="absolute inset-0 w-full h-full object-cover" src="images/front-page.webp" alt="Preserved Flowers" />
        </div>
      </main>
      <SubscribeNew />
      <ProductGrid products={products} onAddToCart={handleAddToCart} />
      <Footer />
    </div>
  )
}
