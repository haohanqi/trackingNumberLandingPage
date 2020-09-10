import React from 'react'
import { TabContentWrapper, Content, ContentList } from '../../style'
import { Divider } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'

const DocumentDeliveryDes = () => {
	return (

		<TabContentWrapper >
			<Content> <CheckCircleOutlined style={{ marginRight: "10px", fontSize: "15px" }} /> T.A.F provides fast, reliable and professional document delivery in GTA, in 24 hours   </Content>
			<ContentList>Order confirmed before 12:00pm, the delivery is done within the same day  </ContentList>
			<ContentList>Order confirmed after 12:00, the delivery is done within the following day </ContentList>
			<ContentList>Or, our clients can decide the time when the delivery is done </ContentList>
			<Divider />
			<Content> <CheckCircleOutlined style={{ marginRight: "10px", fontSize: "15px" }} /> Each single service process is done in accordance with the Ontario regulations </Content>
			<Divider />
			<Content> <CheckCircleOutlined style={{ marginRight: "10px", fontSize: "15px" }} /> Chain-of-custody is clearly recorded from the end to the end   </Content>
			<Divider />
			<Content><CheckCircleOutlined style={{ marginRight: "10px", fontSize: "15px" }} /> Sealed envelops/cases for the safety and security of the documents </Content>
			<Divider />
			<Content><CheckCircleOutlined style={{ marginRight: "10px", fontSize: "15px" }} /> On-line tracking system ensures the transparent status along the whole process  </Content>
		</TabContentWrapper>

	)

}

export default DocumentDeliveryDes