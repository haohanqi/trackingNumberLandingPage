import React from 'react'
import {Row,Col,Carousel} from 'antd'
import { BasicSectionWrapper } from '../../../../basicStyle'
import { CustomerSectionTitle, CustomerItemWrapper, CustomerImage, CustomerDes, CustomerTitle } from '../../style'
import CustomerItem from './CustomerItem'
const CostumerSection = ()=>{
	return (
		<BasicSectionWrapper>
			<Row>
				<Col>
					<CustomerSectionTitle>What Does Our Customers Say ?</CustomerSectionTitle>
				</Col>
			</Row>
			<Row justify="center">
				<Col align="center">
					<Carousel style={{width:"80%",height:"490px",marginBottom:"20px"}}>
						<CustomerItem/>
						<CustomerItem/>
						<CustomerItem/>
					</Carousel>
				</Col>
			</Row>
		</BasicSectionWrapper>
	)
}



export default CostumerSection