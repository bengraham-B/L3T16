import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { authStatus, logoutRedux, loginRedux, signupRedux, refreshCount } from '../../store/redux'

export default function AddGun() {

	const dispatch = useDispatch()

	const [userEmail, setUserEmail] = useState()

	const [userTitle, setUserTitle] = useState()

	const [bulletHeadMake, setBulletHeadMake] = useState()
	const [bulletHeadType, setBulletHeadType] = useState()
	const [bulletWeight, setBulletHeadWeight] = useState()

	const [powderMake, setPowderMake] = useState()
	const [powderType, setPowderType] = useState()
	const [powderWeight, setPowderWeight] = useState()

	const [casingMake, setCasingMake] = useState()
	const [primerMake, setPrimerMake] = useState()

	const [token, setToken] = useState() //^ state which will be used to store JWT from local storage


	//^ This is the function when clicked will send all the data stored in the state variables to the server
	const handleHandgunSubmit = async () => {
		console.log("Pre post")

		//^ Try catch block, will try to connect to the server and submit the user inputed data.
		try {

			async function postReload(token){

				if(localStorage.getItem("goose-reloaded-user")){
					const object = JSON.parse(localStorage.getItem("goose-reloaded-user"))
					setUserEmail(object.email)
					console.log(object.email)
				} 
				const response = await fetch('http://localhost:8001/api/reload', {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${token}`
					},
					body: JSON.stringify({
						user_email: userEmail,
						user_title: userTitle,
		
						bullet_head_make: bulletHeadMake,
						bullet_head_type: bulletHeadType,
						bullet_weight: bulletWeight,
		
						powder_make: powderMake,
						powder_type: powderType,
						powder_weight: powderWeight,
		
						casing_make: casingMake,
		
						primer_make: primerMake,
					})
				})

				const data = await response.json()
				console.log(data)

			}
			
			const userJWT = JSON.parse(localStorage.getItem('goose-reloaded-user'))
			setToken(userJWT)


			// console.log(data)
			if(localStorage.getItem('goose-reloaded-user')){
				const userToken = userJWT.token
				postReload(userToken)

			}

			dispatch(refreshCount)


			console.log("Post POST")
		}

		//^ The error if the user is unable to connect to the server.
		catch(err) {
			console.log(err.message)
		}
	}

	//^ This allows the user to cancel adding a reload and go back to the gun page.
	const handleCancel = () => {
		window.location.assign("/gun/gun")
	}

	return (
		<div id="Add-Handgun">
			<div className="title-container">
				<h1>Add Handgun Reload</h1>
			</div>

			<div className="form-container">
				<div className="form-wrapper">
					<div className="title-wrapper">
						<h2>pageTitle Details</h2>
					</div>

					<div className="item-wrapper">
						<h2>User Title</h2>
						<input type="text" className="input" onChange={(e) => setUserTitle(e.target.value)} />
					</div>

					<div className="item-wrapper">
						<h2>Bullet Head Make</h2>
						<input type="text" className="input" onChange={(e) => setBulletHeadMake(e.target.value)} />

						<h2>Bullet Head Type</h2>
						<input type="text" className="input" onChange={(e) => setBulletHeadType(e.target.value)} />

						<h2>Bullet Head weight</h2>
						<input type="text" className="input"onChange={(e) => setBulletHeadWeight(e.target.value)} />
					</div>

					<div className="item-wrapper">
						<h2>Powder Make</h2>
						<input type="text" className="input" onChange={(e) => setPowderMake(e.target.value)} />

						<h2>Powder Type</h2>
						<input type="text" className="input" onChange={(e) => setPowderType(e.target.value)} />

						<h2>Powder Weight</h2>
						<input type="text" className="input" onChange={(e) => setPowderWeight(e.target.value)} />
					</div>
					
					<div className="item-wrapper">
						<h2>Casing Make</h2>
						<input type="text" className="input" onChange={(e) => setCasingMake(e.target.value)} />
					</div>
					
					<div className="item-wrapper">
						<h2>Primer Make</h2>
						<input type="text" className="input" onChange={(e) => setPrimerMake(e.target.value)} />
					</div>

					<div className="button-wrapper">
						<button onClick={handleHandgunSubmit}>Add Reload</button>
					</div>
					
					<div className="button-wrapper">
						<button onClick={handleCancel}>Cancel</button>
					</div>

				</div>
			</div>
		
		</div>
	)
}
