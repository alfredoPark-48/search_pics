import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID 4Us5kg1ESiw_k-7A5ddqJLdLbIdHQZkOZZqM-StYcXw",
	},
});
