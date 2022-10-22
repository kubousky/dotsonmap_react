import Layout from '../components/Layout';
import Map from './Map';
// import MapboxMap from './Mapbox';
import { useAppSelector } from '../hooks';
import { logout, selectUser } from '../features/auth';


const DashboardPage = () => {
  const { user, isAuthenticated } = useAppSelector(selectUser)

  return (
    
    <Layout>
        <Map />
        {/* <MapboxMap /> */}
    </Layout>
  )
}

export default DashboardPage