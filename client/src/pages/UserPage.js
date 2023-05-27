import React, {useEffect, useState} from 'react'

//^ Importing UserComponent
import UserComp from '../Components/UserComp'
import { useDispatch, useSelector } from 'react-redux'
import { authStatus, logoutRedux, loginRedux, signupRedux, refreshCount } from '../store/redux'

export default function UserPage() {
    const refreshCountValue = useSelector((state) => state.redux.refreshCountValue)


	const [token, setToken] = useState() //^ state which will be used to store JWT from local storage.

    const [userBlock, setUserBlock] = useState() //^ This will be used to store all the user's info from the DB.

    
    useEffect(() => {

        //^ This gets all the user from the data base
        const getUsers = async (token) => {
            const response = await fetch("http://localhost:8001/api/user/users", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })

            const data = await response.json()
            setUserBlock(data)
            console.log(data)

        }

        const userJWT = JSON.parse(localStorage.getItem('goose-reloaded-user'))
		setToken(userJWT.token) //^ Setting the JWT token to state

		if(localStorage.getItem('goose-reloaded-user')){
            getUsers(token)
		}
        console.log(refreshCountValue)

    }, [refreshCountValue])
  return (
    <div className="user-container">
        {userBlock && userBlock.map((user) => (
            <UserComp _id={user._id} permissions={user.permissions} email={user.email} admin={user.admin}/>
        ))}
    </div>
  )
}
