import Section from "@/components/home/sections"
import { StyleSheet, ScrollView } from "react-native"
import sty from "@/constants/styles"
import Minister from "@/components/home/minister"
import Alert from "@/components/home/alert"
import Infos from "@/components/home/infos"
import { User , Music2, Megaphone} from "lucide-react-native"
import Scales from "@/components/scales"
import { router } from "expo-router"
import { Mounth, WeekDay } from "@/types/scales.type"

import Equipes from "@/components/home/equipes"

import Outages from "@/components/home/outages"

export default function index(){
    return(
    <ScrollView style={{flex: 1, backgroundColor: sty.c7}} contentContainerStyle={style.container}>
        <Section
            title="Grupos / Ministérios"
            btnTitle="Entrar"
            func={()=> {}}
        >
            <Minister 
                title="Ministério de Louvor"
                Img={require("@/assets/1.jpg")}
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
                func={()=>{router.push({
                    pathname: "/avisos/[id]",
                    params: { id: "123" }
                })}}
                desc="Seja bem vindo a SaintScale 123123123123123"
            />  
            <Alert 
                icon={Megaphone}
                title="Bem-Vindo"
                func={()=>{router.push({
                    pathname: "/avisos/[id]",
                    params: { id: "123" }
                })}}
                desc="Seja bem vindo a SaintScale 123123123123123"
            />  
            <Alert 
                icon={Megaphone}
                title="Bem-Vindo"
                func={()=>{router.push({
                    pathname: "/avisos/[id]",
                    params: { id: "123" }
                })}}
                desc="Seja bem vindo a SaintScale 123123123123123"
            />  
        </Section>

        <Section
            title="Minhas Escalas"
            btnTitle="ver todas >"
            func={()=>{}}
        >
                <Scales 
                    Date={{
                        Day: 17,
                        hour: "20:00",
                        Mounth: Mounth.Janeiro,
                        WeekDay: WeekDay.Segunda
                    }}
                    Persons={[require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg")]}
                    func={()=>{router.push({
                        pathname: "/scale/[id]",
                        params: { id: "123" }
                    })}}
                    status={{
                        confirmed:0,
                        persons: 12,
                        songs: 3
                    }}
                    title="Banda 4"
                />
                <Scales 
                    Date={{
                        Day: 17,
                        hour: "20:00",
                        Mounth: Mounth.Janeiro,
                        WeekDay: WeekDay.Segunda
                    }}
                    Persons={[require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg")]}
                    func={()=>{router.push({
                        pathname: "/scale/[id]",
                        params: { id: "123" }
                    })}}
                    status={{
                        confirmed:0,
                        persons: 12,
                        songs: 3
                    }}
                    title="Banda 4"
                />
                <Scales 
                    Date={{
                        Day: 17,
                        hour: "20:00",
                        Mounth: Mounth.Janeiro,
                        WeekDay: WeekDay.Segunda
                    }}
                    Persons={[require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg")]}
                    func={()=>{router.push({
                        pathname: "/scale/[id]",
                        params: { id: "123" }
                    })}}
                    status={{
                        confirmed:0,
                        persons: 12,
                        songs: 3
                    }}
                    title="Banda 4"
                />
        </Section>

        <Section title="Indisponibilidades" func={()=>{}}>
                <Outages 
                    img={require("@/assets/1.jpg")}
                    title="Banda 7 - Quartas 111111"
                    yourFunc="Guitarra"
                    subTitle="14 de junho"
                />
                <Outages 
                    img={require("@/assets/1.jpg")}
                    title="Banda 7 - Quartas 111111"
                    yourFunc="Guitarra"
                    subTitle="14 de junho"
                />
                <Outages 
                    img={require("@/assets/1.jpg")}
                    title="Banda 7 - Quartas 111111"
                    yourFunc="Guitarra"
                    subTitle="14 de junho"
                />
        </Section>


        <Section title="Bandas / Equipes" func={()=>{}} >
              <Equipes 
                imgs={[require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg")]}
                title="Banda 7 - Quartas"
              />  
              <Equipes 
                imgs={[require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg"),require("@/assets/1.jpg")]}
                title="Banda 7 - Quartas"
              />  
        </Section>
    </ScrollView>)
}

const style = StyleSheet.create({
    container:{
        gap: 25,
        paddingBlock: 15
    }
})

