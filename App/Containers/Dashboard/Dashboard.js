import React, { Component } from 'react';
import { Container, Header, Content, Label, Left, Button, Title, Right, Body, Icon, Text, } from 'native-base';
// import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Dashboard extends Component {
  static navigationOptions = {
    title: 'Dashboard',
  };
  // static navigationOptions = {
  //   header: null
  // }
  render() {
    return (
      <Container>
        {/* <Header /> */}
        {/* <Header>
        <Left>
          <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header> */}
        {/* <Grid>
        <Col style={{ backgroundColor: '#635DB7', height: 200 }}>
        <Button
          title="Go to CreditCard"
          onPress={() => this.props.navigation.navigate('CreditCardList')}
        />
        </Col>
        <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
      </Grid>
      <Grid>
        <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
        <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
      </Grid> */}
        <Content>
          {/* <Text>Product List</Text> */}
          {/* <Button
          title="Go to CreditCard"
          
        /> */}
          <Button block onPress={() => this.props.navigation.navigate('CreditCardList')} success><Text> Go to Credit Card </Text></Button>
          {/* <Button
          title="Go to Add Product"
          onPress={() => this.props.navigation.navigate('AddProduct')}
        />
        <Button
          title="Go to Edit Product"
          onPress={() => this.props.navigation.navigate('EditProduct')}
        /> */}
        </Content>
      </Container>

    );
  }
}