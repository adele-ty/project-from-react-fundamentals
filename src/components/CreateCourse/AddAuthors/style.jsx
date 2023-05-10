import styled from 'styled-components'
import { Row } from '../../../common/CommonHTML'

export const Line = styled(Row)`
    & > div {
        flex: 1;
    }
    & > :first-child {
        margin-right: 100px;
    }
`
