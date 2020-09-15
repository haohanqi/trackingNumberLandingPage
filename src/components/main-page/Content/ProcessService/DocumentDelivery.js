import React from 'react'
import { TabContentWrapper, Content } from '../../style'
import { Divider } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'

const DocumentDelivery = () => {
	return (
		<TabContentWrapper >
			<Content> <CheckCircleOutlined style={{ marginRight: "10px", fontSize: "15px" }} />Step 1:  Fill up the on-line form    </Content>
			<Divider />
			<Content><CheckCircleOutlined style={{ marginRight: "10px", fontSize: "15px" }} />Step 2: T.A.F will call and confirm the key information. A tracking number is generated  </Content>
			<Divider />
			<Content><CheckCircleOutlined style={{ marginRight: "10px", fontSize: "15px" }} />Step 3: On the road    </Content>
			<Divider />
			<Content><CheckCircleOutlined style={{ marginRight: "10px", fontSize: "15px" }} />Step 4: After the service is done, a status report will be sent to the client</Content>


		</TabContentWrapper>
	)
}

export default DocumentDelivery