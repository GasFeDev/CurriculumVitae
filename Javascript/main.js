(function () {
  const showinfo = document.querySelector("#hide");

  let maintemplate = ``;

  maintemplate += `
  
      <div class="loader">
          <span style="--i:1;"></span>
          <span style="--i:2;"></span>
          <span style="--i:3;"></span>
          <span style="--i:4;"></span>
          <span style="--i:5;"></span>
          <span style="--i:6;"></span>
          <span style="--i:7;"></span>
          <span style="--i:8;"></span>
          <span style="--i:9;"></span>
          <span style="--i:10;"></span>
          <span style="--i:11;"></span>
          <span style="--i:12;"></span>
          <span style="--i:13;"></span>
          <span style="--i:14;"></span>
          <span style="--i:15;"></span>
          <span style="--i:16;"></span>
          <span style="--i:17;"></span>
          <span style="--i:18;"></span>
          <span style="--i:19;"></span>
          <span style="--i:20;"></span>
      </div>
  
      <div class="scroll-up">
          <i class="uil uil-sort"></i>
      </div>
  
      <div class="wrapper">
  
          <input type="checkbox" id="menu-toggle">
          <header>
              <h3>MI CV <i class="uil uil-user"></i></h3>
              <div class="main-menu">
                  <ul>
                      <li><a href="#beginning">Inicio</a></li>
                      <li><a href="#myskills">Habilidades</a></li>
                      <li><a href="#myportfolio">Portafolio</a></li>
                      <li><a href="#myexperience">Experiencia</a></li>
                      <li><a href="#myservices">Servicios</a></li>
                      <li><a id="tocontact" href="#contactme"><i class="uil uil-envelope-exclamation"></i> Contacto</a></li>
                  </ul>
              </div>
  
              <label for="menu-toggle">
                  <i class="uil uil-bars"></i>
              </label>
          </header>
  
          <div class="me">
              <div>
                  <h1>¡Hola! <br> Mi nombre es Federico <br> Soy Ing. Industrial</h1>
                  <a id="beginning" href="#aboutmyself"><i class="uil uil-angle-double-right"></i> Comencemos</a>
              </div>
              <img src="Img/yo.jpg" alt="">			
          </div>
  
      </div>
  
      <div class="page-divide">
          <div class="divide"></div>
          <div class="divide-line left"></div>
      </div>
  
      <div class="wrapper">
          
          <section>
              <div class="section-title" id="aboutmyself">
                  <h1 >Acerca de Mi</h1>
                  <div class="underline"></div>
              </div>
  
              <div class="aboutme-wrapper">
                  <div class="aboutme-grap left"></div>
                  <div class="aboutme-grap right"></div>
                  <div class="aboutme">
                      <p>Un año de constante aprendizaje en el mundo del desarrollo web, apasionado y con ganas de perseverar para en un futuro cercano poder subsistir exclusivamente de esto.</p>
                  </div>
              </div>			
          </section>
  
      </div>
  
      <div class="page-divide">
          <div class="divide"></div>
          <div class="divide-line right"></div>
      </div>
  
      <div class="wrapper">
          
          <section>
              <div class="section-title" id="myskills">
                  <h1>Habilidades</h1>
                  <div class="underline"></div>
              </div>
              <div class="skills-wrapper">
                  <div class="skill">
                      <div id="skillcircle-1" data-percent="70"></div>
                      <p>HTML <i class="uil uil-html5"></i></p>					
                  </div>
                  <div class="skill">
                      <div id="skillcircle-2" data-percent="60"></div>
                      <p>CSS <i class="uil uil-css3-simple"></i></p>					
                  </div>
                  <div class="skill">
                      <div id="skillcircle-3" data-percent="65"></div>
                      <p><i class="uil uil-java-script"></i> JavaScript </p>					
                  </div>
                  <div class="skill">
                      <div id="skillcircle-4" data-percent="65"></div>
                      <p><i class="uil uil-arrow"></i> MoongoDB/AWS-Dynamodb </p>					
                  </div>
              </div>
          </section>
  
      </div>
  
      <div class="page-divide">
          <div class="divide"></div>
          <div class="divide-line left"></div>
      </div>
  
      <div class="wrapper">
          
          <section>
              <div class="section-title" id="myportfolio">
                  <h1>Portafolio</h1>
                  <div class="underline"></div>
                  <small>Algunos proyectos realizados.</small>
                  <h2>Personales y aplicados a Blockchain</h2>
                  <small>ProyectosWeb-SmartContract.</small>
              </div>
  
  
              <div class="portfolio-wrapper">
                  <div class="bg-grap left"></div>
                  <div class="bg-grap right"></div>
                  <div class="portfolio">
                      <h3><i class="uil uil-selfie"></i></h3>
                      <h3>DeploySmartContract</h3>
  
                      <div class="image1-project1"></div>
                  </div>
  
                  <div class="portfolio">
                      <h3>Enlace a Web abajo</h3>
                      <small id="webproject"><a href="https://gasfedev-frontpanel.vercel.app/" target="_blank"><i class="uil uil-location-arrow"></i><i class="uil uil-globe"></i></a></small>
  
                      <div class="image2-project1"></div>
                  </div>
  
                  <div class="portfolio">
                      <h3><i class="uil uil-google"></i></h3>
                      <h3>Diversos proyectos web</h3>
  
                      <div class="image3-project1"></div>
                  </div>
              </div>
          </section>
  
      </div>
  
      <div class="page-divide">
          <div class="divide"></div>
          <div class="divide-line right"></div>
      </div>
  
      <div class="new-wrapper">
          
          <section>
              <div class="section-title" id="myexperience">
                  <h1>Experiencia Profesional</h1>
              </div>
  
              <div class="experience-wrapper">

                  <li class="item" id="thubier">
                      <a href="#thubier" class="btn">Tubhier S.A</a>
                      <div class="experience">
                          <p>Inspector de Calidad</p>
                          <p><i class="uil uil-calendar-alt"></i> 2017-2019</p>
                          <p>Aseguramiento de calidad en caños de insdustria petrolera</p>
                      </div>
                  </li>
                  <li class="item" id="sectorprivado">
                      <a href="#sectorprivado" class="btn">Sector Privado</a>
                      <div class="experience">
                          <p>Ingeniero Residente</p>
                          <p><i class="uil uil-calendar-alt"></i> 2018-Actualidad</p>
                          <p>Representante Técnico en ejecución de obras civiles</p>
                      </div>
                  </li>
  
                  <li class="item" id="freelancer">
                      <a href="#freelancer" class="btn">Freelancer</a>
                      <div class="experience">
                          <p>Desarrollador web</p>
                          <p><i class="uil uil-calendar-alt"></i> 2022-Actualidad</p>
                      </div>
                  </li>
              </div>			
          </section>
  
      </div>
  
      <div class="page-divide">
          <div class="divide"></div>
          <div class="divide-line left"></div>
      </div>
  
      <div class="wrapper">
          
          <section>
              <div class="section-title" id="myservices">
                  <h1>Servicios</h1>
                  <div class="underline"></div>
              </div>
  
              <div class="service-grid">
                  <div class="service">
                      <h3>Desarrollo Web</h3>
                      <span><i class="uil uil-arrow"></i> <i class="uil uil-html5"></i> <i class="uil uil-css3-simple"></i>
                      <i class="uil uil-java-script"></i></span>
                      <p>Enfocado en dar una agradable experiencia de usuario, e interfaz de usuario intuitiva.</p>
                  </div>
  
                  <div class="service">
                      <h3>Construcción de obra</h3>
                      <span><i class="uil uil-constructor"></i> <i class="uil uil-jackhammer"></i></span>
                      <p>Servicio de asesoramiento, proyecto y construcción de obra.</p>
                  </div>
  
              </div>			
          </section>
  
      </div>
  
      <footer>
          <div class="wrapper">
  
              <div class="footer-grid" id="contactme">
                  <div class="links">
                      <h3>Contacto</h3>
                      <ul>
                          <li><a id="callme" href="tel:+542604225858"><i class="uil uil-outgoing-call"></i> Llámame</a></li>
                          <li><a id="emailme" href="mailto:ingfedericoabeldano@gmail.com"><i class="uil uil-envelope-edit"></i> E-mail</a></li>						
                      </ul>
                      <br>
                      <a href="sms:+542604225858" class="btn-sms"><i class="uil uil-comment-alt-lines"></i> Envíame un SMS</a>
                  </div>
  
                  <div class="links">
                      <h3>Accesos Directos</h3>
                      <ul>
                          <li><a href="#beginning">Inicio</a></li>
                          <li><a href="#myskills">Habilidades</a></li>
                          <li><a href="#myportfolio">Portafolio</a></li>
                          <li><a href="#myservices">Servicios</a></li>
                      </ul>
                  </div>
              </div>
  
          </div>
      </footer>	
  
      `;

  showinfo.innerHTML = maintemplate;

  //WEB Animation reload

  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
  });
})();
