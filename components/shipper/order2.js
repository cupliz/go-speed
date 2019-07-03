import React, { Component } from 'react';
import { Text, View, Row, List, ListItem, Container, Content, Thumbnail, Left, Body, Button } from 'native-base';
import FooterMenu from '../footerMenu'
import Train from '../../images/train.png'
import { Rating } from 'react-native-ratings';
import AntDesign from 'react-native-vector-icons/AntDesign'

const ListItemReting = (props) => {
    return (
        <View style={{ borderColor: 'white', flexDirection: 'row', alignItems: 'center', height: 40, marginRight: 10, marginLeft: 10 }}>
            <Left style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Row style={{ alignItems: 'center' }}>
                    <Text>{props.courier}</Text>
                </Row>
                <Row style={{ alignItems: 'center' }}>
                    <Text>{props.bid}</Text>
                </Row>
            </Left>
            <Body style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Button disabled small>
                    <Text uppercase={false}>Details</Text>
                </Button>
                <Rating
                    imageSize={15}
                    startingValue={props.rating}
                    ratingCount={5}
                    defaultRating={2}
                />
            </Body>
        </View>
    )
}
export default class Order1 extends Component {
    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }
    render() {
        return (
            <Container>
                <Content padder>
                    <Thumbnail square large source={Train} style={{ backgroundColor: 'red', alignSelf: 'center', height: 60 }} />
                    <List>
                        <ListItem style={{ borderColor: 'white', height: 10, marginTop: 20 }}>
                            <Left style={{ justifyContent: 'space-between' }}>
                                <Text>FROM</Text>
                                <Text style={{ marginRight: 30 }}>Jeddah</Text>
                            </Left>
                            <Body style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text>TO</Text>
                                <Text>Riyadh</Text>
                            </Body>
                        </ListItem>
                        <ListItem style={{ borderColor: 'white', height: 10 }}>
                            <Left>
                                <Text>Loading time</Text>
                            </Left>
                            <Body >
                                <Text>15:00</Text>
                            </Body>
                        </ListItem>

                        <ListItem style={{ borderColor: 'white', height: 10 }}>
                            <Left>
                                <Text>DATE</Text>
                            </Left>
                            <Body >
                                <Text>15/03/20:</Text>
                            </Body>
                        </ListItem>

                        <ListItem style={{ borderColor: 'white', height: 10 }}>
                            <Text>Insurance value required</Text>
                            <Body >
                                <Text>200,000 SAR</Text>
                            </Body>
                        </ListItem>

                        <ListItem style={{ borderColor: 'white', height: 45 }}>
                            <Left style={{ marginBottom: 15 }}>
                                <Text>SHIPMENT TYPE</Text>
                            </Left>
                            <Body >
                                <Text>FMCG</Text>
                                <Text>Vegetables</Text>
                            </Body>
                        </ListItem>

                        <ListItem style={{ borderColor: 'white', height: 10 }}>
                            <Left>
                                <Text>shipment weight</Text>
                            </Left>
                            <Body >
                                <Text>25,000  KG</Text>
                            </Body>
                        </ListItem>

                        <View style={{ borderColor: 'white', marginLeft: 15 }}>
                            <Text>Gate Pass Requirement:</Text>
                            <View>
                                <Text>1-Saftey; shoes, helmet gloves</Text>
                                <Text>2-Truck model not older than 10 years</Text>
                                <Text>3-tiers should be: Bridjeston or Hankok</Text>
                            </View>
                        </View>

                        <View style={{ borderColor: 'white', flexDirection: 'row', margin: 10, alignItems: 'center', height: 50, backgroundColor: 'gray', marginBottom: 0 }}>
                            <Left style={{ flexDirection: 'row' }}>
                                <Row style={{ alignItems: 'center' }}>
                                    <AntDesign name="caretdown" style={{ fontSize: 13, marginRight: 5, marginLeft: 5 }} />
                                    <Text>Courier</Text>
                                </Row>
                                <Row style={{ alignItems: 'center', marginLeft: 20 }}>
                                    <AntDesign name="caretdown" style={{ fontSize: 13, marginRight: 5 }} />
                                    <Text>Bid</Text>
                                </Row>
                            </Left>
                            <Body style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Row style={{ alignItems: 'center' }}>
                                    <AntDesign name="caretdown" style={{ fontSize: 13, marginRight: 5 }} />
                                    <Text>Details</Text>
                                </Row>
                                <Row style={{ alignItems: 'center' }}>
                                    <AntDesign name="caretdown" style={{ fontSize: 13, marginRight: 5 }} />
                                    <Text>Rating</Text>
                                </Row>
                            </Body>
                            <AntDesign name="caretdown" style={{ fontSize: 13, marginLeft: 5, marginRight: 5 }} />
                        </View>
                        <ListItemReting
                            courier={'Courier 1'}
                            bid={'1000 SR'}
                            rating={5}
                        />
                        <ListItemReting
                            courier={'Courier 2'}
                            bid={'1100 SR'}
                            rating={4}
                        />
                        <ListItemReting
                            courier={'Courier 3'}
                            bid={'600 SR'}
                            rating={3}
                        />
                        <ListItemReting
                            courier={'Courier 4'}
                            bid={'1200 SR'}
                            rating={2}
                        />

                    </List>
                </Content>
                <FooterMenu />
            </Container>
        );
    }
}