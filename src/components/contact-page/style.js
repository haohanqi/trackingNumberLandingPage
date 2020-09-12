import styled from 'styled-components'
import {basicColor,BasicSectionWrapper,sectionLargeTitle} from '../../basicStyle'
import {AboutInfoWrapper,StepDes} from '../about-page/style'

export const ContactUsWrapper = styled.div`
width:100%;
height:100%;
`

export const ContactInfoWrapper = styled(AboutInfoWrapper)`

`

export const ContactInfoItem = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:start;
margin-left:5%;
margin-bottom:100px;
`

export const ContactSectionTitle = styled.div`
${sectionLargeTitle};

`

export const ContactDes = styled(StepDes)`
`
