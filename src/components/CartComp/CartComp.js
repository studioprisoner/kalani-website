const CartComp = ({ data, columns }) => {

    const rows = [...new Array(data.length)].map((item, index) => {
        return columns.map(({ columnId }) => data[index][columnId]);
    });

    return (
        <div className="pl-3">
            <div className="grid grid-cols-4 sm:text-xs">
                {columns.map(({ columnId, Header }) => {
                    return (
                        <div className="mt-8 text-lg font-medium" key={columnId}> { Header }</div>
                    )
                })}
            </div>
            <div className="sm:rounded-tr-lg relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                { rows.map((cell, index) => {
                    return ( <div className="mt-8" key={index}>{ cell }</div>
                    )
                })}
            </div>
        </div>
    )

}



export default CartComp;