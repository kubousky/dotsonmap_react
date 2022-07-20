import Layout from '../components/Layout';
import { useSelector} from 'react-redux';
import { useAppSelector } from '../hooks';
import { logout, selectUser } from '../features/auth';


const DashboardPage = () => {
  const { user, isAuthenticated } = useAppSelector(selectUser)

  return (
    
    <Layout>
      <div>DashboardPage</div>
    </Layout>
  )
}

export default DashboardPage