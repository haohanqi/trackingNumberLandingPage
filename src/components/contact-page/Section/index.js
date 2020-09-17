import React from 'react'
import {Row,Col,Divider} from 'antd'
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
							<ContactDes color="black">Once the on-line form is created, we will get back to you shortly for confirmation</ContactDes>
						</ContactInfoItem>
					</Col>				
				</Row>

				<Row>
					<Col style={{ marginLeft: "5%" }} xl={0} lg={0} md={0} sm={24} xs={24}>
						<ContactDes color="black">Email: alex.h.hao@gmail.com</ContactDes>
						<ContactDes color="black">Phone: 416-509-9586</ContactDes>

					</Col>
				</Row>

				<Divider/>
				
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
							<ContactDes color="black">We keep updating company news on social media, follow us get latest news</ContactDes>
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