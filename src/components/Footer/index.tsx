import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';
import styles from './styles.module.scss';

export function Footer() {
  return(
    <div className={styles.footer}>
      <p>@Copyright EduardoAraujo</p>
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
  )
}