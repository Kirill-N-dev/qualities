import React from "react";
import QualityForm from "../components/ui/qualityForm";
import qualityService from "../services/qualityService";

// Тут надо поработать

const AddQualityPage = () => {

    const handleSubmit = (data)=>{
        /* qualityService.updateQuality(data); */
        console.log(data);
    }

    return (
        <>
            <h1>Add Quality</h1>
            <QualityForm onSubmit={handleSubmit}/>
        </>
    );
};

export default AddQualityPage;
