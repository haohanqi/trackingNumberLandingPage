import React from 'react'
import { Row, Col } from 'antd'
import { CustomerSectionTitle, CustomerItemWrapper, CustomerImage, CustomerDes, CustomerTitle } from '../../style'

const CustomerItem = ()=>{
	return (
		<CustomerItemWrapper>
			<Row style={{ height: "100%" }} justify="center">
				<Col xl={22} lg={24} md={20} xs={22}>
					<CustomerDes>
						<CustomerSectionTitle>XXX C0-Funder</CustomerSectionTitle>
						<p style={{fontSize:"25px"}}>" It helps me saved a lot of time to confirm
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