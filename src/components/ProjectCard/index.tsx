import { FaReact, FaApple } from 'react-icons/fa';
import { DiAndroid } from 'react-icons/di';
import { IconLink } from '@/models/project';
import styles from './styles.module.scss';
import { useCallback } from 'react';

type Props = {
  name: string;
  links: IconLink[];
  content: string;
}

export const ProjectCard = ({ content, links, name }: Props) => {
  const iconRender = (link: IconLink) => {
    switch(link.icon){
      case 'Web': return <FaReact size={20} />
      case 'Android': return <DiAndroid size={20} />
      case 'IOS': return <FaApple size={20} />
      case 'default': return <FaReact size={20} />
    }
  }

  const renderLinks = useCallback((item: IconLink) => {
    if(item.icon === 'default') {
      return (
        <div key={item.icon}>{iconRender(item)}</div>
      );
    } else {
      return (
        <a
          key={item.link}
          href={item.link}
          target='_blank'
        >
          {iconRender(item)}
        </a>
      )
    }
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <p>{name}</p>
        {links.map(item => renderLinks(item))}
      </div>
      <span>{content}</span>
    </div>
  )
}
