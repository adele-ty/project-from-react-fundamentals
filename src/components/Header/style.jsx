import styled from 'styled-components'
import { Box } from '../../common/CommonHTML'

export const HeaderBox = styled(Box)`
display: flex;
flex-direction: row;
& > img {
    width: 36px;
    height: 36px;
}
& > span {
    margin-left: auto;
    margin-right: 20px;
    color: green;
    height: 36px;
    line-height: 36px;
}
& > button {
    margin-right: 10px;
    margin-top: 2px;
}
`
