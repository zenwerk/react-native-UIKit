import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  StatusBar
} from 'react-native';

import _ from 'lodash';

var messages = require('../../db/messages.json')

import { MessageList, Search } from 'react-native-uikit'

export default class MessagesTab extends Component {
  constructor(props){
    super(props);
    let dataSource = new ListView.DataSource({
      getRowData: (dataBlob, sid, rid) => dataBlob[sid][rid],
      //getSectionHeaderData: (dataBlob, sid) => dataBlob[sid],
      rowHasChanged: (row1, row2) => row1 !== row2,
      //sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });
    this.state = {
      dataSource: dataSource.cloneWithRows(messages),
      messges: []
    }
  }
  componentDidMount(){
    StatusBar.setBarStyle('light-content');
    this.setState({
      messges: messages
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Search/>
          <MessageList
            //backgroundColor={'red'}
            //headerContent={<Text style={{textAlign:'center', fontSize: 20, padding: 10, backgroundColor: '#eee', marginBottom: 3}}>HEADER CONTENT</Text>}
            items={this.state.messges}
            footerContent={<Text style={{textAlign:'center', fontSize: 20, padding: 10, backgroundColor: '#eee'}}>FOOTER CONTENT</Text>}
            onPress={(id) => console.log(id)}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});