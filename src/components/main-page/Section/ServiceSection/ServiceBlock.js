import React from 'react'
import { ServiceBlockWrapper, ServiceCoverImage, ServiceName, TrackButton } from '../../style'

const ServiceBlock = ({src,name})=>{
	return (
	
		<div>
		<ServiceBlockWrapper>
			<ServiceCoverImage src={src}/>
			<ServiceName>{name}</ServiceName>	
		</ServiceBlockWrapper>
			<TrackButton>Track</TrackButton>
		</div>
	)
}

export default ServiceBlock

