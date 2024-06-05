import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrending } from '../api/getTrending';
import { getMovies } from '../api/getMovies';
import Card from '../components/Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cover  from '../components/Cover';
import getToken from '../api/getTokenU';
import '../styles/main.css';
import GlitchingButtons from '../components/glitchingButtons';
export default function Home() {
  const [userData, setUserData] = useState(null); 
  const [movies, setMovies] = useState([]);
  const [moviesP, setMoviesP] = useState([]);

  const [loading, setLoading] = useState(true);
  const fetchMovies = async () => {
    try {
      const data = await getTrending();
      const data1 = await getMovies();
      setMoviesP(data1);
      setMovies(data);
      console.log('Movie Dawwwta:', data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching Movies:', error);
    }
    
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getToken();
        setUserData(user); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); 
    fetchMovies();
    
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Transition speed in milliseconds
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
  };
    return (
      <div >
      <head>
      <title>Dopetrope by HTML5 UP</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      <link rel="stylesheet" href="assets/css/main.css" />
    </head>
    <body class="homepage is-preload">
   
      <div id="page-wrapper">
  
          <section id="header">
          <section id="banner">
                <header>
                <Slider {...settings}>
                {loading ? (
                    <p>Loading...</p>
                  ) : (
                    movies.results.slice(0, 5).map(movie => ( // Use slice(0, 20) to get only the first 20 movies
                    
                <div>
                              <Card Type={"movie"} movie={movie} />

                  </div>
                
                    ))
                  )}
                  
                </Slider>
  
             
  
             
                 
                </header>
              </section>
         
              <section id="intro" class="container">
                <div class="row">
                  <div class="col-4 col-12-medium">
                    <section class="first">
                      <i class="icon solid featured fa-cog"></i>
                      <header>
                        <h2>Popular Movies</h2>
                      </header>
                      <p>Check out all the new popular movies</p>
                      <Link to="/popularMovies">Popular movies</Link>
                    </section>
                  </div>
                  <div class="col-4 col-12-medium">
                    <section class="middle">
                      <i class="icon solid featured alt fa-star"></i>
                      <header>
                        <h2>Popular series</h2>
                      </header>
                      <p>Check out all the new popular series</p>
                      <Link to="/popularSerie">Popular series</Link>
                    </section>
                  </div>
                  <div class="col-4 col-12-medium">
                    <section class="last">
                      <i class="icon solid featured alt2 fa-search"></i>
                      <header>
                        <h2>Search movie</h2>
                      </header>
                      <p>Check information about a film or a serie</p>
                      <Link to="/search">Search</Link>
                    </section>
                  </div>
                </div>
                <footer>
               
                </footer>
              </section>
  
          </section>
          <section id="main">
            <div class="container">
              <div class="row">
                <div class="col-12">
  
                    <section>
                      <header class="major">
                        <h2>Popular movies now</h2>
                      </header>
                      <div class="row">
                      {loading ? (
                          <p>Loading...</p>
                        ) : (
                          moviesP.results.slice(0, 6).map(movie => ( // Use slice(0, 20) to get only the first 20 movies
                          
                                  
                          

                                    <div class="col-4 col-6-medium col-12-small">
                          <section class="box">
                            <a href="#" class="image featured"><Cover Type="movie" Id={movie.id} number={1} /> </a>
                            <header>
                              <h3>{movie.title}</h3>
                            </header>
                            <p>{movie.overview}</p>
                          
                          </section>
                        </div>

                      
                          ))
                        )}
                       
                      </div>
                    </section>
  
                </div>
                <div class="col-12">
  
                    <section>
                      <header class="major">
                        <h2>The Blog</h2>
                      </header>
                      <div class="row">
                        <div class="col-6 col-12-small">
                          <section class="box">
                            <a href="#" class="image featured"><img src="images/pic08.jpg" alt="" /></a>
                            <header>
                              <h3>Magna tempus consequat</h3>
                              <p>Posted 45 minutes ago</p>
                            </header>
                            <p>Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet.</p>
                            <footer>
                              <ul class="actions">
                                <li><a href="#" class="button icon solid fa-file-alt">Continue Reading</a></li>
                                <li><a href="#" class="button alt icon solid fa-comment">33 comments</a></li>
                              </ul>
                            </footer>
                          </section>
                        </div>
                        <div class="col-6 col-12-small">
                          <section class="box">
                            <a href="#" class="image featured"><img src="images/pic09.jpg" alt="" /></a>
                            <header>
                              <h3>Aptent veroeros aliquam</h3>
                              <p>Posted 45 minutes ago</p>
                            </header>
                            <p>Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet.</p>
                            <footer>
                              <ul class="actions">
                                <li><a href="#" class="button icon solid fa-file-alt">Continue Reading</a></li>
                                <li><a href="#" class="button alt icon solid fa-comment">33 comments</a></li>
                              </ul>
                            </footer>
                          </section>
                        </div>
                      </div>
                    </section>
  
                </div>
              </div>
            </div>
          </section>
  
          <section id="footer">
            <div class="container">
              <div class="row">
                <div class="col-8 col-12-medium">
                  <section>
                    <header>
                      <h2>Blandit nisl adipiscing</h2>
                    </header>
                    <ul class="dates">
                      <li>
                        <span class="date">Jan <strong>27</strong></span>
                        <h3><a href="#">Lorem dolor sit amet veroeros</a></h3>
                        <p>Ipsum dolor sit amet veroeros consequat blandit ipsum phasellus lorem consequat etiam.</p>
                      </li>
                      <li>
                        <span class="date">Jan <strong>23</strong></span>
                        <h3><a href="#">Ipsum sed blandit nisl consequat</a></h3>
                        <p>Blandit phasellus lorem ipsum dolor tempor sapien tortor hendrerit adipiscing feugiat lorem.</p>
                      </li>
                      <li>
                        <span class="date">Jan <strong>15</strong></span>
                        <h3><a href="#">Magna tempus lorem feugiat</a></h3>
                        <p>Dolore consequat sed phasellus lorem sed etiam nullam dolor etiam sed amet sit consequat.</p>
                      </li>
                      <li>
                        <span class="date">Jan <strong>12</strong></span>
                        <h3><a href="#">Dolore tempus ipsum feugiat nulla</a></h3>
                        <p>Feugiat lorem dolor sed nullam tempus lorem ipsum dolor sit amet nullam consequat.</p>
                      </li>
                      <li>
                        <span class="date">Jan <strong>10</strong></span>
                        <h3><a href="#">Blandit tempus aliquam?</a></h3>
                        <p>Feugiat sed tempus blandit tempus adipiscing nisl lorem ipsum dolor sit amet dolore.</p>
                      </li>
                    </ul>
                  </section>
                </div>
                <div class="col-4 col-12-medium">
                  <section>
                    <header>
                      <h2>What's this all about?</h2>
                    </header>
                    <a href="#" class="image featured"><img src="images/pic10.jpg" alt="" /></a>
                    <p>
                      This is <strong>Dopetrope</strong> a free, fully responsive HTML5 site template by
                      <a href="http://twitter.com/ajlkn">AJ</a> for <a href="http://html5up.net/">HTML5 UP</a> It's released for free under
                      the <a href="http://html5up.net/license/">Creative Commons Attribution</a> license so feel free to use it for any personal or commercial project &ndash; just don't forget to credit us!
                    </p>
                    <footer>
                      <ul class="actions">
                        <li><a href="#" class="button">Find out more</a></li>
                      </ul>
                    </footer>
                  </section>
                </div>
                <div class="col-4 col-6-medium col-12-small">
                  <section>
                    <header>
                      <h2>Tempus consequat</h2>
                    </header>
                    <ul class="divided">
                      <li><a href="#">Lorem ipsum dolor sit amet sit veroeros</a></li>
                      <li><a href="#">Sed et blandit consequat sed tlorem blandit</a></li>
                      <li><a href="#">Adipiscing feugiat phasellus sed tempus</a></li>
                      <li><a href="#">Hendrerit tortor vitae mattis tempor sapien</a></li>
                      <li><a href="#">Sem feugiat sapien id suscipit magna felis nec</a></li>
                      <li><a href="#">Elit class aptent taciti sociosqu ad litora</a></li>
                    </ul>
                  </section>
                </div>
                <div class="col-4 col-6-medium col-12-small">
                  <section>
                    <header>
                      <h2>Ipsum et phasellus</h2>
                    </header>
                    <ul class="divided">
                      <li><a href="#">Lorem ipsum dolor sit amet sit veroeros</a></li>
                      <li><a href="#">Sed et blandit consequat sed tlorem blandit</a></li>
                      <li><a href="#">Adipiscing feugiat phasellus sed tempus</a></li>
                      <li><a href="#">Hendrerit tortor vitae mattis tempor sapien</a></li>
                      <li><a href="#">Sem feugiat sapien id suscipit magna felis nec</a></li>
                      <li><a href="#">Elit class aptent taciti sociosqu ad litora</a></li>
                    </ul>
                  </section>
                </div>
                <div class="col-4 col-12-medium">
                  <section>
                    <header>
                      <h2>Vitae tempor lorem</h2>
                    </header>
                    <ul class="social">
                      <li><a class="icon brands fa-facebook-f" href="#"><span class="label">Facebook</span></a></li>
                      <li><a class="icon brands fa-twitter" href="#"><span class="label">Twitter</span></a></li>
                      <li><a class="icon brands fa-dribbble" href="#"><span class="label">Dribbble</span></a></li>
                      <li><a class="icon brands fa-tumblr" href="#"><span class="label">Tumblr</span></a></li>
                      <li><a class="icon brands fa-linkedin-in" href="#"><span class="label">LinkedIn</span></a></li>
                    </ul>
                    <ul class="contact">
                      <li>
                        <h3>Address</h3>
                        <p>
                          Untitled Incorporated<br />
                          1234 Somewhere Road Suite<br />
                          Nashville, TN 00000-0000
                        </p>
                      </li>
                      <li>
                        <h3>Mail</h3>
                        <p><a href="#">someone@untitled.tld</a></p>
                      </li>
                      <li>
                        <h3>Phone</h3>
                        <p>(800) 000-0000</p>
                      </li>
                    </ul>
                  </section>
                </div>
                <div class="col-12">
  
                    <div id="copyright">
                      <ul class="links">
                        <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                      </ul>
                    </div>
  
                </div>
              </div>
            </div>
          </section>
  
      </div>
  
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/jquery.dropotron.min.js"></script>
        <script src="assets/js/browser.min.js"></script>
        <script src="assets/js/breakpoints.min.js"></script>
        <script src="assets/js/util.js"></script>
        <script src="assets/js/main.js"></script>
  
    </body>
    
    <GlitchingButtons/>
    </div>
  
  );
}