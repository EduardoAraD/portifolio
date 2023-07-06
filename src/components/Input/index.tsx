import { InputHTMLAttributes } from 'react';
import { FiSearch } from 'react-icons/fi';

import styles from './styles.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  onClickSearch: () => void;
}

export const Input = ({onClickSearch, ...rest}: Props) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Procure repositórios por name ou tecnologias"
        {...rest}
      />
      <button onClick={onClickSearch}>
        <FiSearch size={27} />
      </button>
    </div>
  )
}
