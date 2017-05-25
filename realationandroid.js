/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Dimensions,
  AppRegistry,
  StyleSheet,
  Text,
  View,
    navigator,
    ToastAndroid,
    TouchableHighlight,
} from 'react-native';
var defaultexpress="";
 class realationandroid extends Component {

    constructor(props){
        super(props);
        this.state={
            text:"",
            result:"",
        }
    }

_Calculation(){
        try {
            let r =eval(defaultexpress);
            this.setState({result:r})

        }catch (exception){


        }

}
_OperatorNum(a){

    this.setState({text:this.state.text+a});
    defaultexpress=defaultexpress+a;

}
_Operator(a){



    let c=defaultexpress.split('')
    let b=c[c.length-1];
    var n = parseInt(b);
    if (!isNaN(n))
    {
        this.setState({text:this.state.text+a});
        switch (a){
            case '÷':defaultexpress=defaultexpress+'/';break;
            case '%':defaultexpress=defaultexpress+'%';break;
            case '×':defaultexpress=defaultexpress+'*';break;
            case '-':defaultexpress=defaultexpress+'-';break;
            case '+':defaultexpress=defaultexpress+'+';break;
        }

    }



}
  render() {

    return ( <View style={ styles.container}>
     <View style={styles.jisuan}>
         <MytitleButton />
         <ExpressionText text={this.state.text}/>
         <ResultText result={this.state.result} />
  </View>


      <View style={styles.caozuo}>
          <View style={styles.bt_column}>
          <Num_button name='AC' onPress={()=>{this.setState({text:'',result:''}),defaultexpress=""}}/>
          <Num_button name='父亲' onPress={()=>this._OperatorNum(7)}/>
          <Num_button name='4'onPress={()=>this._OperatorNum(4)}/>
          <Num_button name='1'onPress={()=>this._OperatorNum(1)}/>
          <Num_button name='%'onPress={()=>this._Operator('%')}/>
      </View>
          <View style={styles.bt_column}>
          <Num_button name='←'onPress={()=>{this.setState({text:this.state.text.substring(0,this.state.text.length-1)}),defaultexpress.substring(0,defaultexpress.length)}}/>
          <Num_button name='8' onPress={()=>this._OperatorNum(8)} />
          <Num_button name='5'onPress={()=>this._OperatorNum(5)}/>
          <Num_button name='2'onPress={()=>this._OperatorNum(2)}/>
          <Num_button name='0'onPress={()=>this._OperatorNum(0)}/>
          </View>

          <View style={styles.bt_column}>
          <Num_button name='÷'onPress={()=>this._Operator('÷')}/>
          <Num_button name='9'onPress={()=>this._OperatorNum(9)}/>
          <Num_button name='6'onPress={()=>this._OperatorNum(6)}/>
          <Num_button name='3'onPress={()=>this._OperatorNum(3)}/>
          <Num_button name='.'onPress={()=>{this.setState({text:this.state.text+"."}),defaultexpress=defaultexpress+"."}}/>
          </View>
          <View style={styles.bt_column}>
          <Num_button name='×'onPress={()=>this._Operator('%')}/>
          <Num_button name='-'onPress={()=>this._Operator('-')}/>
          <Num_button name='+'onPress={()=>this._Operator('+')}/>
          <Result_button name='=' onPress={()=>this._Calculation()}/>
          </View>
      </View>

      </View>
    );
  }
}
class MytitleButton extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
_onPress(){
    if (navigator){
      navigator.push({
      
       name:'' 
       
      
    })
    }
}


    render(){
        return(
        <View style={{flex:0.4}}>
        <TouchableHighlight
            underlayColor="grey"
            style={{
              margin:10,
               height:20,width:20,
                alignItems:'center',
                justifyContent: 'center',
                borderWidth
                    :0.2,borderColor:'#D6D6D6'
            }}
            onPress = {()=>{
                this._onPress();
            }}>
            <Text style={{textAlign:'center', justifyContent: 'center',fontSize:28}} >{this.props.name}</Text>
        </TouchableHighlight>

       < /View>


        )


    };

}

class ExpressionText extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render(){
        return(
            <Text style={ {margin:30,flex:1,textAlign:'right', justifyContent: 'center',fontSize:30} } >
                {this.props.text}
            </Text>
    )


    };

}

class ResultText extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

    render(){
        return(

            <Text style={ {flex:1,textAlign:'right',margin:30,
             justifyContent: 'center',fontSize:30} } >
                {this.props.result}
               </Text>
        )


    };

}

class Num_button extends Component{

     render(){
         return(
             <TouchableHighlight
         underlayColor="grey"
         style={{
             alignItems:'center',
                 justifyContent: 'center',
             flex: 1, borderWidth
         :0.2,borderColor:'#D6D6D6'
         }}
         onPress = {()=>{
             this.props.onPress && this.props.onPress();
         }}>
         <Text style={{textAlign:'center', justifyContent: 'center',fontSize:28}} >{this.props.name}</Text>
         </TouchableHighlight>

         );
     }


}

class Result_button extends Component{
    render(){
        return(
            <TouchableHighlight

        underlayColor="grey"
        style={{
            alignItems:'center',
                justifyContent: 'center',
                flex: 2, borderWidth
        :0.3,borderColor:'#D6D6D6'
        }}
        onPress = {()=>{
            this.props.onPress && this.props.onPress();
        }}>
       <Text style={{textAlign:'center', justifyContent: 'center',fontSize:28   }} >{this.props.name}</Text>
        </TouchableHighlight>

    );
    }


}
const styles = StyleSheet.create({
  container: {
     flex:1, flexDirection:'column', backgroundColor:"darkgray",marginTop:20

  },
  jisuan: {
      flex:1,
      flexDirection:'column',
     backgroundColor:'#F7F7F7',
  },
  caozuo:{
      alignItems: 'center',
      flexDirection:'row',
      flex:2,
      backgroundColor:'#ffff'
  },
  bt_column:{
       flex :1,

       flexDirection:'column',
  },

  number_bt:{
    flex:1,


  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


