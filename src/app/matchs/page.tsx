"use client";

import React, { useEffect, useState } from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell
} from "@nextui-org/table";

export default function Matchs() {
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // console.log('Database query object:', db.schema.query);
    // Fetch matches data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/matchs');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data); // Debug: log the data
        setMatches(data);
      } catch (error) {
        console.error('Error fetching matches:', error);
        // setError(error.message);
      }
    };
    
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (matches.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Football Matches</h1>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableColumn>Date</TableColumn>
            <TableColumn>Home Team</TableColumn>
            <TableColumn>Score</TableColumn>
            <TableColumn>Away Team</TableColumn>
            <TableColumn>League</TableColumn>
            <TableColumn>Court</TableColumn>
          </TableRow>
        </TableHeader>
        {/* <TableBody> */}
          {/*matches.map((match, index) => (
            <TableRow key={index}>
              <TableCell>{match.matchDate}</TableCell>
              <TableCell>الوثبة</TableCell>
              <TableCell>{match.matchState}</TableCell>
              <TableCell>{match.team}</TableCell>
              <TableCell>{match.championship}</TableCell>
              <TableCell>{match.court}</TableCell>
            </TableRow>
      ))}
            */}
        {/* </TableBody> */}
      </Table>
    </div>
  );
}
