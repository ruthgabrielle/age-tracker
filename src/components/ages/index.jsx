import { NewAge } from '../newAge'
import { Summary } from '../summary'
import { AgeTable} from '../table'

import {Container} from './style'
export function Ages(){
    return(
        <Container>
            <Summary />
            <NewAge />
            <AgeTable />
        </Container>
    )
}

export default Ages