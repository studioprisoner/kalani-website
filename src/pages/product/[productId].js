import { Helmet } from 'react-helmet';

import { formatCurrency } from 'lib/currency';
import useCart from 'hooks/use-cart';

import Footer from 'components/Footer'

import products from 'data/products.json';


export default function Product({ product }) {
  const { addItem } = useCart();

  /**
   * handleAddToCart
   */

  function handleAddToCart() {
    addItem({
      id: product.id,
      quantity: 1
    })
  }

  return (
      <div>
      <Helmet>
        <title>{ product.name }</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <img className="rounded-lg bg-gray-100 mb-4" src={product.image} alt={product.name} />
                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="mb-2 leading-light tracking-tight font-bold text-rose-bud-500 text-2xl md:text-3xl">{product.name}</h2>
                        <div className="flex items-center space-x-4 my-4">
                            <div>
                                <div className="rounded-lg bg-almond-200 flex py-2 px-3">
                                    <span className="font-bold text-mongoose-700 text-3xl">{ formatCurrency(product.price) }</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-500">{product.description}</p>
                        <div className="flex py-4 space-x-4">
                            <div className="relative">
                                <button className="px-6 py-2 block w-full bg-almond-300 border border-almond-300 rounded-md py-2 text-sm font-semibold text-rose-bud-500 text-center hover:bg-almond-500 hover:border-almond-500" onClick={handleAddToCart}>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </main>
            <Footer />
    </div>
  )
}

export async function getStaticProps({ params = {} }) {
  const product = products.find(({ id }) => `${id}` === `${params.productId}`);

  return {
    props: {
      product
    },
  };
}

export async function getStaticPaths() {
  const paths = products.map((product) => {
    const { id } = product;
    return {
      params: {
        productId: `${id}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}