import Link from 'next/link';
import { Helmet } from 'react-helmet';

import { formatCurrency } from 'lib/currency';
import { initCheckout } from 'lib/payments';
import useSite from 'hooks/use-site';
import useCart from 'hooks/use-cart';

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
    const { id, image, quantity, pricePerUnit } = item;
    const product = products.find(({ id: pid }) => pid === id);
    const { name } = product;
    return {
      id,
      name,
      image,
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
      columnId: 'price',
      Header: 'Price Per Item'
    },
    {
      columnId: 'total',
      Header: 'Item Total'
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

      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <Table data={data} columns={columns} />

              {data.length > 0 && (
                <p>
                  <button className="mt-8 block w-full bg-almond-300 border border-almond-300 rounded-md py-2 text-sm font-semibold text-rose-bud-500 text-center hover:bg-almond-500 hover:border-almond-500" onClick={handleOnCheckout}>Check Out with Stripe</button>
                </p>
              )}

              {data.length === 0 && (
                <p>
                  No items in your cart. <Link href="/"><a>Go add something</a></Link>!
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