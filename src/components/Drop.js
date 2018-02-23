import React from 'react';
import { Text } from 'react-native';

const Drop = (props) => (
        <Text
            style={{
            fontSize: props.dropSize,
            color: 'white'
            }}
        >
            {props.dropText}
        </Text>
);


export default Drop;
