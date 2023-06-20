import { render, screen } from '@testing-library/react'
import { Background } from '.'

describe('Background component', () => {
  it('renders corretly', () => {
    render(
      <Background>
        <h1>test</h1>
      </Background>
    );

    expect(screen.getByRole('heading', { name: /test/i })).toBeInTheDocument()
  })
})