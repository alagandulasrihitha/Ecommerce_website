import {createContext,useContext, useEffect, useReducer} from "react";
import { useProductContext } from "./productcontext";
import reducer from "../reducer/filterReducer";
const FilterContex = createContext();

const initialState={
    filter_products:[],
    all_products:[],
    grid_view:false,
}
 export const FilterContextProvider =({children}) => {
  const {products}=useProductContext();  

{/* data add karne ke liyeusereducerhook(state,dispatch...*/}
  const[state,dispatch]=useReducer(reducer,initialState);

  const setGridView = () =>{
    return dispatch({type:"SET_GRID_VIEW"});
  }
  {/* setgridview dispatches a SET_GRIDVIEW action to the reducer to change the view to grid view.*/}
  {/* ye setGridView triggers action method under filterreducer */}
  useEffect(() =>{
   dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products});
  },[products]);
return(
<FilterContex.Provider value={{...state,setGridView}}>
    {children}
</FilterContex.Provider>
);
};
export  const useFilterContext =() =>{
    return useContext(FilterContex);
};
