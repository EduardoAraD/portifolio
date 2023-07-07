import Image from 'next/image';

import { ProjectCard } from '../../components/ProjectCard';

import { projects } from '../../storage/Projects';

import styles from '../../styles/screens/experience.module.scss';
import ufcImage from '../../../public/ufc.jpeg';
import servnacImg from '../../../public/servnac.jpeg';

export default function Experience() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h1>Formação</h1>
        <div className={styles.info}>
          <Image src='/ufc.jpeg' alt='UFC Russas' quality={80} width={400} height={260} />
          <div>
            <h2>Engenharia de Software</h2>
            <div>
              <h3>Universidade Federal do Ceará</h3>
              <span>Março 2015 - Junho 2019</span>
            </div>
            <p>
              {"   "}Foi na faculdade que tive meu primeiro contato com a programação e foi quase paixão a primeira vista.
              Me destaquei por conta da minha facilidade de ler e entender códigos e por ter uma ótima lógica para resolver 
              problemas. Sempre ajudei meus amigos em cadeiras difíceis e fui monitor de algumas delas.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <h1>Experiência Profissional</h1>
        <div className={styles.info}>
          <Image src="/servnac.jpeg" alt='Grupo Servnac' width={400} height={260} />
          <div>
            <h2>Desenvolvedor Front-End Junior|Pleno</h2>
            <div>
              <h3>Grupo Servnac</h3>
              <span>Março 2015 - Junho 2019</span>
            </div>
            <p>
              {"   "}No Grupo Servnac, trabalhei com Front-End, principalmente com Mobile. Com eles, trabalhei em três
              principais projetos da <span>Servnac, Servnac Colaborador, Gestão de Limpeza e Gestão de Segurança</span>. Me trabalho principal
              foi criar novas funcionalidades além de fazer manutenção e correção de outras. Também trabalhei na parte de deploy
              em sites e aplicativos no <b>AWS, Google Play e Apple Store</b>.
            </p>
          </div>
        </div>
        <div className={styles.projects}>
          <h3>Principais Projetos</h3>
          {projects.map(project => (
            <ProjectCard
              key={project.name}
              data-testid={project.name}
              content={project.content}
              links={project.links}
              name={project.name}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
