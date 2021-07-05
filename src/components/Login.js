import React from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../components/css/Login.css'
import { useHistory } from "react-router-dom";

const Login = () => {
    const history = useHistory();

    return (
        <div>
            <Navigation />
            <Form inline>
                <FormGroup>
                    <Label for="exampleEmail" hidden>Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label for="examplePassword" hidden>Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                </FormGroup>
                {' '}
                <Button
                onClick={ () => {history.push('/')}}
                >
                    Submit
                    </Button>
            </Form>
            <Footer />
        </div>
    )
}

export default Login
