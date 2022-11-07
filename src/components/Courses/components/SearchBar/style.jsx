import styled from 'styled-components'

export const StyledSearchBar = styled.div`
    height: 30px;
    display: flex;
    flex-direction: row;
    & > * {
        box-sizing: content-box;
        height: 18px;
    }
    & > input {
        width: 300px;
        margin-right: 30px;
    }
    & > :last-child {
        margin-right: 0;
        margin-left: auto;
    }
`
