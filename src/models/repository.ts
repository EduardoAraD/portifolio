export type IconTecnology = 'NextJs' | 'HTML' | 'React JS' | 'React Native' | 'TailwindCSS' |
  'JavaScript' | 'TypeScript' | 'Node' | 'Flutter' | 'FaunaDB' | 'Jest' | 'SASS' | 'CSS' |
  'Styled-Component' | 'Expo' | 'Fastify' | 'Prisma' | 'Vite' | 'Prismic' | 'Stripe' | 'Maps';

export interface Repository {
  name: string;
  description: string;
  tecnologies: IconTecnology[];
  linkGitHub: string;
}
