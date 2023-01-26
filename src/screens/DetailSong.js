import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Dimensions,
  ScrollView,
  Image,
  Animated,
  Button,
} from "react-native";
import { Header, ListItem, Avatar, SearchBar } from "react-native-elements";
import {
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  Foundation,
  FontAwesome,
  MaterialIcons,
  Fontisto,
} from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { recently, data1, nghesi, trending } from "../../db/db.json";
class DetailSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      data: [],
    };
  }
  componentDidMount = async () => {
    let obj = await data1.filter((a) => a.id == this.props.route.params.id);
    await this.setState({
      item: obj,
    });
  };
  left = () => {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
        <Ionicons
          style={{ marginTop: 1 }}
          name="ios-arrow-back"
          size={24}
          color="#aaaaaa"
        />
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#222222",
          padding: 10,
        }}
      >
        <Header
          backgroundColor="#222222"
          leftComponent={() => this.left()}
          centerComponent={{
            text: "Chi tiết sản phẩm",
            style: { color: "#ffff", fontSize: 20 },
          }}
          rightComponent={() => (
            <Entypo name="dots-three-horizontal" size={24} color="#aaaaaa" />
          )}
        />
        <ScrollView>
          {this.state.item.map((l, i) => (
            <View
              key={i}
              style={{ width: "100%", alignItems: "center", marginTop: 20 }}
            >
              <Image
                style={{ height: 300, width: "90%" }}
                source={{
                  uri: l.image,
                }}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 25,
                  color: "#ffff",
                  marginTop: 10,
                }}
              >
                {l.title}
              </Text>
              <Text style={{ fontSize: 18, color: "#aaaaaa" }}>{l.author}</Text>
                {/* giá sp */}
              <View style={styles.gia}>
              <Text style={{ fontSize: 18, color: "#1E90FF" }}>
                Giá sản phẩm:
              </Text>
              <Text style={{ fontSize: 18, color: "#F0FFFF"}}>
                {l.gia}    
              </Text>
              <AntDesign name="hearto" size={24} color="#F0FFFF" style={{ marginLeft:70}}/>
              </View>
              <View
                style={{
                  width: "90%",
                  backgroundColor: "#444444",
                  borderRadius: 5,
                  marginTop: 20,
                  padding: 10,
                }}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 18, color: "#DDDDDD" }}
                >
                  thông tin sản phẩm:
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#DDDDDD",
                    marginLeft: 10,
                  }}
                >
                  {l.thongtinsp}
                </Text>              
              </View>            
            </View>
          ))}
        </ScrollView>
        {/* Button thêm sp vào giỏ hàng */}
        <View style={styles.Button}>
        <View style={{ margin: 10,height:30,borderRadius:30,marginBottom:"50%",width:"47%"}}>
                  <Button              
                    title= "Thêm giỏ hàng"
                    color="#0000FF"
                   /></View>
         <View style={{margin: 10,borderRadius:30,width:"40%"}}>
                  <Button              
                    title= "mua ngay"
                    color="#DC143C"
                   /></View>
         </View>                                  
      </View>
    );
  }
}

export default DetailSong;
const styles = StyleSheet.create({
 Button:{
  flexDirection: "row",
 },
 gia:{
  flexDirection: "row",
  // marginRight:90,
 },
});