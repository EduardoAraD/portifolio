import Link from 'next/link';

import styles from './styles.module.scss';

export function Header () {
  return (
    <div className={styles.header}>
      <h3>Eduardo Araújo</h3>
      <div>
        <Link href="/">Home</Link>
        <Link href="/experiencia">Experiência</Link>
        <Link href="/portifolio">Portifólios</Link>
      </div>
    </div>
  )
}
