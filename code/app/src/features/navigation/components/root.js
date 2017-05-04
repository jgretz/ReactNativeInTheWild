import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StackNavigator, addNavigationHelpers} from 'react-navigation';

import routes from '../util/routes';
import {navigationSelector} from '../selectors';

// singleton navigator
export const Navigator = StackNavigator(routes,  {headerMode: 'screen'}); // eslint-disable-line

class Root extends Component {
  render() {
    const {dispatch, navigation} = this.props;
    const nav = addNavigationHelpers({dispatch, state: navigation});

    return (
      <Navigator navigation={nav} />
    );
  }
}

const mapStateToProps = state => ({
  navigation: navigationSelector(state),
});

export default connect(mapStateToProps)(Root);
