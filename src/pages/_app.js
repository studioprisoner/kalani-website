import 'styles/globals.css'

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