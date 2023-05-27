import React, { useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//& Importing Styles
import './styles/styles.css'

//! Importing Pages
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import UserPage from './pages/UserPage'

import AddGun from './pages/gun/AddGun'
import Gun from './pages/gun/Gun'

//^ Importing Components
import Navbar from './Components/Navbar'

export default function App() {
	//^ State variable which will hold the user's auth info
	const [user, setUser] = useState()
	const [admin, setAdmin] = useState() //^ Stores the user's admin status
	// const user = useSelector((state) => state.redux.userAuthStatus)
	console.log(user)

	useEffect(() => {
		if(localStorage.getItem("goose-reloaded-user")){
			const object = JSON.parse(localStorage.getItem("goose-reloaded-user"))
			setUser(object.email) //^ This will display the user's email in the navbar
			setAdmin(object.admin)
		} else {
			setUser("") //^ This will remove the user's email from the navbar when they exit the application.
		}

	}, [])

	return (
		<div>
			<BrowserRouter>
				<Navbar/>

				<div className="pages">
					<Routes>

						<Route path="/" element={user ? <Home/>: <Navigate to="/auth/login"/>}/>

						<Route path="/auth/login" element={!user ? <Login/>: <Navigate to="/"/>}/>
						<Route path="/auth/signup" element={!user ? <Signup/>: <Navigate to="/"/>}/>
						
						<Route path="/gun/addgun" element={user ? <AddGun/>: <Navigate to="/auth/login"/>}/>
						<Route path="/gun/gun" element={user ? <Gun/>: <Navigate to="/auth/login"/>}/>

						{/* If the user is an admin they can access this page  */}
						{admin ? <Route path="/user" element={<UserPage/>}/> : ""}

						



						

					</Routes>
				</div>
			
			</BrowserRouter>
		</div>
  	)
}
