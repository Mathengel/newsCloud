import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import { Card, CardSection, Input, Button } from './common';
import Drop from './Drop.js';
//import action creater
import { textChanged, splitSentence, buttonPressedWithInput } from '../actions';


class NewsForm extends Component {

    // ACTIONS --------------------------------------


    onChangeText(text) {
        this.props.textChanged(text);
    }

    onButtonPress() {
        const { input } = this.props;
        this.props.buttonPressedWithInput(input);
    }

    // RENDERS --------------------------------------

    renderCloud() {
        const { dropContainer } = styles;
        return (
            <View style={dropContainer}>
                {this.props.words.map((word => (
                        <Drop
                            dropText={word.text}
                            dropSize={word.value}
                        />
                    )
                ))}
            </View>
        );
    }

    renderWordCard() {
        const { cloudStyle } = styles;

        if (this.props.showing) {
            return (
                <View style={cloudStyle}>
                        {this.renderCloud()}
                </View>
            );
        }
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    render() {
        console.log('News: ', this.props.words);

        return (
            <View>
                <Card>
                    <CardSection>
                        <Input
                            placeholder="Give me a country code!!  ...us, ca, ru"
                            onChangeText={this.onChangeText.bind(this)}
                            value={this.props.input}
                        />
                    </CardSection>
                    {this.renderError()}
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Cloud It!
                        </Button>
                    </CardSection>
                </Card>
                {this.renderWordCard()}
            </View>
        );
    }
}

const styles = {
    dropContainer: {
        padding: 10,
        backgroundColor: '#00aced',
        borderColor: '#00aced',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cloudStyle: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = state => ({
        input: state.news.input,
        words: state.news.words,
        showing: state.news.showing,
        error: state.news.error
});

export default connect(mapStateToProps, {
    textChanged, splitSentence, buttonPressedWithInput
})(NewsForm);
