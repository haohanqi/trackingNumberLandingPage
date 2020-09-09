import React from 'react'
import { Row, Col } from 'antd'
import {BasicSectionWrapper, basicColor} from '../../../../basicStyle'
import { ServiceSectionTitle, Subtitle } from '../../style'
import ServiceBlock from './ServiceBlock'
import serviceImg1 from '../../../../images/serviceImg1.svg'
import serviceImg2 from '../../../../images/serviceImg2.svg'
import serviceImg3 from '../../../../images/serviceImg3.svg'



const ServiceSection = ({height})=>{
	return (
		<BasicSectionWrapper id={"service"} height={`${height}px`}>
			<Row align="center" >
				<Col>
					<ServiceSectionTitle>Service</ServiceSectionTitle>
				</Col>
			</Row>
			<Row align="center">
				<Col flex={1} align="center">
					<Subtitle><span/>this is service<span/></Subtitle>
				</Col>
			</Row>
			<Row justify="space-around">
				<Col xl={6} lg={9} md={13} sm={13} xs={18} align="center"><ServiceBlock src={serviceImg1} name="Service Processing"/></Col>
				<Col xl={6} lg={9} md={13} sm={13} xs={18} align="center"><ServiceBlock src={serviceImg2} name="Court Document Filing "/></Col>
				<Col xl={6} lg={9} md={13} sm={13} xs={18} align="center"><ServiceBlock src={serviceImg3} name="Legal Document Delivery "/></Col>
			</Row>
		</BasicSectionWrapper>
	)
}

export default ServiceSection