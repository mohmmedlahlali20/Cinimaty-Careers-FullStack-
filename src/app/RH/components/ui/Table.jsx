import React from 'react'

/**
 * @typedef {Object} TableProps
 * @property {React.ReactNode} children 
 * @property {string} [className] 
 */

/**
 * Table component
 * @param {TableProps} props
 */
export function Table({ children, className, ...props }) {
  return (
    <div className="relative w-full overflow-x-auto">
      <table className={`min-w-full caption-bottom text-sm text-gray-700 ${className}`} {...props}>
        {children}
      </table>
    </div>
  )
}

/**
 * @typedef {Object} TableHeaderProps
 * @property {React.ReactNode} children 
 * @property {string} [className]
 */

/**
 * TableHeader component
 * @param {TableHeaderProps} props
 */
export function TableHeader({ children, className, ...props }) {
  return (
    <thead className={`bg-gray-100 text-gray-600 ${className}`} {...props}>
      {children}
    </thead>
  )
}

/**
 * @typedef {Object} TableBodyProps
 * @property {React.ReactNode} children
 * @property {string} [className]
 */

/**
 * TableBody component
 * @param {TableBodyProps} props
 */
export function TableBody({ children, className, ...props }) {
  return <tbody className={`${className}`} {...props}>{children}</tbody>
}

/**
 * @typedef {Object} TableRowProps
 * @property {React.ReactNode} children
 * @property {string} [className] 
 */

/**
 * TableRow component
 * @param {TableRowProps} props
 */
export function TableRow({ children, className, ...props }) {
  return (
    <tr
      className={`transition-colors hover:bg-gray-100 even:bg-gray-50 odd:bg-white border-b last:border-0 ${className}`}
      {...props}
    >
      {children}
    </tr>
  )
}

/**
 * @typedef {Object} TableHeadProps
 * @property {React.ReactNode} children
 * @property {string} [className] 
 */

/**
 * TableHead component
 * @param {TableHeadProps} props
 */
export function TableHead({ children, className, ...props }) {
  return (
    <th
      className={`px-6 py-3 text-left font-semibold text-gray-700 uppercase tracking-wider ${className}`}
      {...props}
    >
      {children}
    </th>
  )
}

/**
 * @typedef {Object} TableCellProps
 * @property {React.ReactNode} children 
 * @property {string} [classNam e] 
 */

/**
 * TableCell component
 * @param {TableCellProps} props
 */
export function TableCell({ children, className, ...props }) {
  return (
    <td
      className={`px-6 py-4 text-sm text-gray-600 align-middle ${className}`}
      {...props}
    >
      {children}
    </td>
  )
}
