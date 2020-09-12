import React from 'react'
import {Row,Col} from 'antd'
import { NumberOutlined, GoogleOutlined, PhoneOutlined,HomeOutlined} from '@ant-design/icons'
import { ContactUsWrapper, ContactInfoWrapper, ContactInfoItem, ContactSectionTitle, ContactDes} from '../style'
import { StepSectionWrapper, StepItemWrapper, StepDes, IconWrapper} from '../../about-page/style'
import {StuffGropWrapper} from '../../main-page/style'
import StuffMember from '../../main-page/Footer/StuffMember'
import facebook from '../../../images/facebook.svg'
import tw from '../../../images/twitter.svg'
import ins from '../../../images/instagram.svg'
import whatsapp from '../../../images/whatsapp.svg'




const ContactSection =()=>{
	return (
		<ContactUsWrapper>

			<ContactInfoWrapper>
				<Row>
					<Col xl={12} lg={15} md={18} sm={24} xs={24}>
						<ContactInfoItem>
							<ContactSectionTitle>Contact Us</ContactSectionTitle>
							<StuffGropWrapper style={{width:"60%",justifyContent:"space-between"}}>
								<StuffMember src='https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'/>
								<StuffMember src='https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
								<StuffMember src='https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
								<StuffMember src='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
							</StuffGropWrapper>
							<ContactDes color="black">We are 24 hours available. Any question, please contact us</ContactDes>
						</ContactInfoItem>
					</Col>				
				</Row>
				<Row>
					<Col xl={12} lg={15} md={18} sm={24} xs={24}>
						<ContactInfoItem>
							<ContactSectionTitle>Follow Us</ContactSectionTitle>
							<StuffGropWrapper style={{ width: "60%", justifyContent: "space-between" }}>
								<StuffMember src={facebook} />
								<StuffMember src={tw} />
								<StuffMember src={ins} />
								<StuffMember src={whatsapp} />
							</StuffGropWrapper>
							<ContactDes color="black">We are 24 hours available. Any question, please contact us</ContactDes>
						</ContactInfoItem>

					</Col>		
				</Row>
			</ContactInfoWrapper>
		
			<StepSectionWrapper>
				<StepItemWrapper>
					<IconWrapper><GoogleOutlined /></IconWrapper>
					<StepDes color="white">alex.h.hao@gmail.com</StepDes>
				</StepItemWrapper>
				<StepItemWrapper>
					<IconWrapper><PhoneOutlined /></IconWrapper>
					<StepDes color="white">416-509-9586</StepDes>
				</StepItemWrapper>
				<StepItemWrapper>
					<IconWrapper><HomeOutlined /></IconWrapper>
					<StepDes color="white">Toronto North York M2N 2V1</StepDes>
				</StepItemWrapper>
			</StepSectionWrapper>
		
		</ContactUsWrapper>
	)
}

export default ContactSection