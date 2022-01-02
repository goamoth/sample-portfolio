import '../styles/App.scss';

import Header from '../components/Header';
import Welcome from '../sections/Welcome';
import Services from '../sections/Services';

function App() {
   return (
      <>
         <Header />

         <div className="container-fluid">
            <Welcome />
            <Services />
         </div>
      </>
   );
}

export default App;
