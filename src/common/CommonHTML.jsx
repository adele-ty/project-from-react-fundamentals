import styled from 'styled-components'

export const StyledInput = styled.input`
height: 30px;
box-sizing: border-box;
border: 1px solid rgb(216, 160, 111);
padding: 5px 10px;
`
export const StyledButton = styled.button`
    border-radius: 4px;
    width: ${(props) => (props.id === 'smallBtn' ? '35px' : '105px')};
    height: 30px;
    margin-left: ${(props) => (props.id === 'smallBtn' ? '15px' : '')};
    padding: ${(props) => (props.id === 'smallBtn' ? '4px' : '7px')};
    color: #bac7e5;
    background-color: papayawhip;
    border-color: papayawhip;
    display: inline-block;
    line-height: 5px;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid #bac7e5;
    text-align: center;
    box-sizing: border-box;
    font-size: 14px;
    :hover {
        border-color: #abadd4;
        color: #abadd4;
    }
    & > img {
        width: 100%;
        height: 100%;
    }
`
export const Span = styled.span`
    font-weight: bold;
    font-size: x-large;
    text-align: center;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
`

export const Box = styled.div`
    border: 1px solid ${(props) => {
    if (props.id === 'blue') return 'rgb(107, 184, 229)'
    if (props.id === 'green') return 'green'
    if (props.id === 'orange') return 'rgb(249, 201, 201)'
    return 'black'
  }};
    padding: 20px;
`

export const AddAuthor = styled(Column)`
    & > div {
        margin-bottom: 20px;
    }
    & > button {
        margin: 0 auto;
    }
`
export const Authors = styled(AddAuthor)`
    margin-right: 0;
    & > ul {
        display: flex;
        flex-direction: column;
        padding-inline-start: 0;
        text-align: center;
        list-style: none;
    }
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
`

export const RegisterLogin = styled(Box)`
    margin-top: 20px;
    & > form > div {
        & > :first-child{
            margin-bottom: 25px;
        }
       margin: 0 auto;
       width: 300px;
       & > :last-child {
        text-align: center;
       }
    }
    & input {
        width: 100%;
        margin: 15px 0;
    }
    & button {
        width: 100px;
        margin: 5px auto;
    }
`
