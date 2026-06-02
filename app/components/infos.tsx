import sty from "@/constants/styles";
import { LucideIcon } from "lucide-react-native";
import { Text, View, StyleSheet } from "react-native";

import { DimensionValue } from "react-native";

type Props ={
    title: string
    icon: LucideIcon
    width?: DimensionValue
}

export default function Infos({title, icon: Icon, width=35}:Props){
    const style = StyleSheet.create({
        container:{
            flexDirection: "row",
            alignItems: "center",
            width: width,
            gap: 2
        },
        title:{
            fontWeight: 700,
            fontFamily: sty.font1,
            fontSize: 16,
            color: sty.c5,
            flex: 1,
            textAlign: "left",
            overflow: "hidden",
        },
    })

    return (
        <View style={style.container}>
            <Icon size={17} color={sty.c5} strokeWidth={3.4} />
            <Text style={style.title} numberOfLines={1}>{title}</Text>
        </View>
    )
}

