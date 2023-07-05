import { PropsWithChildren, createContext, useState } from 'react'

interface iGlobal{
    show:boolean,
    SetShow:React.Dispatch<React.SetStateAction<boolean>>
}

export const GlobalContext = createContext({} as iGlobal)

export const GlobalProvider: React.FC<PropsWithChildren> = ({
    children }) => {

    const [show,SetShow] = useState<boolean>(false)

    return (
        <GlobalContext.Provider value={{
           show,
           SetShow

        }} >{children}</GlobalContext.Provider>
    )
}
