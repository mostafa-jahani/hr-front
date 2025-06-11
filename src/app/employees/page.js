import EmployeeTable from '@/components/employees/EmployeeTable'


export default function EmployeesPage() {
  return (
    <div className="p-6">
      <h1 className="text-lg font-bold mb-4">لیست کارمندان</h1>
      <EmployeeTable />
    </div>
  )
}
