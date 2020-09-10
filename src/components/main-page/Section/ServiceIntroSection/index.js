import React from 'react'
import {Row,Col} from 'antd'
import {basicColor} from '../../../../basicStyle'
import { ServiceIntroSectionWrapper,Subtitle} from '../../style'
import ServiceTabs from './ServiceTabs'
import {ArrowRightOutlined} from '@ant-design/icons'



const ServiceIntroSection = ({reverse,height,title,imgSrc,des,details,price})=>{
	const render = ()=>{
		if(reverse){
			return (
				<ServiceIntroSectionWrapper  height={`${height}px`} backgroundColor={basicColor.primaryColor}>
					<Row>
						<Col xl={0} lg={0} md={24} xs={24}>
							<img src={imgSrc} height={`${height}px`} width="100%" />
						</Col>
						<Col  xl={12} lg={12} md={24}  xs={24}>
							<Subtitle><span/>{title}<span/></Subtitle>
							<ServiceTabs des={des} details={details} price={price} height={`${height}px`}/>
							<div style={{ float: "left", marginLeft: "5%", marginBottom: "20px", fontSize: "20px", marginTop: "20px" }}>
								<ArrowRightOutlined style={{ fontSize: "20px", marginRight: "5px" }} />Order Now
							</div>
						</Col>
						<Col xl={12} lg={12} md={0} xs={0}>
							<img src={imgSrc} height="100%" width="100%" />
						</Col>
					</Row>
				</ServiceIntroSectionWrapper>
			)
		}else{
			return (
				<ServiceIntroSectionWrapper  height={`${height}px`} backgroundColor={basicColor.secondaryColor}>
					<Row>
						<Col xl={12} lg={12} md={24} xs={24}>
							<img src={imgSrc} height="100%" width="100%"/>
						</Col>
						<Col xl={12} lg={12} md={24} xs={24}>
							<Subtitle ><span />{title}<span /></Subtitle>
							<ServiceTabs des={des} details={details} price={price} height={`${height}px`}/>
							<div style={{ float: "right", marginRight: "5%", marginBottom: "20px",fontSize:"20px",marginTop:"20px"}}>
								<ArrowRightOutlined style={{fontSize:"20px",marginRight:"5px"}} />Order Now
							</div>
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