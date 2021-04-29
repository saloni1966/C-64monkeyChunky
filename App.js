import {
  
  SafeAreaProvider,
  SafeAreaView,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import {Header} from 'react-native-elements';
import { TextInput } from 'react-native';
import db from './localdb';


console.log(db["the"]);
export default class  App extends React.Component {

  constructor(){
    super();
    this.state = {
        text : '',
        chunks : []

    }
  }
  
render(){
  return (
    <SafeAreaProvider style={styles.container}>
    
      <Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'Monkey Chunky', style: { color: '#fff',fontSize : '50px' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}

 
/>

<Image 
      source = {{uri:'https://i.pinimg.com/originals/6b/c5/37/6bc537a241ffc746acb7d2180d2253d8.png'}}
      style ={styles.imageicon}
      />

<TextInput
placeholder ='Enter Word'
style={styles.inputtext}
onChangeText={text=>{this.setState({
  text : text
})}}
value = {this.state.text}
/>



<TouchableOpacity 
style={styles.button}
onPress= {()=>this.setState({chunks:db[this.state.text].chunks})}
>
  <Text style={styles.buttontext}>Press me</Text>
</TouchableOpacity>
<View>
  {this.state.chunks.map(item=>{
   return(
   <TouchableOpacity 
    style={styles.chunkbutton}>
     <Text style={styles.displayText}>{item}</Text>
    </TouchableOpacity>
   )
  })}
</View>


    </SafeAreaProvider>
  );
}
}

const styles = StyleSheet.create({

  container:{
    

  },
  inputtext :{
  
    textAlign: 'center',
    margin: '50px',
    alignSelf:'center',
    alignContent:'center',
    width: '250px',
    height: '40px',
    borderWidth: 1,
    alignContent: 'center'
  
    
  },
  buttontext:{
   
    alignSelf:'center',
   
   
    
    padding: '3px',
    textAlign:'center',
    fontWeight:'bold',
    
   
  },
  button:{
    alignContent:'center',
    marginTop : 10,
    backgroundColor: '#fc6b',
    borderRadius: 20,
    width:'100px',
    height: '28px',
    alignSelf:'center',
  },
  displayText:{
    alignSelf: 'center',
    justifyContent:'center',
    textAlign: 'center',
    fontWeight:'bold',
    fontSize: '50px',
    margin : 50

  },
  imageicon:{
    alignItems : 'center',
    alignSelf:'center',
    width:400,
    height : 400
  },
  chunkbutton:{
    alignSelf:'center',
    fontSize:30,
    fontWeight:'bold',
    backgroundColor:'red',
    borderRadius:'20px',
    height:'20'
  }

});
