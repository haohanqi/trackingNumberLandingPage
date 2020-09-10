import React from 'react'
import {Menu} from 'antd'
import {Link} from 'gatsby'

const SideNav = ()=>{
	return (
		<Menu theme="dark" mode="inline">

			<Menu.Item key="0" style={styles.navItem}>
				<Link to="/">Main</Link>
			</Menu.Item>

			<Menu.Item key="1" style={styles.navItem}>
				<Link to="/aboutUs">About Us</Link>
			</Menu.Item>

			<Menu.Item key="3" style={styles.navItem}>
				<Link to="/contactUs">Contact</Link>
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