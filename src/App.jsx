import React, { useState } from 'react';

import Table1 from './Table1.jsx';
import Table2 from './Table2.jsx';
import './App.css'


function App() {
  const [table2Data, setTable2Data] = useState([]);
  const [showTable2, setShowTable2] = useState(false);

  const handleProcessTable2Data = (data) => {
    setTable2Data(data);
  };

  const handleDisplayTable2 = () => {
    setShowTable2(true);
  };

  return (
    <div className='body'>
      <Table1 onProcessTable2Data={handleProcessTable2Data} />
      <button onClick={handleDisplayTable2}>Display Table 2</button>
      <Table2 table2Data={table2Data} visible={showTable2} />
    </div>
  );
}

export default App;