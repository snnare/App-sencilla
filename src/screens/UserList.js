import React, { useState, useEffect } from "react";
import { Button, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import { db } from "../db/testeF";
import { onSnapshot, collection } from 'firebase/firestore';


const UserList = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'users'), (querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        users.push({ id: doc.id, ...doc.data() });
      });
      setUsers(users);
      console.log(users);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  
    return (
      <ScrollView>
        <Button
          onPress={() => props.navigation.navigate("CreateUser")}
          title="Create User"
        />
        {users.map((user) => {
          return (
            <ListItem
              key={user.id}
              bottomDivider
              onPress={() => {
                props.navigation.navigate("UserDetails", {
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
    );
  };
  
  export default UserList;
  