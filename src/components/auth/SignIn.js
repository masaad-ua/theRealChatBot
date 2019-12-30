import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    };

    render(){

        const {email, password} = this.state
    	return(
    		<View>
			    <Text>Please Sign In</Text>
                <Text>Email:</Text>
                <TextInput value={email} onChangeText={this.setEmail}/>
                <Text>Password:</Text>
                <TextInput value={password} onChangeText={this.setPassword}/>
		    </View>
	    )
    }

    setPassword = password => this.setState({password});
    setEmail = email => this.setState({email});
}

export default SignIn