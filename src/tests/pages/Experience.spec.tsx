import { render, screen } from "@testing-library/react"

import Experience from "../../app/experiencia/page";

describe('Experience screen', () => {
  it('renders correcty', () => {
    render(<Experience />)

    expect(screen.getByText(/formação/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', {
      name: /universidade federal do ceará/i
    })).toBeInTheDocument();
    expect(screen.getByRole('heading', {
      name: /grupo servnac/i
    })).toBeInTheDocument();
  })
})
