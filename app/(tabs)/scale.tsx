import Section from "@/components/sections"
import { StyleSheet, View, Text } from "react-native"
import sty from "@/constants/styles"

export default function index(){
    return(
    <View style={style.container}>
        <Section
            title="Equipes / Ministérios"
            btnTitle="Entrar"
            func={()=> {}}
        >
            <Text>Minecraft</Text>
        </Section>
    </View>)
}

const style = StyleSheet.create({
    container:{
        backgroundColor: sty.c7,
        flex: 1,
        gap: 20,
        paddingTop: 10
    }
})

