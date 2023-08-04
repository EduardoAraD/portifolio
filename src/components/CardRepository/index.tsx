import Image from 'next/image';
import { FaReact, FaHtml5, FaSass, FaCcStripe } from 'react-icons/fa';
import {
  SiFauna,
  SiJest,
  SiTailwindcss,
  SiTypescript,
  SiExpo,
  SiFastify,
  SiPrisma,
  SiPrismic,
  SiJavascript
} from 'react-icons/si';
import { IoLogoCss3, IoLogoNodejs } from 'react-icons/io';
import { TbBrandNextjs, TbMap2, TbBrandReactNative } from 'react-icons/tb';

import { IconTecnology } from '../../models/repository';

import styles from './styles.module.scss';

type Props = {
  name: string;
  content: string;
  iconTecnologies: IconTecnology[];
  linkGitHub: string;
}

export function CardRepository({ content, iconTecnologies, name, linkGitHub }: Props) {

  function renderIcon(icon: IconTecnology) {
    switch(icon) {
      case 'Animated': return <Image src="/iconSkia.png" alt='icon Animated Skia' height={20} width={20} />
      case 'CSS': return <IoLogoCss3 color='#4b60cb' />
      case 'Expo': return <SiExpo color='#131313' />
      case 'Fastify': return <SiFastify color='#131313' />
      case 'FaunaDB': return <SiFauna color='#3A1AB6' />
      case 'Flutter': return <Image src="/iconFlutter.png" alt='icon Flutter' height={20} width={20} />
      case 'HTML': return <FaHtml5 color='#E65100' />
      case 'JavaScript': return <SiJavascript color='#C3C300' />
      case 'Jest': return <SiJest color='#99425b' />
      case 'Maps': return <TbMap2 color='#199900' />
      case 'Native Base': return <Image src="/iconNativeBase.svg" alt='icon Native Base' height={20} width={20} />
      case 'NextJs': return <TbBrandNextjs color='#131313' />
      case 'Node': return <IoLogoNodejs color='#5FA04E' />
      case 'Prisma': return <SiPrisma color='#183e53' />
      case 'Prismic': return <SiPrismic color='#131313' />
      case 'React JS': return <FaReact color='#0074a6' />
      case 'React Native': return <TbBrandReactNative color=' #61dafb' />
      case 'SASS': return <FaSass color='#CF649A' />
      case 'Stripe': return <FaCcStripe color='#635bff' />
      case 'Styled-Component': return <Image src="/iconStyled.png" alt='icon Styled components' height={20} width={20} />
      case 'TailwindCSS': return <SiTailwindcss color='#38bdf8' />
      case 'TypeScript': return <SiTypescript color='#3178c6' />
      case 'Vite': return <Image src="/iconVite.svg" alt='icon Vite' height={16} width={16} />
    }
  }

  return (
    <a href={linkGitHub} target='_blank' className={styles.card}>
      <h2 className={styles.floating}>{name}</h2>
      <p>{content}</p>
      <div>
      {iconTecnologies.map(item => (
        <div key={item} className={styles.tooltip} title={item}>
          {renderIcon(item)}
          <span className={styles.tooltiptext}>{item}</span>
        </div>
      ))}
      </div>
    </a>
  )
}
