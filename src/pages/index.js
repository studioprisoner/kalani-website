import Helmet from 'react-helmet';
import Link from 'next/link';

import useSite from 'hooks/use-site';
import useCart from 'hooks/use-cart';

import Subscribe from 'components/subscribe'
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
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Heavenly Flowers</span>
              <span className="block text-rose-bud-500 xl:inline">Arranged for you</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link href="#products">
                <a className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-rose-bud-500 bg-almond-300 hover:bg-almond-400 md:py-4 md:text-lg md:px-10">
                See our Products
                </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1590744363062-282991c2959a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=754&q=80" alt="flowers" />
        </div>
      </main>
      <Subscribe />
      <ProductGrid products={products} onAddToCart={handleAddToCart} />
      <Footer />
    </div>
  )
}
