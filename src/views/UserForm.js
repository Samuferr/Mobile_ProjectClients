import React, { useContext, useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'
import UsersContext from '../context/UsersContext'


export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const {dispatch} = useContext(UsersContext)
    return (
        <View>
            <Text>Nome:</Text>
            <TextInput
                onChange={name => setUser({...user, name})}
                placeholder="Informe o nome"
                value={user.name}
            />


<Text>Email:</Text>
            <TextInput
                onChange={email => setUser({...user, email})}
                placeholder="Informe o email"
                value={user.email}
            />


<Text>URL do Avatar</Text>
            <TextInput
                onChange={avatarUrl => setUser({...user, avatarUrl})}
                placeholder="Informe a URL do Avatar"
                value={user.avatarUrl}
            />

            <Button
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user, 
                    })
                    navigation.goBack()
                }}
            />

        </View>

        
)
}