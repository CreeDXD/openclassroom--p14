//table of the employee page

import { useTable } from 'react-table'

const EmployeeTable = ({columns, data}) =>{
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({columns, data})
    
    return (
        <table {...getTableProps()} style={{ border: '1px solid black', width: '100%'}}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()} style={{ background: '#f2f2f2' }}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()} style={{ padding: '10px', borderBottom: '1px solid black' }}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} style={{ borderBottom: '1px solid black' }}>
                  {row.cells.map(cell => (
                    <td {...cell.getCellProps()} style={{ padding: '10px' }}>
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      );
}
export default EmployeeTable
