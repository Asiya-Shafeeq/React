import  React,{ createContext } from "react";
import product from "../Assets/products_data";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

    const contextValue = {product};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;