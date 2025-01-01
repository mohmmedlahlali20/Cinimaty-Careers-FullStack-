import path from "../../utils/path";

const onSubmit = async (formData) => {
    try {
        const response = await path.post("/api/Application", formData);
        if(response.status === 201){
           
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "application was success",
                    showConfirmButton: false,
                    timer: 1500
                  });
            
        }
    
    } catch (error) {
        console.error("Error during submission:", error);
        alert(
            error.response?.data?.message || "There was an error submitting your application."
        );
    }
};

export default onSubmit;