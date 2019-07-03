import React, { Component } from 'react';
import { Text, View, Row, Container, Content, Thumbnail, Button } from 'native-base';
import FooterMenu from '../footerMenu'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Train from '../../images/train.png'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'

export default class OrderForCar extends Component {
    render() {
        return (
            <Container style={{ backgroundColor: '#edebeb' }}>
                <Content padder >
                    <Thumbnail square large source={Train} style={{ backgroundColor: 'red', alignSelf: 'center', height: 60 }} />
                    <Row style={{ margin: 5, alignItems: 'center', width: 220, justifyContent: 'space-between', alignSelf: 'center', marginTop: 40, marginBottom: 40 }}>
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

                    <Row style={{ alignItems: 'center', width: 320, justifyContent: 'space-between', margin: 5, marginTop: 20 }}>
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
                    <Row style={{ justifyContent: 'space-between', flex: 1, marginTop: 250 }}>
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