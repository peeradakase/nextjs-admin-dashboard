import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import SideBar from "../components/SideBar";
import Layout1 from '../layouts/layout1';
import Layout2 from '../layouts/layout2';

const  layouts = {
  L1: Layout1,
  L2: Layout2,
}

function MyApp({ Component, pageProps }) {
  const Layout = (layouts[Component.layout] || Layout1) || ((children) => <> {children}</>);
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}

export default MyApp
