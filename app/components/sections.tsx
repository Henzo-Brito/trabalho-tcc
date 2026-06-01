import { View, Text, StyleSheet, TouchableOpacity} from "react-native"
import { ReactNode } from "react";
import sty from "@/constants/styles";

type Props = {
    title: string
    btnTitle: string
    func: ()=> void
    children: ReactNode
}

export default function Section({ title, btnTitle="ver todos >", func, children}: Props){
    return (
        <View style={style.container}>
            <View style={style.topper}>
                <Text style={style.title}>{title}</Text>
                <TouchableOpacity onPress={func} style={style.btn}>
                    <Text style={style.btnText}>{btnTitle}</Text>
                </TouchableOpacity>
            </View>
            <View style={style.children}>
                {children}
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        width: "100%",
        gap: 10,
    },
    title:{
        padding: 20,
        color: sty.c4,
        fontWeight: 600,
        fontSize: 17,
        width: "75%",
    },
    topper:{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%"
    },
    btn:{
        width: "25%",
        paddingRight: 8
    },
    btnText:{
        width: "100%",
        color: sty.c3,
        overflow: "hidden",
        fontFamily: sty.font1,
        fontWeight: 900,
        textAlign: "right",
        fontSize: 16
    },
    children:{
        flexDirection: "row",
        gap: 10,
        overflowX: "scroll",
        paddingInline: 20,
    }
})

