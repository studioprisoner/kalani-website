import Link from 'next/link';
import { Helmet } from 'react-helmet';

import { formatCurrency } from 'lib/currency';
import { initCheckout } from 'lib/payments';
import useSite from 'hooks/use-site';
import useCart from 'hooks/use-cart';

import CartComp from 'components/CartComp';
import Table from 'components/Table';
import CartQuantity from 'components/CartQuantity';
import Footer from 'components/Footer'

import products from 'data/products.json';

export default function Home() {

  const { cartItems, products, updateItemQuantity } = useCart();

  const { metadata } = useSite();
  const { siteName } = metadata;

  // Filter out any items that the customer doesn't want

  let data = cartItems.filter(({ quantity }) => quantity > 0);

  // Pap through our filtered cart items and create a data format
  // suitable for the Table component

  data = data.map(item => {
    const { id, quantity, pricePerUnit } = item;
    const product = products.find(({ id: pid }) => pid === id);
    const { name } = product;
    return {
      id,
      name,
      quantity,
      price: formatCurrency(pricePerUnit),
      update: <CartQuantity id={id} quantity={quantity} onUpdate={handleOnUpdateItem} />,
      total: formatCurrency(quantity * pricePerUnit)
    }
  });

  const columns = [
    {
      columnId: 'name',
      Header: 'Product Name'
    },
    {
      columnId: 'update',
      Header: 'Quantity'
    },
    {
      columnId: 'total',
      Header: 'Total'
    }
  ];

  /**
   * handleOnUpdateItem
   */

  function handleOnUpdateItem({ id, quantity }) {
    updateItemQuantity({
      id,
      quantity
    })
  }

  /**
   * handleOnCheckout
   */

  function handleOnCheckout() {
    const lineItems = cartItems.map(({ id, quantity }) => {
      const product = products.find(product => product.id === id);
      const { sku } = product;
      return {
        price: sku,
        quantity
      }
    });

    initCheckout({
      lineItems
    })
  }

  return (
    <div className="relative bg-white m-3">

      <Helmet>
        <title>Cart</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <div className="max-w-7xl mx-auto flex flex-col">
      <h1 className="my-3 text-3xl tracking-tight font-extrabold text-rose-bud-500 sm:text-4xl">My Shopping Cart</h1>
      <div className="rounded-md bg-yellow-50 p-4">
  <div className="flex">
    <div className="flex-shrink-0">
      <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
      </svg>
    </div>
    <div className="ml-3">
      <h3 className="text-sm font-medium text-yellow-800">
        Delivery Zones
      </h3>
      <div className="mt-2 text-sm text-yellow-700">
        <p>
          Currently, we are only delivering to Melbourne and Geelong metro areas. Keep an eye out on our social media for news on updated delivery zones.
        </p>
      </div>
    </div>
  </div>
</div>
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="py-2 sm:px-1 lg:px-8">
            <div className="shadow border-b border-gray-200 sm:rounded-lg">
              <Table data={data} columns={columns} />
            </div>
            <div className="">
            {data.length > 0 && (
                  <p>
                    <button className="mt-8 block w-full bg-almond-300 border border-almond-300 rounded-md py-2 text-sm font-semibold text-rose-bud-500 text-center hover:bg-almond-500 hover:border-almond-500" onClick={handleOnCheckout}>Check Out with Stripe</button>
                  </p>
            )}
            {data.length === 0 && (
              <p className="my-6 text-base text-gray-500">
                No items in your cart. <Link href="/"><a className="text-base font-semibold underline text-mongoose-500 hover:text-mongoose-700">Go add something</a></Link>!
              </p>
            )}
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}