'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export default function EmployeeForm({ onSubmit, schema, defaultValues = {}, onCancel }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4 p-4 border rounded space-y-4 bg-gray-50">
      <div>
        <label className="block mb-1">نام:</label>
        <input {...register('name')} className="w-full border rounded px-2 py-1" type="text" />
        {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block mb-1">سمت:</label>
        <input {...register('position')} className="w-full border rounded px-2 py-1" type="text" />
        {errors.position && <p className="text-red-600 text-sm">{errors.position.message}</p>}
      </div>

      <div>
        <label className="block mb-1">ایمیل:</label>
        <input {...register('email')} className="w-full border rounded px-2 py-1" type="email" />
        {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
      </div>

      <div className="flex gap-2">
        <button type="submit" className="bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700">
          ذخیره
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-400 text-white rounded px-4 py-2 hover:bg-gray-500"
          >
            انصراف
          </button>
        )}
      </div>
    </form>
  )
}
