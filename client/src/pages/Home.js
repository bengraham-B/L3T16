import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
	//^ This state is used to set the total number of reloads the user has
	const [allReloads, setAllReloads] = useState([])

	useEffect(() => {
		//^ This functions gets the amount of reloads the user
		const getUserReloadsAmount = async () => {
			const response = await fetch('http://localhost:8001/api/reload')
			const data = await response.json()
			console.log(data)
			setAllReloads(data.length) //^ Setting the length of the reloads array from the DB to state, by counting the length of the array where the response is stored
		}
		getUserReloadsAmount()

	},[])
  return (
    <div id="HomePage">
		<div className="header">Home</div>

		<dvi className="comp-container">
			<div className="wrapper">

				<div className="container">
					<h3>Total Reloads</h3>
					{allReloads}
				</div>

				<div className="container handgun">
					<h3>Handgun</h3>
					<button>
						<Link to="/gun/gun">Add Reload</Link>
					</button>
				</div>
			</div>
		</dvi>
    </div>
  )
}
