import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchEmployees, addEmployee, deleteEmployee } from '@/utils/api'
import toast from 'react-hot-toast'


export function useEmployees() {
  const queryClient = useQueryClient()

  const employeesQuery = useQuery({
    queryKey: ['employees'],
    queryFn: fetchEmployees,
  })

  const addMutation = useMutation({
    mutationFn: addEmployee,
    onSuccess: () => {
      toast.success('کارمند اضافه شد')
      queryClient.invalidateQueries({ queryKey: ['employees'] })
    },
    onError: () => {
      toast.error('خطا در افزودن کارمند')
    },
  })

  const deleteMutation = useMutation({
    mutationFn: deleteEmployee,
    onSuccess: () => {
      toast.success('کارمند حذف شد')
      queryClient.invalidateQueries({ queryKey: ['employees'] })
    },
    onError: () => {
      toast.error('خطا در حذف کارمند')
    },
  })

  return { ...employeesQuery, addMutation, deleteMutation }
}
