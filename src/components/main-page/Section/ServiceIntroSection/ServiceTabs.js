import React from 'react'
import {Tabs} from 'antd'
import { SerciceTabTitle } from '../../style'

const ServiceTabs = ({des,price})=>{
	return (
		<Tabs size="default" style={{marginLeft:"5%",marginRight:"5%"}}>
			<Tabs.TabPane tab={<SerciceTabTitle >Description</SerciceTabTitle> } key="1">
				<div style={{width:"100%",background:"white",borderRadius:"10px"}}>
					{des}
				</div>
			</Tabs.TabPane>

			<Tabs.TabPane tab={<SerciceTabTitle >Price</SerciceTabTitle>} key="3">
				<div style={{ width: "100%", background: "white", borderRadius: "10px" }}>
					{price}
				</div>
			</Tabs.TabPane>	
		</Tabs>
	)
}

export default ServiceTabs