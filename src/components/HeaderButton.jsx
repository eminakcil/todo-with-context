import { createElement } from 'react'

export default function HeaderButton({ children, className = '', ...props }) {
  return createElement(
    'button',
    {
      className: [
        'border text-gray-400 border-gray-700 border-t-0 hover:bg-blue-600 hover:border-white hover:text-white px-4 py-2 rounded-b-xl',
        className,
      ]
        .join(' ')
        .trim(),
      ...props,
    },
    children
  )
}
