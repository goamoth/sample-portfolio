import '../styles/Welcome.scss';

const Welcome = () => {
   return (
      <section className="row welcome">
         <div className="col-12">
            {/*<p className="greetings">Hey there!</p>*/}
            <h1 className="names">Hi, I'm George.</h1>
            <h2 className="career">I'm a Senior Software Engineer specialising in <span className="js">JavaScript</span>.</h2>
            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br/> 
            labore et dolore magna aliqua.</p>

            <div className="social">
               <h3>Let's Connect</h3>
               <a className="social-link github" href="https://github.com/goamoth"> <i class="fab fa-github fa-2x"></i> </a>
               <a className="social-link linkedin" href="https://linkedin.com/george-owira-12bb734a"> <i class="fab fa-linkedin-in fa-2x"></i> </a>
               <a className="social-link twitter" href="https://twitter.com/goe_en"> <i class="fab fa-twitter fa-2x"></i> </a>
            </div>
         </div>
      </section>
   );
};

export default Welcome;