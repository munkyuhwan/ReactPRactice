import React from 'react'

const initialState = {
    movie: [
        {
            like:0,
        }
    ]
}

const reducer = (state=initialState, action) => {
   switch (action.type) {
       case "LIKE":
           return({
               movie:[
                   ...movie.slice(0,action.index),
                   {
                       like: movie[action.index].like+1
                   },
                   ...movie.slice(action.index+1, action.length)
               ]
           });
        
        case "DETAIL":
            return"";

        default:
           return state;
        
   }
}



export default reducer