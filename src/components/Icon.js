import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Material from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Icon = (props) => {
  const { pack, name = 'home', size = 26, color = '#fff', style = {} } = props;

  switch (pack) {
    case 'FontAwesome5':
      return <FontAwesome5 name={name} color={color} size={size} style={style} />;
    case 'FontAwesome':
      return <FontAwesome name={name} color={color} size={size} style={style} />;
    case 'Entypo':
      return <Entypo name={name} color={color} size={size} style={style} />;
    case 'MaterialIcons':
      return <Material name={name} color={color} size={size} style={style} />;
    case 'Fontisto':
      return <Fontisto name={name} color={color} size={size} style={style} />;
    case 'Feather':
      return <Feather name={name} color={color} size={size} style={style} />;
    case 'Ionicons':
      return <Ionicons name={name} color={color} size={size} style={style} />;

    default:
      return <FontAwesome5 name={name} color={color} size={size} />;
  }
};
export default Icon;
