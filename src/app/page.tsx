import Image from "next/image";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

import styles from '../styles/screens/home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Olá, sou Eduardo, um Desenvolvedor FrontEnd.</h1>
      <div className={styles.biografy}>
        <div className={styles.contact}>
          <div className={styles.border}>
            <Image
              src='https://github.com/EduardoAraD.png' 
              alt="Foto de perfil github"
              width={150}
              height={150}
            />
          </div>
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
        <div className={styles.info}>
          <h3>Biografia</h3>
          <p>
          Sou de Caucaia-CE, trabalho com entusiasmo para criar soluções criativas e impactantes. Ao longo dos anos, aprimorei
          meus conhecimentos em <span>Desenvolvimento Front End</span> e desenvolvi um profundo conhecimento no <span>Desenvolvimento
          Mobile com React Native e Expo</span>. Com um olhar atento aos detalhes e uma abordagem centrada no usuário,
          procuro criar experiências únicas e cativantes que atendam às necessidades e desejos dos usuários.
          </p>
          <p>
          Meu portfólio reflete minha jornada profissional e minha dedicação em alcançar resultados excepcionais.
          Ele é composto por projetos desafiadores e diversificados, nos quais tive a oportunidade de colaborar com
          equipes talentosas e clientes inspiradores.
          </p>
          <p>
          Acredito na importância da comunicação clara e eficaz, tanto com os clientes quanto com os colegas de equipe.
          Busco entender profundamente as necessidades e objetivos do projeto para oferecer soluções sob medida, sempre
          buscando superar as expectativas.
          Estou aberto a novas oportunidades de colaboração e projetos. Se você está em busca de um profissional
          apaixonado por Tecnologia e comprometido em fornecer resultados excepcionais, adoraria conversar e explorar maneiras
          de trabalharmos juntos.
          </p>
          <p>
          Vamos construir algo incrível juntos! Entre em contato comigo clicando nos ícones das redes sociais.
          </p>
          <p>
          Muito obrigado(a) pela visita ao meu portifólio. Estou ansioso(a) para conhecer você e discutir
          como podemos alcançar grandes conquistas juntos!
          </p>
        </div>
      </div>
      <div className={styles.contactOut}>
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
{/* 
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
      </div> */}
    </div>
  )
}
