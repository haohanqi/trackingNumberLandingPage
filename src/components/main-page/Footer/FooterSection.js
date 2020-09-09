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
							We all the start up company working
							With Law Firm to help them track their
							Legal documents. Company start at 2020,
							And currently we have over 300 clients, 40 Deliverer in GTA. 
						</FooterDes>
						<StuffGroup/>
					</FooterPartWrapper>
				</Col>

				<Col md={6} xs={24} align='center'>
					<Links/>
				</Col>

				<Col md={6} xs={24} align='center'>
					<Contact/>
				</Col>          
			</Row>
			
		</BasicSectionWrapper>
	)
    
}



export default FooterSection