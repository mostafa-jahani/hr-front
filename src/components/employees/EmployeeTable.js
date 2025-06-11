'use client'

import { useMemo } from 'react'
import { useTable, useGlobalFilter } from 'react-table'

function omitKey(props) {
  const { key, ...rest } = props
  return rest
}

export default function EmployeeTable({ employees, onDelete }) {
  const data = useMemo(() => employees || [], [employees])

  const columns = useMemo(
    () => [
      { Header: 'نام', accessor: 'name' },
      { Header: 'سمت', accessor: 'position' },
      { Header: 'ایمیل', accessor: 'email' },
      {
        Header: 'عملیات',
        accessor: 'id',
        Cell: ({ value }) => (
          <button
            onClick={() => onDelete(value)}
            className="text-red-600 hover:underline"
          >
            حذف
          </button>
        ),
      },
    ],
    [onDelete]
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter)

  const { globalFilter } = state

  return (
    <>
      <input
        value={globalFilter || ''}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder="جستجو..."
        className="border rounded px-3 py-1 mb-3 w-full"
      />

      <table {...getTableProps()} className="w-full border-collapse text-sm">
        <thead className="bg-gray-100">
          {headerGroups.map((headerGroup, i) => {
            const headerGroupProps = omitKey(headerGroup.getHeaderGroupProps())
            return (
              <tr key={`headerGroup-${i}`} {...headerGroupProps}>
                {headerGroup.headers.map((column, j) => {
                  const headerProps = omitKey(column.getHeaderProps())
                  return (
                    <th
                      key={`header-${j}`}
                      {...headerProps}
                      className="p-2 border text-right font-semibold"
                    >
                      {column.render('Header')}
                    </th>
                  )
                })}
              </tr>
            )
          })}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="p-4 text-center text-gray-500">
                موردی یافت نشد
              </td>
            </tr>
          ) : (
            rows.map((row, i) => {
              prepareRow(row)
              const rowProps = omitKey(row.getRowProps())
              return (
                <tr key={`row-${i}`} {...rowProps} className="hover:bg-gray-50">
                  {row.cells.map((cell, j) => {
                    const cellProps = omitKey(cell.getCellProps())
                    return (
                      <td
                        key={`cell-${i}-${j}`}
                        {...cellProps}
                        className="border p-2 text-right"
                      >
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })
          )}
        </tbody>
      </table>
    </>
  )
}
