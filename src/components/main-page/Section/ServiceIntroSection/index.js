import React from 'react'
import {Row,Col} from 'antd'
import {Link} from 'gatsby'
import {basicColor} from '../../../../basicStyle'
import { ServiceIntroSectionWrapper,Subtitle,OrderButton} from '../../style'
import ServiceTabs from './ServiceTabs'
import {ArrowRightOutlined} from '@ant-design/icons'



const ServiceIntroSection = ({reverse,height,title,imgSrc,des,details,price,service})=>{
	const render = ()=>{
		if(reverse){
			return (
				<ServiceIntroSectionWrapper  height={`${height}px`} backgroundColor={basicColor.primaryColor}>
					<Row>
						<Col xl={0} lg={0} md={24} xs={24}>
							<img src={imgSrc} height={`${height}px`} width="100%" />
						</Col>

						<Col  xl={12} lg={12} md={24}  xs={24}>
							<Subtitle data-sal="slide-right" 
									  data-sal-delay="500"
									  data-sal-easing="ease">
									  <span/>{title}<span/>
							</Subtitle>

							<ServiceTabs des={des} 
										 details={details} 
										 service={service}
										 price={price} 
										 height={`${height}px`} />
							
							<div style={{ float: "left", marginLeft: "5%", marginBottom: "20px", fontSize: "15px", marginTop: "20px" }}>
								<Link to="/order" style={{ color: "black" }}>
									<OrderButton backgroundColor="white">
										Order Now
										<div className="icon"><ArrowRightOutlined /></div>
									</OrderButton>
								</Link>
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
						<Col xl={12} lg={12} md={24} sm={24} xs={24} >
							<Subtitle data-sal="slide-right"
									  data-sal-delay="500"
									  data-sal-easing="ease">
									  <span />{title}<span />
							</Subtitle>
							
							<ServiceTabs des={des} 
										 details={details} 
										 service={service}
										 price={price} 
										 height={`${height}px`}/>
							
							<div style={{ float: "right", marginRight: "5%", marginBottom: "20px",fontSize:"15px",marginTop:"20px"}}>
								<Link to="/order" style={{ color: "black" }}>
									<OrderButton backgroundColor="white">
										Order Now
										<div className="icon"><ArrowRightOutlined /></div>
									</OrderButton>
								</Link>
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