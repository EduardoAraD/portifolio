import { render, screen } from "@testing-library/react"
import { Header } from "."

describe('Header components', () => {
  it('renders correcty', () => {
    render(<Header />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Experiência')).toBeInTheDocument()
    expect(screen.getByText('Portifólios')).toBeInTheDocument()
  })
})
