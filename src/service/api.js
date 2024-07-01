import axios from "axios";

export async function PostDream(name, content) {
	try {
		const response = await axios.post("http://localhost:8080/gpt", {
			name: name,
			content: content,
		});
		console.log(response.data);
		return response.data;
	} catch (e) {
		console.log(e);
	}
}
