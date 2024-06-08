import { clsx } from 'clsx'
import type {
  DetailedHTMLProps,
  TableHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from 'react'
import * as styles from './table.css'

export const Table = ({
  className,
  ...props
}: DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>) => {
  return <table className={clsx(className, styles.table)} {...props} />
}

export const Th = ({
  className,
  ...props
}: DetailedHTMLProps<ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>) => {
  return <th className={clsx(className, styles.th)} {...props} />
}
export const Td = ({
  className,
  ...props
}: DetailedHTMLProps<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>) => {
  return <td className={clsx(className, styles.td)} {...props} />
}
