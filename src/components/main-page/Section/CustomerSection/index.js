import React from 'react'
import {Row,Col,Carousel} from 'antd'
import { BasicSectionWrapper } from '../../../../basicStyle'
import { CustomerSectionTitle} from '../../style'
import CustomerItem from './CustomerItem'
const CostumerSection = ()=>{
	return (
		<BasicSectionWrapper>
			<Row>
				<Col>
					<CustomerSectionTitle>Testimonials</CustomerSectionTitle>
				</Col>
			</Row>
			<Row justify="center" style={{width:"100%"}}>
				<Col align="center" span={24}>
					<Carousel style={{width:"85%",height:"490px",marginBottom:"20px"}}>
						<CustomerItem title={"LAWYER"} des={"Enjoyed working with TAF and they finished the jobs effectively."} name={"Yu Qiu"} job={"LAWYER"} />
						<CustomerItem title={"PARALEGAL"} des={"TAF provided me with a good experience of service and kept me updated with essential steps"} name={" Tony Lanz"} job={"PARALEGAL"}/>
					</Carousel>
				</Col>
			</Row>
		</BasicSectionWrapper>
	)
}



export default CostumerSection