import React, { Component } from 'react';
import { Footer, FooterTab, Button, Text, View } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class FooterMenu extends Component {
    render() {
        return (
            <Footer style={{ height: 65 }}>
                <FooterTab style={{ backgroundColor: '#ffffff', paddingTop: 10, borderTopWidth: 3, borderColor: 'gray' }}>
                    <Button vertical >
                        <View style={{ justifyContent: 'center', alignItems: 'center', height: 30, width: 30, borderRadius: 5, backgroundColor: 'blue' }}>
                            <MaterialCommunityIcons name="radioactive" style={{ color: '#ffffff' }} size={20} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 12, color: 'gray' }}>Active trips</Text>
                        </View>
                    </Button>

                    <Button vertical>
                        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray', height: 30, width: 30, borderRadius: 5 }}>
                            <FontAwesome name="history" style={{ color: 'white' }} size={20} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 12, color: 'white', margin: 0, color: 'gray' }}>Trip History</Text>
                        </View>
                    </Button>

                    <Button vertical >
                        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', height: 30, width: 30, borderRadius: 5 }}>
                            <FontAwesome name="reorder" style={{ color: 'white' }} size={20} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 12, color: 'white', margin: 0, color: 'gray' }} >{this.props.ordersPage ? 'Orders Page' : 'New Order'}</Text>
                        </View>
                    </Button>

                    <Button vertical>
                        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray', height: 30, width: 30, borderRadius: 5 }}>
                            <SimpleLineIcons name="support" style={{ color: 'white' }} size={20} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 12, color: 'white', margin: 0, color: 'gray' }} >Support</Text>
                        </View>
                    </Button>

                    <Button vertical>
                        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray', height: 30, width: 30, borderRadius: 5 }}>
                            <FontAwesome5 name="user-alt" style={{ color: 'white' }} size={20} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 12, color: 'white', margin: 0, color: 'gray' }} >Account</Text>
                        </View>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}