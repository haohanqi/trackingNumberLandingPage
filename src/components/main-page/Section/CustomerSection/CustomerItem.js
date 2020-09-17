import React from 'react'
import { Row, Col } from 'antd'
import { CustomerSectionTitle, CustomerItemWrapper, CustomerImage, CustomerDes, CustomerTitle } from '../../style'

const CustomerItem = ({des,title,job,name})=>{
	return (
		<CustomerItemWrapper>
			<Row style={{ height: "100%" }} justify="center">
				<Col xl={22} lg={24} md={20} xs={22}>
					<CustomerDes>
						<CustomerSectionTitle>{title}</CustomerSectionTitle>
						<p style={{ fontSize: "25px" }}>" {des} "</p>
						<CustomerTitle>{name}</CustomerTitle>
						<CustomerTitle>{job}</CustomerTitle>
					</CustomerDes>
				</Col>
			</Row>
		</CustomerItemWrapper>
	)
}

export default CustomerItem