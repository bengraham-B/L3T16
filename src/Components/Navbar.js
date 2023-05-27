import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import { authStatus, logoutRedux } from '../store/redux'

export default function Navbar() {
	const user = useSelector((state) => state.redux.userAuthStatus)
	console.log(user)

	const [userName, setUserName] = useState()
	const [admin, setAdmin] = useState()

	const dispatch = useDispatch()

	const handleLogout = () => {
		dispatch(logoutRedux())
		dispatch(authStatus())
	}

	dispatch(authStatus())
	console.log(user)

	

	useEffect(() => {

		if(localStorage.getItem("goose-reloaded-user")){
			const object = JSON.parse(localStorage.getItem("goose-reloaded-user"))
			setUserName(object.email)

			//^ checking if the user is an admin
			if(object.admin){
				setAdmin("Admin")
			} else {
				setAdmin("")
			}
			
		} else {
			setUserName("")
		}

	}, [])

	return (
		<div id="Navbar">
			<div className="home-container">
				<Link to="/">
					<h2>Home</h2>
				</Link>
			</div>

			<div className="title-container">
				<h1>GOOSE_RELOADED</h1>
				{/* If the user is an admin will display, it will display admin under the title. */}
				<h3>{admin}</h3>
			</div>

			<div className="auth-container">
				{user ? 
					<div className='button-conatiner'>
						<h3>{userName} </h3> 
						<button onClick={handleLogout}>Logout</button>
					</div> 
					:
					<div className='button-conatiner'>
						<button className='unauthed-user'>
							<Link to="/auth/login">Login</Link>
						</button>
						<button className='unauthed-user'>
							<Link to="/auth/signup">Signup</Link>
						</button>

					</div>

					
					}
				
			</div>
		</div>
	)
}
