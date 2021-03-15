import React from 'react'
import {Button} from 'react-native'
import PropTypes from 'prop-types';

const App = ({item, handleLike, goDetail, goWrite}) => {
    return(
        <>
            <Button title='goDetail' onPress={goDetail} />
            <Button title='goWrite' onPress={goWrite} />
            <Button title='LIKE' onPress={handleLike} />
        </>
    )
}


App.propTypes = {
    item: PropTypes.arrayOf(PropTypes.shape({
        title : PropTypes.string,
        cnt: PropTypes.number,
        content:PropTypes.string
    })),
    handleLike : PropTypes.func,
    goDetail : PropTypes.func,
    goWrite : PropTypes.func,
};

App.defaultProps = {
    item : [],
    handleLike : () => console.warn('handleLike not defined'),
    goDetail : () => console.warn('goDetail not defined'),
    goWrite : () => console.warn('goWrite not defiend'),
}
export default App;