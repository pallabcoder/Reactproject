import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState()

    // fetching all products from api 
    const fetchAllProducts = async () => {
        try {
            const res = await axios.get('https://fakestoreapi.in/api/products?limit=150')
            console.log(res);
            const productsData = res.data.products
            setData(productsData)

        } catch (error) {
            console.log(error);
        }
    }
      const getUniqueCategory = (data, Property)=>{
            let newVAl = data?.map((curElem)=>{
                return curElem[Property]
            })
            newVAl = ["All",... new Set(newVAl)]
            return newVAl
        }
        
        const CategoryOnlyData = getUniqueCategory(data, "category")
        const brandOnlyData = getUniqueCategory(data, "brand")
    return <DataContext.Provider value={{ data, setData, fetchAllProducts, CategoryOnlyData, brandOnlyData }}>
        {children}

    </DataContext.Provider>
}

export const getData = ()=> useContext(DataContext)

