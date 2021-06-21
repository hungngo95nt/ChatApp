import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import FaIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {Box, Text, useTheme} from '~/theme';
import {SIZES, ROUTES, NAVIGATION_TAB_PROP_TYPE} from '~/constants';

import Logo from './logo';

const {NAVIGATION_BOTTOM_TABS_HEIGHT} = SIZES;

function TabHandler({tabs, tabWidth}) {
  const routeName = null;
  const theme = useTheme();

  function getIcon(name) {
    switch (name) {
      case ROUTES.A: {
        if (routeName === ROUTES.A) {
          return <FontAwesomeIcon name="bell" />;
        }

        return <FontAwesomeIcon name="bell" size={30} />;
            }
      case ROUTES.B: {
        if (routeName === ROUTES.B) {
          return <FaIcon name="message-square" />;
        }

        return <FaIcon name="message-square" size={30} />;
      }
      case ROUTES.D: {
        if (routeName === ROUTES.D) {
          return <FaIcon name="users" />;
        }

        return <FaIcon name="users" size={30} />;
      }
      case ROUTES.E: {
        if (routeName === ROUTES.E) {
          return <FontAwesomeIcon name="news" />;
        }

        return <MaterialIcon name="article" size={30} />;
      }
      default:
        break;
    }

    return null;
  }

  function getText(name) {
    if (name === routeName) {
      return <Text style={{color: theme.colors.main}}>{name}</Text>;
    }

    return <Text>{name}</Text>;
  }

  return (
    <Box flexDirection="row-reverse">
      {tabs.map((tab, key) => {
        if (key === Math.floor(tabs.length / 2)) {
          return (
            <Box
              key="logo"
              width={tabWidth}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              height={NAVIGATION_BOTTOM_TABS_HEIGHT}>
              <Box
                position="absolute"
                style={{top: -NAVIGATION_BOTTOM_TABS_HEIGHT /2 }}>
                <Logo />
              </Box>
            </Box>
          );
        }

        return (
          <TouchableOpacity {...{key}} onPress={tab.action}>
            <Box
              width={tabWidth}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              height={NAVIGATION_BOTTOM_TABS_HEIGHT}>
              {getIcon(tab.name)}
            </Box>
          </TouchableOpacity>
        );
      })}
    </Box>
  );
}

TabHandler.propTypes = {
  tabWidth: PropTypes.number.isRequired,
  tabs: NAVIGATION_TAB_PROP_TYPE.isRequired,
};

export default TabHandler;
