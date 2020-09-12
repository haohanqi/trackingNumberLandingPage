import React from 'react'
import { ServiceBlockWrapper, ServiceCoverImage, ServiceName } from '../../style'

const ServiceBlock = ({src,name})=>{
	return (
	
		<div data-sal="flip-left" data-sal-easing="ease-in" data-sal-duration="500">
		<ServiceBlockWrapper >
			<ServiceCoverImage src={src}/>
			<ServiceName>{name}</ServiceName>	
		</ServiceBlockWrapper>	
		</div>
	)
}

export default ServiceBlock

