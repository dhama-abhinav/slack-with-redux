import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import React from 'react'
import './Login.css'

const signIn = ()=>{
    auth.signInWithPopup(provider)
    .catch((error)=> alert(error.message))
}

export const Login = () => {
    return (
        <div className='login'>
            <div className='login__container'>
                <img 
                 src='https://fitsmallbusiness.com/wp-content/uploads/2020/08/ReviewsIcon_Slack.jpg'
                 alt='' />
                 <h1>Sign in here...</h1>
                 <p>slack.com</p>
                 <Button onClick={signIn} >Sign in with  Google</Button>
            </div>
        </div>
    )
}
