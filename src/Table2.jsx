import './Table.css'

function Table2({ table2Data, visible }) {
  if (!visible || !table2Data || table2Data.length === 0) {
    return null;
  }

  return (
    <div className='body'>
      <h1>TABLE 2 Data</h1>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Category</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {table2Data.map((item, index) => (
            <tr key={index}>
              <td>{item.Category}</td>
              <td>{item.Value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table2;