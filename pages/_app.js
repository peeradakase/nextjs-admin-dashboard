import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import SideBar from "../components/SideBar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex">
    <SideBar />
      <div className='flex-grow-1'>
      <Component {...pageProps} />
    </div>

  </div>
  )
}

export default MyApp
