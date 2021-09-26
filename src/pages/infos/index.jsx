import { NewInfo } from '../../components/newInfo'
import { Summary } from '../../components/summary'
import { InfoTable} from '../../components/table'

import {Container} from './style'
export function Infos(){
    return(
        <Container>
            <Summary />
            <NewInfo />
            <InfoTable />
        </Container>
    )
}

export default Infos