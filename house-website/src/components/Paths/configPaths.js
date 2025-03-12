const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL 

const configPath = {
    BACKEND_BASE_URL,
    ENDPOINTS:{
        BOOKING:"/bookings/create"
    }
}
export default configPath;
