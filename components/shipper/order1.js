import React, { Component } from 'react';
import { Text, View, Row, Left, Right, Container, Content, Thumbnail, H1, Button, Title, H2, Item } from 'native-base';
import FooterMenu from '../footerMenu'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Train from '../../images/train.png'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'

export default class Order1 extends Component {
    render() {
        return (
            <Container style={{ backgroundColor: '#edebeb' }}>
                <Content padder >
                    <Thumbnail square large source={Train} style={{ backgroundColor: 'red', alignSelf: 'center', height: 60 }} />
                    <Row style={{ alignSelf: 'center' }}>
                        <Button disabled small style={{ width: 130, justifyContent: 'center', backgroundColor: '#c4c4c4' }}><Text style={{ color: 'black' }} uppercase={false}>one-way</Text></Button>
                        <Button disabled small style={{ width: 130, justifyContent: 'center' }}><Text style={{ color: 'black' }} uppercase={false}>one-way</Text></Button>
                    </Row>
                    <Row style={{ margin: 5, alignItems: 'center', width: 320, justifyContent: 'space-between' }}>
                        <Text>Preffered truck type</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Button small style={{ width: 130, backgroundColor: 'white', height: 22 }}><Text style={{ color: 'black', paddingLeft: 5 }} uppercase={false}>Any</Text></Button>
                            <AntDesign name="caretdown" style={{ fontSize: 13, marginLeft: 5 }} />
                        </View>
                    </Row>

                    <Row style={{ alignItems: 'center', width: 320, justifyContent: 'space-between', margin: 5 }}>
                        <Text>Truck service</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Button small style={{ width: 130, backgroundColor: 'white', height: 22 }}><Text style={{ color: 'black', paddingLeft: 5 }} uppercase={false}>none</Text></Button>
                            <AntDesign name="caretdown" style={{ fontSize: 13, marginLeft: 5 }} />
                        </View>
                    </Row>

                    <Row style={{ margin: 5, alignItems: 'center', width: 220, justifyContent: 'space-between' }}>
                        <Text>Number of trucks</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Button small style={{ width: 30, backgroundColor: 'white', height: 22 }}><Text style={{ color: 'black', paddingLeft: 5 }} uppercase={false}>2</Text></Button>
                            <AntDesign name="caretdown" style={{ fontSize: 13, marginLeft: 5 }} />
                        </View>
                    </Row>

                    <Row style={{ margin: 5, alignItems: 'center', width: 330, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', width: 180, justifyContent: 'space-between' }}>
                            <Text>From</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Button small style={{ width: 100, backgroundColor: 'white', height: 22 }}><Text style={{ color: 'black', paddingLeft: 5 }} uppercase={false}>makkah</Text></Button>
                                <AntDesign name="caretdown" style={{ fontSize: 13, marginLeft: 5 }} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialCommunityIcons name="map-marker-radius" style={{ color: 'gray', fontSize: 32 }} />
                            <Button small style={{}}><Text uppercase={false}>location</Text></Button>
                        </View>
                    </Row>

                    <Row style={{ margin: 5, alignItems: 'center', width: 330, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', width: 180, justifyContent: 'space-between' }}>
                            <Text>To</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Button small style={{ width: 100, backgroundColor: 'white', height: 22 }}><Text style={{ color: 'black', paddingLeft: 5 }} uppercase={false}>Riyadh</Text></Button>
                                <AntDesign name="caretdown" style={{ fontSize: 13, marginLeft: 5 }} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <MaterialCommunityIcons name="map-marker-radius" style={{ color: 'gray', fontSize: 32 }} />
                            <Button small ><Text uppercase={false}>location</Text></Button>
                        </View>
                    </Row>

                    <Row style={{ alignItems: 'center', width: 320, justifyContent: 'space-between', margin: 5 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>Date</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30 }}>
                                <Button small style={{ backgroundColor: 'white', height: 22 }}><Text style={{ color: 'black', paddingLeft: 5, paddingRight: 5 }} uppercase={false}>4/22/2012</Text></Button>
                                <Octicons name="calendar" style={{ fontSize: 17, marginLeft: 5, color: 'gray' }} />
                                <AntDesign name="caretdown" style={{ fontSize: 13, marginLeft: 5 }} />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                            <Text>Loading time</Text>
                            <Button small style={{ backgroundColor: 'white', height: 22, marginLeft: 5 }}><Text style={{ color: 'black', paddingLeft: 5, paddingRight: 5 }} uppercase={false}>15:00</Text></Button>
                        </View>
                    </Row>

                    <Row style={{ margin: 5, alignItems: 'center', width: 300, justifyContent: 'space-between' }}>
                        <Text>Receiver name</Text>
                        <Button small style={{ width: 130, backgroundColor: 'white', height: 22, justifyContent: 'center' }}><Text style={{ color: 'black', paddingLeft: 5, fontWeight: '600' }} uppercase={false}>abu</Text></Button>
                    </Row>

                    <Row style={{ margin: 5, alignItems: 'center', width: 300, justifyContent: 'space-between' }}>
                        <Text>Receiver Contact</Text>
                        <Button small style={{ width: 130, backgroundColor: 'white', height: 22, justifyContent: 'center' }}><Text style={{ color: 'black', paddingLeft: 5, fontWeight: '600' }} uppercase={false}>0546398556</Text></Button>
                    </Row>

                    <Row style={{ margin: 5, alignItems: 'center', width: 300, justifyContent: 'space-between' }}>
                        <Text>Loading time</Text>
                        <Button small style={{ width: 130, backgroundColor: 'white', height: 22, justifyContent: 'center' }}><Text style={{ color: 'black', paddingLeft: 5, fontWeight: '600' }} uppercase={false}>15:00</Text></Button>
                    </Row>

                    <Row style={{ width: 320, justifyContent: 'space-between', margin: 5 }}>
                        <Text>Shipment type</Text>
                        <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Button small style={{ width: 130, backgroundColor: 'white', height: 22 }}><Text style={{ color: 'black', paddingLeft: 5 }} uppercase={false}>FMCG</Text></Button>
                                <AntDesign name="caretdown" style={{ fontSize: 13, marginLeft: 5 }} />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <Button small style={{ width: 130, backgroundColor: 'white', height: 22 }}><Text style={{ color: 'black', paddingLeft: 5 }} uppercase={false}>Vegetables</Text></Button>
                                <AntDesign name="caretdown" style={{ fontSize: 13, marginLeft: 5 }} />
                            </View>
                        </View>
                    </Row>

                    <Row style={{ alignItems: 'center', width: 320, justifyContent: 'space-between', margin: 5 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>Shipment type</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>
                                <Button small style={{ backgroundColor: 'white', height: 22 }}><Text style={{ color: 'black', paddingLeft: 5, paddingRight: 5, fontWeight: '600' }} uppercase={false}>255,000</Text></Button>
                                <View style={{ backgroundColor: 'white', marginLeft: 5 }}>
                                    <Text>KG</Text>
                                </View>
                                <AntDesign name="caretdown" style={{ fontSize: 13, marginLeft: 5 }} />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                            <Text># of ballets</Text>
                            <Button small style={{ backgroundColor: 'white', height: 22, marginLeft: 5 }}><Text style={{ color: 'black', paddingLeft: 5, paddingRight: 5 }} uppercase={false}>13</Text></Button>
                        </View>
                    </Row>

                    <Row style={{ alignItems: 'center', width: 320, justifyContent: 'space-between', margin: 5 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>Cost of goods</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>
                                <Button small style={{ backgroundColor: 'white', height: 22 }}><Text style={{ color: 'black', paddingLeft: 5, paddingRight: 5, fontWeight: '600' }} uppercase={false}>200,000</Text></Button>
                                <View style={{ backgroundColor: 'white', marginLeft: 5 }}>
                                    <Text>KG</Text>
                                </View>
                            </View>
                        </View>
                    </Row>
                    <Text style={{ fontWeight: '500', fontSize: 25 }}>Special Requests</Text>
                    <View style={{ backgroundColor: 'white', flex: 1 }}>
                        <Text style={{ marginLeft: 15 }}>Gate Pass Requirement</Text>
                        <Text>1- Saftey; shoes, helmet glover</Text>
                        <Text>2- Truck model not older than 10 years</Text>
                        <Text>3- tiers should be: Bridjeston or Hankok</Text>
                    </View>
                    <Row style={{ justifyContent: 'space-between', flex: 1, marginTop: 10 }}>
                        <View style={{ flex: 1 }}>
                            <Button bordered small style={{ alignSelf: 'center' }}>
                                <Text style={{ color: 'back' }} uppercase={false}>Submit</Text>
                            </Button>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Button bordered small style={{ alignSelf: 'center' }}>
                                <Text style={{ color: 'back' }} uppercase={false}>Submit</Text>
                            </Button>
                        </View>
                    </Row>
                </Content>
                <FooterMenu />
            </Container>
        );
    }
}