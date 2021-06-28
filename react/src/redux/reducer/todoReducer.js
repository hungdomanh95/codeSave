import { GET_LIST_TODO,ADD_TODO,CHECK } from "../action/actionType";
const arrList = [
    {
        id:1,
        content:"Learn Javascript",
        status:false
    },
    {
        id:2,
        content:"Learn React",
        status:false
    },
    {
        id:3,
        content:"Build a React App",
        status:true
    },
]
  const todoReducer = (state = { arrList }, action) => {
    switch (action.type) {
      case GET_LIST_TODO:
        return {
          ...state,
        };
      case ADD_TODO:
        return {
          ...state,
          arrList:[...state.arrList,action.data]
        };
      case CHECK:
        const itemChange = state.arrList.filter(itemList=>action.data.id !== itemList.id)
        return {
          ...state,
          arrList:[...itemChange,{id:action.data.id,content:action.data.content,status:!action.data.status}].sort((a,b)=>a.id-b.id)
        };
  
 
      default:
        return state;
    }
  };
  
  export default todoReducer;
  