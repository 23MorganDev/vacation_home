const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL || "http://localhost:3000/backend";

const configPath = {
    BACKEND_BASE_URL,
    ENDPOINTS: {
        BOOKING: "/backend/bookings/create"
    }
};
export default configPath;
