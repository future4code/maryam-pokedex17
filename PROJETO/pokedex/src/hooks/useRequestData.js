import axios from "axios";
import {useState, useEffect} from "react";
import {BaseUrl} from "../constants/BaseUrl";

const useRequestData = (initialState) => {
	const [data, setData] = useState(initialState);

	useEffect(() => {
        axios
        .get(`${BaseUrl}/`)
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.log(err);
        });

    return data;

    });
};

export default useRequestData; 