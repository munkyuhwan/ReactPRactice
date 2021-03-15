// connect state

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Actions/Bulletin'
import BulletinApp from '../../Components/Bulletin/App'


// connect state to prop and dispatch prop

const mapStateToProps = (state) => ({
        title:state.title,
        cnt:state.cnt,
        content: state.content
    
})
const mapDispatchToProps = (dispatch) => ({
    handleLike: (index) => dispatch(actions.increaseLike(index)),
    handleGoDetail: (index) => dispatch(actions.goDetail(index)),
    handleGoWrite:() => dispatch(actions.goWrite())
})

const BulletinListContainer = connect(mapStateToProps, mapDispatchToProps)(BulletinApp)

export default BulletinListContainer


