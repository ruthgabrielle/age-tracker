import { Container } from './style'

export function NewAge() {
  return (
    <Container className="content">
      <h2> Insert a new age </h2>
      <input 
      placeholder="Name" 
      />
      <input 
      placeholder="New Age" 
      />
      <button type="submit"> + </button>
    </Container>
  )
}
