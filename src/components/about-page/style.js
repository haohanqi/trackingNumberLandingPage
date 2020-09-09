import styled from 'styled-components'
import { basicColor, sectionLargeTitle, des, title,sectionTitle} from '../../basicStyle'

export const AboutSectionWrapper = styled.div`
width:100%;
height:100%;
font-size:0;
`	
export const AboutInfoWrapper = styled.div`
display:inline-block;
width:75%;
background-color:${basicColor.primaryColor};
@media only screen and (max-width: 576px) {
	width:100%;
}
`
export const AboutInfo = styled.div`
display:inline-block;
width:100%;
background-color:${basicColor.primaryColor};
padding-left:2.5%;
`
export const AboutServiceBlock = styled.div`
display:inline-block;
background-color:${props=>props.backgroundColor};
height:200px;
text-align:center;
line-height:200px;
width:100%;
font-weight:800;
font-size:15px;
.seeMore {
	display:none;
}
&:hover{
	color:#2f54eb;
	.seeMore{
		display:block;
	}

	.serviceName{
		display:none;
	}

}
`

export const StepSectionWrapper = styled.div`
display:inline-block;
box-sizing: border-box;
float:right;
width: 25%;
height: 100%;
margin-top: 10%;
padding-left:2.5%;
padding-right:2.5%;
background-color: #FF947F;
border-top-left-radius: 100px; 
overflow:hidden;
@media only screen and (max-width: 576px) {
	display:none;
}
`
export const StepItemWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
margin-top:20%;
align-items:start;
font-size:20px;
`
export const StepDes = styled.div`
${title};
color:${basicColor.primaryColor};


`
export const IconWrapper = styled.div`
font-size:40px;
font-weight:900;
margin-bottom:10px;
`

export const AboutSectionTitle =styled.div`
${sectionLargeTitle};
margin-bottom:30px;
@media only screen and (max-width: 480px) {
	font-size:35px;
}
`

export const CompanyDes = styled.div`
width:80%;
${des};
height:350px;
font-size:25px;
margin-bottom:100px;
color:${basicColor.desTextColorTwo};
@media only screen and (max-width: 480px) {
	width:100%;
	height:none;
	font-size:20px;
}

`

export const CountingPartWrapper = styled.div`
width:100%;
`

export const CountingItemWrapper = styled.div`
dispaly:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
height:100px;
text-align:center;
margin-bottom:58px;
`

export const StartButton = styled.div`
width:80%;
height:60px;
background-color:${basicColor.primaryColor};
${sectionTitle};
font-size:25px;
line-height:60px;
text-align:center;
margin-top:100px;
border-radius:20px;
margin-left:10%;
margin-right:10%;
`

export const GuaranteeSectionWrapper = styled.div`
width:100%;
height:320px;
@media only screen and (max-width:768px) {
	height:600px;
}
`
export const GuaranteeSectionPart = styled.div`
width:100%;
height:100%;
padding-left:5%;
padding-top:5%;
box-sizing: border-box;
background-color:${props=>props.backgroundColor};
color:${props => props.color};
@media only screen and (max-width:768px) {
	height:300px;
}
`
export const GuaranteeSectionTitle = styled.div`
${sectionTitle};
margin-bottom:5%;
`
export const GuaranteeItemWrapper = styled.div`
display: flex;
flex-direction:row;
justify-content:start;
align-items:center;
width:100%;
${title};
margin-bottom:30px;
`





