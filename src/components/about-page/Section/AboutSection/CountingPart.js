import React from 'react'
import {Row, Col} from 'antd'
import CountingItem from './CountingItem'
import {CountingPartWrapper} from '../../style'


const CountingPart =()=>{
	return (
		<CountingPartWrapper>
			<Row>
				<Col lg={6} md={12} sm={12} xs={12}> <CountingItem number={1000} title="USER"/> </Col>
				<Col lg={6} md={12} sm={12} xs={12}> <CountingItem number={30} title="EMPLOYEES"/> </Col>
				<Col lg={6} md={12} sm={12} xs={12}> <CountingItem number={500} title="ORDER"/> </Col>
				<Col lg={6} md={12} sm={12} xs={12}> <CountingItem number={200} title="REVIEW"/> </Col>
			</Row>
		</CountingPartWrapper> 
	)
}

export default CountingPart