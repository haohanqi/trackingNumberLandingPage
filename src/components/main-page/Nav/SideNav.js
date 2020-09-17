import React from 'react'
import {Menu} from 'antd'
import {Link} from 'gatsby'
import logo from '../../../images/logo.png'

const SideNav = ()=>{
	return (
		<Menu theme="dark" mode="inline">

			<Menu.Item style={{marginBottom:"40px",marginTop:"40px",height:"100px",textAlign:"left"}}>
				<img src={logo} height="100px" width="100px"/>
			</Menu.Item>

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
				<Link to="/order">Order Now</Link>
			</Menu.Item>
    
			<Menu.Item key="5" style={styles.navItem}>
                Tracking(Coming Soon)
			</Menu.Item>
		</Menu>
	)
}

const styles={
	navItem:{
		fontSize:"15px",
		marginTop:"20px",
		fontWeight:"800",
	}
}

export default SideNav