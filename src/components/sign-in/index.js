import React, { Component } from 'react'
import FormInput from './../form-input'
import Button from './../button'
import { auth, signInWithGoogle } from './../../utils/firebase'

import './index.scss'

export class index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        
        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: ''})
        } catch (error) {
            console.log(error)
        } 
    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>Already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit
                }>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <div className='buttons'>
                        <Button 
                            type="submit" 
                            value="Submit" 
                        >
                        Sign In
                        </Button>
                        <Button
                            onClick={signInWithGoogle} 
                            isGoogleSignIn
                        >
                        Sign In With Google
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default index
