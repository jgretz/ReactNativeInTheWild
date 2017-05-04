import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, ListView} from 'react-native';

import containerStyles from '../../../styles/container';
import listViewStyles from '../../../styles/listView';

import listItem from './listItem';
import {patientListViewDataSourceSelector} from '../selectors';

class List extends Component {
  static navigationOptions = {
    title: 'Patient List',
  };

  render() {
    return (
      <View style={containerStyles.container}>
        <ListView
          style={listViewStyles.list}
          dataSource={this.props.dataSource}
          renderRow={listItem}
          pageSize={22} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  dataSource: patientListViewDataSourceSelector(state),
});

export default connect(mapStateToProps)(List);
