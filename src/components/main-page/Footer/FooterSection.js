import React from 'react'
import {BasicSectionWrapper} from '../../../basicStyle'
import {Row,Col} from 'antd'
import StuffGroup from './StuffGroup'
import Links from './Links'
import Contact from './Contact'
import { FooterPartWrapper, FooterTitle, FooterDes } from '../style'

const FooterSection = ()=>{
	return (
		<BasicSectionWrapper backgroundColor="black" >
			<Row justify="space-around" align="top">
				<Col md={6} xs={24}>
					<FooterPartWrapper>
						<FooterTitle>About Us</FooterTitle>
						<FooterDes>
							TAF is founded and managed by professionals with Ontario legal training. 
							We realize the importance of the security, 
							speed and accuracy of each task delivery.
						</FooterDes>
					</FooterPartWrapper>
				</Col>

				<Col md={6} xs={24} align='center'>
					<Links/>
				</Col>

				<Col md={6} xs={24} align='center'>
					<Contact/>
				</Col>          
			</Row>

			<Row align="center">
				<Col style={{color:"white"}}>
					@copyright T A F 2020
				</Col>
			</Row>
			
		</BasicSectionWrapper>
	)
    
}



export default FooterSection