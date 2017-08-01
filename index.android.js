/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableHighlight,
} from 'react-native';
import realationandroid from './relationship';

var i=0;
export default class RelationShip extends Component {

    constructor(props){
        super(props);
        this.state={
            text:"",
            result:"",
        }
    }

    _Calculation(){
        var options = {
            text:this.state.text,		//输入的文本
            sex:-1,			//自己的性别：0女性,1男性
            type:'default',		//转换类型：'default'算称谓,'chain'算关系(此时reverse无效)
            reverse:false		//称呼方式：true对方称呼我,false我称呼对方
        };
        let a=realationandroid(options);

       this.setState({result:a+''});
       let c=this.state.text
       if (a==''&c.length!=0){
           this.setState({result:'GAY'});
       }
    }
    _OperatorNum(a){

    if (i<16){

        if(i==0){
            this.setState({text:'我的'+ a});
            i++;
        }else {

            this.setState({text:this.state.text+'的'+a});
            i++;
        }
    }else {
        Alert.alert(
            '提示',
            '在玩就彻底把我玩坏了',
            [
                /**
                 *  注意参数名字一定不能错
                 */
                {text: '确定', onPress: ()=> console.log('点击确定')}
            ]);
    }



    }
    _Operator(a){
        var options = {
            text:this.state.text,		//输入的文本
            sex:-1,			//自己的性别：0女性,1男性
            type:'default',		//转换类型：'default'算称谓,'chain'算关系(此时reverse无效)
            reverse:true		//称呼方式：true对方称呼我,false我称呼对方
        };
        let b=realationandroid(options);
        this.setState({result:b+''});

        }
   _Shanchu(){
       if(i>1){
           this.setState({text:this.state.text.substring(0,this.state.text.length-3)});
           i--;
       }else if(i==1) {
           this.setState({text:''});
            i=0;
       }else if (i==0){

       }

   }


    render() {

        return ( <View style={ styles.container}>
              <View style={styles.jisuan}>
                <ExpressionText text={this.state.text}/>
                <ResultText result={this.state.result} />
              </View>


              <View style={styles.caozuo}>
                <View style={styles.bt_column}>
                  <Num_button name='AC' onPress={()=>{this.setState({text:'',result:''}),i=0}}/>
                  <Num_button name='父' onPress={()=>this._OperatorNum('爸爸')}/>
                  <Num_button name='母'onPress={()=>this._OperatorNum('妈妈')}/>
                  <Num_button name='夫'onPress={()=>this._OperatorNum('老公')}/>
                  <Num_button name='妻'onPress={()=>this._OperatorNum('妻子')}/>
                </View>
                <View style={styles.bt_column}>
                  <Num_button name='←'onPress={()=>this._Shanchu()}/>
                  <Num_button name='子' onPress={()=>this._OperatorNum('儿子')} />
                  <Num_button name='女'onPress={()=>this._OperatorNum('女儿')}/>
                  <Num_button name='兄'onPress={()=>this._OperatorNum('哥哥')}/>
                  <Num_button name='弟'onPress={()=>this._OperatorNum('弟弟')}/>
                </View>
                <View style={styles.bt_column}>
                  <Num_button name='⇌'onPress={()=>this._Operator('')}/>
                  <Num_button name='姐'onPress={()=>this._OperatorNum('姐姐')}/>
                  <Num_button name='妹'onPress={()=>this._OperatorNum('妹妹')}/>
                  <Result_button name='=' onPress={()=>this._Calculation()}/>
                </View>
              </View>

            </View>
        );
    }
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
                <Text   numberOfLines={3} style={ {margin:10,flex:1,textAlignVertical :'center', textAlign:'right', justifyContent: 'center',fontSize:20} } >
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

                <Text style={ {
                     flex:0.7,textAlign:'right',margin:30,
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
                  backgroundColor:'orange',
                    alignItems:'center',
                    justifyContent: 'center',
                    flex: 2, borderWidth
                        :0.3,borderColor:'orange'
                }}
                onPress = {()=>{
                    this.props.onPress && this.props.onPress();
                }}>
                <Text style={{textAlign:'center', justifyContent: 'center',fontSize:28 ,color:'white'  }} >{this.props.name}</Text>
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



            });
AppRegistry.registerComponent('RelationShip', () => RelationShip);
