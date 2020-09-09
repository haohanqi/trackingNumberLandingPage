import React from 'react'
import { Row, Col, Carousel } from 'antd'
import { BasicSectionWrapper } from '../../../../basicStyle'
import { CustomerSectionTitle, CustomerItemWrapper, CustomerImage, CustomerDes, CustomerTitle } from '../../style'

const CustomerItem = ()=>{
	return (
		<CustomerItemWrapper>
			<Row style={{ height: "100%" }} justify="center">
				<Col lg={8} md={10} xs={22}>
					<CustomerImage>
						<img src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" height="100%" width="100%" />
					</CustomerImage>
				</Col>

				<Col lg={16} md={14} xs={22}>
					<CustomerDes>
						<CustomerSectionTitle>XXX C0-Funder</CustomerSectionTitle>
						<p>" It helps me saved a lot of time to confirm
										from Email or message. Just a tracking number.Then download the file."</p>
						<CustomerTitle>Christin Wang</CustomerTitle>
						<CustomerTitle>XXX C0-Funder</CustomerTitle>
					</CustomerDes>
				</Col>
			</Row>
		</CustomerItemWrapper>
	)
}

export default CustomerItem