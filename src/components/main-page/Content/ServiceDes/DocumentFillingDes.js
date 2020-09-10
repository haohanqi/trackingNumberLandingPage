import React from 'react'
import { TabContentWrapper, Content } from '../../style'
import { Divider } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'

const DocumentFillingDes = ()=>{
	return (
		<TabContentWrapper >
			<Content> <CheckCircleOutlined style={{ marginRight: "10px", fontSize: "15px" }} /> No more hustle for waiting outside the courts to get the service numbers  </Content>
			<Divider/>
			<Content><CheckCircleOutlined style={{ marginRight: "10px", fontSize: "15px" }} /> T.A.F, in your way, can make it happen safely, efficiently and accurately </Content>
			<Divider />
			<Content><CheckCircleOutlined style={{ marginRight: "10px", fontSize: "15px" }} />On-line tracking system ensures the transparent status along the whole process  </Content>
		</TabContentWrapper>

	)
}

export default DocumentFillingDes