import React from 'react'
import { Container, Header, Content, Form, Item, Label, Left, Button, Input, Title, Right, Body, Icon, Text } from 'native-base';
import { connect } from 'react-redux'
// import Input from '../../Components/Input'
import Select from '../../Components/Select'

//import styles from '../../style'

class AddCreditCard extends React.Component {
  static navigationOptions = {
    title: 'Add Credit Card',
  };
  state = {
    cardNumber: '',
    selectedCard: '',
    interestRate: '',
    creditLimit: '',
    cardOptions: ["HSBC", "HDFC", "SBI"]
  }
  componentDidMount() {
    // console.log(styles.submitButton,'ss')
  }
  onChangeText = (value, type) => {

    console.log(value, type, 'value')
  }
  onCardChange = (value) => {
    this.setState({
      selectedCard: value
    });
  }

  render() {
    return (

      <Container>
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
        <Content ontentContainerStyle={{
          justifyContent: 'center', alignItems: 'center',
          paddingTop: 40, marginRight: 40, paddingHorizontal: 10
        }}>
          <Form>

            <Item stackedLabel>
              <Input
                name="cc"
                value={this.state.cardNumber}
                placeholder="Enter Card Number"
                type='number'
                keyboardType='numeric'
                onChangeText={this.onChangeText}
              />
            </Item>
            <Item stackedLabel>
              <Select
                selectedValue={this.state.selectedCard}
                style={{ height: 50, width: 100 }}
                onValueChange={this.onCardChange}
                options={this.state.cardOptions}
              >
              </Select>
            </Item>
            <Item stackedLabel>
              <Input
                value={this.state.creditLimit}
                placeholder="Enter Credit Limit"
                type='number'
                keyboardType='numeric'
                onChangeText={this.onChangeText}
              />
            </Item>
            <Item stackedLabel>
              <Input
                value={this.state.interestRate}
                placeholder="Interest Rate"
                type='number'
                keyboardType='numeric'
                onChangeText={this.onChangeText}
              />
            </Item>
            <Button
              title='Save and Continue'
              onPress={() => this.props.navigation.navigate('CreditCardList')}
              full
              rounded
              success
              style={{ marginTop: 10, marginRight: 10 }}
            ><Text>Submit</Text></Button>

          </Form>
        </Content>
      </Container>
    )
  }
}


const mapStateToProps = state => ({
  // auth: state.auth
})

const mapDispatchToProps = {
  //  dispatchLogout: () => logOut()
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCreditCard)