import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

class Root extends Component {
    static propTypes = {
    	
    };
    render(){
    	return(
    		<View>
			    <Text>Hello World !</Text>
		    </View>
	    )
    }
}

export default Root