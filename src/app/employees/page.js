'use client'

import { useState } from 'react'
import { employeeSchema } from '../../models/employeeSchema'
import { useEmployees } from '../../hooks/useEmployees'
import EmployeeTable from '../../components/employees/EmployeeTable'
import EmployeeForm from '../../components/employees/EmployeeForm'

export default function EmployeesPage() {
  const { data: employees, isLoading, addMutation, deleteMutation } = useEmployees()
  const [showForm, setShowForm] = useState(false)

  const handleAdd = (data) => {
    addMutation.mutate(data)
  }

  const handleDelete = (id) => {
    deleteMutation.mutate(id)
  }

  return (
    <div className="p-6 bg-white rounded shadow">
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">لیست کارمندان</h1>
        <button
          onClick={() => setShowForm((v) => !v)}
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
        >
          {showForm ? 'انصراف' : 'افزودن کارمند'}
        </button>
      </div>

      {showForm && (
        <EmployeeForm
          onSubmit={handleAdd}
          schema={employeeSchema}
          onCancel={() => setShowForm(false)}
        />
      )}

      {isLoading ? (
        <p>در حال بارگذاری...</p>
      ) : (
        <EmployeeTable employees={employees} onDelete={handleDelete} />
      )}
    </div>
  )
}
