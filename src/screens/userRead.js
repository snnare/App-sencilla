import React, { useEffect, useState } from "react";
import { ScrollView, Button, View, Alert, ActivityIndicator} from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import { db } from '../db/testeF';
import { onSnapshot, collection, QuerySnapshot } from 'firebase/firestore';

const userRead = (props) => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'users'), (querySnapshot) => {
      const usersList = [];
      querySnapshot.forEach((doc) => {
        usersList.push({ id: doc.id, ...doc.data() });
      });
      setUsers(usersList);
      console.log(usersList);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <ScrollView>
    <Button
      onPress={() => props.navigation.navigate("userRegister")}
      title="Crear un nuevo usuario"
    />
    {users.map((user) => {
      return (
        <ListItem
          key={user.id}
          bottomDivider
          onPress={() => {
            props.navigation.navigate("userAllDetails", {
              userId: user.id,
            });
          }}
        >
          <ListItem.Chevron />
          <Avatar
            source={{
              uri:
                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
            }}
            rounded
          />
          <ListItem.Content>
            <ListItem.Title>{user.name}</ListItem.Title>
            <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      );
    })}
  </ScrollView>
  )
}

export default userRead