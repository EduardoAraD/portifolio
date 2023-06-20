import { render, screen } from "@testing-library/react"
import { Footer } from "."

describe('Footer components', () => {
  it('renders correcty', () => {
    render(<Footer />)

    expect(screen.getByText('@Copyright EduardoAraujo')).toBeInTheDocument()
  })
})
