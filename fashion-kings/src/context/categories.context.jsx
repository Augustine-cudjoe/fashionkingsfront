
import { SHOP_DATA } from "../shop-data.js";
import { createContext } from "react";
import { Children } from "react";
import { useState } from "react";


export const CategoriesContext =createContext(
    {
     categories:[],
     setCategories:()=>[]
    }
);
 export const CategoriesProvider =({Children})=>{
    const [categories]=useState(SHOP_DATA); 
    const value = {categories};

    return (
        <CategoriesContext.Provider value={value}>{Children}</CategoriesContext.Provider>
    )
 }
