import { StyleSheet, View } from "react-native"
import Select from "@/components/select"
import sty from "@/constants/styles"

export default function index(){
    return(
    <View style={style.container}>
        <Select selects={["21","31"]}/>
    </View>)
}

const style = StyleSheet.create({
    container:{
        backgroundColor: sty.c7,
        flex: 1,
        gap: 20,
        paddingTop: 10,
        alignItems: "center"
    }
})

