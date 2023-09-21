import axios from "axios";

export const api = axios.create({
	baseURL: "https://github.com/JISG92/Petshop/tree/main/db.json",
});

export const buscar = async (url, setData) => {
	const respuesta = await api.get(url);
	setData(respuesta.data);
};
