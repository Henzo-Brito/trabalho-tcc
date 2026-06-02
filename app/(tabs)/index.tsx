import Section from "@/components/sections"
import { StyleSheet, View } from "react-native"
import sty from "@/constants/styles"
import Minister from "@/components/minister"
import Alert from "@/components/alert"
import Infos from "@/components/infos"
import { User , Music2, Megaphone} from "lucide-react-native"

export default function index(){
    return(
    <View style={style.container}>
        <Section
            title="Equipes / Ministérios"
            btnTitle="Entrar"
            func={()=> {}}
        >
            <Minister 
                title="Ministério de Louvor"
                Img={require("@/sources/1.jpg")}
            >
                <Infos title="23" icon={User} width={"45%"}></Infos>
                <Infos title="152" icon={Music2} width={"55%"}></Infos>
            </Minister>
        </Section>

        <Section
            title="Avisos"
            func={()=> {}}
        >
            <Alert 
                icon={Megaphone}
                title="Bem-Vindo"
                desc="Seja bem vindo a SaintScale 123123123123123"
            />  
        </Section>

        <Section
            title="Minhas Escalas"
            func={()=>{}}
        >
            <Alert 
                icon={Megaphone}
                title="Bem-Vindo"
                desc="Seja bem vindo a SaintScale 123123123123123"
            />  
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

