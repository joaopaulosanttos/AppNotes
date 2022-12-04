import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListScreen from "../screens/ListScreen";
import EditNoteScreen from "../screens/EditNoteScreen";

const MainStack = createNativeStackNavigator();

export default () => (
    <MainStack.Navigator initialRouteName="List" screenOptions={{
        headerStyle: {
            backgroundColor: "#222"
        },
        headerTintColor: "#FFF"
    }}>
        <MainStack.Screen name="List" component={ListScreen} />
        <MainStack.Screen name="EditNote" component={EditNoteScreen} />
    </MainStack.Navigator>
);