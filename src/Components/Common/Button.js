import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { textStyle, buttonStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
        
    ); 
};

const styles = {

    textStyle: {
        alignSelf: 'center',
        color: 'white',
        fontWeight: '600',
        fontSize: 32,
        paddingTop: 70,
        paddingBottom: 50
    },

    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#8CCDC2',
        borderWidth: 0.5,
        borderHeight: 0.5,
        borderRadius: 3,
        borderColor: '#555555'
    }
};
export default Button;

