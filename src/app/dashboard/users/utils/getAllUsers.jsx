import path from "../../../utils/path";

async function FetchUsers() {
    try {
        const response = await path.get("/api/getAllUsers");
        return response.data;
    } catch (error) {
        console.error("Error during fetching users:", error);
        return [];
    }
    
}

export default FetchUsers;