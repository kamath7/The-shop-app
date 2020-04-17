import React , {useEffect, useRef} from 'react'
import { View, Text } from 'react-native'
import {NavigationActions} from 'react-navigation';
import ShopNavigator from './ShopNavigator';
import {useSelector} from 'react-redux';
const NavigationContainer = () => {

    const navRef = useRef();
    const isAuth = useSelector(state => !!state.auth.token);
    useEffect(() => {
        if(!isAuth)
       {
        navRef.current.dispatch(
            NavigationActions.navigate({routeName: 'Auth'})
        );
       }
    }, [isAuth])
    return (
        <ShopNavigator ref={navRef}/>
    )
}

export default NavigationContainer;