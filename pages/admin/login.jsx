import LoginForm from "../../components/LogInForm";
import { apiUrl, requestHeader } from '../../data/constant.js'
import axios from 'axios';
import { useRouter } from 'next/router';

function LogIn() {
  const router = useRouter()
  const onCreateLoginFormSubmit = async (formValue, setErrors) => {
    try {
      await axios.get(`${apiUrl}/api/admin/auth/login`, formValue, requestHeader);
    } catch (error) {
      console.log(error, ':error')
      setErrors(error.response?.data);
    } finally {
      router.push('/admin/dashboard')
    }
  }

  return (
    <div>
      <LoginForm
        onFormSubmit={onCreateLoginFormSubmit}
      />
    </div>
  )
}
LogIn.layout = 'L2';
export default LogIn;
