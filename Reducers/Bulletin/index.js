import React from 'react'


// reducer define basic function
const initialState = {
    item:[{
        title:"title",
        cnt:0,
        content: "content"
    }]
}

const bulletinReducer = (state=initialState, action) => {

    switch(action.type) {
        case "INCREASE_LIKE" : 
            console.log(" increase like");
            return (state);
            break;
        case "GO_DETAIL":
            console.log("go detail");
            return (state);
            break;
        case "GO_WRITE":
            console.log("GO WRITE");
            return (state);
            break;
        default:
            console.log("");
            return (state);
            break;
        
    }

    return state;
}


export default bulletinReducer;
