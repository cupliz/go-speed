import React, { Component } from 'react';
import { Text, View, Row, List, ListItem, Container, Content, Thumbnail, Left, Body, Button, Right, Grid, Col } from 'native-base';
import FooterMenu from '../footerMenu'
import Train from '../../images/train.png'
import { Rating } from 'react-native-ratings';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'

const ListItemReting = (props) => {
    return (
        <View style={{ borderColor: 'white', flexDirection: 'row', alignItems: 'center', height: 40, marginRight: 10, marginLeft: 10 }}>
            <Left style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Row style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 13 }}>{props.courier}</Text>
                </Row>
                <Row style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 13 }}>{props.bid}</Text>
                </Row>
                <Octicons name="calendar" style={{ fontSize: 17, color: 'gray' }} />
                <AntDesign name="caretdown" style={{ fontSize: 13, }} />
            </Left>
            <Body style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <Rating
                    imageSize={15}
                    startingValue={props.rating}
                    ratingCount={5}
                    defaultRating={2}
                />
                <Button disabled small>
                    <Text uppercase={false}>Details</Text>
                </Button>
            </Body>
        </View>
    )
}
export default class SpOffer1 extends Component {
    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }
    render() {
        return (
            <Container>
                <Content padder>
                    <Thumbnail square large source={Train} style={{ backgroundColor: 'red', alignSelf: 'center', height: 60 }} />
                    <Text style={{ fontSize: 16, alignSelf: "center" }}>Avaliable Orders</Text>
                    <Text style={{ fontSize: 23, marginTop: 20, marginBottom: 20 }}>Filered By</Text>
                    <Row style={{ margin: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                        <Left>
                            <Row style={{ alignItems: 'center' }}>
                                <Text>Trip from</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 35 }}>
                                    <Button small style={{ backgroundColor: 'white', height: 22 }}><Text style={{ color: 'black' }} uppercase={false}>Jeddah</Text></Button>
                                    <AntDesign name="caretdown" style={{ fontSize: 13 }} />
                                </View>
                            </Row>
                        </Left>
                        <Right>
                            <Row style={{ alignItems: 'center' }}>
                                <Text>Trip to</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', marginLeft: 10 }}>
                                    <Button small style={{ backgroundColor: 'white', height: 22 }}><Text style={{ color: 'black' }} uppercase={false}>Abha</Text></Button>
                                    <AntDesign name="caretdown" style={{ fontSize: 13 }} />
                                </View>
                            </Row>
                        </Right>
                    </Row>
                    <List>
                        <Row style={{ alignItems: 'center', justifyContent: 'space-between', margin: 5, marginTop: 10 }}>
                            <Text>Trips date from</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Button small style={{ backgroundColor: 'white', height: 22 }}><Text style={{ color: 'black', paddingLeft: 5, paddingRight: 5 }} uppercase={false}>4/22/2012</Text></Button>
                                <Octicons name="calendar" style={{ fontSize: 17, marginLeft: 5, color: 'gray' }} />
                                <AntDesign name="caretdown" style={{ fontSize: 13, marginLeft: 5 }} />
                            </View>
                        </Row>
                        <Row style={{ alignItems: 'center', justifyContent: 'space-between', margin: 5, marginTop: 10 }}>
                            <Text>Trips date to</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Button small style={{ backgroundColor: 'white', height: 22 }}><Text style={{ color: 'black', paddingLeft: 5, paddingRight: 5 }} uppercase={false}>4/22/2012</Text></Button>
                                <Octicons name="calendar" style={{ fontSize: 17, marginLeft: 5, color: 'gray' }} />
                                <AntDesign name="caretdown" style={{ fontSize: 13, marginLeft: 5 }} />
                            </View>
                        </Row>

                        <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }} small  >
                            <Text uppercase={false}>Search</Text>
                        </Button>

                        <View style={{ borderColor: 'white', flexDirection: 'row', alignItems: 'center', height: 40, backgroundColor: '#dedede', marginBottom: 0 }}>
                            <Left style={{ flexDirection: 'row' }}>
                                <Row style={{ alignItems: 'center' }}>
                                    <AntDesign name="caretdown" style={{ fontSize: 13, marginRight: 5, marginLeft: 5 }} />
                                    <Text style={{ fontSize: 13 }}>From</Text>
                                </Row>
                                <Row style={{ alignItems: 'center', marginLeft: 20 }}>
                                    <AntDesign name="caretdown" style={{ fontSize: 13, marginRight: 5 }} />
                                    <Text style={{ fontSize: 13 }}>To</Text>
                                </Row>
                                <Row style={{ alignItems: 'center' }}>
                                    <AntDesign name="caretdown" style={{ fontSize: 13, marginRight: 5 }} />
                                    <Text style={{ fontSize: 13 }}>Date</Text>
                                </Row>
                            </Left>
                            <Body style={{ justifyContent: 'space-between', flexDirection: 'row', marginLeft: 20 }}>
                                <Row style={{ alignItems: 'center' }}>
                                    <AntDesign name="caretdown" style={{ fontSize: 13, marginRight: 5 }} />
                                    <Text style={{ fontSize: 13 }}>Rating</Text>
                                </Row>
                                <Row style={{ alignItems: 'center' }}>
                                    <AntDesign name="caretdown" style={{ fontSize: 13, marginRight: 5 }} />
                                    <Text style={{ fontSize: 13 }}>Details</Text>
                                </Row>
                            </Body>
                        </View>
                        <ListItemReting
                            courier={'Jeddah'}
                            bid={'Riyadh'}
                            rating={3}
                        />
                        <ListItemReting
                            courier={'Dmmam'}
                            bid={'Jeddah'}
                            rating={3}
                        />
                        <ListItemReting
                            courier={'Tabuk'}
                            bid={'Abha'}
                            rating={3}
                        />
                        <ListItemReting
                            courier={'Riyadh'}
                            bid={'Qasim'}
                            rating={3}
                        />
                    </List>
                </Content>
                <FooterMenu />
            </Container>
        );
    }
}