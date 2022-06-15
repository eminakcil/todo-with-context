import { useField } from 'formik'
import classNames from 'classnames'
export default function Input({ label, errors, touched, ...props }) {
  const [field] = useField(props)

  const invalid = errors && touched

  return (
    <>
      <label
        className={classNames({
          'form-label': true,
          invalid,
        })}
      >
        {label}
      </label>
      <input
        type="text"
        className={classNames({
          'form-input': true,
          invalid,
        })}
        placeholder={label}
        {...field}
        {...props}
      />
    </>
  )
}
