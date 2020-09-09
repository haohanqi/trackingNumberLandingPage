import React from 'react'
import {Row,Col} from 'antd'
import {BasicSectionWrapper,basicColor} from '../../../../basicStyle'
import { ServiceIntroSectionWrapper,Subtitle} from '../../style'
import ServiceTabs from './ServiceTabs'

const ServiceIntroSection = ({src,reverse,height,title,imngSrc,des,details,price})=>{
	const render = ()=>{
		if(reverse){
			return (
				<ServiceIntroSectionWrapper  height={`${height}px`} backgroundColor={basicColor.secondaryColor}>
					<Row>
						<Col  xl={12} lg={12} md={24}  xs={24}>
							<Subtitle><span/>{title}<span/></Subtitle>
							<ServiceTabs des={des} height={`${height}px`}/>
						</Col>
						<Col xl={12} lg={12} md={0} xs={0}>
							<img src={src} height={`${height}px`} width="100%" />
						</Col>
					</Row>
				</ServiceIntroSectionWrapper>
			)
		}else{
			return (
				<ServiceIntroSectionWrapper  height={`${height}px`} backgroundColor={basicColor.secondaryColor}>
					<Row>
						<Col xl={12} lg={12} md={0} xs={0}>
							<img src={src}  height={`${height}px`} width="100%"/>
						</Col>
						<Col xl={12} lg={12} md={24} xs={24}>
							<Subtitle ><span />{title}<span /></Subtitle>
							<ServiceTabs des={des} height={`${height}px`}/>
						</Col>
					</Row>
				</ServiceIntroSectionWrapper>
			)
		}
	}

	return (
		render()
	)
}

export default ServiceIntroSection