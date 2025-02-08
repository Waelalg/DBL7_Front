"use client"
export function Input({ type, placeholder, value, onChange, required }: any) {
  return <input type={type} placeholder={placeholder} value={value} onChange={onChange} required={required} className="border p-2 rounded" />
}
