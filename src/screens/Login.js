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
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import { Entypo } from "@expo/vector-icons";
const { height, width } = Dimensions.get("window");  // lấy full screen chiều cao rộng của đt

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/images/logo.png')} 
        />
        <View
          style={{
            height: 80,
            alignItems: "center",
            marginTop: -20,
          }}
        >
          <Text style={{ color: "#aaaaaa", fontWeight: "bold", fontSize: 30 }}>
              Nguyễn Phương PC
          </Text>
          <Text style={{ color: "#aaaaaa", fontWeight: "bold", fontSize: 30 }}>
            chào quý khách
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Register")}
          style={{
            backgroundColor: "#1cd65f",
            width: "80%",
            height: 50,
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Đăng kí miễn phí
          </Text>
        </TouchableOpacity>
        <View style={styles.btn}>
          <View style={{ width: "10%" }}>
             <Feather name="smartphone" size={24} color="#F0F8FF" />
          </View>
          <View style={{ width: "60%" }}>
            <Text
              style={{ color: "#aaaaaa", fontWeight: "bold", fontSize: 20 }}
            >
              Tiếp tục với số điện thoại
            </Text>
          </View>
        </View>
        <View style={styles.btn}>
          <View style={{ width: "10%" }}>
           <FontAwesome5 name="google" size={24} color="red" />
          </View>
          <View style={{ width: "60%" }}>
            <Text
              style={{ color: "#aaaaaa", fontWeight: "bold", fontSize: 20 }}
            >
              Tiếp tục bằng Google
            </Text>
          </View>
        </View>
        <View style={styles.btn}>
          <View style={{ width: "10%" }}>
            <Entypo name="facebook-with-circle" size={24} color="blue" />
          </View>
          <View style={{ width: "60%" }}>
            <Text
              style={{ color: "#aaaaaa", fontWeight: "bold", fontSize: 20 }}
            >
              Tiếp tục bằng facebook
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("login1")}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "#aaaaaa",
              marginTop: 10,
            }}
          >
            Đăng nhập bằng tài khoản
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  image: {
    width: 200,
    height: 120,
    marginBottom: 20,
  },
  btn: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#aaaaaa",
    width: "80%",
    height: 50,
    borderRadius: 25,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
  },
});
