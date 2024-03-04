//table of the employee page
import React, { useMemo } from 'react'
import { useGlobalFilter , useTable, usePagination } from 'react-table'

const EmployeeTable = ({columns, data}) =>{

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        page,
        setGlobalFilter,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
    } = useTable(
      {columns, data, initialState: { pageIndex: 0, pageSize: 3 }},
      useGlobalFilter,
      usePagination
    )

    const { globalFilter, pageIndex, pageSize } = state;

   useMemo(() => columns, [columns]);
    
    return (
      <>
        <label htmlFor="search">
          Search by Task:&nbsp;
          <input
            id="search"
            type="text"
            value={globalFilter || ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search..."
          />
        </label>
        <br />
  
        <table {...getTableProps()} style={{ border: '1px solid black', width: '100%' }}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} style={{ background: '#f2f2f2' }}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()} style={{ padding: '10px', borderBottom: '1px solid black' }}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} style={{ borderBottom: '1px solid black' }}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} style={{ padding: '10px' }}>
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous Page
          </button>
          <span style={{ margin: '0 10px' }}>
          Page {rows.length > 0 ? pageIndex + 1 : 0} of {Math.max(Math.ceil(rows.length / pageSize), 0)}
          </span>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            Next Page
          </button>
        </div>
      </>
    );
    
}
export default EmployeeTable
