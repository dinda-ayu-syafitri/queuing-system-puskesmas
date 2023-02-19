import {useAuth} from "../contexts/authContext";
import {Navigate} from 'react-router-dom';
import LoginInput from "./LoginInput";

const ProtectedRoute = ({children}) => {
    if (LoginInput.data) {
        // user is not authenticated
        return <Navigate to="/login" />;
      }
      return <>{children}</>
}

export default ProtectedRoute;