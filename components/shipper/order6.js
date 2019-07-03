import React, { Component } from 'react';
import { Body, Text, Left, Right, Container, Content, Thumbnail, ListItem, List, Card, CardItem, Grid, Col, View } from 'native-base';
import FooterMenu from '../footerMenu'
import Train from '../../images/train.png'

export default class Order6 extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem avatar style={{ margin: 0 }}>
                            <Thumbnail square large source={Train} style={{ width: 20, height: 20 }} />
                            <Body>
                                <Text style={{ fontWeight: '500' }}>GoSpeed</Text>
                                <Text note>Truck is 45 mins away prepare for loading</Text>
                            </Body>
                            <Text style={{ fontWeight: '500' }}>3:43 pm</Text>
                        </CardItem>
                    </Card>
                    <View style={{ alignSelf: 'flex-end', backgroundColor: '#f0f0f0', height: 80, width: '100%', marginTop: 440, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ backgroundColor: 'white', borderRadius: 55 / 2, width: 55, height: 55, borderWidth: 4, borderColor: 'gray' }}></View>
                    </View>
                </Content>
            </Container>
        );
    }
}