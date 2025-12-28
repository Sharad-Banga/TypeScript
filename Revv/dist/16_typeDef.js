import axios, {} from "axios";
const fetchData = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log(res);
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error);
        }
    }
};
//# sourceMappingURL=16_typeDef.js.map