

import css from './pages.module.css'
// import Layout from '../components/Layout/Layout.jsx';
import Main from '../components/MainScreen/MainScreen.jsx';
import MainScreen from '../components/MainScreen/MainScreen.jsx';
// import Spline from '@splinetool/react-spline';
export default function HomePage(){
    return <div className={css.homePage}>
      {/* <Layout/> */}
     
      <MainScreen/>
    </div>
}


