import React,{ createContext,useState } from "react";

export const adddata = createContext("")
export const updatedata = createContext("")
export const deldata = createContext("")

const ContextProvider = ({ children }) => {

    const [udata,setUdata] = useState("")
    const [updateData,setUpdateData] = useState("")
    const [delData,setDelData] = useState("")

    return (
        <adddata.Provider value={{ udata, setUdata }}>
            <updatedata.Provider value={{ updateData, setUpdateData}}>
                <deldata.Provider value={{ delData,setDelData }}>
                    {children}
                </deldata.Provider>
            </updatedata.Provider>
        </adddata.Provider>
    )
}

export default ContextProvider