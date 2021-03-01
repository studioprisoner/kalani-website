const CartQuantity = ({ id, quantity, onUpdate }) => {

  /**
   * handleOnSubmit
   */

  function handleOnSubmit(e) {
    e.preventDefault();

    const { currentTarget } = e;
    const inputs = Array.from(currentTarget.elements);
    const id = inputs.find(input => input.name === 'id')?.value;
    const quantity = inputs.find(input => input.name === 'quantity')?.value;

    onUpdate({
      id: id && parseInt(id),
      quantity: quantity && parseInt(quantity)
    });
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input name="id" type="hidden" value={id || ''} />
      <input name="quantity" type="number" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm border-gray-300 w-20 mr-2" min={0} defaultValue={quantity} />
      <button className="inline-flex items-center px-2.5 py-2 border border-transparent text-xs font-medium rounded shadow-sm text-rose-bud-500 bg-almond-300 hover:bg-almond-400 hover:text-rose-bud-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-almond-500">Update</button>
    </form>
  )
}

export default CartQuantity;