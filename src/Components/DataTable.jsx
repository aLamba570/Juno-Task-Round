// DataTable.js
import React from 'react';
import './datatable.css';
import PendingTable from './TaskTables/PendingTable';
import CompletedTable from './TaskTables/CompletedTable';

const DataTable = () => {
  const [selectedTab, setSelectedTab] = React.useState('pending');

  return (
    <div className="data-table">
      <h1 style={{ fontFamily: 'Trebuchet MS, sans-serif', color: "#050505" }}>Monitoring</h1>

      <div className='buttton'>
        <button
          onClick={() => setSelectedTab('pending')}
          className={selectedTab === 'pending' ? 'active' : ''}
        >
          Pending
        </button>
        <button
          onClick={() => setSelectedTab('completed')}
          className={selectedTab === 'completed' ? 'active' : ''}
        >
          Completed
        </button>
      </div>

      <div className="tab-underline"></div>

      {selectedTab === 'pending' && <PendingTable />}
      {selectedTab === 'completed' && <CompletedTable />}
    </div>
  );
}

export default DataTable;
