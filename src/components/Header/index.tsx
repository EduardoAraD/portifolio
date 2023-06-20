import Link from 'next/link';
import styles from './styles.module.scss';

export function Header () {
  return (
    <div className={styles.header}>
      <h3>Eduardo Araújo</h3>
      <div>
        <Link href="/" legacyBehavior >
          <a>Home</a>
        </Link>
        <Link href="/experiencia" legacyBehavior >
          <a>Experiência</a>
        </Link>
        <Link href="/portifolio" legacyBehavior >
          <a>Portifólio</a>
        </Link>
      </div>
    </div>
  )
}
