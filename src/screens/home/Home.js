import React, { useEffect } from 'react';
import { View, Text, Pressable, StatusBar } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from '../../components/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { requestUser } from '../../store/actions/auth.actions';
import { getUserData } from '../../store/selectors/auth.selector';

const Home = ({ navigation }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  //user call
  useEffect(() => {
    dispatch(requestUser());
  }, []);
  const userData = useSelector(getUserData);
  // console.log(userData);
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <Text style={{ fontFamily: t('Font2'), fontSize: 30, color: '#0000FF' }}>Home Screen </Text>
      <Pressable onPress={() => navigation.navigate('Help')}>
        <Text>go to help</Text>
        <Icon pack="FontAwesome5" name={'home'} size={30} style={{ color: '#0000FF' }} />
      </Pressable>
    </View>
  );
};

export default Home;
