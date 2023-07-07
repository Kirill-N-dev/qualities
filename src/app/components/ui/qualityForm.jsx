import React, { useContext } from 'react'
import useForm from "../../hooks/useForm";
import SelectField from "../common/form/selectField";
import TextField from "../common/form/textField";
import colors from "../../constants/colors.json"
import { QualitiesContext } from '../../App';

// Макс, смотри тут. Ниже автор не передал дату, но тогда почему его код работает?
// Попробуй её удалить и доступа к качествам в моём коде не будет.
/*
https://lk.result.school/pl/teach/control/lesson/view?id=258409341
таймкод 6:22-6:26
*/
const QualityForm = ({data, onSubmit}) => {

    const {
        form, handeleSubmit, handleChange 
    } = useForm(data, onSubmit);

// Кусок кода по контексту
const data2 = useContext(QualitiesContext);

    return (
        <form onSubmit={handeleSubmit}>
            <TextField
                label='Наименование'
                name='name'
                onChange={handleChange}
                value={form.name || ""}
            />
            <SelectField
                label='Цвет'
                name='color'
                options={colors}
                onChange={handleChange}
                value={form.color || "form is undefined"}
            />
            <button className='btn btn-primary'>Submit</button>
        </form>
    );

}

export default QualityForm;