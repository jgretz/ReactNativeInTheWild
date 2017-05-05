import React, {Component} from 'react';
import {View, ListView} from 'react-native';
import {connect} from 'react-redux';

import containerStyles from '../../../styles/container';
import listViewStyles from '../../../styles/listView';

import listItem from './listItem';
import {prescriptionsListViewDataSource} from '../selectors';

class List extends Component {
  static navigationOptions = ({navigation}) => ({
    title: `${navigation.state.params.patient.name}`,
  });

  render() {
    return (
      <View style={containerStyles.container}>
        <ListView
          style={listViewStyles.list}
          dataSource={this.props.dataSource}
          renderRow={listItem}
          pageSize={22}
          enableEmptySections />
      </View>
    );
  }
}

const mapStateToProps = (state, props) => ({
  dataSource: prescriptionsListViewDataSource(state, props),
});

export default connect(mapStateToProps)(List);
