import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import { Icon } from 'react-native-elements';
import {
  WelcomeScreen,
  // DashboardScreen,
  FeedScreen,
  ProfileScreen,
  SettingsScreen,
  DetailScreen,
} from '../screens';

const FeedStackNavigator = createStackNavigator(
  {
    Feed: {
      screen: FeedScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Feed',
        headerLeft: (
          <Icon
            name="md-menu"
            type="ionicon"
            size={30}
            iconStyle={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }),
    },
    Detail: {
      screen: DetailScreen,
    },
  },
  {
    defaultNavigationOptions: {
      // gesturesEnabled: true, //if this enabled you can close the stack by swipe to left slightly from the corner left
    },
  },
);

const ProfileStackNavigator = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Profile',
      headerLeft: (
        <Icon
          name="md-menu"
          type="ionicon"
          size={30}
          iconStyle={{ paddingLeft: 10 }}
          onPress={() => navigation.openDrawer()}
        />
      ),
    }),
  },
});

const SettingsStackNavigator = createStackNavigator({
  Settings: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Settings',
      headerLeft: (
        <Icon
          name="md-menu"
          type="ionicon"
          size={30}
          iconStyle={{ paddingLeft: 10 }}
          onPress={() => navigation.openDrawer()}
        />
      ),
    }),
  },
});

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Feed: {
      screen: FeedStackNavigator,
    },
    Profile: {
      screen: ProfileStackNavigator,
    },
    Settings: {
      screen: SettingsStackNavigator,
    },
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        headerTitle: routeName,
      };
    },
  },
);

// To make The Tab Navigator has a Header
const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerLeft: (
        <Icon
          name="md-menu"
          type="ionicon"
          size={30}
          iconStyle={{ paddingLeft: 10 }}
          onPress={() => navigation.openDrawer()}
        />
      ),
    }),
  },
);

// The page inside the stack->Tab can Acces The Drawer
const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator,
  },
});

const AppSwitchNavigator = createSwitchNavigator({
  Dashboard: {
    screen: AppDrawerNavigator,
  },
});

export default (AppContainer = createAppContainer(AppSwitchNavigator));
