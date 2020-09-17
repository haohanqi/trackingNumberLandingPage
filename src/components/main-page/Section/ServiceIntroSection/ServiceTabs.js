import React from 'react'
import {Tabs} from 'antd'
import { SerciceTabTitle } from '../../style'

const ServiceTabs = ({des,price,service})=>{
	return (
		<Tabs size="default" style={{ marginLeft: "5%", marginRight: "5%" }} 
			  data-sal="slide-right"
			  data-sal-delay="500"
			  data-sal-easing="ease">
			<Tabs.TabPane tab={<SerciceTabTitle >Description</SerciceTabTitle> } key="1">
				<div style={{width:"100%",background:"white",borderRadius:"10px"}}>
					{des}
				</div>
			</Tabs.TabPane>

			<Tabs.TabPane tab={<SerciceTabTitle >Process of the Service</SerciceTabTitle>} key="2">
				<div style={styles.tabWrapper}>
					{service}
				</div>
			</Tabs.TabPane>

			<Tabs.TabPane tab={<SerciceTabTitle >Price</SerciceTabTitle>} key="3">
				<div style={styles.tabWrapper}>
					{price}
				</div>
			</Tabs.TabPane>	
		</Tabs>
	)
}

const styles = {
	tabWrapper:{
		width: "100%", 
		background: "white", 
		borderRadius: "10px"
	}
}

export default ServiceTabs