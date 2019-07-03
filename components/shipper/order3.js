import React, { Component } from 'react';
import { Text, View, Row, Left, CheckBox, Right, Container, Content, Thumbnail, Button, ListItem } from 'native-base';
import FooterMenu from '../footerMenu'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Train from '../../images/train.png'
import { Rating } from 'react-native-ratings';

export default class Order1 extends Component {
    render() {
        return (
            <Container style={{}}>
                <Content padder >
                    <Thumbnail square large source={Train} style={{ backgroundColor: 'red', alignSelf: 'center', height: 60 }} />
                    <Text style={{ fontSize: 25, alignSelf: 'center', marginBottom: 10 }}>Details of Courier 1</Text>
                    <Row style={{ margin: 5, alignItems: 'center', marginBottom: 30 }}>
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
                    <Row style={{ margin: 5, alignItems: 'center', width: 320, justifyContent: 'space-between' }}>
                        <Text>TRUCK TYPE</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Button small style={{ width: 130, backgroundColor: 'white', height: 22 }}><Text style={{ color: 'black', paddingLeft: 5 }} uppercase={false}>Low-Bed</Text></Button>
                            <AntDesign name="caretdown" style={{ fontSize: 13, marginLeft: 5 }} />
                        </View>
                    </Row>

                    <Row style={{ alignItems: 'center', width: 320, justifyContent: 'space-between', margin: 5 }}>
                        <Text>TRUCK SERVICE</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Button small style={{ width: 130, backgroundColor: 'white', height: 22 }}><Text style={{ color: 'black', paddingLeft: 5 }} uppercase={false}>covered</Text></Button>
                            <AntDesign name="caretdown" style={{ fontSize: 13, marginLeft: 5 }} />
                        </View>
                    </Row>

                    <Row style={{ alignItems: 'center', width: 340, justifyContent: 'space-between', margin: 5, marginTop: 10 }}>
                        <Text>INSURANCE VALUE</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Button small style={{ width: 130, backgroundColor: 'white', height: 22 }}><Text style={{ color: 'black' }} uppercase={false}>200,000</Text></Button>
                            <Text style={{ marginLeft: 10 }}>SAR</Text>
                        </View>
                    </Row>

                    <Row style={{ alignItems: 'center', width: 300, justifyContent: 'space-between', margin: 5, marginTop: 10 }}>
                        <Text>Offer by courier</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Button small style={{ width: 130, backgroundColor: 'white', height: 22 }}><Text style={{ color: 'black' }} uppercase={false}>200,000</Text></Button>
                        </View>
                    </Row>

                    <Row style={{ alignItems: 'center', justifyContent: 'center', marginTop: 70 }}>
                        <ListItem style={{ borderBottomColor: '#edebeb' }}>
                            <CheckBox checked={false} />
                            <Text style={{ marginLeft: 10 }}>I accept</Text>
                            <Text style={{ color: 'blue' }}> Rules {'&'} Regulations</Text>
                        </ListItem>
                    </Row>
                    <Text style={{ alignSelf: 'center' }}>provided by Go Speed</Text>

                    <Button small style={{ alignSelf: 'center', width: 200, justifyContent: 'center', marginTop: 10 }} bordered>
                        <Text uppercase={false}>Accept</Text>
                    </Button>

                    <Button small style={{ alignSelf: 'center', width: 150, justifyContent: 'center', marginTop: 10 }} block>
                        <Text uppercase={false}>back to offers</Text>
                    </Button>
                </Content>
                <FooterMenu />
            </Container>
        );
    }
}