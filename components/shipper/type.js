import React, { Component } from 'react';
import { Text, View, Row, Left, Right, Container, Content, Thumbnail, Title, H1 } from 'native-base';
import FooterMenu from '../footerMenu'
import Car from '../../images/car.jpeg'
import Truck from '../../images/truck.jpg'
import Train from '../../images/train.png'

export default class Type extends Component {
    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={{ alignItems: 'center' }}>
                    <Thumbnail square large source={Train} />
                    <Title style={{ color: 'green', fontSize: 60, fontWeight: '600', borderBottomColor: 'green', borderBottomWidth: 5, marginBottom: 80 }}>Go Speed</Title>
                    <Row>
                        <Left style={{ borderRadius: 5, borderColor: 'black', borderWidth: 1, margin: 10, padding: 30 }}>
                            <Thumbnail square large source={Truck} style={{ height: 100, width: 100 }} />
                        </Left>
                        <Right style={{ borderRadius: 5, borderColor: 'black', borderWidth: 1, margin: 10, padding: 30 }}>
                            <Thumbnail square large source={Car} style={{ height: 100, width: 100 }} />
                        </Right>
                    </Row>
                    <Row style={{ marginTop: 30 }}>
                        <H1 style={{ marginRight: 10 }}>Freight shipment</H1>
                        <H1 style={{ marginLeft: 20 }}>Last mile</H1>
                    </Row>
                </Content>
                <FooterMenu />
            </Container>
        );
    }
}