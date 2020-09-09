import styled from 'styled-components'
import { title, basicColor,sectionLargeTitle, sectionTitle, des,BasicSectionWrapper } from '../../basicStyle'

//
export const FooterPartWrapper = styled.div`
width:100%;
margin-bottom:35px;
@media only screen and (max-width: 768px) {
	text-align:left

}
`
export const FooterTitle = styled.div`
${title}
color:${basicColor.primaryColor};
margin-bottom:10px;
`

export const FooterDes = styled.p`
${title}
color:${basicColor.primaryColor};
font-size:15px;
`

//
export const StuffGropWrapper = styled.div`
width:100%;
height:60px;
display:flex;
justify-content:space-around;
alignItem:center;
`

export const StuffMemberWrapper = styled.div`
width: 60px;
height:60px;
border-radius:100%;
`

//

export const IntroSectionTitle = styled.div`
${sectionLargeTitle}
margin-bottom:20px;
`

export const IntroSectionSubTitle = styled.div`
${sectionTitle}
margin-bottom:30px;
text-align:center;
`

export const TrackingButton = styled.div`
position:absolute;
top:400px;
width: 60%;
height: 60px;
background-color:${basicColor.buttonTextColorTwo};
border-radius:10px;
text-align:center;
line-height:60px;
vertical-align:middle;
font:${title};
color:${basicColor.primaryColor};
&:hover{
	border:2px solid ${basicColor.buttonTextColorTwo};
	color:${basicColor.buttonTextColorTwo};
	background-color:${basicColor.primaryColor};
}
`

//
export const IntroDes = styled.p`
${des}
color:${basicColor.desTextColorTwo};
line-height:3;
margin-bottom:20px;
font-size:20px;
`

export const InputSearchWrapper = styled.div`
width:80%;
height:40px;
margin-bottom:20px;
`
export const Input = styled.input`
width:60%;
height:100%;
margin-right:2.5%;
background-color: ${basicColor.secondaryColor};
border-radius:30px;
border:none;
`



//
export const ServiceBlockWrapper = styled.div`
width:100%;
height: 300px;
border-radius:10px;
box-shadow: 0px 5px 30px 5px rgba(0,0,0,0.75);
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
margin-bottom:30px;
`

export const ServiceSectionTitle = styled.div`
font:${sectionTitle};
font-size:35px;
margin-bottom:20px;
`

export const Subtitle = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
font:${title};
font-size:20px;
width:90%;
margin-bottom:30px;
span{
		display:inline-block;
		width: 15%;
		height:0;
		border:1px solid ${basicColor.sideColor};
		vertical-align:middle;
		margin-left:5%;
		margin-right:5%;
}
margin-top:2.5%;
@media only screen and (max-width:992px){
	width:100%;
	font-size:17px;
}

@media only screen and (max-width:360px){
	font-size:14px;
}



`

export const ServiceCoverImage = styled.img`
width:50%;
height:50%;
`
export const ServiceName = styled.div`
font:${title};
`
export const TrackButton = styled.div`
width:50%;
height:50px;
text-align:center;
font:${title};
color:${basicColor.primaryColor};
vertical-align:middle;
background-color:${basicColor.buttonTextColorTwo};
border-radius:20px;
line-height:50px;
box-shadow: 0px 5px 20px 5px rgba(0,0,0,0.75);
margin-bottom:40px;
`

export const ServiceIntroSectionWrapper = styled(BasicSectionWrapper)`
padding-left:0;
padding-top:0;
padding-bottom:0;
@media only screen and (max-width:992px){
	padding-top:15%;
	padding-bottom:5%;
}
`

export const SerciceTabTitle = styled.span`
font:${title}
font-size:15px;
`

//
export const CustomerSectionTitle = styled.div`
${sectionTitle};
margin-bottom:40px;
text-align:left;
`

export const CustomerItemWrapper = styled.div`
width:90%;
height:300px;
@media only screen and (max-width:480px){
	height:480px;
}
@media only screen and (max-width:320px){
	width:100%;
}
`
export const CustomerImage = styled.div`
display:inline-block;
width:100%;
height:100%;
@media only screen and (max-width:480px){
	height:225px;
}
`
export const CustomerDes = styled.div`
display:inline-block;
width:100%;
height:100%;
padding-left:2.5%;
background-color:${basicColor.secondaryColor};
@media only screen and (max-width:480px){
	height:0;
}
`
export const CustomerTitle = styled.div`
${title}
font-size:20px;
text-align:left;
`

