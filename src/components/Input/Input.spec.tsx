import { render, screen } from "@testing-library/react"
import { Input } from "."

describe('Input component', () => {
  it('renders correcty', () => {
    render(<Input />);

    expect(screen.getByPlaceholderText('Procure por name ou tecnologias')).toBeInTheDocument();
  })
})