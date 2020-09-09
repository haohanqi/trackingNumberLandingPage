import React from 'react'
import { Row,Col } from 'antd'
import {Link} from 'gatsby'
import { NumberOutlined, SyncOutlined, SendOutlined, CloudDownloadOutlined,CheckCircleOutlined } from '@ant-design/icons'
import { AboutSectionWrapper, AboutInfoWrapper, AboutInfo, 
		 AboutServiceBlock, StepSectionWrapper, AboutSectionTitle, 
	CompanyDes, StepItemWrapper, IconWrapper, StepDes, StartButton, 
	GuaranteeSectionWrapper, GuaranteeSectionPart, GuaranteeSectionTitle, GuaranteeItemWrapper }  from '../../style'
import CountingPart from './CountingPart'
const AboutSection = ()=>{
return (
	<AboutSectionWrapper>

		<AboutInfoWrapper>
			<AboutInfo>
				<AboutSectionTitle>About Our Company</AboutSectionTitle>
				<CompanyDes>TAF is founded and managed by professionals with Ontario legal training. 
				We realize the importance of the security, speed and accuracy of each task delivery.<br/> Based on the legal training and industrial experience, 
				TAF can be the entrusted partners for the service along each single proceeding and task.  
				</CompanyDes>
				<CountingPart/>
			</AboutInfo>

			<Row>
				<Col xl={8} lg={8} md={24} sm={24} xs={24}>
					<AboutServiceBlock backgroundColor="rgb(0,255,68,0.3)">
						<div className="serviceName" >Service Processing</div>
						<div className="seeMore">
							<Link href="/" title="Service Processing">See more</Link>
						</div>
					</AboutServiceBlock>
				</Col>
				
				<Col xl={8} lg={8} md={24} sm={24} xs={24}>
					<AboutServiceBlock backgroundColor="rgb(253,187,162,0.3)">
						<div className="serviceName" >Court Document Filing </div>
						<div className="seeMore" >
							<Link to="/">See more</Link>
						</div>

					</AboutServiceBlock>
				</Col>
				
				<Col xl={8} lg={8} md={24} sm={24} xs={24}>
					<AboutServiceBlock backgroundColor="rgb(247,255,3,0.3)">
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
				<StepDes>1. Get Your Tracking Number</StepDes>
			</StepItemWrapper>

			<StepItemWrapper>
				<IconWrapper><SyncOutlined /></IconWrapper>
				<StepDes>2. Keep Updating</StepDes>
			</StepItemWrapper>

			<StepItemWrapper>
				<IconWrapper><SendOutlined /></IconWrapper>
				<StepDes>3. Destination </StepDes>
			</StepItemWrapper>

			<StepItemWrapper>
				<IconWrapper><CloudDownloadOutlined /></IconWrapper>
				<StepDes>4. Download Your PDF</StepDes>
			</StepItemWrapper>

			<StartButton>Start Now</StartButton>
		
		</StepSectionWrapper>


		<GuaranteeSectionWrapper>
			<Row style={{ height: "100%" }}>
				<Col xl={12} lg={12} md={12} sm={24} xs={24}>
					<GuaranteeSectionPart backgroundColor="#EFEFEF">
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
					<GuaranteeSectionPart backgroundColor="#71CFD6" color="white">
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