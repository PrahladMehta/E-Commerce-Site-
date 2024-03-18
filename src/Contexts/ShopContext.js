import React ,{createContext} from "react";
import all_product from "../Components/Assests/all_product";


export const ShopContext=createContext();

export default  function ShopContextProvider({children}){


     const contextValue={all_product}
      return <ShopContext.Provider value={contextValue}>
            {
                  children
            }
      </ShopContext.Provider>

}