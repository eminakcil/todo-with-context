import { useField } from 'formik'

export default function Input({ label, ...props }) {
  const [field] = useField(props)
  return (
    <>
      <label className="form-label">{label}</label>
      <input
        type="text"
        className="form-input"
        placeholder={label}
        {...field}
        {...props}
      />
    </>
  )
}
