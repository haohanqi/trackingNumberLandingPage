import styled from 'styled-components'
import {basicColor,sectionLargeTitle,sectionTitle,des,BasicSectionWrapper} from '../../basicStyle'

export const OrderLayout = styled(BasicSectionWrapper)`

`

export const OrderTitle = styled.div`
${sectionLargeTitle};
margin-bottom:30px;
@media only screen and (max-width:480px){
	font-size:35px;
}
`

export const OrderDes = styled.div`
${des};
width:80%;
color:${basicColor.sideColor};
margin-bottom:60px;
font-size:18px;
@media only screen and (max-width:480px){
	width:90%;
	font-size:20px;
}
`
export const InputWrapper = styled.input`
width:${props=>props.width};
display:block;
@media only screen and (max-width:480px){
	width:80%;
}
`



