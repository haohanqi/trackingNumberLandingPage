import React from 'react'
import { StuffGropWrapper, StuffMemberWrapper } from '../style'
import StuffMember from './StuffMember'


const StuffGroup = ()=>{
	return (
		<StuffGropWrapper>
			<StuffMember src={'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}></StuffMember>
			<StuffMember src={'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}></StuffMember>
			<StuffMember src={'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}></StuffMember>
			<StuffMember src={'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}></StuffMember>
		</StuffGropWrapper>
	)
}

export default StuffGroup