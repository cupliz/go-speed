import React, { Component } from 'react';
import { Text, View, Row, List, ListItem, Container, Content, Thumbnail, Left, Body, Button, Right } from 'native-base';
import FooterMenu from '../footerMenu'
import Train from '../../images/train.png'
import { Rating } from 'react-native-ratings';
import AntDesign from 'react-native-vector-icons/AntDesign'

const ListItemFrom = (props) => {
    return (
        <Row style={{ height: 22 }}>
            <View style={{ width: 200 }}>
                <Text>{props.left}</Text>
            </View>
            <Right style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                <Text>{props.right}</Text>
            </Right>
        </Row>
    )
}
export default class SpOffer2 extends Component {
    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }
    render() {
        return (
            <Container>
                <Content padder>
                    <Thumbnail square large source={Train} style={{ backgroundColor: 'red', alignSelf: 'center', height: 60 }} />
                    <Text style={{ fontSize: 27, alignSelf: 'center' }}>Order Details</Text>
                    <Row>
                        <Left>
                            <Text>Rating</Text>
                        </Left>
                        <Right style={{ alignItems: 'flex-start' }}>
                            <Rating
                                imageSize={15}
                                startingValue={3}
                                ratingCount={5}
                                defaultRating={2}
                            />
                        </Right>
                    </Row>
                    <List>

                        <ListItemFrom left="FROM" right="Jeddah" />
                        <ListItemFrom left="TO" right="Riyadh" />
                        <ListItemFrom left="TRUCK TYPE" right="Low-Bed" />
                        <ListItemFrom left="TRUCK SERVICE" right="None" />
                        <ListItemFrom left="Loading" right="15:00" />
                        <ListItemFrom left="DATE" right="15/03/20" />
                        <ListItemFrom left="Insurance value required" right="200,000 SAR" />
                        <ListItemFrom left="SHIPMENT TYPE" right="FMCG" />
                        <ListItemFrom right="Vegetables" />
                        <ListItemFrom left="shipment weight" right="25.000 KG" />
                        <ListItemFrom left="SHIPMENT TYPE" right="FMCG" />
                        <ListItemFrom left="Special Requests" />

                        <View style={{ borderColor: 'white', marginTop: 15 }}>
                            <Text>Gate Pass Requirement:</Text>
                            <View>
                                <Text>1-Saftey; shoes, helmet gloves</Text>
                                <Text>2-Truck model not older than 10 years</Text>
                                <Text>3-tiers should be: Bridjeston or Hankok</Text>
                            </View>
                        </View>
                    </List>

                    <Row style={{ marginTop: 5 }}>
                        <Left>
                            <Text>Offered truck type</Text>
                        </Left>
                        <Body style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Button small style={{ backgroundColor: 'white', width: 150 }}><Text style={{ color: 'black' }} uppercase={false}>Low bed</Text></Button>
                            <AntDesign name="caretdown" style={{ fontSize: 13 }} />
                        </Body>
                    </Row>
                    <Row style={{ marginTop: 5 }}>
                        <Left>
                            <Text>Truck service</Text>
                        </Left>
                        <Body style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Button small style={{ backgroundColor: 'white', width: 150 }}><Text style={{ color: 'black' }} uppercase={false}>Covered</Text></Button>
                            <AntDesign name="caretdown" style={{ fontSize: 13 }} />
                        </Body>
                    </Row>
                    <Button block small bordered style={{ marginTop: 6 }}><Text uppercase={false}>send offer</Text></Button>
                </Content>
                <FooterMenu />
            </Container>
        );
    }
}