import axios from "axios";

export const api = axios.create({
	baseURL: "https://raw.githubusercontent.com/JISG92/Petshop/ac51bd2cc13afc6d196f4ed010afb4bb25bcebca/db.json",
});

export const buscar = async (url, setData) => {
	const respuesta = await api.get(url);
	setData(respuesta.data);
};
