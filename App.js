import React, { Component } from 'react';
import { View , Text, TextInput, TouchableOpacity } from 'react-native';
import Button from './src/Components/Common/Button';


class App extends Component {
  constructor (props){
    super(props)

    this.state = {
      firstInput: '',
      secondInput: '',
      sum: '',
      diff: '',
      prod: '',
      quo: '',
      result: ''
    };
  }

  delete =() => {
    this.setState({ sum:'', prod:'', diff:'', quo:''});
  }
  
  adding = () => {
    const { firstInput, secondInput } = this.state;
    this.setState({
      sum: Number(firstInput) + Number(secondInput),
      prod: '',
      diff: '',
      quo: ''
    });
  }
  
  subtract = () => {
    const { firstInput, secondInput } = this.state;
    this.setState({
      diff: Number(firstInput) - Number(secondInput),
      sum: '',
      prod: '',
      quo: ''
    });
  }

  multiply = () => {
    const { firstInput, secondInput } = this.state;
    this.setState({
      prod: Number(firstInput) * Number(secondInput),
      sum: '',
      diff: '',
      quo: ''
    });
  }

  divide = () => {
    const { firstInput, secondInput } = this.state;
    this.setState({
      quo: Number(firstInput) / Number(secondInput),
      sum: '',
      prod: '',
      diff: '',
    });
  }
  
  render() {
    return(
      <View style={styles.cardContainer}>
        <View style={styles.resultHolderstyle}>
            <TouchableOpacity onPress={this.delete} style={styles.buttonRStyle}>
              <Text style={styles.numberStyle}>
                {this.state.sum}
                {this.state.diff}
                {this.state.prod}
                {this.state.quo}
              </Text>
            </TouchableOpacity> 
        </View> 
        <View style ={styles.inputHolderStyle}>
            <TextInput 
            placeholder="Enter Value"
            keyboardType = {"number-pad"}
            style = {styles.inputStyle}
            value = {this.state.firstInput}
            onChangeText={(firstInput) => this.setState({ firstInput })}
            />
            <TextInput 
            placeholder="Enter Value"
            keyboardType = {"number-pad"}
            style = {styles.inputStyle}
            value = {this.state.secondInput}
            onChangeText={(secondInput) => this.setState({ secondInput })} 
            />
        </View>      
        <View style = {styles.buttonContainerStyle}>
          <Button onPress={this.adding} > + </Button>
          <Button onPress={this.subtract}> - </Button>
          <Button onPress={this.multiply}> X </Button>
          <Button onPress={this.divide}> / </Button>
        </View>
      </View>
      
    );
  }
}

const styles ={
    cardContainer: {
      flex: 1,
    },

    resultHolderstyle:{
      flex: 2.5,
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor: '#EFD67F'
    },

    numberStyle:{
      flexDirection: 'row',
      color: 'white',
      fontWeight: '500',
      fontSize: 36,
      paddingTop: 45,
      paddingBottom: 50,
      textAlign:'center',
      justifyContent:'center',
      alignItems: 'center',
    },

    inputHolderStyle:{
      flex: 3,
      backgroundColor: '#5E7496',
      flexDirection: 'row'
    },
  
    inputStyle:{
      flex: 1,
      color: 'white',
      backgroundColor: '#6697A7',
      borderWidth: 0.5,
      borderColor: '#E4E2E9',
      fontWeight: '300',
      fontSize: 32,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    },

    buttonContainerStyle:{
      flex: 3,
      flexDirection: 'row'
    },

    buttonRStyle: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#515689',
      borderWidth: 0.5,
      borderHeight: 0.5,
      borderRadius: 3,
      borderColor: '#555555'
  }
};

export default App;
