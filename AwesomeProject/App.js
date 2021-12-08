const DATA = [
  {
    id: 'BSH4531HG',
    name: 'Lê Nguyễn Trần Đinh',
    createDate: '21/12/2012',
    price: '1,000,000,000',
    status: 'Chờ duyệt',
  },
  {
    id: 'BSH4531HGS1',
    name: 'Lê Nguyễn Trần Đinh',
    createDate: '21/12/2012',
    price: '1,000,000,000',
  },
  {
    id: 'BSH4531HGTR2',
    name: 'Lê Nguyễn Trần Đinh',
    createDate: '21/12/2012',
    price: '1,000,000,000',
  },
  {
    id: 'BSH4531HGTR3',
    name: 'Lê Nguyễn Trần Đinh',
    createDate: '21/12/2012',
    price: '1,000,000,000',
  },
];

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Image,
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
  Alert,
  FlatList,
  SafeAreaView,
} from 'react-native';

export default class ActionButton extends Component {
  state = {
    animation: new Animated.Value(0),
    show: false,
  };
  toggleOpen = () => {
    if (this._open) {
      Animated.spring(this.state.animation, {
        toValue: 0,
        duration: 1000,
      }).start();
    } else {
      Animated.spring(this.state.animation, {
        toValue: 1,
        duration: 1000,
      }).start();
    }
    this._open = !this._open;
  };

  renderItem = ({item}) => {
    return (
      <View style={{padding: 10}}>
        <Text>{item.id}</Text>
        <Text>{item.name}</Text>
        <Text>{item.createDate}</Text>
        <Text>{item.price}</Text>
      </View>
    );
  };

  render() {
    const printInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -90],
    });
    const saveInterpolate = this.state.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, -80, -180],
    });
    const icon3Interpolate = this.state.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, -180, -270],
    });

    const printStyle = {
      transform: [
        {
          scale: this.state.animation,
        },
        {
          translateY: printInterpolate,
        },
      ],
    };

    const saveStyle = {
      transform: [
        {
          scale: this.state.animation,
        },
        {
          translateY: saveInterpolate,
        },
      ],
    };

    const icon3 = {
      transform: [
        {
          scale: this.state.animation,
        },
        {
          translateY: icon3Interpolate,
        },
      ],
    };
    return (
      <SafeAreaView style={styles.container}>
        <Animated.View style={[styles.background]}>
          <TouchableWithoutFeedback onPress={() => Alert.alert('saveIconn')}>
            <Animated.View style={[styles.button, saveStyle]}>
              <Image
                style={styles.iconStyle}
                resizeMode="contain"
                source={{
                  uri: 'https://www.freeiconspng.com/uploads/save-icon-31.png',
                }}
              />
            </Animated.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => Alert.alert('printIcon')}>
            <Animated.View style={[styles.button, printStyle]}>
              <Image
                style={styles.iconStyle}
                resizeMode="contain"
                source={{
                  uri: 'https://cdn4.iconfinder.com/data/icons/small-v2/512/device_document_electronic_print_printer_printing-512.png',
                }}
              />
            </Animated.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => Alert.alert('printIcon')}>
            <Animated.View style={[styles.button, icon3]}>
              <Image
                style={styles.iconStyle}
                resizeMode="contain"
                source={{
                  uri: 'https://cdn4.iconfinder.com/data/icons/small-v2/512/device_document_electronic_print_printer_printing-512.png',
                }}
              />
            </Animated.View>
          </TouchableWithoutFeedback>
        </Animated.View>

        <FlatList
          keyExtractor={item => item.id}
          data={DATA}
          renderItem={this.renderItem}
        />

        <TouchableWithoutFeedback onPress={this.toggleOpen}>
          <Animated.View style={[styles.button]}>
            <Image
              style={styles.iconStyle}
              resizeMode="contain"
              source={{uri: 'https://img.icons8.com/cotton/2x/plus.png'}}
            />
          </Animated.View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    alignItems: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
  },
  button: {
    // backgroundColor: 'grey',
    position: 'absolute',
    bottom: 25,
    right: 20,
    alignItems: 'center',
    alignSelf: 'center',
    shadowRadius: 4,
    shadowOpacity: 1,
    borderRadius: 40,
    borderBottomColor: 12,
    width: 70,
    height: 70,
  },
  iconStyle: {
    width: 60,
    height: 60,
  },
});
