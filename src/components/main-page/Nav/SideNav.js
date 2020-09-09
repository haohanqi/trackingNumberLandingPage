import React from 'react'
import {Menu} from 'antd'
import {Link} from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";


const SideNav = ()=>{
	return (
		<Menu theme="dark" mode="inline">

			<Menu.Item key="0" style={styles.navItem}>
				<Link to="/">Main</Link>
			</Menu.Item>

			<Menu.Item key="1" style={styles.navItem}>
				<Link to="/aboutUs">About Us</Link>
			</Menu.Item>
            
			<Menu.Item key="2" style={styles.navItem}>
                Pricing
			</Menu.Item>

			<Menu.Item key="3" style={styles.navItem}>
				Contact
			</Menu.Item>
    
			<Menu.Item key="4" style={styles.navItem}>
                Track Now
			</Menu.Item>
		</Menu>
	)
}

const styles={
	navItem:{
		fontSize:"25px",
		marginTop:"20px",
		fontWeight:"800",
	}
}

export default SideNav