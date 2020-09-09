/* eslint-disable react/no-unescaped-entities */
import React,{useEffect,useState}from 'react'
import PageLayout from '../components/layout'
import IntroSection from '../components/main-page/Section/IntroSection/index'
import ServiceSection from '../components/main-page/Section/ServiceSection/index'
import ServiceIntroSection from '../components/main-page/Section/ServiceIntroSection/index'
import CustomerSection from '../components/main-page/Section/CustomerSection/index'


const IndexPage = ({ windowWidth, windowHeight}) => {
	
	const [height, setHeight] = useState(undefined)
	const [width, setWidth] = useState(420)
	const [responsiveHeight, setResponsiveHeight] = useState(height)


	//get current window size
	useEffect(() => {
		function handleResize() {
			setHeight(window.innerHeight)
			setWidth(window.innerWidth)
		}
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, []) 

	// set a responsive high, if screen height larger than 1400px, set section component height to full screen height. 
	// else let section takes the space it needs
	useEffect(() => {
		if ( width <= 1200 || height<=700) {
			
			setResponsiveHeight('none')	
			
		} else {
			setResponsiveHeight(height)	
		}
	}, [height,width])

	const Des=()=>{
		return (
			<>
				<ul>
					<li>haohanqi</li>
				</ul>
			</>
		)
	}
	
	return (
		<PageLayout>
			<IntroSection height={responsiveHeight} />
			<ServiceSection height={responsiveHeight}/>
			<ServiceIntroSection ID="serviceProcessing"
								 height={responsiveHeight} 
								 title="Service Processing" 
								 src="https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
								 />

			<ServiceIntroSection ID="documentFiling"
			                     height={responsiveHeight} 
								 title="Court Document Filing" 
								 src="https://images.unsplash.com/photo-1567010181037-8f482ca00531?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
								 reverse={true} 
								 des={<Des/>}/>

			<ServiceIntroSection ID="legalDocument"
								 height={responsiveHeight} 
								 title="Legal Document Delivery"
								 src="https://images.unsplash.com/photo-1577702312572-5bb9328a9f15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
								 />
			<CustomerSection />
		</PageLayout>

	)
}
	


export default IndexPage
