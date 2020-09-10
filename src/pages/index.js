/* eslint-disable react/no-unescaped-entities */
import React,{useEffect,useState}from 'react'
import PageLayout from '../components/layout'
import IntroSection from '../components/main-page/Section/IntroSection/index'
import ServiceSection from '../components/main-page/Section/ServiceSection/index'
import ServiceIntroSection from '../components/main-page/Section/ServiceIntroSection/index'
import CustomerSection from '../components/main-page/Section/CustomerSection/index'
import ServiceProcessDes from '../components/main-page/Content/ServiceDes/ServiceProcessDes'
import DocumentFillingDes from '../components/main-page/Content/ServiceDes/DocumentFillingDes'
import DocumentDeliveryDes from '../components/main-page/Content/ServiceDes/DocumentDeliveryDes'
import ServiceProcessPrice from '../components/main-page/Content/Pricing/ServiceProcessPrice'
import DocumentFillingPrice from '../components/main-page/Content/Pricing/DocumentFillingPrice'
import DocumentDeliveryPrice from '../components/main-page/Content/Pricing/DocumentDeliveryPrice'

const IndexPage = () => {
	
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
		
	}, [height, width]) 

	// set a responsive high, if screen height larger than 1400px, set section component height to full screen height. 
	// else let section takes the space it needs
	useEffect(() => {
		if ( width <= 1200 || height<=700) {
			
			setResponsiveHeight('none')	
			
		} else {
			setResponsiveHeight(height)	
		}
	}, [height,width])

	console.log("width"+width)
	console.log("height" + height)

	
	
	return (
		<PageLayout>
			<IntroSection height={responsiveHeight} />
			<ServiceSection height={responsiveHeight}/>
			<ServiceIntroSection ID="serviceProcessing"
								 height={responsiveHeight} 
								 title="Service Processing" 
								 src="https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
								 des={<ServiceProcessDes />}
								 price={<ServiceProcessPrice/>}
								 />

			<ServiceIntroSection ID="documentFiling"
			                     height={responsiveHeight} 
								 title="Court Document Filing" 
								 src="https://images.unsplash.com/photo-1567010181037-8f482ca00531?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
								 reverse={true} 
								 des={<DocumentFillingDes/>}
								 price={<DocumentFillingPrice/>}
								 />

			<ServiceIntroSection ID="legalDocument"
								 height={responsiveHeight} 
								 title="Legal Document Delivery"
								 src="https://images.unsplash.com/photo-1577702312572-5bb9328a9f15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
								 des={<DocumentDeliveryDes/>}
								 price={<DocumentDeliveryPrice/>}
								 />
			<CustomerSection />
		</PageLayout>

	)
}
	


export default IndexPage
