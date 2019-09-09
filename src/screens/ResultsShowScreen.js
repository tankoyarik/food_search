import React, { useState, useEffect } from "react";
import { FlatList, Image, StyleSheet, ScrollView } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);

  const id = navigation.getParam("id");
  const getResult = async id => {
    const result = await yelp.get(`/${id}`);
    setResult(result.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }
  return (
    <ScrollView>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200
  }
});

export default ResultsShowScreen;
