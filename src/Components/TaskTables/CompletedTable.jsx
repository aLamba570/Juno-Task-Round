import React, {useState} from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Search from '../SearchComponents/Search';


const CompletedTable = () => {

  const jsonData = [
    {
      id: 1,
      user: "John Doe",
      riskLevel: "Medium",
      actionReason: "Resolved",
      timeToClose: "2 hours",
      dateAddedOn: "2023-11-25",
      actionTakenBy: "Alice Johnson",
    },
    {
      id: 2,
      user: "Jane Smith",
      riskLevel: "High",
      actionReason: "Escalated",
      timeToClose: "1 day",
      dateAddedOn: "2023-11-24",
      actionTakenBy: "Bob Anderson",
    },
    {
      id: 3,
      user: "Bob Johnson",
      riskLevel: "Low",
      actionReason: "Closed",
      timeToClose: "3 days",
      dateAddedOn: "2023-11-23",
      actionTakenBy: "Charlie Brown",
    },
    {
      id: 4,
      user: "Alice Brown",
      riskLevel: "Medium",
      actionReason: "Resolved",
      timeToClose: "4 days",
      dateAddedOn: "2023-11-22",
      actionTakenBy: "David Smith",
    },
    {
      id: 5,
      user: "Charlie White",
      riskLevel: "High",
      actionReason: "Escalated",
      timeToClose: "2 days",
      dateAddedOn: "2023-11-21",
      actionTakenBy: "Eva Green",
    },
    {
      id: 6,
      user: "Eva Green",
      riskLevel: "Low",
      actionReason: "Closed",
      timeToClose: "1 day",
      dateAddedOn: "2023-11-20",
      actionTakenBy: "Frank Miller",
    },
    {
      id: 7,
      user: "Michael Black",
      riskLevel: "Medium",
      actionReason: "Resolved",
      timeToClose: "3 days",
      dateAddedOn: "2023-11-19",
      actionTakenBy: "Grace Wilson",
    },
    {
      id: 8,
      user: "Olivia Grey",
      riskLevel: "High",
      actionReason: "Escalated",
      timeToClose: "5 days",
      dateAddedOn: "2023-11-18",
      actionTakenBy: "Henry Turner",
    },
    {
      id: 9,
      user: "David Taylor",
      riskLevel: "Low",
      actionReason: "Closed",
      timeToClose: "2 days",
      dateAddedOn: "2023-11-17",
      actionTakenBy: "Ivy Davis",
    },
    {
      id: 10,
      user: "Sophie Red",
      riskLevel: "Medium",
      actionReason: "Resolved",
      timeToClose: "4 days",
      dateAddedOn: "2023-11-16",
      actionTakenBy: "Jack White",
    },
  ];
  
  
  const getColorByRiskLevel = (riskLevel) => {
    const lowercaseRiskLevel = riskLevel.toLowerCase();
  
    switch (lowercaseRiskLevel) {
      case 'low':
        return '#006540';
      case 'medium':
        return '#88670F';
      case 'high':
        return '#7D2424';
      default:
        return 'inherit'; // Use 'inherit' to keep the original color
    }
  };
  
  const itemPerPage = 5;
  const [page, setPage] = useState(1);
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  
  const startIndex = (page - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const paginatedData = jsonData.slice(startIndex, endIndex);
  
  

  

  return (
    <div>
      <Search/>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell>Risk Level</TableCell>
              <TableCell>Action Reason</TableCell>
              <TableCell>Time to Close</TableCell>
              <TableCell>Data Added On</TableCell>
              <TableCell>Action Taken By</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((person) => (
              <TableRow key={person.id}>
                <TableCell style={{ fontWeight: '600' }}>
                  {person.user} 
                </TableCell>
                <TableCell style={{ color: getColorByRiskLevel(person.riskLevel), fontWeight: '600' }}>{person.riskLevel}</TableCell>
                <TableCell style={{ fontWeight: '660' }}>{person.actionReason}</TableCell>
                <TableCell style={{ fontWeight: '660' }}>{person.timeToClose}</TableCell>
                <TableCell style={{ fontWeight: '400', color: '#777676' }}>{person.dateAddedOn}</TableCell>
                <TableCell style={{ fontWeight: '660' }}>{person.actionTakenBy}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination
          count={Math.ceil(jsonData.length / itemPerPage)}
          page={page}
          onChange={handlePageChange}
          style={{ margin: '20px', display: 'flex', justifyContent: 'center', color: '#777676' }}
        />
      </Paper>
    </div>
  );
}

export default CompletedTable;
