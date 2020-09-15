/* eslint-disable react/no-unescaped-entities */
import React,{useEffect,useState,useLayoutEffect}from 'react'
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
import ServiceProcess from '../components/main-page/Content/ProcessService/ServiceProcess'
import DocumentDelivery from '../components/main-page/Content/ProcessService/DocumentDelivery'


import serviceIntro1 from '../images/serviceIntro1.svg'
import serviceIntro2 from '../images/serviceIntro2.svg'
import serviceIntro3 from '../images/serviceIntro3.svg'


const IndexPage = () => {
	
	const [height, setHeight] = useState(undefined)
	const [width, setWidth] = useState(420)
	const [responsiveHeight, setResponsiveHeight] = useState(height)

	//get current window size
	useLayoutEffect(() => {
		function handleResize() {
			setHeight(window.innerHeight)
			setWidth(window.innerWidth)
		}
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
		
	}, []) 

	// set a responsive high, if screen height larger than 1400px, set section component height to full screen height. 
	// else let section takes the space it needs
	useLayoutEffect(() => {
		if ( width <= 1200 || height<=850) {
			
			setResponsiveHeight('none')	
			
		} else {
			setResponsiveHeight(height)	
		}
	}, [])




	console.log("width"+width)
	console.log("height" + height)

	
	
	return (
		<PageLayout>
			<IntroSection height={responsiveHeight} />
			<ServiceSection height={responsiveHeight}/>
			<ServiceIntroSection ID="serviceProcessing"
								 height={responsiveHeight} 
								 title="Service Processing" 
								 imgSrc={serviceIntro1}
								 des={<ServiceProcessDes />}
								 price={<ServiceProcessPrice/>}
								 service={<ServiceProcess/>}
								 />

			<ServiceIntroSection ID="documentFiling"
			                     height={responsiveHeight} 
								 title="Court Document Filing" 
								 imgSrc={serviceIntro2}
								 reverse={true} 
								 des={<DocumentFillingDes/>}
								 price={<DocumentFillingPrice/>}
								 service={<ServiceProcess/>}
								 />

			<ServiceIntroSection ID="legalDocument"
								 height={responsiveHeight} 
								 title="Legal Document Delivery"
								 imgSrc={serviceIntro3}
								 des={<DocumentDeliveryDes/>}
								 price={<DocumentDeliveryPrice/>}
								 service={<DocumentDelivery/>}
								 />
			<CustomerSection />
		</PageLayout>

	)
}
	


export default IndexPage
