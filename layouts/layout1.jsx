import SideBar from '../components/SideBar';

const LayOut1 = ({ children }) => {
  return <div className="flex">
    <SideBar />
    <div className='flex-grow-1 m-l-15 m-r-15 m-t-30'>
      {children}
    </div>

  </div>
};
export default LayOut1;
