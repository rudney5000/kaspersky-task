import styles from './Badge.module.scss'

interface BadgeProps {
  group: string
}

export const Badge = ({ group }: BadgeProps) => {
  return <span className={styles.badge}>{group}</span>
}
