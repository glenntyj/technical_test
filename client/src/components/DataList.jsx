import React, { useState, useEffect } from 'react';
import { Table, Pagination  } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;

const DataList = ({ data }) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const handleChangeLimit = (dataKey) => {
    setPage(1);
    setLimit(dataKey);
  };

  const partialData = data.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  });

  return (
    <div>
      <Table
        height={410}
        data={partialData}
        bordered
      >
        <Column width={50} align="center" fixed>
          <HeaderCell>Post Id</HeaderCell>
          <Cell>
            {rowData=>rowData[Object.keys(rowData)[0]]}  
          </Cell> 
        </Column>

        <Column width={50} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={100} fixed fullText>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column width={100} fixed fullText>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>

        <Column width={200} flexGrow={1} fullText>
          <HeaderCell>Body</HeaderCell>
          <Cell dataKey="body" />
        </Column>

      </Table>
      <div style={{ padding: 20 }}>
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          maxButtons={5}
          size="xs"
          layout={['total', '-', '|', 'pager', 'skip']}
          total={data.length}
          limit={limit}
          onChangePage={setPage}
          onChangeLimit={handleChangeLimit}
        />
      </div>
      {/* <ul>
        {paginatedData.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
      <div>
        <button onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => setCurrentPage((page) => Math.min(page + 1, totalPages))} disabled={currentPage === totalPages}>
          Next
        </button>
      </div> */}
    </div>
  );
};

export default DataList;
