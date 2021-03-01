import Head from 'next/head';

import useSite from 'hooks/use-site';
import useCart from 'hooks/use-cart';

import ProductGrid from 'components/ProductGrid'
import Footer from 'components/Footer';

import products from 'data/products.json';

export default function Products() {

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
            <Head>
                <title>Kalani Flowers - Products</title>
            </Head>
            <ProductGrid products={products} onAddToCart={handleAddToCart} />
            <Footer />
        </div>
    )
}