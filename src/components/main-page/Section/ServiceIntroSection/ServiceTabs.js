import React from 'react'
import {Tabs} from 'antd'
import { SerciceTabTitle } from '../../style'

const ServiceTabs = ({des,details,price,height})=>{
	console.log(height)
	return (
		<Tabs size="default" style={{marginLeft:"2.5%",marginRight:"2.5%"}}>
			<Tabs.TabPane tab={<SerciceTabTitle >Description</SerciceTabTitle> } key="1">
				<div style={{width:"100%",height:"600px",background:"white",borderRadius:"10px"}}>
					{des}
				</div>
			</Tabs.TabPane>

			<Tabs.TabPane tab={<SerciceTabTitle >Details</SerciceTabTitle>} key="2">
				<div style={{ width: "100%", height: "600px", background: "white", borderRadius: "10px" }}>
					dadadada
				</div>
			</Tabs.TabPane>

			<Tabs.TabPane tab={<SerciceTabTitle >price</SerciceTabTitle>} key="3">
				<div style={{ width: "100%", height: "600px", background: "white", borderRadius: "10px" }}>
					{price}
				</div>
			</Tabs.TabPane>	
		</Tabs>
	)
}

export default ServiceTabs