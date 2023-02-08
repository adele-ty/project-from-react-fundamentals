import styled from 'styled-components'
import { Box } from '../../../../common/CommonHTML'

export const BtnBox = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
`
export const StyledCourseCard = styled(Box)`
display: flex;
flex-direction: row;
margin-top: 25px;
& > * {
    display: flex;
    flex-direction: column;
}
& > :first-child {
    flex: 7;
    & > :first-child {
        margin-top: -5px;
        font-weight: bold;
        font-size: xx-large;
        margin-bottom: 20px;
    }
}
& > :last-child {
    padding-left: 30px;
    flex: 3;
    & > div {
        margin-bottom: 10px;
        & > #info {
            font-weight: bold;
            font-size: medium;
        }
    }
    & > button {
        margin: auto auto 0 auto;
    }
}
`
