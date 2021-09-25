import { Container } from "./style"
export function Summary(){
    return (
        <Container>
          <div>
            <header>
              <p> Highest </p>
            </header>
            <strong> 5 </strong>
          </div>
          <div>
            <header>
              <p> Lowest </p>
            </header>
            <strong> 5 </strong>
          </div>
          <div>
            <header>
              <p> Average </p>
            </header>
            <strong> 8 </strong>
          </div>
        </Container>
      )
}