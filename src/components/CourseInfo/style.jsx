import styled from 'styled-components'
import { Box } from '../../common/CommonHTML'

export const CourseInfoCard = styled(Box)`
    margin-top: 25px;
    & > #title {
        text-align: center;
        margin-bottom: 50px;
    }
    & > :last-child {
        & > :first-child {
            flex: 7;
            margin-right: 50px;
        }
        & > :last-child {
            flex: 3;
        }
    }
    & #span {
        height: 28px;
        line-height: 21px;
        font-weight: bold;
        font-size: medium;
    }
    & .ant-page-header,.site-page-header,.ant-page-header-ghost {
        padding: 0;
    }
`
