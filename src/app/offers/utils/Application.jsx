import path from "../../utils/path";

const onSubmit = async (formData) => {
    try {
        const response = await path.post("/api/Application", formData);
        alert("Application submitted successfully!");
    } catch (error) {
        console.error("Error during submission:", error);
        alert(
            error.response?.data?.message || "There was an error submitting your application."
        );
    }
};

export default onSubmit;