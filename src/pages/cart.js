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
    <div>
      <Helmet>
        <title>Cart</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-indigo-800">
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="md:hidden">
                  Delivery Zones
                </span>
                <span className="hidden md:inline">
                  Delivery Zones: We are only delivering to Melbourne &amp; Geelong Metro Areas. All prices are inclusive of delivery.
                </span>
              </p>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <a href="#" className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50">
                Learn more
              </a>
            </div>
            <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
        <button type="button" class="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
          <span class="sr-only">Dismiss</span>
          <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl flex flex-col mx-6">
      <h1 className="my-3 text-5xl text-rose-bud-500 sm:text-6xl font-maldives">My Shopping Cart</h1>
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="py-2 sm:px-1 lg:px-8">
            <div className="shadow border-b border-gray-200 sm:rounded-lg">
              <Table data={data} columns={columns} />
            </div>
            
            <div className="bg-white overflow-hidden shadow rounded-lg mt-3">
            {data.length > 0 && (
                  <div>
                    <button className="mt-8 block w-full bg-almond-300 border border-almond-300 rounded-md py-2 text-sm font-semibold text-rose-bud-500 text-center hover:bg-almond-500 hover:border-almond-500" onClick={handleOnCheckout}>Check Out with Stripe</button>
                  </div>
            )}
            {data.length === 0 && (
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                        No Products
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          There are no products in your cart, go and add some.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <Link href="/products">
                    <a className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-apricot-peach-500 text-base font-medium text-white hover:bg-apricot-peach-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-bud-500 sm:ml-3 sm:w-auto sm:text-sm">
                      Find Products
                    </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            )}
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}