import React, { Component } from 'react';


import { Container, Header, Content, Form, Item, Input, Label,Left,Button,Title,Right,Body,Icon } from 'native-base';


//import { Auth } from 'aws-amplify'
import { connect } from 'react-redux'

// import { authenticate, confirmUserLogin } from '../actions'

// import Input from '../../Components/Input'
// import Button from '../../Components/Button'

// import { fonts, colors } from '../../theme'
// import styles from '../../style'

class LoginScreen extends Component {

  static navigationOptions = {
    header: null
  }

  state = {
    username: '',
    password: '',
    accessCode: ''
  }
  
  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  signIn() {
    const { username, password } = this.state
    //alert( password)
    this.setState({
      username
    })
    this.props.navigation.navigate('Home')
  // this.props.dispatchAuthenticate(username, password)
  }

  confirm() {
    const { authCode } = this.state
    //this.props.dispatchConfirmUserLogin(authCode)
  }
  
  render() {
    // const { fontsLoaded } = this.state
    const { 
      signInErrorMessage,
      isAuthenticating,
      signInError,
      showSignInConfirmationModal
    } = this.props
    return (
      <Container>
         <Header>
         <Left>
          <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Heade</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  dispatchConfirmUserLogin: authCode => confirmUserLogin(authCode),
  dispatchAuthenticate: (username, password) => authenticate(username, password)
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

