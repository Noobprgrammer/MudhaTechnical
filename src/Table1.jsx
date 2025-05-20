import React, { useEffect, useState } from 'react';

import './Table.css'


function Table1({ onProcessTable2Data }) {
  const [table1Data, setTable1Data] = useState([]);

  useEffect(() => {
    fetch('./Table_Input.csv')
      .then(response => response.text())
      .then(text => {
        const lines = text.trim().split('\n');
        if (lines.length > 0) {
          const headers = lines[0].split(',').map(header => header.trim());
          const dataRows = lines.slice(1);
          const objects = dataRows.map(row => {
            const values = row.split(',').map(value => value.trim());
            const obj = {};
            headers.forEach((header, index) => {
              obj[header] = values[index];
            });
            return obj;
          });
          setTable1Data(objects);
          Table2Data(objects);
        }
      })
  }, [onProcessTable2Data]);

  const Table2Data = (data) => {
    const valuesMap = {};
    data.forEach(item => {
      if (item['Index #'] && item.Value) {
        valuesMap[item['Index #'].trim()] =  parseInt(item.Value.trim(), 10);
      }
    });

    const newTableData = [
      {
        Category: 'Alpha',
        Value: (valuesMap['A5'] || 0) + (valuesMap['A20']),
      },
      {
        Category: 'Beta',
        Value: (valuesMap['A15'] || 0) / (valuesMap['A7']),
      },
      {
        Category: 'Charlie',
        Value: (valuesMap['A13'] || 0) * (valuesMap['A12']),
      },
    ];
    if (onProcessTable2Data) {
      onProcessTable2Data(newTableData);
    }
  };

  return (
    <div className='body'>
      <h1>TABLE 1 Data</h1>
      {table1Data.length > 0 && (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              {Object.keys(table1Data[0]).map(header => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table1Data.map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((value, colIndex) => (
                  <td key={colIndex}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <hr />
    </div>
  );
}

export default Table1;
