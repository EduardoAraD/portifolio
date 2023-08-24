export type IconTecnology = 'NextJs' | 'HTML' | 'React JS' | 'React Native' | 'TailwindCSS' |
  'JavaScript' | 'TypeScript' | 'Native Base' | 'Node' | 'Flutter' | 'FaunaDB' | 'Jest' | 'SASS' | 'CSS' |
  'Styled-Component' | 'Expo' | 'Fastify' | 'Prisma' | 'Vite' | 'Prismic' | 'Stripe' | 'Maps' | 'Animated' |
  'RealmDB' | 'Offline-First';

export interface Repository {
  name: string;
  description: string;
  tecnologies: IconTecnology[];
  linkGitHub: string;
}
