import axios from "axios";

export async function PostDream(name, content) {
	try {
		const res = await axios.post("http://localhost:8080/gpt", {
			name: name,
			content: content,
		});
		console.log(res.data);
		return res.data;
	} catch (e) {
		console.log(e);
	}
}

export async function GetDream(id) {
	try {
		const res = await axios.get(`http://localhost:8080/get/${id}`);
		console.log(res.data);
		return res.data;
	} catch (e) {
		console.log(e);
	}
}

export async function GetDreamList() {
	try {
		const res = await axios.get("http://localhost:8080/list");
		console.log(res.data);
		return res.data;
	} catch (e) {
		console.log(e);
	}
}
