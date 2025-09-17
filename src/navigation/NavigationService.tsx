import {
  CommonActions,
  createNavigationContainerRef,
  NavigationContainerRef,
  ParamListBase,
} from '@react-navigation/native';
import { Ref } from 'react';

const navigationRef: Ref<NavigationContainerRef<ParamListBase>> | undefined =
  createNavigationContainerRef();

const navigate = (routeName: string, params?: object): void => {
  if (navigationRef.current?.isReady()) {
    navigationRef.current.dispatch(CommonActions.navigate(routeName, params));
  }
};

const replace = (name: string, params?: object): void => {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name, params }],
    }),
  );
};

export { navigate, replace, navigationRef };
