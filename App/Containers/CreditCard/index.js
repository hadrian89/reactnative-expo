import React from 'react'
import { Container, Header, Content, Label, Left, Button, Title, Right, Body, Icon, Text, } from 'native-base';

import {View,FlatList, ActivityIndicator} from 'react-native'
import { connect } from 'react-redux'

// import Input from '../../Components/Input'
// import Select from '../../Components/Select'
import { ListItem } from 'react-native-elements';
import Database from '../../Services/Database';
const db = new Database();

class CreditCardList extends React.Component {

  static navigationOptions = {
    title: 'Credit Card',
  };

  constructor() {
    super();
    this.state = {
      isLoading: true,
      products: [],
      notFound: 'Products not found.\nPlease click (+) button to add it.'
    };
  }

  componentDidMount() {
    console.log('1')
    // this._subscribe = this.props.navigation.addListener('didFocus', () => {
    //   this.getProducts();
    //   console.log('2')
    // });
    console.log('3')
  }

  getProducts() {
    let products = [];
    db.listProduct().then((data) => {
      products = data;
      this.setState({
        products,
        isLoading: false,
      });
    }).catch((err) => {
      console.log(err);
      this.setState = {
        isLoading: false
      }
    })
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <ListItem
      title={item.prodName}
      leftAvatar={{
        source: item.prodImage && { uri: item.prodImage },
        title: item.prodName[0]
      }}
      onPress={() => {
        this.props.navigation.navigate('ProductDetails', {
          prodId: `${item.prodId}`,
        });
      }}
      chevron
      bottomDivider
    />
  )

  render() {
    return (
      <Container>
        <Content>
          <Button block onPress={() => this.props.navigation.navigate('CreditCardForm')} success><Text> Add Credit Card </Text></Button>
        </Content>
      </Container>
    );
  }
  // render() {
  //   if(this.state.isLoading){
  //     return(
  //       <View >
  //         <ActivityIndicator size="large" color="#0000ff"/>
  //       </View>
  //     )
  //   }
  //   if(this.state.products.length === 0){
  //     return(
  //       <View>
  //         <Text >{this.state.notFound}</Text>
  //       </View>
  //     )
  //   }
  //   return (
  //     <FlatList
  //       keyExtractor={this.keyExtractor}
  //       data={this.state.products}
  //       renderItem={this.renderItem}
  //     />
  //   );
  // }
}


const mapStateToProps = state => ({
  // auth: state.auth
})

const mapDispatchToProps = {
  //  dispatchLogout: () => logOut()
}

export default connect(mapStateToProps, mapDispatchToProps)(CreditCardList)