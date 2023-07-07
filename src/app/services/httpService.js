import axios from "axios";
import * as Sentry from "@sentry/react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import config from "../config.json"

// ниже код с добавкой метода сентри и тоаст библиотеки

axios.defaults.baseURL=config.apiEndpoint;
/* console.log(axios.defaults.baseURL); */

axios.interceptors.response.use((w)=>{console.log("всё ок"); return w}, (error)=>{

    console.log("сработает первее");

    const expectedErrors = error.response&&error.response.status>=400&&error.response.status<500;

    if(!expectedErrors) {
      Sentry.captureException(error);
      toast.error("Unexpected errors");
                        }

    return Promise.reject(error)

   });

const httpService = {
get:axios.get,
post:axios.post,
put:axios.put,
delete:axios.delete,
}

   export default httpService;