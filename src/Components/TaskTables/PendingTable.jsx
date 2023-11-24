import React , {useState} from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Search from '../SearchComponents/Search';
import './pending.css';

const PendingTable = () => {
  const jsonData = [
    {"id":1,"user":"John Doe","riskLevel":"Medium","triggerReason":"IP Change","inQueueFor":"2 days","dataAddedOn":"2023-11-25","previouslyReviewed":"No"},
    {"id":2,"user":"Jane Smith","riskLevel":"High","triggerReason":"FIFO","inQueueFor":"1 day","dataAddedOn":"2023-11-24","previouslyReviewed":"Yes"},
    {"id":3,"user":"Bob Johnson","riskLevel":"Low","triggerReason":"FIFO","inQueueFor":"3 days","dataAddedOn":"2023-11-23","previouslyReviewed":"No"},
    {"id":4,"user":"Alice Brown","riskLevel":"Medium","triggerReason":"IP Change","inQueueFor":"4 days","dataAddedOn":"2023-11-22","previouslyReviewed":"Yes"},
    {"id":5,"user":"Charlie White","riskLevel":"High","triggerReason":"Behaviour","inQueueFor":"2 days","dataAddedOn":"2023-11-21","previouslyReviewed":"No"},
    {"id":6,"user":"Eva Green","riskLevel":"Low","triggerReason":"FIFO","inQueueFor":"1 day","dataAddedOn":"2023-11-20","previouslyReviewed":"Yes"},
    {"id":7,"user":"Michael Black","riskLevel":"Medium","triggerReason":"IP Change","inQueueFor":"3 days","dataAddedOn":"2023-11-19","previouslyReviewed":"No"},
    {"id":8,"user":"Olivia Grey","riskLevel":"High","triggerReason":"FIFO","inQueueFor":"5 days","dataAddedOn":"2023-11-18","previouslyReviewed":"Yes"},
    {"id":9,"user":"David Taylor","riskLevel":"Low","triggerReason":"IP Change","inQueueFor":"2 days","dataAddedOn":"2023-11-17","previouslyReviewed":"No"},
    {"id":10,"user":"Sophie Red","riskLevel":"Medium","triggerReason":"IP Change","inQueueFor":"4 days","dataAddedOn":"2023-11-16","previouslyReviewed":"Yes"}
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
        return 'inherit';
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
      <Search />
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell>Risk Level</TableCell>
              <TableCell>Trigger Reason</TableCell>
              <TableCell>In Queue For</TableCell>
              <TableCell>Data Added On</TableCell>
              <TableCell>Previously Reviewed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map(person => (
              <TableRow key={person.id}>
                <TableCell style={{ fontWeight: '600' }}>{person.user}</TableCell>
                <TableCell style={{ color: getColorByRiskLevel(person.riskLevel), fontWeight: '600' }}>{person.riskLevel}</TableCell>
                <TableCell style={{ fontWeight: '660' }}>{person.triggerReason}</TableCell>
                <TableCell style={{ fontWeight: '660' }}>{person.inQueueFor}</TableCell>
                <TableCell style={{ fontWeight: '400', color: "#777676" }}>{person.dataAddedOn}</TableCell>
                <TableCell style={{ fontWeight: '660' }}>{person.previouslyReviewed}</TableCell>
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
};

export default PendingTable;
