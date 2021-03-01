const Table = ({ data, columns }) => {

    const rows = [...new Array(data.length)].map((item, index) => {
      return columns.map(({ columnId }) => data[index][columnId]);
    });
  
    return (
      <table className="w-full">
        <thead>
          <tr className="bg-apricot-peach-500 h-10">
            {columns.map(({ columnId, Header }) => {
              return(
                <td scope="col" className="pl-6 text-xs font-mediu uppercase tracking-wider" key={columnId}>{ Header }</td>
              )
            })}
          </tr>
          </thead>
          <tbody>
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