import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
/* import config from "../config.json" */
import qualityService from "../services/qualityService";
import httpService from "../services/httpService";
import {toast} from "react-toastify";
import QualityForm from "../components/ui/qualityForm";

const EditQualityPage = () => {

    const [quality, setQuality] = useState(null);
    /* const [errors, setErrors] = useState(null); */

        const id = useParams().id;

        useEffect(async () => {
           getQuality(id).then(data=> {setQuality(data); console.log(data)});    
        }, [])

    const qualityEndpoint =`quality/${id}`;

    const updateQuality = async (content) => {
        /* const data = await qualityService.update(id,content); */
       /*  console.log(data); */
        try{
            const {data} = await httpService.put(qualityEndpoint,content);
            return data}
        catch(error){
            const {message} = error.response.data;
            toast.error(message);
                           }
                        }

        const getQuality = async (id)=>{           
           
            try {
                const data = await qualityService.get(id);
                return data.content;
            } 
            
            catch (error) {
                const {message} = error.response.data;
            toast.error(message);
            }
        }                                

    
           const handleSubmit = (data) => {
       /*  e.preventDefault(); */ // НЕ ПАШЕТ ИЗ-ЗА АСИНХРОННОСТИ
       updateQuality(data);     
            };   

  
    
    return (
        <><h1>Edit Quality Page</h1>
            {quality?<QualityForm data={quality} onSubmit={handleSubmit}/>:"loading..."}
        </>
    );
};

export default EditQualityPage;
