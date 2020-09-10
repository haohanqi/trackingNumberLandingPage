import React from 'react'
import { TabContentWrapper, Content, ContentList} from '../../style'
import {Divider} from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'

const ServiceProcessDes = ()=>{
	return (
		
			<TabContentWrapper >
			<Content> <CheckCircleOutlined style={{marginRight:"10px",fontSize:"15px"}}/> T.A.F provides fast, reliable and professional service processing in GTA, in 24 hours.  </Content>
			<ContentList>Order confirmed before 12:00pm, the first attempt will be done within the same day </ContentList>
			<ContentList>Order confirmed after 12:00, the first attempt will be done within the following day </ContentList>
				<Divider/>
			<Content><CheckCircleOutlined style={{ marginRight: "10px", fontSize: "15px" }} /> Each single service process is done in accordance with the Ontario regulations </Content>
				<Divider />
			<Content><CheckCircleOutlined style={{ marginRight: "10px", fontSize: "15px" }} /> No additional costs for additional attempts  </Content>
				<Divider />
			<Content><CheckCircleOutlined style={{ marginRight: "10px", fontSize: "15px" }} /> On-line tracking system ensures the transparent status along the whole process</Content>
				<Divider />
			<Content><CheckCircleOutlined style={{ marginRight: "10px", fontSize: "15px" }} /> Affidavit is included</Content>
			</TabContentWrapper>
		
			)
	
	}

	export default ServiceProcessDes