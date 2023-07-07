'use client'
import { useCallback, useState, ChangeEvent, useMemo, useEffect } from 'react';

import { Input } from '../../components/Input';
import { CardRepository } from '../../components/CardRepository';

import { Repository } from '../../models/repository';

import { repositories as repositoriesStorage } from '../../storage/Repositories';

import styles from '../../styles/screens/portifolio.module.scss';

export default function Portifolio() {
  const [filter, setFilter] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const onChangeTextFilter = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  }, []);

  const repositoriesFilter = useMemo(() => {
    return repositories.filter(item => {
      if(item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) return true;
      else {
        return item.tecnologies.find(tec =>
          tec.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        )
      }
    });
  }, [filter, repositories]);

  useEffect(() => {
    setRepositories(repositoriesStorage);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Repositórios</h1>
      <span>Procure pelos repositórios pelo nome ou bibliotecas</span>
      <Input
        value={filter}
        onChange={onChangeTextFilter}
      />

      <div className={styles.list}>
        {repositoriesFilter.map(item => (
          <CardRepository
            key={item.name}
            content={item.description}
            iconTecnologies={item.tecnologies}
            name={item.name}
            linkGitHub={item.linkGitHub}
          />
        ))}
      </div>
    </div>
  )
}
