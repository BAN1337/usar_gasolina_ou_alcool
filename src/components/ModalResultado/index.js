import React from "react";
import { Modal, View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

export default function ModalResultado(props) {
    function calcularNovamente() {
        props.setVisibleModal(false)
        props.setValorAlcool('')
        props.setValorGasolina('')
    }

    return (
        <Modal
            visible={props.visibleModal}
            animationType='slide'
        >
            <View style={styles.container}>
                <Image
                    source={require('../../assets/images/gas.png')}
                />

                <Text style={styles.melhorText}>Compensa usar {props.melhorCombustivel}</Text>

                <Text style={styles.textComOsPrecos}>Com os preços:</Text>

                <Text style={styles.textPrecos}>Álcool: R$ {Number(props.valorAlcool).toFixed(2)}</Text>

                <Text style={styles.textPrecos}>Gasolina: R$ {Number(props.valorGasolina).toFixed(2)}</Text>

                <TouchableOpacity onPress={calcularNovamente} style={styles.btnArea}>
                    <Text style={styles.btnText}>Calcular novamente</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center'
    },
    melhorText: {
        color: '#71E45A',
        margin: 25,
        fontSize: 29,
        fontWeight: 'bold'
    },
    textComOsPrecos: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold'
    },
    textPrecos: {
        fontSize: 18,
        color: '#fff',
        marginTop: 10
    },
    btnArea: {
        width: '65%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderWidth: 1,
        borderColor: '#ef4130',
        borderRadius: 8,
        marginTop: 25
    },
    btnText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ef4130'
    }
})