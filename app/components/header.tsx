import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Menu } from "lucide-react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import sty from "../constants/styles";

type Props = {
    title: string
}

export default function Header(props: Props) {
    return (
        <SafeAreaView style={{ backgroundColor: sty.c7 }} edges={["top"]}>
            <View style={style.container}>
                <TouchableOpacity style={style.menu}>
                    <Menu size={25} color={sty.c4} strokeWidth={3} />
                </TouchableOpacity>

                <Text style={style.title}>
                    {props.title}
                </Text>
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        gap: 20,
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        paddingBottom: 0
    },
    menu: {},
    title: {
        fontWeight: "700",
        fontFamily: sty.font1,
        fontSize: 30,
        color: sty.c4,
    },
});