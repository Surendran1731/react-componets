import React from 'react'
import { Navigation } from './components/Navigation'
import { Icons } from './components/Icons';
import { Masthead } from './components/Masthead';
import { ImageShowcases } from './components/ImageShowcases';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

let icons = [
  {
    style: "bi-window m-auto text-primary",
    name: "Fully Responsive",
    summary: "This theme will look great on any device, no matter the size!"
  },
  {
    style: "bi-layers m-auto text-primary",
    name: "Bootstrap 5 Ready",
    summary: "This theme will look great on any device, no matter the size!"
  },
  {
    style: "bi-terminal m-auto text-primary",
    name: "Easy to Use",
    summary: "Ready to use with your own content, or customize the source files!"
  }
]

let showcase = [
  {
    src: "public/img/bg-showcase-1.jpg",
    name: "Fully Responsive Design",
    para: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    foo: true
  },
  {
    src: "public/img/bg-showcase-2.jpg",
    name: "Updated For Bootstrap 5",
    para: "Newly improved, and full of great utility classNameNamees, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
    foo: false
  },
  {
    src: "public/img/bg-showcase-3.jpg",
    name: "Easy to Use & Customize",
    para: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    foo: true
  }
]
// console.log(showcase);

let test = [
  {
    src: "public/img/girl.jpg",
    name2: "Margaret E.",
    content: "This is fantastic! Thanks so much guys!"
  },
  {
    src: "public/img/testimonials-2.jpg",
    name2: "Fred S.",
    content: "Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
  },
  {
    src: "public/img/testimonials-3.jpg",
    name2: "Sarah W.",
    content: "Thanks so much for making these free resources available to us!"
  }
]


let foot = [
  {
    name: "About",
  },
  {
    name: "Contact",

  },
  {
    name: "Terms of Use",
  },
  {
    name: "Privacy Policy",
  },
]


function App() {
  let item = icons;
  let blog = showcase;
  let images = test;
  let footer = foot;
  // console.log(footer);
  return <>

    <Navigation />

    <header className="masthead">
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="text-center text-white">
              <h1 className="mb-5">Generate more leads with a professional landing page!</h1>
              <Masthead />
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className="features-icons bg-light text-center">
      <div className="container">
        <div className="row">
          {
            item.map((pd, i) => (
              <Icons items={pd} key={i} />
            ))
          }
        </div>
      </div>
    </section>

    <section className="showcase">
      <div className="container-fluid p-0">

        {
          blog.map((value, i) => (
            <ImageShowcases images={value} key={i} />
          ))
        }
      </div>

    </section>

    <section className="testimonials text-center bg-light">
      <div className="container">
        <h2 className="mb-5">What people are saying...</h2>
        <div className="row">
          {
            images.map((foo, i) => (
              <Testimonials contact={foo} key={i} />
            ))
          }
        </div>
      </div>
    </section>
    <section className="call-to-action text-white text-center" id="signup">
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <h2 className="mb-4">Ready to get started? Sign up now!</h2>
            <Masthead />
          </div>
        </div>
      </div>
    </section>

    <footer class="footer bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 h-100 text-center text-lg-start my-auto">
            {
              foot.map((val, i) => (
                <Footer details={val} key={i} />
              ))
            }
            <p class="text-muted small mb-4 mb-lg-0">&copy; Your Website 2023. All Rights Reserved.</p>
          </div>
          <div class="col-lg-6 h-100 text-center text-lg-end my-auto">
            <ul class="list-inline mb-0">
              <li class="list-inline-item me-4">
                <a href="#!"><i class="bi-facebook fs-3"></i></a>
              </li>
              <li class="list-inline-item me-4">
                <a href="#!"><i class="bi-twitter fs-3"></i></a>
              </li>
              <li class="list-inline-item">
                <a href="#!"><i class="bi-instagram fs-3"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>


  </>
}


export default App