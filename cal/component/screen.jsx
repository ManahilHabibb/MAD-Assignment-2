import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
    const [display, setDisplay] = useState('0');
    const [operand, setOperand] = useState(null);
    const [operator, setOperator] = useState(null);

    const pressButton = (value) => {
        if (value === 'c') {
            setDisplay('0');
        } else if (value === '.') {
            if (display.indexOf('.') === -1) {
                setDisplay(display + '.');
            }
        } else {
            if (display === '0') {
                setDisplay(value);
            } else {
                setDisplay(display + value);
            }
        }
    };

    const pressOperator = (operation) => {
        if (operation === '%') {
            const num = parseFloat(display);
            setDisplay((num / 100).toString());
        } else {
            setOperand(parseFloat(display));
            setOperator(operation);
            setDisplay('0');
        }
    };

    const calculate = () => {
        const num = parseFloat(display);
        switch (operator) {
            case '+':
                setDisplay((operand + num).toString());
                break;
            case '-':
                setDisplay((operand - num).toString());
                break;
            case '*':
                setDisplay((operand * num).toString());
                break;
            case '/':
                setDisplay((operand / num).toString());
                break;
        }
        setOperand(null);
        setOperator(null);
    };
    return (
        <View style={styles.container}>
            <View style={styles.display}>
                <Text style={styles.displayText}>{display}</Text>
            </View>
            <View style={styles.buttons}>
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.button, styles.grayButton]} onPress={() => pressButton('c')}>
                        <Text style={styles.buttonText}>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.grayButton]} onPress={() => pressButton('+/-')}>
                        <Text style={styles.buttonText}>+/-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.grayButton]} onPress={() => pressOperator('%')}>
                        <Text style={styles.buttonText}>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.orangeButton]} onPress={() => pressOperator('/')}>
                        <Text style={styles.buttonText}>÷</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.button, styles.darkButton]} onPress={() => pressButton('7')}>
                        <Text style={styles.buttonText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.darkButton]} onPress={() => pressButton('8')}>
                        <Text style={styles.buttonText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.darkButton]} onPress={() => pressButton('9')}>
                        <Text style={styles.buttonText}>9</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.orangeButton]} onPress={() => pressOperator('*')}>
                        <Text style={styles.buttonText}>×</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity style={[styles.button, styles.darkButton]} onPress={() => pressButton('4')}>
                        <Text style={styles.buttonText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.darkButton]} onPress={() => pressButton('5')}>
                        <Text style={styles.buttonText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.darkButton]} onPress={() => pressButton('6')}>
                        <Text style={styles.buttonText}>6</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.orangeButton]} onPress={() => pressOperator('-')}>
                        <Text style={styles.buttonText}>−</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.button, styles.darkButton]} onPress={() => pressButton('1')}>
                        <Text style={styles.buttonText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.darkButton]} onPress={() => pressButton('2')}>
                        <Text style={styles.buttonText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.darkButton]} onPress={() => pressButton('3')}>
                        <Text style={styles.buttonText}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.orangeButton]} onPress={() => pressOperator('+')}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity style={[styles.button, styles.darkButton, styles.zeroButton]} onPress={() => pressButton('0')}>
                        <Text style={[styles.buttonText, styles.zeroText]}>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.darkButton]} onPress={() => pressButton('.')}>
                        <Text style={styles.buttonText}>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.orangeButton]} onPress={calculate}>
                        <Text style={styles.buttonText}>=</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 15,
    },
    display: {

        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: 25,
        paddingBottom: 10,
        marginTop: 180,

    },
    displayText: {
        color: 'white',
        fontSize: 90,
        fontWeight: '300',
    },
    buttons: {
        padding: 8,
        marginBottom: 20,
        borderRadius: 20,

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    button: {
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 38,
    },
    zeroButton: {
        width: 140,
        height: 75,
        borderRadius: 38,



    },
    buttonText: {
        fontSize: 34,
        color: 'white',
        fontWeight: '500',
    },
    grayButton: {
        backgroundColor: '#A5A5A5',
    },
    darkButton: {
        backgroundColor: '#333333',
    },
    orangeButton: {
        backgroundColor: '#FF9F0A',
    },
});
export default Calculator;