import styles from './styles.module.scss';

interface BackgroundProps {
  children: React.ReactNode;
}

export function Background ({ children }: BackgroundProps) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
