import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';

const Help = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <View>
      <Text style={{ fontFamily: t('Font1-Bold'), fontSize: 30, color: t('Primary') }}>
        Help Screen
      </Text>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Text>go to HOme</Text>
      </Pressable>
    </View>
  );
};

export default Help;
