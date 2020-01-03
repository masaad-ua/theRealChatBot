import React, {Component} from 'react';
import {View, Text, TextInput, Platform, TouchableOpacity} from 'react-native';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    };

    render(){

        const {email, password} = this.state;
    	return(
    		<View>
			    <Text>Please Sign In</Text>
                <Text>Email:</Text>
                <TextInput value={email}
                           onChangeText={this.setEmail}
                           style={styles.input} />
                <Text>Password:</Text>
                <TextInput value={password}
                           onChangeText={this.setPassword}
                           style={styles.input}/>

                <TouchableOpacity >
                    <Text>Sign In</Text>
                </TouchableOpacity>
		    </View>
	    )
    }

    setPassword = password => this.setState({password});
    setEmail = email => this.setState({email});
}

const styles = {
    header:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    input:{
        ...Platform.select({
            ios:{
                borderBottomColor: '#000'
            },
            android:{
                borderBottomColor: '#199'
            }
        }),
        borderBottomColor:'#000',
        borderBottomWidth: 1
    }
};


export default SignIn