let employeesDB = [
  { id: 1, name: 'علی رضایی', position: 'مدیر', email: 'ali@example.com' },
  { id: 2, name: 'زهرا موسوی', position: 'کارمند', email: 'zahra@example.com' },
  { id: 3, name: 'محمد کریمی', position: 'پشتیبانی', email: 'mohammad@example.com' },
]

export function fetchEmployees() {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...employeesDB]), 500)
  })
}

export function addEmployee(newEmp) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const id = employeesDB.length ? employeesDB[employeesDB.length - 1].id + 1 : 1
      employeesDB.push({ id, ...newEmp })
      resolve(true)
    }, 500)
  })
}

export function deleteEmployee(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      employeesDB = employeesDB.filter((e) => e.id !== id)
      resolve(true)
    }, 500)
  })
}
