"use client"
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { authStatus, logoutRedux, loginRedux, signupRedux, refreshCount } from '../../store/redux'

//^ Importing Reload component which display all the reload data
import Reload from '../../Components/Reload'

export default function Handgun() {
	const [reloads, setReloas] = useState()

	const refreshCountValue = useSelector((state) => state.redux.refreshCountValue)

	console.log(refreshCountValue)

	const userAutStatus = useSelector((state) => state.redux.userAuthStatus)

	const [token, setToken] = useState()
	useEffect(() => {
		
		async function fetchAllReloads(token) {

			const response = await fetch('http://localhost:8001/api/reload', {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${token}`
				}
			})
			const data = await response.json()
			console.log(data)
			setReloas(data) //^ Setting reloads from the DB to state
		}


		const userJWT = JSON.parse(localStorage.getItem('goose-reloaded-user'))
		setToken(userJWT.token) //^ Setting the JWT token to state

		if(localStorage.getItem('goose-reloaded-user')){
			const userToken = userJWT.token
			fetchAllReloads(userToken)
		}

	}, [refreshCountValue])

	return (
		<div id="Handgun">
			
			<div className="title-container">
				
				<h1>Add Reload</h1>
			</div>

			<div className="link-container">
				<Link to="/gun/addgun">
					<button>Add Reload</button>
				</Link>
			</div>

			<div className="reloads-container">

				<div className="reload-wrapper">
					{reloads && reloads.map((rel) => (
						<Reload 
							key={rel.id}
							token={token} //^ using state to pass down the token value to each reload object.
							_id={rel._id}
							user_title={rel.user_title}
							bullet_head_make={rel.bullet_head_make}
							bullet_head_type={rel.bullet_head_type}
							bullet_weight={rel.bullet_weight}
							powder_make={rel.powder_make}
							powder_type={rel.powder_type}
							powder_weight={rel.powder_weight}
							casing_make={rel.casing_make}
							primer_make={rel.primer_make}
						/>
					))}
				</div>


			</div>
		</div>
	)
}
