import { render, screen } from "@testing-library/react"
import { ProjectCard } from "."

describe('ProjectCard component', () => {
  it('renders correcty', () => {
    const { container } = render(
      <ProjectCard
        content="Exemple content"
        links={[{ icon: 'Android', link: 'https://github.com/EduardoAraD' }]}
        name="Exemple Name"
      />
    )

    expect(screen.getByText('Exemple Name')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', "https://github.com/EduardoAraD");

    expect(container.querySelector('a > svg')).toBeInTheDocument();
  })

  it('icon equals default', () => {
    const { container } = render(
      <ProjectCard
        content="Exemple content"
        links={[{ icon: 'default', link: '' }]}
        name="Exemple Name"
      />
    )

    expect(container.querySelector('div > svg')).toBeInTheDocument();
  })
})