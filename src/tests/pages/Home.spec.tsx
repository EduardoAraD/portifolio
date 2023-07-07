import { render, screen } from "@testing-library/react"

import Home from "../../app/page"

describe('home screen', () => {
  it('renders correcty', () => {
    render(<Home />)

    expect(screen.getByText(/olá, sou eduardo, um desenvolvedor frontend./i)).toBeInTheDocument();
    expect(screen.getByRole('heading', {
      name: /biografia/i
    })).toBeInTheDocument()
  })

  it('clicked on the icons', () => {
    render(<Home />)

    expect(screen.getByTestId('iconGitHub')).toHaveAttribute('href', "https://github.com/EduardoAraD");
    expect(screen.getByTestId('iconInstagram')).toHaveAttribute('href', "https://www.instagram.com/duduh_arad/");
    expect(screen.getByTestId('iconLinkedin')).toHaveAttribute('href', "https://www.linkedin.com/in/eduardo-araujo-2a679a176/");
  })
})
