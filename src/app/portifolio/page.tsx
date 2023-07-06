'use client'
import { useCallback, useState, ChangeEvent, useMemo } from 'react';

import { Input } from '@/components/Input';
import { CardRepository } from '@/components/CardRepository';

import { repositories } from '@/storage/Repositories';

import styles from '../../styles/screens/portifolio.module.scss';

export default function Portifolio() {
  const [filter, setFilter] = useState('');

  const onChangeTextFilter = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  }, []);

  const rspositoriesFilter = useMemo(() => {
    return repositories.filter(item => item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }, [filter]);

  return (
    <div className={styles.container}>
      <h1>Repositórios</h1>
      <span>Procure pelos repositorios pelo nome ou bibliotecas</span>
      <Input
        value={filter}
        onChange={onChangeTextFilter}
        onClickSearch={() => {}}
      />

      <div className={styles.list}>
        {rspositoriesFilter.map(item => (
          <CardRepository
            key={item.name}
            content={item.description}
            iconTecnologies={item.tecnologies}
            name={item.name}
          />
        ))}
      </div>
    </div>
  )
}
