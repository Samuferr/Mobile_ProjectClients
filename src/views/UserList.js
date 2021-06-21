import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import users from './../data/users'

export default props => {

    console.warn(Object.keys(props))

    function getUserItem( {item} ) {
        return (
            <ListItem 
                key={user.id}
                title={user.name}
                subtitle={user.email}
                onPress={() => props.navigation.navigate('UserForm')}
            />
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data = {users}    
                renderItem={getUserItem}
            />
        </View>
)
}