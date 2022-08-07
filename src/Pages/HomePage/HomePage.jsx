import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components/Navbar'
import { SideBar } from './../../components/SideBar'
import './homepage.scss'
import axios from 'axios'
import { PuffLoader } from 'react-spinners'

export const HomePage = () => {
	const [showVideoList, setShowVideoList] = useState([])
	const [loader, setLoader] = useState(true)

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
								return <h1 key={video.id}>{video.title}</h1>
							})}
						</div>
					</div>
				</div>
			)}
		</>
	)
}
