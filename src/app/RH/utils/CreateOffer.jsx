import Swal from "sweetalert2";
import nestApi from "../../utils/pathNest";




const createOffer = async (formData) => {
    try {
        const res = await nestApi.post('/offers', formData)
        if(res.status === 201){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `offers created successfully`,
                showConfirmButton: false,
                timer: 1500
              });
        }
        
    } catch (err) {
        Swal.fire({
            position: "top-end",
            icon: "danger",
            title: `create offers faild :  ${err}`,
            showConfirmButton: false,
            timer: 1500
          });
        
    }

}


export default createOffer;