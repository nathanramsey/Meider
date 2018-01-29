import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';


//create stuff
class App extends React.Component{
  state = {
      todo: "",
      todo: []
  }
  addTodo = () =>{
      var newTodo = this.state.text;
      var arr = this.state.todo;
      arr.push(newTodo);
      this.setState({todo: arr, text: ""});
  }
  deleteTodo = (t) =>{
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos,1);
    this.setState({todo: arr});
  }
  renderTodos = () =>{
    return this.state.todo.map(t=>{
      return (
        <Text
        key={t}
        onPress={()=>{this.deleteTodo(t)}}
        >{t}</Text>
      )
    })
  }
  render(){
    return (
      <View>
      <View style={styles.viewStyle}>
        <Text style={styles.header}> Add a new task</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text)=>this.setState({text})}
          value={this.state.text }
        />
        <Button
          title="Add todo"
          color="green"
          onPress={this.addTodo}
        />
        {this.renderTodos()}
      </View>
      </View>
    )
  }
}

const styles = {
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 100,
    backgroundColor: "#FFEB3B"
  },
    inputStyle:{
      height: 40,
      width: 300,
      borderColor: "grey",
      color: "black",
      padding: 10,
      borderWidth: 2,
      backgroundColor: "yellow",
      borderRadius: 5,
      margin: 10
    },
    container: {
      flex: 1
    },
    header: {
      fontSize: 20,
      color: 'green',
      fontWeight: 'bold'
    }
}

export default App;
