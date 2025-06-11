'use client'

import { useMemo } from 'react'
import { useTable } from 'react-table'
import { useEmployees } from '@/hooks/useEmployees'
import { Trash2 } from 'lucide-react'

export default function EmployeeTable() {
  const { data, isLoading, deleteMutation } = useEmployees()

  const columns = useMemo(
    () => [
      {
        Header: 'نام',
        accessor: 'name',
      },
      {
        Header: 'سمت',
        accessor: 'position',
      },
      {
        Header: 'ایمیل',
        accessor: 'email',
      },
      {
        Header: 'عملیات',
        Cell: ({ row }) => (
          <button
            onClick={() => deleteMutation.mutate(row.original.id)}
            className="text-red-600 hover:text-red-800 transition"
            aria-label="حذف کارمند"
            title="حذف"
          >
            <Trash2 size={20} />
          </button>
        ),
      },
    ],
    []
  )

  const tableInstance = useTable({ columns, data: data || [] })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

  if (isLoading) return <p className="p-6 text-center text-lg text-gray-500">در حال بارگذاری...</p>

  return (
    <div className="max-w-6xl mx-auto my-8 rounded-xl shadow-md border border-gray-300 bg-white overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-300 bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-800">لیست کارمندان</h2>
      </div>

      <div className="overflow-x-auto">
        <table
          {...getTableProps()}
          className="min-w-full table-auto text-sm text-right text-gray-700"
        >
          <thead className="bg-gray-100 text-gray-600 uppercase tracking-wider select-none">
            {headerGroups.map((headerGroup) => {
              const { key, ...headerGroupProps } = headerGroup.getHeaderGroupProps()
              return (
                <tr key={key} {...headerGroupProps}>
                  {headerGroup.headers.map((column) => {
                    const { key: keyCol, ...columnProps } = column.getHeaderProps()
                    return (
                      <th
                        key={keyCol}
                        {...columnProps}
                        className="px-6 py-3 border-b border-gray-300 font-semibold"
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
          {rows.map(row => {
            prepareRow(row)
            const { key, ...rowProps } = row.getRowProps()
            return (
              <tr key={key} {...rowProps} className="hover:bg-gray-100" style={{ height: '48px' }}>
                {row.cells.map(cell => {
                  const { key, ...cellProps } = cell.getCellProps()
                  return (
                    <td
                      key={key}
                      {...cellProps}
                      className="px-3 border-b"
                      style={{ height: '48px', verticalAlign: 'middle' }}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>

        </table>
      </div>
    </div>
  )
}
