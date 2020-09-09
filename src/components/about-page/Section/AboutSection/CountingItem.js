import React from 'react'
import { CountingItemWrapper } from '../../style'
import CountUp from 'react-countup'

const CountingItem = ({number,title}) => {
	return (
		<CountingItemWrapper>
			<div style={{ fontSize: "35px", fontWeight: "900", color:"#71CFD6"}}>
				<CountUp end={number} suffix="+"
/>
			</div>
			<div style={{width:"70%",height:"3px",background:"black",marginLeft:"15%",marginRight:"15%"}}></div>
			<div style={{ fontSize: "20px", fontWeight: "900", color:"#838686" }}>{title}</div>
		</CountingItemWrapper>
	)
}
export default CountingItem