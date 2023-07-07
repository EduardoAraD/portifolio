import { InputHTMLAttributes } from 'react';
import { FiSearch } from 'react-icons/fi';

import styles from './styles.module.scss';

export const Input = ({...rest}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        data-testid='input'
        placeholder="Procure por name ou tecnologias"
        {...rest}
      />
      <div>
        <FiSearch size={27} />
      </div>
    </div>
  )
}
