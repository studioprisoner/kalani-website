import 'styles/globals.css'
import Head from 'next/head';

import siteConfig from '../../site.config';

import SiteContext from 'context/site-context';
import CartContext from 'context/cart-context';
import useCartContext from 'hooks/use-cart-context.js';

import Nav from 'components/Nav'


const context = {
  metadata: siteConfig
}

function App({ Component, pageProps }) {
  const cart = useCartContext();

  return (
    <div>
      <Head>
        <title>Kalani Co - Heavenly Flowers Arranged for you</title>
        <script async defer data-website-id="963aa68d-acc9-432b-9dda-16324088a789" src="https://umami-kalani.vercel.app/umami.js"></script>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Kalani Co Flowers" key="title" />
        <meta property="og:url" content="https://www.kalani-co.com.au" key="url" />
        <meta property="og:type" content="Store" key="type"/>
        <meta property="og:image" content="https://www.kalani-co.com.au/images/front-page.webp" key="image" />
        <meta property="og:description" content="Heavenly dried flower arrangements made from home with love." type="description" />
      </Head>
      <div className="relative overflow-hidden">
      <SiteContext.Provider value={context}>
      <CartContext.Provider value={cart}>
        <Nav />
        <Component {...pageProps} />  
      </CartContext.Provider>
      </SiteContext.Provider>
      </div>
    </div>
  );
}

export default App;