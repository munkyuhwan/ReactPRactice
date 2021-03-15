import React from 'react'
import {StyleSheet, Text, TextInput} from 'react-native'

const MovieList = () => {
    const [text, setText] = React.useState("");
    return(
        <>
        <TextInput style={style.input} value={text} />
        <Text>Movie list</Text>
        </>
    )
}

const style = StyleSheet.create(
    {
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
          },
    }
)
export default MovieList;
