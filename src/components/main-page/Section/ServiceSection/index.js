import React from 'react'
import { Row, Col } from 'antd'
import {ArrowRightOutlined} from "@ant-design/icons"
import {Link} from 'gatsby'
import {BasicSectionWrapper, basicColor} from '../../../../basicStyle'
import { ServiceSectionTitle, OrderButton } from '../../style'
import ServiceBlock from './ServiceBlock'
import serviceImg1 from '../../../../images/serviceImg1.svg'
import serviceImg2 from '../../../../images/serviceImg2.svg'
import serviceImg3 from '../../../../images/serviceImg3.svg'



const ServiceSection = ({height})=>{
	return (
		<BasicSectionWrapper id={"service"} height={`${height}px`}>
			<Row >
				<Col>
					<ServiceSectionTitle>Service</ServiceSectionTitle>
				</Col>
			</Row>

			<Row justify="space-around">
				<Col xl={7} lg={9} md={13} sm={13} xs={20} align="center"><ServiceBlock src={serviceImg1} name="Service Processing"/></Col>
				<Col xl={7} lg={9} md={13} sm={13} xs={20} align="center"><ServiceBlock src={serviceImg2} name="Court Document Filing "/></Col>
				<Col xl={7} lg={9} md={13} sm={13} xs={20} align="center"><ServiceBlock src={serviceImg3} name="Legal Document Delivery "/></Col>
			</Row>
			<Row justify="center">
				<Col>
					<Link to="/order" style={{color:"black"}}>
					<OrderButton>
						Order Now
						<div className="icon"><ArrowRightOutlined/></div>
					</OrderButton>
					</Link>
				</Col>
			
			</Row>
		</BasicSectionWrapper>
	)
}

export default ServiceSection