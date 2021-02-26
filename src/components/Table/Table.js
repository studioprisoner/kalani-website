const Table = ({ data, columns }) => {

    const rows = [...new Array(data.length)].map((item, index) => {
      return columns.map(({ columnId }) => data[index][columnId]);
    });
  
    return (
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map(({ columnId, Header }) => {
              return(
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" key={columnId}>{ Header }</th>
              )
            })}
          </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rows.map((row, index) => {
              return (
                <tr key={index}>
                  { row.map((cell, index) => {
                    return <td className="px-6 py-4 whitespace-nowrap text-sm font-medium" key={index}>{ cell }</td>
                  })}
                </tr>
              )
            })}
          </tbody>
      </table>
    )
  }
  
  export default Table;