//Basically we made a module (a sort of library) for the Header component
//Import Libraries
//Child Component
import React from 'react';
import { Text, View } from 'react-native';

//Functional Component
const Header = (props) => {    //adding the Props 
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}> 
            <Text style={textStyle}>{props.headerText}</Text>   
        </View>  
    );
};

const styles = {
    
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center', //Justify content top to bottom
        alignItems: 'center', //align items left to right 
        height: 60,
        paddingTop: 15,
        paddingBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },

    textStyle: {
        fontSize: 24
    }
};
//Use component and reference it. 

export { Header };
