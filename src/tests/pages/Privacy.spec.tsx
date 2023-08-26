import { render, screen } from "@testing-library/react"

import Privacy from "../../app/privacy/page";

describe('Privacy screen', () => {
  it('renders correcty', () => {
    render(<Privacy />)

    expect(screen.getByText('POLÍTICA DE PRIVACIDADE')).toBeInTheDocument();
    expect(screen.getByText("7. Como entrar em contato conosco")).toBeInTheDocument();
  })
});
