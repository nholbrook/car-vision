/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { Platform, Text, TextInput, View, Button, StatusBar, StyleSheet } from 'react-native';
import { NodeCameraView } from 'react-native-nodemediaclient';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { 'flashenable': false };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#333' }}>
              <StatusBar
                barStyle="light-content"
                backgroundColor="#6a51ae"
              />
              <NodeCameraView
                style={{ flex: 1 }}
                ref={(vb) => { this.vb = vb }}
                outputUrl={"testurl.com"}
                camera={{ cameraId: 0, cameraFrontMirror: true }}
                audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
                video={{ preset: 1, bitrate: 500000, profile: 1, fps: 15, videoFrontMirror: false }}
                smoothSkinLevel={3}
                autopreview={true}
              />
              <ActionButton
                buttonColor="#1abc9c"
                offsetY={24}
                offsetX={16}
                size={32}
                hideShadow={true}
                verticalOrientation='down'

              >
                <ActionButton.Item buttonColor='#9b59b6' title="Reverse Camera" onPress={() => {
                  this.vb.switchCamera();
                  this.state.flashenable = false;
                }}>
                  <Icon name="ios-reverse-camera-outline" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#3498db' title="Switch Flashlight" onPress={() => {
                  this.state.flashenable = !this.state.flashenable;
                  this.vb.flashEnable(this.state.flashenable);
                }}>
                  <Icon name="ios-bulb-outline" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#e6ce28' title="Publish" onPress={() => { this.vb.start() }}>
                  <Icon name="ios-paper-plane-outline" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#e74c3c' title="Close" onPress={() => { this.props.navigation.goBack() }}>
                  <Icon name="ios-power-outline" style={styles.actionButtonIcon} />
                </ActionButton.Item>
              </ActionButton>
            </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
