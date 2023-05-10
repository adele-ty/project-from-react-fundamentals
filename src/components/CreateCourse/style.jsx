import styled from 'styled-components'
import { Box } from '../../common/CommonHTML'

export const StyledCreateCourse = styled(Box)`
margin-top: 20px;
display: flex;
flex-direction: column;
& > div {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    & span {
        margin-bottom: 10px;
    }
    & textarea {
        border: 1px solid rgb(239, 236, 142);
    }
}
& > :first-child {
    & > div {
        display: flex;
    }
    & input {
        width: 200px;
        height: 30px;
    }
    & button {
        padding: 7px;
        margin-left: auto;
        height: 30px;
        margin-right: 0;
    }
}
`
