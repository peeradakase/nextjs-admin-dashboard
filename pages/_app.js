import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import SideBar from "../components/SideBar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex">
    <SideBar />
    <Component {...pageProps} />
  </div>
  )
}

export default MyApp
