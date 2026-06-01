import Section from "@/components/sections"
import { StyleSheet, View } from "react-native"
import sty from "@/constants/styles"
import Container from "@/components/container"

import Infos from "@/components/infos"
import { User , Music2} from "lucide-react-native"

export default function index(){
    return(
    <View style={style.container}>
        <Section
            title="Equipes / Ministérios"
            btnTitle="Entrar"
            func={()=> {}}
        >
            <Container 
                title="Ministério de Louvor"
                Img={require("@/sources/1.jpg")}
            >
                <Infos title="23" icon={User} width={"45%"}></Infos>
                <Infos title="152" icon={Music2} width={"55%"}></Infos>
            </Container>
        </Section>
    </View>)
}

const style = StyleSheet.create({
    container:{
        backgroundColor: sty.c7,
        flex: 1,
        gap: 10,
        paddingTop: 10
    }
})

