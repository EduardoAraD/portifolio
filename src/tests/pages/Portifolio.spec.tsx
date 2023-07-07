import { fireEvent, render, screen } from "@testing-library/react"

import Portifolio from "../../app/portifolio/page"
import { repositories } from "../../storage/Repositories"

describe('Portifolio screen', () => {
  it('renders correcty', () => {
    render(<Portifolio />)

    expect(screen.getByText(/procure pelos repositórios pelo nome ou bibliotecas/i)).toBeInTheDocument();

    repositories.forEach(repository => {
      expect(screen.getByText(repository.name)).toBeInTheDocument();
    })
  })

  it('filtering repositories by name', () => {
    render(<Portifolio />)

    const input = screen.getByTestId('input')
    fireEvent.change(input, { target: { value : 'Happy' }})

    expect(input.value).toBe('Happy')

    repositories.forEach(repository => {
      if(repository.name.includes(input.value)) {
        expect(screen.getByText(repository.name)).toBeInTheDocument();
      }
    })
  })

  it('filtering repositories by technology', () => {
    render(<Portifolio />)

    const input = screen.getByTestId('input')
    fireEvent.change(input, { target: { value : 'Jest' }})

    expect(input.value).toBe('Jest')

    repositories.forEach(repository => {
      if(repository.tecnologies.find(tecnology =>
        tecnology.toLocaleLowerCase().includes(input.value.toLocaleLowerCase())
      )) {
        expect(screen.getByText(repository.name)).toBeInTheDocument();
      }
    })
  })
})