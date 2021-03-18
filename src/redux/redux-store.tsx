import {combineReducers, createStore} from "redux";

export type ActionTypes = Returntype<typeof addCount>

export let reducersBatch = combineReducers ({

})

let store = createStore (reducersBatch)

export type AppStateType = ReturnType<typeof reducersBatch>

export default store