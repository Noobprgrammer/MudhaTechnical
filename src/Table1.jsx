import React, { useEffect, useState } from 'react';
import './Table.css'
import './index.css'

function Table1({ onTable1DataLoaded, onRawDataLoaded }) {
  const [table1Data, setTable1Data] = useState([]);
  const [rawData, setRawData] = useState([]);

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
          setRawData(objects); // Store the raw data
          setTable1Data(objects);
          if (onTable1DataLoaded) {
            onTable1DataLoaded(objects);
          }
          if (onRawDataLoaded) { // Pass rawData to App.jsx
            onRawDataLoaded(objects);
          }
        }
      })
      .catch(error => {
        console.error('Error loading CSV file:', error);
      });
  }, [onTable1DataLoaded, onRawDataLoaded]);
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
      {table1Data.length === 0 && <p>Loading Table 1 data...</p>}
      <hr />
    </div>
  );
}

export default Table1;