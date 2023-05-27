import { createSlice } from '@reduxjs/toolkit'

export const reduxSlice = createSlice({
    name: "redux",

    initialState: {
        userAuthStatus: false,
        refreshCountValue: 0,
        error: null
    },

    reducers: {
        authStatus: (state) => {
            if(localStorage.getItem('goose-reloaded-user')){
                return {
                    ...state,
                    userAuthStatus: true
                }
            }

            if(!localStorage.getItem('goose-reloaded-user')){
                return {
                    ...state,
                    userAuthStatus: false
                }

            }
        },

        logoutRedux: (state) => {
            window.location.assign("/auth/login") //^ when the user logs out their will be sent to the logout page
            localStorage.removeItem("goose-reloaded-user") //^ Removes JWT from local storage

            //^ Updates the state 
            return {
                ...state,
                userAuthStatus: false
            }

        },

        loginRedux: async (state, props) => {

            try {
                const response = await fetch("http://localhost:8001/api/user/login", {
                    method: "POST",
                    body: JSON.stringify({
                        email: props.payload.email,
                        password: props.payload.password
                    }),
                    headers:{
                        "Content-Type": "application/json"
                    }
                })

                const data = await response.json()

                if(data.error){
                    console.log(data.error)
                }

                else{
                    localStorage.setItem("goose-reloaded-user", JSON.stringify(data))
                    window.location.assign("/")

                    return {
                        ...state,
                        userAuthStatus: true
                    }
                }
            }

            catch(error){
                state.error = "Could not connect to the server"
            }


        },
           
        //^ This function is responsible for signup the user
        signupRedux: async (state, props) => {

            try {
                //^ sending data to the server, where the user will be authenticated.
                const response = await fetch("http://localhost:8001/api/user/signup", {
                    method: "POST",
                    body: JSON.stringify({
                        email: props.payload.email,
                        password: props.payload.password
                    }),
                    headers: {
                        "COntent-Type": "application/json"
                    }
                })

                const data = await response.json()

                //^ If the response is okay, the JWT will be saved to local stroage and the user will be sent to the home page.
                if(response.ok){
                    localStorage.setItem("goose-reloaded-user", JSON.stringify(data))
                    window.location.assign("/")

                    return {
                        ...state,
                        authStatus: true
                    }
                }
            }

            //^ If the React application is unable to connect to the server this error will be thrown.
            catch(error){
                state.error = "Could not connect to server"
            }

        },

        refreshCount: (state) => {

            state.refreshCountValue = state.refreshCountValue + 1

            console.log("REDUX", state.refreshCountValue )

            // return {
            //     ...state,
            //     refreshCountValue: state.refreshCountValue + 1
            // }
        }

    }
})

export const { authStatus, logoutRedux, loginRedux, signupRedux, refreshCount } = reduxSlice.actions;
export default reduxSlice.reducer