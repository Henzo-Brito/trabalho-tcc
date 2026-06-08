import { StyleSheet, ScrollView } from "react-native"
import Select from "@/components/select"
import sty from "@/constants/styles"
import Music from "@/components/repertory/music"

export default function index(){
    return(
    <ScrollView contentContainerStyle={style.container}>
        <Select selects={["Músicas", "Artistas"]}/>
        <Music 
            authors={["Nívea Soares", "aaaaaaaaaaaaaaaa"]}
            img={require("@/assets/1.jpg")}
            title="A resposta"
            tom="Bm"
        />
        <Music 
            authors={["Nívea Soares", "aaaaaaaaaaaaaaaa"]}
            img={require("@/assets/1.jpg")}
            title="A resposta"
            tom="Bm"
        />
        <Music 
            authors={["Nívea Soares", "aaaaaaaaaaaaaaaa"]}
            img={require("@/assets/1.jpg")}
            title="A resposta"
            tom="Bm"
        />
        <Music 
            authors={["Nívea Soares", "aaaaaaaaaaaaaaaa"]}
            img={require("@/assets/1.jpg")}
            title="A resposta"
            tom="Bm"
        />
        <Music 
            authors={["Nívea Soares", "aaaaaaaaaaaaaaaa"]}
            img={require("@/assets/1.jpg")}
            title="A resposta"
            tom="Bm"
        />
        <Music 
            authors={["Nívea Soares", "aaaaaaaaaaaaaaaa"]}
            img={require("@/assets/1.jpg")}
            title="A resposta"
            tom="Bm"
        />
        <Music 
            authors={["Nívea Soares", "aaaaaaaaaaaaaaaa"]}
            img={require("@/assets/1.jpg")}
            title="A resposta"
            tom="Bm"
        />
        <Music 
            authors={["Nívea Soares", "aaaaaaaaaaaaaaaa"]}
            img={require("@/assets/1.jpg")}
            title="A resposta"
            tom="Bm"
        />
        <Music 
            authors={["Nívea Soares", "aaaaaaaaaaaaaaaa"]}
            img={require("@/assets/1.jpg")}
            title="A resposta"
            tom="Bm"
        />
    </ScrollView>)
}

const style = StyleSheet.create({
    container:{
        backgroundColor: sty.c7,
        gap: 20,
        padding: 15,
        width: "100%"
    }
})
