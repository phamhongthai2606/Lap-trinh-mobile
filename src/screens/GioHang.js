import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ScrollView,
  Dimensions,
  Image,
  Button,
} from "react-native";
import { Header, ListItem, Avatar, SearchBar } from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import { FontAwesome, AntDesign, Entypo } from "@expo/vector-icons";
import { cart } from "../../db/db.json";

class ThuVien extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: cart,
    };
  }
  right = () => {
    return (
      <View
        style={{
          height: 30,
          width: 50,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
        }}
      >
        <FontAwesome
          style={{ marginRight: 15 }}
          name="search"
          size={24}
          color="#aaaaaa"
        />
        <Entypo name="plus" size={30} color="#aaaaaa" />
      </View>
    );
  };
  left = () => {
    return (
      <View style={{ width: 200, flexDirection: "row" }}>
        <Image
          style={{ width: 35, height: 35, borderRadius: 50 }}
          source={{
            uri: "https://scontent.fhan4-3.fna.fbcdn.net/v/t1.6435-9/c0.94.676.676a/s851x315/142797938_1243470569382122_4752212547340246237_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=da31f3&_nc_ohc=PyoMXOaETEAAX-booIM&_nc_ht=scontent.fhan4-3.fna&oh=00_AT99ZbSxUKqbSLte7b5PNBQszj23XUatQBo8zaXuRq4Tuw&oe=61EC421C",
          }}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "#ffff",
            marginLeft: 10,
          }}
        >
          Giỏ hàng
        </Text>
      </View>
    );
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "black",
          padding: 10,
        }}
      >
        <Header
          backgroundColor="black"
          leftComponent={() => this.left()}
          rightComponent={() => this.right()}
        />
        <ScrollView>
          <View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <Feather name="trending-up" size={24} color="#aaaaaa" />
              <Text style={{ color: "#aaaaaa", fontSize: 18 }}>
                Tìm kiếm
              </Text>
              <AntDesign name="qrcode" size={24} color="#aaaaaa" />
            </View>
            {this.state.cart.map((l, i) => (
              <View
                key={i}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor:"#222222",
                  borderRadius:10,
                  marginBottom: 15,
                }}
              >
                <Image
                  style={{ width: 100, height: 100, borderRadius: 50 }}
                  source={{
                    uri: l.image,
                  }}
                />

                <View style={{ flexDirection: "column", marginLeft: 10 }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "#aaaaaa",
                      fontSize: 15,
                    }}
                  >
                    {l.title}
                  </Text>

                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "#aaaaaa",
                      fontSize: 15,
                    }}
                  >
                    Giá:{l.gia}
                  </Text>

                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "#aaaaaa",
                      fontSize: 15,
                    }}
                  >
                    Số lượng:{l["so luong"]}
                  </Text>

                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "#aaaaaa",
                      fontSize: 18,
                    }}
                  >
                    Thành tiền:{l["thanh tien"]}
                  </Text>

                </View>
              </View>
            ))}
            

            <Text
                style={{
                  fontWeight: "bold",
                  color: "#1E90FF",
                  fontSize: 20,
                  backgroundColor:"#F08080",
                  borderRadius:10,
                  textAlign:"center"
                 
                }}
              >
                Tổng tiền:47.880.000vnđ
              </Text>
          </View>
        </ScrollView>
        <View style={{margin: 10,borderRadius:30}}>
                  <Button              
                    title= "Đặt hàng"
                    color="#DC143C"
                   /></View>
      </View>
    );
  }
}

export default ThuVien;