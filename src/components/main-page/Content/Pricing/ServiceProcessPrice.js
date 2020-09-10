import React from 'react'
import { TabContentWrapper, Content, ContentList } from '../../style'
import { Divider } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'

const ServiceProcessPrice= () => {
	return (

		<TabContentWrapper >
			<Content> <CheckCircleOutlined style={{ marginRight: "10px", fontSize: "15px" }} /> Service within the GTA  </Content>
			<ContentList>GTA - most populous metropolitan area in Ontario </ContentList>
			<ContentList>60 CAD / service / target person ( Service include 3 attempts in total ) </ContentList>
			<ContentList> Including: City of Toronto, municipalities of Durham, Halton, Peel and York  </ContentList>
			<ContentList> Including affidavit, tracking service and project status report   </ContentList>
			<ContentList> NO hidden fee    </ContentList>
			<Divider />
			<Content><CheckCircleOutlined style={{ marginRight: "10px", fontSize: "15px" }} /> Service outside GTA  </Content>
			<ContentList> please contact TAF for information</ContentList>
			<Divider />
			<Content><CheckCircleOutlined style={{ marginRight: "10px", fontSize: "15px" }} /> Service speed   </Content>
			<ContentList> Order confirmed before 1200pm, first attempt will be done within the same day.     </ContentList>
			<ContentList> Order confirmed after 1200pm, first attempt will be done in the following day.      </ContentList>
			
		</TabContentWrapper>

	)

}

export default ServiceProcessPrice