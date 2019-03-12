import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

const ResultButton = ({ onPress, children }) => {
    const { textRStyle, buttonRStyle } = styles;

    return (
        <TouchableHighlight onPress={onPress} style={buttonRStyle}>
            <Text style={textRStyle}>
                {children}
            </Text>
        </TouchableHighlight>
        
    ); 
};

const styles = {

    textRStyle: {
        alignSelf: 'center',
        color: 'black',
        fontWeight: '500',
        fontSize: 36,
        paddingTop: 45,
        paddingBottom: 50
    },

    buttonRStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#EFD67F',
        borderWidth: 0.5,
        borderHeight: 0.5,
        borderRadius: 3,
        borderColor: '#555555'
    }
};

export default ResultButton;

