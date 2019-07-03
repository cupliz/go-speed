import { createStackNavigator, createAppContainer } from 'react-navigation';
import Type from './components/shipper/type'
import Order1 from './components/shipper/order1'
import Order2 from './components/shipper/order2'
import Order3 from './components/shipper/order3'
import Order6 from './components/shipper/order6'
import OrderForCar from './components/shipper/orderForCar'
import FeedbackOfCourier from './components/shipper/feedbackOfCourier'
import AddRating from './components/shipper/addRading'
import SpOffer1 from './components/courier/spOffer1'
import SpOffer2 from './components/courier/spOffer2'
import FeedbackOfShipper from './components/courier/FeedbackOfShipper'
import SpOffer3 from './components/courier/spOffer3'
import AddaRatingOnShipper1 from './components/courier/addaRatingOnShipper1'

const navigationOptions = {
  header: null
}
const MainNavigator = createStackNavigator(
  {
    Type: { screen: AddaRatingOnShipper1, navigationOptions },
    headerMode: 'none',
  }
);

const Router = createAppContainer(MainNavigator);

export default Router;