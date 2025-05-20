import React, { useState } from 'react';

import Table1 from './Table1.jsx';
import Table2 from './Table2.jsx';
import './App.css'
import './index.css'


function App() {
  const [table2Data, setTable2Data] = useState([]);
  const [showTable2, setShowTable2] = useState(false);
  const [rawData, setRawData] = useState([]);

  const handleRawDataLoaded = (data) => {
    setRawData(data);
  };

  const handleDisplayTable2 = () => {
    setShowTable2(true);
  };

  return (
    <div className='body'>
      <Table1 onRawDataLoaded={handleRawDataLoaded} />
      <button onClick={handleDisplayTable2}>Display Table 2</button>
      <Table2 rawData={rawData} visible={showTable2} />
    </div>
  );
}

export default App;