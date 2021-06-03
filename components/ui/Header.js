import React from 'react';
import {Button} from 'react-native-paper';

const Header = ({navigation, route}) => {

    const handlePress = () => {
        navigation.navigate("NuevoCliente")
    }

    return ( 
        <Button icon="plus-circle" color="white" onPress={() => handlePress()}>
            Cliente
        </Button>
     );
}
 
export default Header;