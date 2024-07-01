import axios from "axios";
import { useAtom } from "jotai";
import { responseAtom } from "../constant/atom";

export async function PostDream(name, content) {
	const [response, setResponse] = useAtom(responseAtom);
	try {
		const res = await axios.post("http://localhost:8080/gpt", {
			name: name,
			content: content,
		});
		setResponse(res.data);
	} catch (e) {
		console.log(e);
	}
}
