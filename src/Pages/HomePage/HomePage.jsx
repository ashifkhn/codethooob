import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar'
import { SideBar } from './../../components/SideBar'
import './homepage.scss'
import axios from 'axios'
import { PuffLoader } from 'react-spinners'

// console.log(videos)
export const HomePage = () => {
	const [showVideoList, setShowVideoList] = useState([])
	const [loader, setLoader] = useState(true)
	const ApiCall = () => {
		axios.get(`/api/videos`).then((res) => {
			console.log(res)
		})
	}
	useEffect(() => {
		axios
			.get(`/api/videos`)
			.then((res) => {
				setShowVideoList(res.data.videos)
				setLoader(false)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])
	console.log(showVideoList)
	return (
		<>
			{loader ? (
				<div className='loader'>
					<PuffLoader />
				</div>
			) : (
				<div className='container'>
					<div className='container'>
						<div className='sidebar_container_dashboard'>
							<SideBar />
						</div>
						<div className='navbar_and_content_container'>
							<Navbar />
							{showVideoList.map((video) => {
								return <h1>{video.title}</h1>
							})}
						</div>
					</div>
				</div>
			)}
		</>
	)
}
