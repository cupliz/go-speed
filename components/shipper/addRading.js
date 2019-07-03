import React, { Component } from 'react';
import { Text, View, Row, Left, Right, Container, Content, Item, Thumbnail, Button, Input } from 'native-base';
import FooterMenu from '../footerMenu'
import Train from '../../images/train.png'
import { Rating } from 'react-native-ratings';

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

export default class AddRating extends Component {
    render() {
        return (
            <Container>
                <Content padder >
                    <Thumbnail square large source={Train} style={{ backgroundColor: 'red', alignSelf: 'center', height: 60 }} />
                    <Text style={{ fontSize: 25, alignSelf: 'center', marginBottom: 10 }}>Provide your feedback</Text>
                    <Text style={{ fontSize: 14, marginBottom: 10 }}>kindly provide go speed with your rating and feedback with <Text style={{ fontWeight: '500' }}>courier 1</Text></Text>

                    <ListItemRating title={'Loading experience'} rating={5} />
                    <ListItemRating title={'Unloading experience'} rating={3} />
                    <ListItemRating title={'Overall time'} rating={4} />
                    <ListItemRating title={'Cooperation'} rating={5} />
                    <ListItemRating title={'Safety'} rating={5} />
                    <Text style={{ fontSize: 18, marginTop: 10 }}>share your thoughts with us</Text>
                    <Item regular style={{ marginTop: 20, height: 45 }}>
                        <Input />
                    </Item>
                    <Text style={{ fontSize: 18 }}>Key question segment</Text>
                    <Item regular style={{ height: 70, marginTop: 10 }}>
                        <Input />
                    </Item>
                    <Right>
                        <Button small style={{ alignSelf: 'center', width: 150, justifyContent: 'center', marginTop: 10, height: 50 }} block>
                            <Text uppercase={false}>Thank you</Text>
                        </Button>
                    </Right>
                </Content>
                <FooterMenu />
            </Container>
        );
    }
}