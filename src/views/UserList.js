import React from 'react'
import { Text, View, FlatList, Alert } from 'react-native'
import { ListItem, Button, Icon } from 'react-native-elements'
import users from './../data/users'

export default props => {
    
    function deleteUser(user){
        Alert.alert('Excluir usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    console.warn('delete' + user.id)
                }
            },
            {
                text: 'Cancelar'
            }
        ])
    }
    
    function getActions(user) {
        return(
            <>
        <Button 
            onPress={() => props.navigation.navigate('UserForm', user)}
            type = "clear"
            icon = {<Icon name="edit" size={25} color="orange" />} 
        />
        <Button 
            onPress={() => deleteUser(user)}
            type = "clear"
            icon = {<Icon name="delete" size={25} color="red" />} 
        />
        </>
        )
    }

    function getUserItem( {item} ) {
        return (
            <ListItem 
                key={user.id}
                title={user.name}
                subtitle={user.email}
                rightElement={getActions(user)}
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