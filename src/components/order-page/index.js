import React from 'react'
import { Row, Col, Form, Input, Divider, Button, message} from 'antd'
import {BasicSectionWrapper} from '../../basicStyle'
import { OrderTitle, OrderDes, InputWrapper, OrderLayout} from './style'
import { Subtitle} from '../main-page/style'
import order from '../../images/order.svg'
import delivery from '../../images/delivery.svg'
import '../../global.css'

const Order =()=>{
	const onFinish = (values)=>{
		fetch("https://getform.io/f/347685f4-4c47-4bae-bb71-aebf53ce3f74", {
			method: "POST",
			mode: "cors",
			redirect: "follow",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(values),
		})
			.then(() => message.success("We have successfully received your message. We will get back to you as soon as posibile"))
			.catch(error => message.error("error"+error))
	}

	return (
		<OrderLayout>	
			<Row>
				<Col xl={15} lg={15} md={15} sm={20} xs={24}>
					<OrderTitle>Order Now</OrderTitle>
					<OrderDes>Please fill in the form to create Order with us. We will conform with you in 24 hours. 
							  If you have any questions please contact us. We are 24 hours availble.
					</OrderDes>
					<OrderDes>
						Email: haohanqiharry@gmail.com
					</OrderDes>
					<OrderDes>
						Phone: 647-829-5577
					</OrderDes>
					<Divider />
				</Col>

				<Col xl={9} lg={9} md={9} sm={0} xs={0}>
					<img src={order} height="100%" width="100%"/>
				</Col>
			</Row>

			<Row >
				<Col xl={15} lg={15} md={15} sm={20} xs={24} align="left">
					
					<Form
						name="register"
						scrollToFirstError
						method="POST"
						onFinish={onFinish}	
						action="https://getform.io/f/347685f4-4c47-4bae-bb71-aebf53ce3f74"				
						>
						<Row>
							<Col xl={0} lg={0} md={0} sm={20} xs={24}>
								<img src={delivery} height="80%" width="80%"/>
							</Col>
						</Row>
						<Subtitle><span/>Sender Information<span/></Subtitle>
						
						<Form.Item
							name="firstName"
							label="First Name"
							rules={[
								{
									required: true,
									message: 'Please input your name',
								},
							]}
						>
							<Input style={styles.inputStyle} name="firstName" type="text"  required/>
						</Form.Item>

						<Form.Item
							name="lastName"
							label="Last Name"
							rules={[
								{
									required: true,
									message: 'Please input your name',
								},
							]}
						>
							<Input style={styles.inputStyle} type="text" name="lastName" required/>
						</Form.Item>

						<Form.Item
							name="company"
							label="Company"
						>
							<Input style={styles.inputStyle}  type="text" name="company" />
						</Form.Item>

						<Form.Item
							name="address"
							label="Address"
							rules={[
								{
									required: true,
									message: 'Please input your address',
								},
							]}
						>
							<Input style={styles.inputStyle} type="text" name="address" required />
						</Form.Item>

						<Form.Item
							name="city"
							label="City"
							rules={[
								{
									required: true,
									message: 'Please input your city name',
								},
							]}
						>
							<Input style={styles.inputStyle} type="text" name="city" required />
						</Form.Item>


						<Form.Item
							name="Province"
							label="Province"
							rules={[
								{
									required: true,
									message: 'Please input your province name',
								},
							]}
						>
							<Input style={styles.inputStyle} type="text" name="province" required />
						</Form.Item>

						<Form.Item
							name="work phone number"
							label="Working Phone Number"
							rules={[
								{
									required: true,
									message: 'Please input your phone number',
								},
							]}
						>
							<Input style={styles.inputStyle} type="tel"  name="phone" required />
						</Form.Item>

						<Form.Item
							name="email"
							label="Email"
							rules={[
								{
									required: true,
									message: 'Please input your receiver email',
								},
							]}
						>
							<Input style={styles.inputStyle} name="email" required />
						</Form.Item>

						<Divider/>


						<Subtitle><span />Receiver Information<span /></Subtitle>

						<Form.Item
							name="refirstName"
							label="First Name"
							rules={[
								{
									required: true,
									message: 'Please input your receiver name',
								},
							]}
						>
							<Input style={styles.inputStyle} type="text" name="refirstname"  required />
						</Form.Item>

						<Form.Item
							name="relastName"
							label="Last Name"
							rules={[
								{
									required: true,
									message: 'Please input your receiver name',
								},
							]}
						>
							<Input style={styles.inputStyle} type="text" name="relastName" required />
						</Form.Item>

					
						<Form.Item
							name="readdress"
							label="Address"
							rules={[
								{
									required: true,
									message: 'Please input your receiver address',
								},
							]}
						>
							<Input style={styles.inputStyle} type="text" name="readdress" required />
						</Form.Item>

						<Form.Item
							name="recity"
							label="City"
							rules={[
								{
									required: true,
									message: 'Please input your receiver city name',
								},
							]}
						>
							<Input style={styles.inputStyle} type="text" name="recity" required />
						</Form.Item>


						<Form.Item
							name="reProvince"
							label="Province"
							rules={[
								{
									required: true,
									message: 'Please input your receiver province name',
								},
							]}
						>
							<Input style={styles.inputStyle} type="text" name="reprovince" required />
						</Form.Item>

						<Form.Item
							name="re work phone number"
							label="Working Phone Number"
							rules={[
								{
									required: true,
									message: 'Please input your receiver phone number',
								},
							]}
						>
							<Input style={styles.inputStyle} type="tel"  name="rephone" required />
						</Form.Item>


						<Divider/>

						<Form.Item>
							<Button type="primary" htmlType="submit" disabled={false}>
								Send
                        	</Button>
						</Form.Item>
					</Form>
				</Col>

				<Col xl={9} lg={9} md={9} sm={0} xs={0}>
					<img src={delivery} height="80%" width="100%"/>				
				</Col>
			</Row>
			
		</OrderLayout>
	)
}

const styles={
	inputStyle:{
		width:"70%"
	}
}

export default Order



