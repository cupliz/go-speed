import React, { Component } from 'react';
import { Text, View, Row, Left, Right, Container, Content, Thumbnail, Button } from 'native-base';
import FooterMenu from '../footerMenu'
import Train from '../../images/train.png'
import { Rating } from 'react-native-ratings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const ListItemRating = (props) => {
    return (
        <Row style={{ margin: 2, alignItems: 'center' }}>
            <Left>
                <Text>{props.title}</Text>
            </Left>
            <Rating
                imageSize={15}
                startingValue={props.rating}
                ratingCount={5}
                defaultRating={2}
            />
        </Row>
    )
}

const ListCard = (props) => {
    return (
        <View style={{ flexDirection: 'row', marginTop: 6 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <MaterialCommunityIcons name="account" style={{ fontSize: 25 }} />
                <Text>Shipper {props.title}</Text>
            </View>
            <View style={{ width: 260, borderRadius: 10, backgroundColor: '#f0f0f0', padding: 10, marginLeft: 10 }}>
                <Text style={{ color: 'gray', fontSize: 15 }}>{props.text}</Text>
            </View>
        </View>
    )
}

export default class FeedbackOfCourier extends Component {
    render() {
        return (
            <Container>
                <Content padder >
                    <Thumbnail square large source={Train} style={{ backgroundColor: 'red', alignSelf: 'center', height: 60 }} />
                    <Text style={{ fontSize: 25, alignSelf: 'center', marginBottom: 10 }}>Details of Courier 1</Text>

                    <ListItemRating title={'Loading experience'} rating={5} />
                    <ListItemRating title={'Unloading experience'} rating={3} />
                    <ListItemRating title={'Overall time'} rating={4} />
                    <ListItemRating title={'Cooperation'} rating={5} />
                    <ListItemRating title={'Safety'} rating={5} />
                    <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10 }}>Feedback of previous shippers</Text>

                    <ListCard
                        title='X'
                        text='the courier was responsive with me and the service was great'
                    />
                    <ListCard
                        title='Y'
                        text='the courier was late for my loading time schedule'
                    />
                    <ListCard
                        title='Z'
                        text='the truck that was provided for my shipment, were not up to the gate pass requirements that I asked for'
                    />

                    <Row>
                        <Left>
                            <Button small style={{ alignSelf: 'center', width: 150, justifyContent: 'center', marginTop: 10, height: 50 }} bordered>
                                <Text uppercase={false}>Accept</Text>
                            </Button>
                        </Left>
                        <Right>
                            <Button small style={{ alignSelf: 'center', width: 150, justifyContent: 'center', marginTop: 10, height: 50 }} block>
                                <Text uppercase={false}>back to offers</Text>
                            </Button>
                        </Right>
                    </Row>
                </Content>
                <FooterMenu />
            </Container>
        );
    }
}