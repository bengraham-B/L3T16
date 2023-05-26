import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import { authStatus, logoutRedux } from '../store/redux'

export default function Navbar() {
	const user = useSelector((state) => state.redux.userAuthStatus)
	console.log(user)

	const [userName, setUserName] = useState()

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
			</div>

			<div className="auth-container">
				{user ? 
					<div className='button-conatiner'>
						<h3>{userName}</h3> 
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
