import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {Layout} from 'antd'
import SideNav from './main-page/Nav/SideNav'
import { basicColor} from '../basicStyle'
import FooterSection from './main-page/Footer/FooterSection'

const PageLayout = ({ children}) => {

	const { Content, Footer, Sider } = Layout

	const [width, setWindowWidth] = useState(1200)

	const [showPage, setShowPage] = useState(true)
	
	// get current window width 
	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth)
		}
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	function changeSiderNav (collapsed){	
		if (width<=420 && collapsed) {
			setShowPage(true)
			return
		}
		
		if (width <= 420 && !collapsed){
			setShowPage(false)
			return
		}

		setShowPage(true)
	}

	return (
		
		<Layout style={{ background: basicColor.primaryColor}}>	
			
			<Sider  breakpoint="xl" 
					collapsedWidth="0"
					style={  styles.pageSider }
					onCollapse={(collapsed) => { changeSiderNav(collapsed)}}
					width={width <= 420 ? `${width-200}px`: '220px'}
			>

					<SideNav/>

			</Sider>
			
			<Layout 
				style={width <= 420 ?
					{
						background: basicColor.primaryColor,
						minHeight: '100vh',
						display: showPage ? 'block' : 'none'
					} : styles.page
				}
			>

				<Content>	
					{children}
				</Content>

				<Footer style={{background:basicColor.sideColor}}>
					<FooterSection />
				</Footer>

			</Layout>

		</Layout>

	)
}

PageLayout.propTypes = {
	children: PropTypes.node.isRequired,
}

const styles = {
	page: {
		background: basicColor.primaryColor,
		minHeight: "100vh",
	},

	pageSider:{
		position: "sticky",
		minHeight:"100vh",
		zIndex:1,
		top: 0,
		left: 0
	},

}
export default PageLayout
