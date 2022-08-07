import React, { useState } from 'react'
import './landingpage.scss'
import { MdVisibilityOff, MdVisibility } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import LandingPageImage from './../../assets/LandingPageImage.svg'
import axios from 'axios'

export const LandingPage = () => {
	let navigate = useNavigate()
	const [passwordFlag, setPasswordFlag] = useState(true)
	const [email, setEmail] = useState('')
	const [pass, setPass] = useState('')
	const [passwordType, setPasswordType] = useState('password')
	const [invalidMessage, setInvalidMessage] = useState('')

	const emailRegex = /\S+@\S+\.\S+/
	const showPAsswordHandler = () => {
		if (passwordFlag) {
			setPasswordType('text')
			setPasswordFlag(!passwordFlag)
		} else {
			setPasswordType('password')
			setPasswordFlag(!passwordFlag)
		}
	}

	const emailHandler = (e) => {
		setEmail(e.target.value)
	}

	const ForgotPassHandler = () => {
		navigate('/reset-password')
	}

	const submitHandler = () => {
		if (!emailRegex.test(email)) {
			setInvalidMessage('Please enter valid email!')
			setTimeout(() => setInvalidMessage(''), 1500)
		} else {
			// navigate("/usertype");
		}
	}
	const loginClickHandler = async (e) => {
		const password = pass
		e.preventDefault()

		try {
			const resp = await axios.post('/api/auth/login', { email, password })
			// localStorage.setItem('token', resp.data.encodedToken)
			// localStorage.setItem('user', JSON.stringify(resp.data.foundUser))
			// dispatch({ type: 'SUCCESS', payload: resp.data.encodedToken })
			// navigate('/videos')
			console.log(resp)
		} catch (err) {
			// alert(`${err} || Enter Correct Email or Password`)
		}
	}

	const SignUpHandler = () => {
		navigate('/signup')
	}

	return (
		<div className='login_page_container'>
			<div className='image_container_login_page'>
				<div className='logo'>
					<h1 className='brand_message'>CodeThooB</h1>
				</div>
				<div className='login_screen_image'>
					<img src={LandingPageImage} alt='heroimage' />
				</div>
				<div className='brand_message'>
					<h3>Learn Coding Fun WaY!</h3>
				</div>
			</div>

			<div className='login_container_main'>
				<div className='login_page_content'>
					<h1 className='page_text'>Login to your account</h1>
					<div className='enter_email_message'>
						Enter your email and password to login
					</div>
					<div className='input_container'>
						<label>Email</label>
						<div className='input_and_icons'>
							<input
								type='text'
								value={email}
								placeholder='ashif@mail.com'
								onChange={emailHandler}
								className='input'
							/>
						</div>
					</div>
					<p className='invalid_email'>{invalidMessage}</p>
					<div className='input_container'>
						<label>Password</label>
						<div className='input_and_icons'>
							<input
								type={passwordType}
								placeholder='**********'
								onChange={(e) => setPass(e.target.value)}
								value={pass}
							/>
							{passwordFlag ? (
								<MdVisibilityOff
									className='eye_icon'
									onClick={showPAsswordHandler}
								/>
							) : (
								<MdVisibility
									className='eye_icon'
									onClick={showPAsswordHandler}
								/>
							)}
						</div>
					</div>
					<div className='btn_container'>
						<button className='btn_primary' onClick={submitHandler}>
							Log In
						</button>
					</div>
					<span className='forget_password' onClick={ForgotPassHandler}>
						{' '}
						Forgot Password?
					</span>
					<span className='forget_password' onClick={SignUpHandler}>
						Sign Up for Free
					</span>
					<Link to='/home'>Home</Link>
					<span className='forget_password'>Guest Login</span>
				</div>
			</div>
		</div>
	)
}
