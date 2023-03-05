import { useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";

import { styles } from "./styles";
import { addPlace } from "../../store/place.slice";
import colors from "../../utils/colors";

const NewPlace = ({ navigation }) => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const onHandleChange = (text) => {
    setTitle(text);
  };

  const onHandleSubmit = () => {
    dispatch(addPlace({ title }));
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.dataContainer}>
        <Text style={styles.text}>Add a new place</Text>
        <TextInput
          onChange={onHandleChange}
          style={styles.textInput}
          placeholder="Enter an adresse"
        />
        <Button
          disabled={title.length === 0}
          title="Save"
          color={colors.secondary}
          onPress={onHandleSubmit}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlace;
