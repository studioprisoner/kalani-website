import Link from 'next/link';

import { formatCurrency } from '../../lib/currency';

const ProductGrid = ({ products = [], onAddToCart }) => {
    return (
        <div className="max-w-7xl mx-auto mt-12 grid gap-5 lg:items-center lg:justify-between lg:grid-cols-4 px-4">
                    {products.map(product => {
                        return (
                            <div key={product.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden min-h-full">
                                <div className="flex-shrink-0">
                                    <Link href={`/product/${product.id}`}>
                                    <a>
                                    <img className="h-full w-full object-cover" src={product.image} alt={product.title} />
                                    </a>
                                    </Link>
                                </div>
                                <div className="flex-1 bg-white p-6 flex flex-col justify-between md:min-h-full">
                                    <div className="">
                                        <p className="text-sm font-medium text-rose-bud-500 uppercase">
                                            <Link href={`/product/${product.id}`}>
                                            <a className="hover:underline">
                                                {product.name}
                                            </a>
                                            </Link>
                                        </p>
                                        <p className="mt-3 text-mongoose-700 font-bold">
                                            { formatCurrency(product.price) }
                                        </p>
                                        <p className="my-3 text-base text-mongoose-500">
                                            {product.description}
                                        </p>
                                        <p>
                                        <button className="mt-8 block w-full bottom-0 bg-almond-300 border border-almond-300 rounded-md py-2 text-sm font-semibold text-rose-bud-500 text-center hover:bg-almond-500 hover:border-almond-500" onClick={(e) => onAddToCart(e, product)}>
                                            Add to Cart
                                        </button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </div>
    )
}

export default ProductGrid;