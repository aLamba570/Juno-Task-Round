// App.js
import React from 'react';
import SideMenu from './Components/SideMenu';
import DataTable from './Components/DataTable';
import './App.css'; // You can create this CSS file to style your components

function App() {
  return (
    <div className="app-container">
      <SideMenu />
      <DataTable />
    </div>
  );
}

export default App;
