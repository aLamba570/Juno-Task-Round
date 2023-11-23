// PendingTable.js
import React from 'react';
import Search from '../SearchComponents/Search';

const PendingTable = () => {
  // Sample pending data, replace with your actual data
  const pendingData = [
    { id: 1, name: 'Task 1', description: 'Description for Task 1' },
    { id: 2, name: 'Task 2', description: 'Description for Task 2' },
    // Add more pending data as needed
  ];

  return (
    <div>
      <Search/>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Risk Level</th>
            <th>Trigger Reason</th>
            <th>In Queue For</th>
            <th>Data Added On</th>
            <th>Previously Reviewed</th>
          </tr>
        </thead>
        <tbody>
          {/* Add your table data here */}
          {/* Example row, replace with dynamic data */}
          <tr>
            <td>John Doe</td>
            <td>Medium</td>
            <td>Option 1</td>
            <td>2 days</td>
            <td>2023-11-25</td>
            <td>No</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default PendingTable;
