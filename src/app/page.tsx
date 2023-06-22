import Image from "next/image";
import styles from './styles.module.scss';
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaReact } from 'react-icons/fa';
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Oi sou Eduardo, e estou buscando ser reconhecido pelo meu trabalho.</h1>
      <div className={styles.biografy}>
        <div className={styles.border}>
          <Image
            src='https://github.com/EduardoAraD.png' 
            alt="Foto de perfil github"
            width={150}
            height={150}
          />
        </div>
        <div className={styles.info}>
          <p>Biografia</p>
          <span>
            Sou de Caucaia, tenho 27 anos, trabalhei por 2 anos no Grupo Servnac
            e atualmente to estudando e buscando uma nova vaga no mercado.
          </span>
        </div>
        <div className={styles.contact}>
          <p>Redes Sociais</p>
          <div>
            <a href={"https://github.com/EduardoAraD"} target='_blank'>
              <FiGithub size={20} />
            </a>
            <a href={"https://www.instagram.com/duduh_arad/"} target='_blank'>
              <FiInstagram size={20} />
            </a>
            <a href={"https://www.linkedin.com/in/eduardo-araujo-2a679a176/"} target='_blank'>
              <FiLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.resume}>
        <div className={styles.whatDo}>
          <p>O que eu faço?</p>
          <span>
            Sou <b>Desenvolvedor Front-end</b> com <span>React Js e React Native</span> a mais de 3 anos.
            Fazendo a criação ou a manutenção de sites ou aplicativos (Android e IOS). Com experiência
            em projetos com grande quantidade de usuários.
          </span>
        </div>
        <ProjectCard
          name="React Native"
          content="Apesar de trabalhar com web e mobile, eu prefiro o mobile por conta
          da quantidade de opções que a gente pode fazer o celular,
          é divertido fazer meu proprio celular como cobaia para testes."
          links={[{ icon: "default", link: '1' }]}
        />
      </div>
    </div>
  )
}
