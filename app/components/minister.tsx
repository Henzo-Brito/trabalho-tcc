import sty from "@/constants/styles";
import { ReactNode } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from "react-native";

type Props = {
    children: ReactNode,
    title: string,
    Img: ImageSourcePropType,
    func?: ()=>void
}

export default function Minister({children,title="Título",Img, func}: Props){
    const style = StyleSheet.create({
        left:{
            width: 60,
            height: 60,
            borderRadius: 5,
            backgroundColor: sty.c4
        },
        right:{
            paddingLeft: 10,
            flex: 1,
            justifyContent: "space-around",
            height: 60
        },
        title:{
            fontSize: 18,
            width: "100%",
            overflow: "hidden",
            fontFamily: sty.font1,
            fontWeight: 800,
            color: sty.c4,
            lineHeight: 17
        },
        container:{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: sty.c1,
            width: 250,
            borderRadius: 10,
            padding: 10,
            height: 90
        },
        childrens:{
            flexDirection: "row",
            alignItems:"center",
            justifyContent: "space-between"
        }
    })
    return(
        <TouchableOpacity onPress={func} style={style.container}>
            <Image source={Img} style={style.left}></Image>

            <View style={style.right}>
                <Text style={style.title} numberOfLines={2}>
                    {title}
                </Text>
                <View style={style.childrens}>
                    {children}
                </View>
            </View>
        </TouchableOpacity>
    )
}


