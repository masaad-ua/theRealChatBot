import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import SignIn from './components/auth/SignIn'

class Root extends Component {
    static propTypes = {
    	
    };
    render(){
    	return(
    		<View>
			    <Text>Hello World !!!</Text>
                <Text>This is my first mobile app</Text>
                <SignIn />
		    </View>
	    )
    }
}


export default Root