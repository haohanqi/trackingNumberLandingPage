
import React from 'react'
import {  StuffMemberWrapper } from '../style'
const StuffMember = ({ src }) => {
	return (
		<StuffMemberWrapper>
			<img className="img" src={src} style={{ objectFit: 'cover', height: '50px', weight: '50px', borderRadius: '100%' }} />
		</StuffMemberWrapper>
	)
}
export default StuffMember