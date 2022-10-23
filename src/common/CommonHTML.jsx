import styled from 'styled-components'

export const StyledInput = styled.input`
height: 30px;
box-sizing: border-box;
border: 1px solid rgb(216, 160, 111);
padding: 5px 10px;
`
export const StyledButton = styled.button`
    border-radius: 4px;
    width: 105px;
    height: 30px;
    padding: 7px;
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
`
export const Span = styled.span`
    text-align: center;
    font-weight: bold;
    font-size: medium;
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
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
export const StyledCourses = styled(Box)`
margin-top: 20px;
& > ul {
    padding: 0;
}
`
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
export const StyledAuthorItem = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
    & > * {
        flex: 1;
    }
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
export const Line = styled(Row)`
    & > div {
        flex: 1;
    }
    & > :first-child {
        margin-right: 100px;
    }
`
