import { render, screen } from "@testing-library/react"
import { CardRepository } from "."

describe('CardRepository component', () => {
  it('renders corretly', () => {
    render(
      <CardRepository
        content="Exemple Content"
        iconTecnologies={['Expo', 'Flutter', 'HTML', 'JavaScript']}
        linkGitHub="https://github.com/EduardoAraD"
        name="Exemple Name"
      />
    );

    expect(screen.getByText(/exemple content/i)).toBeInTheDocument()
    expect(screen.getByText(/expo/i)).toBeInTheDocument()

    expect(screen.getByRole('link')).toHaveAttribute('href', "https://github.com/EduardoAraD")
  })
})
