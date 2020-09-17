import React from 'react'
import { Row,Col } from 'antd'
import {Link} from 'gatsby'
import { NumberOutlined, SyncOutlined, SendOutlined, CloudDownloadOutlined,CheckCircleOutlined,ArrowRightOutlined } from '@ant-design/icons'
import { AboutSectionWrapper, AboutInfoWrapper, AboutInfo, 
		 AboutServiceBlock, StepSectionWrapper, AboutSectionTitle, 
	CompanyDes, StepItemWrapper, IconWrapper, StepDes, 
	GuaranteeSectionWrapper, GuaranteeSectionPart, GuaranteeSectionTitle, GuaranteeItemWrapper }  from '../../style'
import {OrderButton} from '../../../main-page/style'
import CountingPart from './CountingPart'
const AboutSection = ()=>{
return (
	<AboutSectionWrapper>

		<AboutInfoWrapper>
			<AboutInfo>
				<AboutSectionTitle>About T A F</AboutSectionTitle>
				<CompanyDes>TAF is founded and managed by professionals with Ontario legal training. 
				We realize the importance of the security, speed and accuracy of each task delivery.<br/> Based on the legal training and industrial experience, 
				TAF can be the entrusted partners for the service along each single proceeding and task.  
				</CompanyDes>
			</AboutInfo>

			<Row>
				<Col xl={8} lg={8} md={24} sm={24} xs={24}>
					<AboutServiceBlock backgroundColor="rgb(0,255,68,0.3)"
									   data-sal="flip-right"
									   data-sal-delay="600"
									   data-sal-easing="ease">
						<div className="serviceName" >Service Processing</div>
						<div className="seeMore">
							<Link href="/" title="Service Processing">See more</Link>
						</div>
					</AboutServiceBlock>
				</Col>
				
				<Col xl={8} lg={8} md={24} sm={24} xs={24}>
					<AboutServiceBlock backgroundColor="rgb(253,187,162,0.3)"
									   data-sal="flip-right"
									   data-sal-delay="700"
									   data-sal-easing="ease">
						<div className="serviceName" >Court Document Filing </div>
						<div className="seeMore" >
							<Link to="/">See more</Link>
						</div>

					</AboutServiceBlock>
				</Col>
				
				<Col xl={8} lg={8} md={24} sm={24} xs={24}>
					<AboutServiceBlock backgroundColor="rgb(247,255,3,0.3)"
						               data-sal="flip-right"
									   data-sal-delay="800"
									   data-sal-easing="ease">
						<div className="serviceName" >Legal Document Delivery </div>
						<div className="seeMore">
							<Link to="/">See more</Link>
						</div>
					</AboutServiceBlock>
				</Col>
			</Row>
				
		</AboutInfoWrapper>

		<StepSectionWrapper> 
			<StepItemWrapper>
				<IconWrapper><NumberOutlined /></IconWrapper>
				<StepDes color="white">1. Get Your Tracking Number</StepDes>
			</StepItemWrapper>

			<StepItemWrapper>
				<IconWrapper><SyncOutlined /></IconWrapper>
				<StepDes color="white">2. Keep Updating</StepDes>
			</StepItemWrapper>

			<StepItemWrapper>
				<IconWrapper><SendOutlined /></IconWrapper>
				<StepDes color="white">3. Destination </StepDes>
			</StepItemWrapper>

			<StepItemWrapper>
				<IconWrapper><CloudDownloadOutlined /></IconWrapper>
				<StepDes color="white">4. Download Your PDF</StepDes>
			</StepItemWrapper>


			<Link to="/order" style={{color:"black"}}>
				<OrderButton color="black" backgroundColor="white" style={{marginTop:"100px"}}>
					Start Now
					<div className="icon"><ArrowRightOutlined/></div>
				</OrderButton>
			</Link>
		
		</StepSectionWrapper>


		<GuaranteeSectionWrapper>
			<Row style={{ height: "100%" }}>
				<Col xl={12} lg={12} md={12} sm={24} xs={24}>
					<GuaranteeSectionPart backgroundColor="#EFEFEF" 
										  data-sal="flip-right"
									      data-sal-delay="500"
									      data-sal-easing="ease">
						<GuaranteeSectionTitle>
							We Guarantee
						</GuaranteeSectionTitle>

						<GuaranteeItemWrapper>
							<CheckCircleOutlined style={styles.iconStyle} />
							Delivered in 24 hours
						</GuaranteeItemWrapper>

						<GuaranteeItemWrapper>
							<CheckCircleOutlined style={styles.iconStyle} />
							Get In Person
						</GuaranteeItemWrapper>

						<GuaranteeItemWrapper>
							<CheckCircleOutlined style={styles.iconStyle} />
							Keep Updating 
						</GuaranteeItemWrapper>

					</GuaranteeSectionPart>
				</Col>

				<Col xl={12} lg={12} md={12} sm={24} xs={24}>
					<GuaranteeSectionPart backgroundColor="#71CFD6" 
										  color="white"
										  data-sal="flip-right"
										  data-sal-delay="500"
										  data-sal-easing="ease">
						<GuaranteeSectionTitle>
							Service Range
						</GuaranteeSectionTitle>

						<GuaranteeItemWrapper>
							<CheckCircleOutlined style={styles.iconStyle} />
							GTA AREAR 
						</GuaranteeItemWrapper>

						<GuaranteeItemWrapper>
							<CheckCircleOutlined style={styles.iconStyle} />
							Delivery in a Day
						</GuaranteeItemWrapper>

						<GuaranteeItemWrapper>
							<CheckCircleOutlined style={styles.iconStyle} />
							Secure the Document
						</GuaranteeItemWrapper>
					</GuaranteeSectionPart>
				</Col>
			</Row>
		
		</GuaranteeSectionWrapper>

	</AboutSectionWrapper>
)
}

const styles = {
	iconStyle:{
		fontSize: "20px", 
		marginRight: "10%",
		color: "red",
	}
}
export default AboutSection