import React from 'react'
import { Image, StyleSheet, StatusBar, ImageBackground, TouchableHighlight } from 'react-native'
import { Container, Header, Content, View, } from 'native-base'

import AppIntroSlider from 'react-native-app-intro-slider'
import LinearGradient from 'react-native-linear-gradient';

import NavigationService from '@Service/Navigation';

import Style from './../../theme/style';
//@Asset/images/music_6x.png
const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
  }
});

const slides = [
  {
    title: 'Procure seus eventos',
    text: 'Procure seus eventos favoritos por nome ou categoria',
    image: require(''),
    imageStyle: styles.image,
  },
  {
    title: 'Encontre seus locais',
    text: 'Encontre seus locais prediletos por nome ou categoria',
    image: require(''),
    imageStyle: styles.image,
  },
  {
    title: 'Divirta-se',
    text: 'Com o Agita você não vai ficar parado, procure, encontre e divirta-se',
    image: require(''),
    imageStyle: styles.image,
  },
];

export default class extends React.Component {
  onDone = () => {
    NavigationService.navigate('TabsPublic')
  }
  onSkip = () => {
    NavigationService.navigate('TabsPublic')
  }
  render() {
    return <Container style={Style.bgMainIntro}>
    
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#E73C53', '#DF3A62', '#D8376D']} style={{ flex: 1 }}>
        <AppIntroSlider
          slides={slides}
          onDone={this.onDone}
          onSkip={this.onSkip}
          showSkipButton
          skipLabel={'pular'}
          doneLabel={'feito'}
          nextLabel={'próximo'}
          prevLabel={'voltar'}
        />
      </LinearGradient>
    </Container>
  }
}