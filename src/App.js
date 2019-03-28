import React from 'react';
import axios from 'axios';
import './signup.css'


class App extends React.Component {
    constructor(props) {

        super(props);

        this.state = {

        }

    }

    signup = () => {
        var username = this.refs.username.value;
        var email = this.refs.email.value;
        var password = this.refs.password.value;
        var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (username === '' || email === '' || password === '') {
            alert("fill all details");
        } else if (username.length < 8) {
            alert("please enter a username with atleast 8 characters");
        } else if (!password.match(paswd)) {
            alert("password must contain atleast one uppercase,lowercase,special character and number and must atleast 8 characters long");
        } else if (!email.match(mailformat)) {
            alert("enter a valid email");
        } else {


            axios.post('http://cvhunt.com/API/signupinfo', {
                    username: username,
                    password: password,
                    email: email,
                    usertype: '1'
                })
                .then(function(response) {
                    console.log(response);
                    if (response.data.message) {
                        alert(response.data.message);
                    }
                    if (response.data.errorMsg) {
                        alert(response.data.errorMsg);
                    }

                })
                .catch(function(error) {
                    console.log(error);
                });



        }

    }
    render() {

        return (
            <div>

            <div className="signup">
            <h1>SIGN UP</h1>
            <label>User Name</label>
            <input type="text" name="" ref="username" placeholder="username" /><br/>
            <label>Email-id</label>
            <input type="email" name="" ref="email" placeholder="Email-id" /><br/>
            <label>Password</label>
            <input type="password" name="" ref="password" placeholder="password" /><br/>
            <br></br>
            <button ref="button" onClick={this.signup}>Register</button>
        
            </div>
        
    </div>

        );
    }

}
export default App;

