import  {createContext,useContext,useEffect, useReducer} from "react"; 
import axios from "axios";
import reducer from "../reducer/productReducer"

const AppContext=createContext();

const API = "https://api.pujakaitem.com/api/products";

const AppProvider=({ children }) => {

const initialState={
    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[],
    isSingleLoading:false,
    singleProduct:{},
};
{/* joh products list mai featured true hai just show only them in featured products display and show evrything in products*/}

const[state,dispatch]=useReducer(reducer,initialState); 

const getProducts = async(url) =>{
    dispatch({type:"SET_LOADING"});
try {
    const response= await axios.get(url);
    const products =await response.data;
    dispatch({type:"SET_API_DATA",payload:products});
} catch (error) {
    dispatch({type:"API_ERROR"});
}
};
// my 2nd api call for single product

const getSingleProduct= async(url) => {
    dispatch({type:"SET_SINGLE_LOADING"});
try {
    const response= await axios.get(url);
    const singleProduct =await response.data;
    dispatch({type:"SET_SINGLE_PRODUCT",payload:singleProduct}); 
} catch (error) {
    dispatch({type:"SET_SINGLE_ERROR"});
}
}
useEffect(() =>{
    getProducts(API);
},[]);

return(
<AppContext.Provider value={{...state,getSingleProduct}}>
    {children}
</AppContext.Provider>
);
};
// custom hook
const useProductContext =() =>{
    return useContext(AppContext);
};

export {AppProvider,AppContext,useProductContext};