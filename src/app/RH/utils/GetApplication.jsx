async function FetchApplication() {
    try {
      const response = await fetch('/api/GetApplication'); // Adjust URL as needed
      const data = await response.json();
      return Array.isArray(data?.data) ? data.data : []; // Ensure it's an array
    } catch (error) {
      console.error('Error fetching applications:', error);
      return [];
    }
  }
  
  export default FetchApplication;
  