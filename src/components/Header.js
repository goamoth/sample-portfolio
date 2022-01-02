import '../styles/Header.scss';

const Header = () => {
   return (
      <nav className="navbar site-navbar navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid">
            <a className="navbar-brand" href="index.js">
               <span className="brand">GO</span> George Owira
            </a>

            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
               <ul class="navbar-nav">
                  <li class="nav-item">
                     <button class="btn nav-link" aria-current="page"> Services </button>
                  </li>
                  <li class="nav-item">
                     <button class="btn nav-link"> Projects </button>
                  </li>
                  <li class="nav-item">
                     <button class="btn nav-link"> About </button>
                  </li>
                  <li class="nav-item">
                     <button class="btn nav-link"> Blog </button>
                  </li>
                  <li class="nav-item">
                     <button class="btn nav-link"> Contact </button>
                  </li>
               </ul>
            </div>

         </div>
      </nav>
   );
};

export default Header;