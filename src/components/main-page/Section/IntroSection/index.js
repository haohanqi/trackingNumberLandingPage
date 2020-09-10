import React from 'react'
import { Carousel, Row, Col } from 'antd';
import InputSearch from './InputSearch'
import { BasicSectionWrapper, basicColor } from '../../../../basicStyle'
import {  IntroSectionTitle, IntroSectionSubTitle, IntroDes, TrackingButton } from '../../style'

import introPartTwo from '../../../../images/introPart2.svg'
import introPartOne from '../../../../images/introPart1.svg'

import '../../../../global.css'

const IntroSectionPartOne = ({height})=>{
	return (
			<Row style={{ height: `${height}px` }}>
				<Col lg={10} xl={12}>
					<IntroSectionTitle>Track Your Number</IntroSectionTitle>
					<InputSearch/>
					<IntroDes>
						<span style={styles.textHeightLight}>Transparent</span> update of the action through the online tracking system. <br />
						<span style={styles.textHeightLight}>Accurate</span> timing to ensure the clients’ needs are maximumly satisfied. <br />
						<span style={styles.textHeightLight}>Fast</span> service processing in accordance with Ministry of Attorney General.<br />
					</IntroDes>
				</Col>
				<Col lg={14} md={0} sm={0} xs={0} xl={12} align="left">
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

					<TrackingButton>Track your number now</TrackingButton>

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
			<Carousel style={{ width: "100%", height: height}}>
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
		fontWeight:"900"
	},

	textHeightLightTwo:{
		color:"#6C63FF",
	}
}

export default IntroSection