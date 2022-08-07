import React, { useState } from 'react'
import './style/navbar.scss'
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from 'react-router-dom'
import { MdAccountCircle } from 'react-icons/md'

export const Navbar = () => {
	let navigate = useNavigate()
	const [log, setLog] = useState(false)

	const Handler = () => {
		setLog(!log)
	}

	const Handler2 = () => {
		navigate('/')
	}
	return (
		<div className='navbar_container'>
			<div className='header_left'>
				<button className='name'>CodeThoob</button>
			</div>
			<div className='header_right'>
				<div className='icons'>
					<div>Name</div>
					<div className='image_user'>
						<MdAccountCircle
							onClick={Handler}
							style={{ fontSize: '40px', color: '#DDDFED' }}
						/>
					</div>
					{log && (
						<div className='logout_user' onClick={Handler2}>
							{' '}
							Log out
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
