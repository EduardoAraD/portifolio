import { Project } from "../../models/project";

export const projects: Project[] = [
  {
    name: 'Servnac Colaborador',
    content: 'Foi um projeto que participei criando e fazendo manutenção das funcionalidades. Possui um site e um aplicativo em Android e IOS',
    links: [
      { icon: 'Web', link: 'https://servnaccolaborador.com/' },
      { icon: 'Android', link: 'https://play.google.com/store/apps/details?id=com.servnaccolaborador' },
      { icon: 'IOS', link: 'https://apps.apple.com/br/app/app-servnac-colaborador/id1611601123' },
    ]
  },
  {
    name: 'Gestão de Limpeza',
    content: 'Nesso projeto o que se destaca foi nossa equipe teve que refazer todo o layout em todas as plataformas(Web e Mobile). Fui responsável pelo Mobile com Android e IOS, em que eu criei a versão IOS para o aplicativo.',
    links: [
      { icon: 'Android', link: 'https://play.google.com/store/apps/details?id=com.gestaoqr' },
      { icon: 'IOS', link: 'https://apps.apple.com/br/app/servnac-gest%C3%A3o-de-limpeza/id1609296705' },
    ]
  },
  {
    name: 'Gestão de Segurança',
    content: 'Igual ao Limpeza, esse projeto tambem teve que ser refeito. Minha responsabilidade era o mobile com Android e IOS. E nesse também criei uma versão IOS para o aplicativo.',
    links: [
      { icon: 'Android', link: 'https://play.google.com/store/apps/details?id=com.gestaosegurancaqr' },
      { icon: 'IOS', link: 'https://apps.apple.com/br/app/gest%C3%A3o-de-seguran%C3%A7a/id1608411955' },
    ]
  },
  {
    name: 'Tapp',
    content: 'Esse foi o único projeto que criei totalmente do zero. E foi a base para criar a versão 2.0 do Gestão de Limpeza',
    links: [
      { icon: 'Android', link: 'https://play.google.com/store/apps/details?id=com.tappmobile' },
      { icon: 'IOS', link: 'https://apps.apple.com/br/app/tappmobile/id1590907786' },
    ]
  },
]
