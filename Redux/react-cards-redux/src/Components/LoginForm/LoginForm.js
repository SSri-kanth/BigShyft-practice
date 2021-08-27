import React, { Component } from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { loggedUser } from '../../actions';



class LoginForm extends Component {

    constructor(props){
        super(props);
        this.state = {username: '', password: ''}
    }

    handleLogin = (e) => {

        e.preventDefault();
        if ((e.target[0].value === e.target[1].value)  ) {
            const user = this.props.items.find(el => el.username === e.target[0].value);
            alert("logged in");
            this.props.changePage("afterlogin");
            this.props.getLoggedUser(user);
        }
        else{
            alert("invalid credentials");
        }

    }

    changeStateUsername = (e) => {
        e.preventDefault();
        console.log(e.target);
        this.setState({username: e.target.value})

    }

    changeStatePassword = (e) => {
        e.preventDefault();
        this.setState({password: e.target.value})
    }

    componentDidUpdate(prevProps){
        if (prevProps.clickCard !== this.props.clickCard){
            this.setState({username: this.props.clickCard, password: this.props.clickCard})
        }
    }
    

    render = () => {
        return (
            <div>
                <form onSubmit={this.handleLogin} >
                    <label>
                        Enter Username
                        <input type="text" name="username" placeholder="Enter Username" onChange={this.changeStateUsername} value={this.state.username} />
                    </label>
                    <br />
                    <label>
                        Password
                        <input type="password" name="password" placeholder="Enter Password" onChange={this.changeStatePassword} value={this.state.password} />
                    </label>
                    <br />
                    <button type="submit">Log In</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        //: (user) => dispatch(loggedUser(user))
    }
}

export default connect(null, mapDispatchToProps)(LoginForm);

LoginForm.propTypes = {
    items: PropTypes.array,
    clickCard: PropTypes.string,
    changePage: PropTypes.func,
    loggedUser: PropTypes.string,
    getLoggedUser: PropTypes.func
}

