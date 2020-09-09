import styled from 'styled-components'

// color
export const basicColor = {
	primaryColor: '#FFFFFF',
	secondaryColor: '#EFEFEF',
	sideColor: '#000000',

	headertextColorOne: '#000000',
	headertextColorTwo: '#FFFFFF',

	desTextColorOne: '#707070',
	desTextColorTwo: '#838686',

	buttonTextColorOne: '#FFFFFF',
	buttonTextColorTwo: '#71CFD6',
}


// font 
export const titleFont = `
font-family: HelveticaNeue-CondensedBlack;
`
export const sectionLargeTitle = `
${titleFont}
font-size:50px;
font-weight:900;
`
export const sectionTitle = `
${titleFont}
font-size:30px;
font-weight:900;
`
export const title = `
${titleFont}
font-size:20px;
font-weight:700;
`

export const des = `
${titleFont}
font-size:15px;
font-weight:bold;
`


// layout
export const BasicPageLayout = styled.div`
width: 100%;
height: 100%;
background-color: ${props => props.primary ? basicColor.primaryColor : basicColor.secondaryColor};
`
export const BasicSectionWrapper = styled.div`
width: 100%;
height: ${props=>props.height};
padding-top:2.5%;
padding-left:2.5%;
padding-bottom: 2.5%;
background-color: ${props => props.backgroundColor};
`


