import React, { Component } from 'react';
import { Text, View, Row, Left, CheckBox, Right, Container, Content, Thumbnail, Button, ListItem, Input, Item } from 'native-base';
import FooterMenu from '../footerMenu'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Train from '../../images/train.png'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class SpOffer3 extends Component {
    render() {
        return (
            <Container>
                <Content padder >
                    <Thumbnail square large source={Train} style={{ backgroundColor: 'red', alignSelf: 'center', height: 60 }} />
                    <Text style={{ fontSize: 22, alignSelf: 'center' }}>offer is accepted</Text>
                    <Text style={{ fontSize: 22, alignSelf: 'center', marginBottom: 10 }}>Assign Truck(s) {'&'} driver(s)</Text>
                    <Text>please pick a driver from the list you have already provided or add a new driver</Text>

                    <Row style={{ alignItems: 'center', width: 320, justifyContent: 'space-between', marginTop: 5 }}>
                        <Text>Driver</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Button small style={{ width: 130, backgroundColor: 'white', height: 22 }}><Text style={{ color: 'black', paddingLeft: 5 }} uppercase={false}>Ahmet</Text></Button>
                            <AntDesign name="caretdown" style={{ fontSize: 13, marginLeft: 5 }} />
                        </View>
                    </Row>

                    <Row style={{ alignItems: 'center', width: 320, justifyContent: 'space-between' }}>
                        <Text>Driver number</Text>
                        <Item style={{ flexDirection: 'row', alignItems: 'center', borderColor: 'white', width: 150 }}>
                            <Input placeholder='+9665485833' />
                        </Item>
                    </Row>

                    <Row style={{ marginTop: 10 }}>
                        <Left>
                            <Text style={{ fontSize: 20 }}>Add another Driver</Text>
                        </Left>
                        <Right style={{ alignItems: 'center' }}>
                            <Ionicons name="ios-add-circle" style={{ color: 'blue', fontSize: 25 }} />
                        </Right>
                    </Row>

                    <Text style={{ fontSize: 15, marginTop: 10 }}>please select a truck from the list you have already provided or add a new truck</Text>

                    <Row style={{ alignItems: 'center', width: 320, justifyContent: 'space-between', marginTop: 15 }}>
                        <Text>Truck</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Button small style={{ width: 130, backgroundColor: 'white', height: 22 }}><Text style={{ color: 'black', paddingLeft: 5 }} uppercase={false}>Low-Bed xxx</Text></Button>
                            <AntDesign name="caretdown" style={{ fontSize: 13, marginLeft: 5 }} />
                        </View>
                    </Row>

                    <Row style={{ marginTop: 20 }}>
                        <Left>
                            <Text style={{ fontSize: 20 }}>Add another Truck</Text>
                        </Left>
                        <Right style={{ alignItems: 'center' }}>
                            <Ionicons name="ios-add-circle" style={{ color: 'blue', fontSize: 25 }} />
                        </Right>
                    </Row>
                    <Text style={{ fontSize: 14, marginTop: 20 }}>if you press done, the contract between you and the shipper willbe binding according to our <Text style={{ color: 'blue', borderBottomColor: 'blue', borderBottomWidth: 1 }}>Term and condition</Text></Text>

                    <Button small style={{ alignSelf: 'center', width: 150, justifyContent: 'center', marginTop: 10 }} block>
                        <Text uppercase={false}>Done</Text>
                    </Button>
                </Content>
                <FooterMenu />
            </Container>
        );
    }
}