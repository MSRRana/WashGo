import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {setUserDetails} from '../reduxFolder/actions/LoginAction';

import {useDispatch, useSelector} from 'react-redux';

const splashScreen = props => {
  const {navigation} = props;

  const dispatch = useDispatch();
  const {userDetails} = useSelector(state => state.loginscreen);
  useEffect(() => {
    dispatch(setUserDetails('Hello'));
  }, [userDetails]);

  console.log(userDetails, 'userDetails');
  return (
    <View>
      <Text>{userDetails}</Text>

      <Text onPress={() => navigation.navigate('loginScreen')}>
        Go to loginScreen
      </Text>
    </View>
  );
};

export default splashScreen;
