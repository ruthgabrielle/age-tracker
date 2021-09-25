import { useContext } from "react";
import { InfoContext } from "../../InfoContext";
import { Container } from "./styles";

export function AgeTable() {
  const {infos} = useContext(InfoContext)

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {infos.map((info) => (
            <tr key={info.id}>
              <td>{info.firstName}</td>
              <td>{parseFloat(info.age)}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
