async function FetchApplication() {
    try {
      const response = await fetch('/api/GetApplication'); 
      const data = await response.json();
      return Array.isArray(data?.data) ? data.data : []; 
    } catch (error) {
      console.error('Error fetching applications:', error);
      return [];
    }
  }
  
  export default FetchApplication;
  