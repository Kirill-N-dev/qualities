import { useContext } from "react";

// Кусок кода по контексту
const QualitiesContext = React.createContext();

export const useQualities = () =>{
return useContext(QualitiesContext);    
}

const qualities = [{fff:555}];

export const QualitiesProvider = ({children}) =>{
return(
    <QualitiesContext.Provider value={qualities}>
{children}
        </QualitiesContext.Provider>
)
}