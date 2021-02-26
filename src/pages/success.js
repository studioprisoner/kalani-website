import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import useCart from 'hooks/use-cart';

import Footer from 'components/Footer';

export default function Success() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, [])

    return (
        <div>
            <Helmet>
                <title>Success</title>
                <link rel="icon" href="/favicon.ico" />
            </Helmet>
            <main>
                <p>Thank you for your order!</p>
            </main>
            <Footer />
        </div>
    )
}