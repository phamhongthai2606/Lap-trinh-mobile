import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
} from "react-native";
const { height, width } = Dimensions.get("window");

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "1",
      password: "1",
      nof: "",
    };
  }
  onLogin = () => {
    if (
      this.state.email == "1" &&
      this.state.password == "1"
    ) {
      this.props.navigation.navigate("Main");
    } else {
      this.setState({
        nof: "Email or password is incorret",
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/images/logo.png')} 
        />
        <Text style={{ color: "#aaaaaa",marginTop: -50, fontWeight: "bold", fontSize: 25 }}>
              Nguyễn Phương PC
          </Text>
         
        <TextInput
          style={{
            width: 300,
            height: 40,
            borderRadius: 5,
            fontSize: 16,
            paddingLeft: 15,
            paddingTop: -10,
            backgroundColor: "#ffff",
            color: "#000000",
            marginHorizontal: 25,
            marginTop: 10,
            borderWidth: 1,
            borderColor: "#bbb",
          }}
          onChangeText={(email) => this.setState({ email })}
          placeholder={"Email"}
          placeholderTextColor={"#694fad"}
          underlineColorAndroid="transparent"
        ></TextInput>
        <TextInput
          style={{
            width: 300,
            height: 40,
            borderRadius: 5,
            fontSize: 16,
            paddingLeft: 15,
            paddingTop: -10,
            backgroundColor: "#ffff",
            color: "#000000",
            marginHorizontal: 25,
            marginTop: 10,
            borderWidth: 1,
            borderColor: "#bbb",
          }}
          onChangeText={(password) => this.setState({ password })}
          placeholder={"Password"}
          placeholderTextColor={"#694fad"}
          underlineColorAndroid="transparent"
          secureTextEntry={true}
        ></TextInput>
        <Text style={{ color: "red" }}>{this.state.nof}</Text>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => this.onLogin()}
        >
          <Text style={styles.textlogin}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
      // <TouchableOpacity style={{marginTop:100}} onPress={() => this.props.navigation.navigate("Main")}>
      //   <Text>Login</Text>
      // </TouchableOpacity>
    );
  }
}

export default Login;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginBottom: 20,
    backgroundColor: 'red'
  },
  textlogin: {
    textAlign: "center",
    color: "#000000",
    fontWeight: "bold",
    fontSize : 20,
  },
  btnLogin: {
    width: 300,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#0000FF",
    marginTop: 25,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
  },
});
