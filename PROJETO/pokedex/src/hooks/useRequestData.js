import axios from "axios";
import {useState, useEffect} from "react";

const useRequestData = (url, initialState) => {
	const [data, setData] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false)


	useEffect(() => {
        setIsLoading(true)
        axios
        .get(url)
        .then((res) => {
            setData(res.data.results);
            setIsLoading(false)
        })
        .catch((err) => {
            console.log(err);
            setIsLoading(false)
            alert("Ocorreu um erro, tente novamente");
        });

    }, [url]);

        return [data, isLoading];

};

export default useRequestData; 
