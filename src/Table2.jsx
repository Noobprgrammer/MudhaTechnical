import React, { useEffect, useState } from 'react';
import './Table.css';
import './index.css'

function Table2({ rawData, visible }) { 
  const [table2Data, setTable2Data] = useState([]); 

    useEffect(() => {
        if (visible && rawData && rawData.length > 0) {
            const valuesMap = {};
            rawData.forEach(item => {
              if (item['Index #'] && item.Value) {
                valuesMap[item['Index #'].trim()] =  parseInt(item.Value.trim(), 10);
              }
            });
      
            const newTableData = [
              {
                Category: 'Alpha',
                Value: (valuesMap['A5'] || 0) + (valuesMap['A20'] || 0),
              },
              {
                Category: 'Beta',
                Value: (valuesMap['A15'] || 0) / (valuesMap['A7'] || 1),
              },
              {
                Category: 'Charlie',
                Value: (valuesMap['A13'] || 0) * (valuesMap['A12'] || 0),
              },
            ];
            setTable2Data(newTableData);
        } else {
          setTable2Data([]);
        }
    }, [visible, rawData]); 
  if (!visible) {
    return null;
  }

  if (!table2Data || table2Data.length === 0) {
    return <p>Table 2 data not available.</p>;
  }

  return (
    <div className="body">
      <h2>TABLE 2</h2>
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