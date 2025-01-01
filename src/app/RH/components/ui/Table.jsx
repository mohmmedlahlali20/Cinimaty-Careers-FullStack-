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
    <div className="relative w-full overflow-auto">
      <table className={`w-full caption-bottom text-sm ${className}`} {...props}>
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
    <thead className={`[&_tr]:border-b ${className}`} {...props}>
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
  return <tbody className={`[&_tr:last-child]:border-0 ${className}`} {...props}>{children}</tbody>
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
      className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted ${className}`}
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
      className={`h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className}`}
      {...props}
    >
      {children}
    </th>
  )
}

/**
 * @typedef {Object} TableCellProps
 * @property {React.ReactNode} children 
 * @property {string} [className] 
 */

/**
 * TableCell component
 * @param {TableCellProps} props
 */
export function TableCell({ children, className, ...props }) {
  return (
    <td
      className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className}`}
      {...props}
    >
      {children}
    </td>
  )
}

