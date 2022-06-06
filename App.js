import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Header } from "./components/Header";
import { ListItem } from "./components/ListItem";
import { Form } from "./components/Form";

export default function App() {
  const [list, setList] = useState([
      {text: 'Buy milk', key: '1'},
      {text: 'Buy potato', key: '2'},
      {text: 'Wash dishes', key: '3'},
  ]);

  const addHandler = (text) => {
      setList(list => {
          return [
              {text: text, key: Math.random().toString().substring(7)},
              ...list,
          ]
      })
  }

  const deleteHandler = (key) => {
      setList(list => {
          return list.filter(elem => elem.key !== key)
      })
  }

  return (
      <View>
        <Header />
          <Form addHandler={addHandler} deleteHandler={deleteHandler}/>
          <View style={styles.main}>
              <FlatList data={list} renderItem={({ item }) => (
                  <ListItem elem={item} deleteHandler={deleteHandler}/>
              )} />
          </View>
      </View>
  );
}

const styles = StyleSheet.create({});
