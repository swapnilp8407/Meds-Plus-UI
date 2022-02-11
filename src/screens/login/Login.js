import { View, Text, StyleSheet, Image, TextInput, Button } from 'react-native';
import React from 'react';
// import { useTailwind } from 'tailwind-rn';
import { useTranslation } from 'react-i18next';

const Login = ({ navigation }) => {
  //   const tailwind = useTailwind();
  const { t } = useTranslation();
  return (
    <View
      testID="login_screen"
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <Image
        style={{ width: '100%', height: '40%', resizeMode: 'cover' }}
        source={require('../../components/assests/logo.jpg')}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 25,
          marginVertical: 10,
        }}
      >
        <Text style={{ color: '#7CB9E8', fontFamily: t('Font2'), fontSize: 25 }}>Login</Text>
        <TextInput testID="email" style={{ width: '100%' }} placeholder="Enter Email" />
        <TextInput testID="password" style={{ width: '100%' }} placeholder="Enter password" />
        <Button testID="submit" title="Submit" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {tailwind()},
// });
export default Login;
