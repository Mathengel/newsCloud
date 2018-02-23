import React from 'react';
import { TextInput, View } from 'react-native';

const Input = ({ value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
                // multiline
                // numberOfLines={1}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    containerStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };
