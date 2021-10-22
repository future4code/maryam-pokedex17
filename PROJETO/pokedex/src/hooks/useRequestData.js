import axios from "axios";
import {useState, useEffect} from "react";

const useRequestData = (url, initialState) => {
	const [data, setData] = useState(initialState);
    


	useEffect(() => {
        
        axios
        .get(url)
        .then((res) => {
            setData(res.data.results);
            
        })
        .catch((err) => {
            console.log(err);
            alert("Ocorreu um erro, tente novamente");
        });

    }, [url]);

        return data;

};

export default useRequestData; 
