import React from "react";

import { View, Button } from "react-native";

export default ({children}) => (
    <View style={{flex:1, alignItems: "center", justifyContent:"center"}}>
        {children}
    </View>
)
