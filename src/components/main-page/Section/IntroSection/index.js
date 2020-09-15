import React from 'react'
import { Carousel, Row, Col } from 'antd';
import {ArrowRightOutlined} from '@ant-design/icons'
import { BasicSectionWrapper, basicColor } from '../../../../basicStyle'
import {  IntroSectionTitle, IntroSectionSubTitle, IntroDes, OrderButton } from '../../style'

import introPartTwo from '../../../../images/percentage.svg'
import introPartOne from '../../../../images/introPart1.svg'

import '../../../../global.css'

const IntroSectionPartOne = ({height})=>{
	return (
			<Row style={{ height: `${height}px` }}>
			<Col lg={10} xl={12} data-sal="slide-right" data-sal-easing="ease-in" data-sal-duration="500">
					<IntroSectionTitle>Track Your Number</IntroSectionTitle>
					<IntroDes>
						<span style={styles.textHeightLight}>Transparent</span> update of the action through the online tracking system.
						<span style={styles.textHeightLight}> Accurate</span> timing to ensure the clients’ needs are maximumly satisfied. 
						<span style={styles.textHeightLight}> Fast</span> service processing in accordance with <a href="https://www.attorneygeneral.jus.gov.on.ca/english/courts/guides/Guide_to_Serving_Documents_EN.html "> Ministry of Attorney General</a>.
					</IntroDes>
					<IntroDes>
						We are T.A.F, your entrusted partners in Service Processing, Court Document Filing and Legal Document Delivery
						Mission accomplished in 24 hours within GTA 
					</IntroDes>
					<OrderButton>
						Start Your Service Now
						<div className="icon"><ArrowRightOutlined/></div>
					</OrderButton>
				</Col>
			<Col lg={14} md={0} sm={0} xs={0} xl={12} align="left" data-sal="slide-left" data-sal-easing="ease-in" data-sal-duration="500">
				<img src={introPartOne} height="80%" width="100%"/>
				</Col>
			</Row>
	)
}

const IntroSectionPartTwo = ({height})=>{
	return (
			<Row style={{ height: `${height}px` }}>
				<Col lg={10} xl={12}>
					<IntroSectionTitle>Track Your Number</IntroSectionTitle>

					<IntroSectionSubTitle>
						1st 3 delivery is <span style={styles.textHeightLightTwo}> 25% off </span>
					</IntroSectionSubTitle>

					<IntroSectionSubTitle>
						Kindly referral is <span style={styles.textHeightLightTwo}> 10% off </span>
					</IntroSectionSubTitle>

					<OrderButton>
						Track Number
						<div className="icon"><ArrowRightOutlined/></div>
					</OrderButton>

					

				</Col>
				<Col lg={14} md={0} sm={0} xs={0} xl={12} align="left">
				<img src={introPartTwo} height="90%" width="100%" />
				</Col>
			</Row>
	)
}

const IntroSection = ({height})=>{

	return (
		<BasicSectionWrapper backgroundColor={basicColor.primaryColor} height={height}>
			<Carousel style={{ width: "100%", height: height}} autoplay={true}>
				<div>
					<IntroSectionPartOne height={height}/>
				</div>
				<div style={styles.test}>
					<IntroSectionPartTwo height={height}/>
				</div>
			</Carousel>
		</BasicSectionWrapper>
	)
}

const styles = {
	textHeightLight:{
		color:"black",
		fontWeight:"900",
		fontSize:"25px"
	},

	textHeightLightTwo:{
		color:"#6C63FF",
	}
}

export default IntroSection