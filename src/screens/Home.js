import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Dimensions,
  Image,
  Button,
} from "react-native";
import { Header, ListItem, Avatar, SearchBar } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { recently, data1, nghesi, trending,forme } from "../../db/db.json";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataRecent: [],
      data1: data1,
      nghesi: nghesi,
      trending: trending,
      forme: forme,
    };
  }
  componentDidMount = () => {
    this.setState({
      dataRecent: recently,
    });
  };
  right = () => {
    return (
      <View
        style={{
          height: 30,
          width: 50,
          backgroundColor: "#aaaaaa",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
        }}
      >
        <MaterialIcons name="notifications" size={24} color="#ffff" />
      </View>
    );
  };
  left = () => {
    return (
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 10, fontWeight: "bold", color: "#1cd65f" }}>
          Nguyễn Phương PC
        </Text>
        <Image
          style={{ width: 30, height: 30 }}
          source={require('../../assets/images/logo.png')} 
        />
      </View>
    );
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "black", padding: 10, marginleft: 10 }}>
        <Header
          backgroundColor="black"
          leftComponent={() => this.left()}
          rightComponent={() => this.right()}
        />
        <ScrollView>
          <View style={{ padding: 10,}}>
            <Text style={{ color: "#ffff", fontWeight: "bold", fontSize: 25 }}>
             danh mục sản phẩm
            </Text>
            <ScrollView
              style={{borderRadius: 50}}
              horizontal={true}//kéo ngang
              showsHorizontalScrollIndicator={false}
            >             
           
            <View style={{ marginLeft: 10,height:30}}>
                  <Button              
                    title= "main"
                    color="#DC143C"
                   /></View>
                   
             <View style={{ marginLeft: 10,height:30}}>
                    <Button              
                    title= "cpu"
                    color="#DC143C"
                   /></View> 

            <View style={{ marginLeft: 10,height:30}}>
                    <Button              
                    title= "ram"
                    color="#DC143C"
                   /></View>

             <View style={{ marginLeft: 10,height:30}}>
                    <Button              
                    title= "psu"
                    color="#DC143C"
                   /></View>

              <View style={{ marginLeft: 10,height:30}}>
                    <Button              
                    title= "bàn phím"
                    color="#DC143C"
                   /></View>

            <View style={{ marginLeft: 10,height:30}}>
                    <Button              
                    title= "tai nghe"
                    color="#DC143C"
                   /></View>               
            </ScrollView>                   
          </View>
          <View style={{ padding: 10 }}>
            <Text style={{ color: "#ffff", fontWeight: "bold", fontSize: 25 }}>
             sản phẩm bán chạy
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {this.state.data1.map((l, i) => (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("Detail", { id: l.id })//truyền i vào detail
                  }
                  key={i}// cần có khóa để duyệt
                >
                  <Image
                    style={styles.image1}
                    source={{
                      uri: l.image,//data theo từng ảnh
                    }}
                  />
                  <View style={{ width: 160 }}>
                    <Text
                      style={{ color: "#aaaaaa", fontSize: 16, marginTop: 5 }}
                    >
                      {l.title}
                    </Text>
                    <Text
                      style={{ color: "#aaaaaa", fontSize: 15, marginTop:5}}
                    >
                      {l.gia}
                    </Text>
                    {/* <Icon name={l.FontAwesome} /> */}
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={{ color: "#ffff", fontWeight: "bold", fontSize: 25 }}>
             Sản phẩm nổi bật
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {this.state.trending.map((l, i) => (
                <View key={i}>
                  <Image
                    style={styles.image1}
                    source={{
                      uri: l.image,
                    }}
                  />
                  <View style={{ width: 160 }}>
                    <Text
                      style={{ color: "#aaaaaa", fontSize: 16, marginTop: 5 }}
                    >
                      {l.title}
                    </Text>
                    <Text
                      style={{ color: "#aaaaaa", fontSize: 15, marginTop:5}}
                    >
                      {l.gia}
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={{ color: "#ffff", fontWeight: "bold", fontSize: 25 }}>
              Sản phẩm mới
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {this.state.forme.map((l, i) => (
                <View key={i}>
                  <Image
                    style={styles.image1}
                    source={{
                      uri: l.image,
                    }}
                  />
                  <View style={{ width: 160 }}>
                    <Text
                      style={{ color: "#aaaaaa", fontSize: 16, marginTop: 5 }}
                    >
                      {l.title}
                    </Text>
                    <Text
                      style={{ color: "#aaaaaa", fontSize: 15, marginTop:5}}
                    >
                      {l.gia}
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
          
        </ScrollView>
      </View>
    );
  }
}

export default Home;
const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 110,
    marginTop: 10,
    borderRadius: 3,
    marginRight: 10,
  },
  image1: {
    width: 160,
    height: 140,
    marginTop: 10,
    borderRadius: 3,
    marginRight: 10,
  },
  image2: {
    width: 130,
    height: 130,
    marginTop: 10,
    borderRadius: 70,
    marginRight: 10,
  },
  
});
