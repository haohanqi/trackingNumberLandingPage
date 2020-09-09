import React from 'react'
import {SearchOutlined} from '@ant-design/icons'
import { InputSearchWrapper, Input} from '../../style'

const InputSearch = () =>{
	return (
		<InputSearchWrapper>
			<Input/>
			<SearchOutlined style={{fontSize:"30px",lineHeight:"40px",verticalAlign:"middle"}}/>
		</InputSearchWrapper>
	)
}

export default InputSearch