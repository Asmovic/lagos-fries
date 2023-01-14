import Script from 'next/script'
import { useRef, useEffect } from 'react'
const Home = () => {
  const ref1 = useRef();
  useEffect(()=>{
    
    function loader(){
      ref1.current?.classList.add('fade-out');
    }

    setInterval(loader, 2000);
    
  }, [])
  return (
    <>
<header>
  <a href="#" className="logo"><i className="fas fa-utensils" />lagosFries.</a>
  <nav className="navbar">
    <a className="active" href="#home">home</a>
    <a href="#dishes">dishes</a>
    <a href="#about">about</a>
    <a href="#menu">menu</a>
    <a href="#review">review</a>
    <a href="#order">order</a>
  </nav>
  <div className="icons">
    <i className="fas fa-bars" id="menu-bars" />
    <i className="fas fa-search" id="search-icon" />
    <a href="#" className="fas fa-heart" />
    <a href="#" className="fas fa-shopping-cart" />
  </div>
</header>


{/* header section ends */}

{/* search form */}

<form id="search-form">
  <input type="search" placeholder="search here..." name="sh-box" id="search-box" />
  <label htmlFor="search-box" className="fas fa-search" />
  <i className="fas fa-times" id="close" />
</form>

{/* home section starts  */}


  <section className="home" id="home">
    <div className="swiper-container home-slider">
      <div className="swiper-wrapper wrapper">
        <div className="swiper-slide slide">
          <div className="content">
            <span>our special dish</span>
            <h3>spicy noodles</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
            <a href="#" className="btn">order now</a>
          </div>
          <div className="image">
            <img src="images/home-img-1.png" alt="image" />
          </div>
        </div>
        <div className="swiper-slide slide">
          <div className="content">
            <span>our special dish</span>
            <h3>fried chicken</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
            <a href="#" className="btn">order now</a>
          </div>
          <div className="image">
            <img src="images/home-img-2.png" alt="image" />
          </div>
        </div>
        <div className="swiper-slide slide">
          <div className="content">
            <span>our special dish</span>
            <h3>hot pizza</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
            <a href="#" className="btn">order now</a>
          </div>
          <div className="image">
            <img src="images/home-img-3.png" alt="image" />
          </div>
        </div>
      </div>
      <div className="swiper-pagination" />
    </div>
  </section>
  {/* home section ends */}
  {/* dishes section starts  */}
  <section className="dishes" id="dishes">
    <h3 className="sub-heading"> our dishes </h3>
    <h1 className="heading"> popular dishes </h1>
    <div className="box-container">
      <div className="box">
        <a href="#" className="fas fa-heart" />
        <a href="#" className="fas fa-eye" />
        <img src="images/dish-1.png" alt="image" />
        <h3>tasty food</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₦3,700</span>
        <a href="#" className="btn">add to cart</a>
      </div>
      <div className="box">
        <a href="#" className="fas fa-heart" />
        <a href="#" className="fas fa-eye" />
        <img src="images/dish-2.png" alt="image" />
        <h3>tasty food</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₦3,700</span>
        <a href="#" className="btn">add to cart</a>
      </div>
      <div className="box">
        <a href="#" className="fas fa-heart" />
        <a href="#" className="fas fa-eye" />
        <img src="images/dish-3.png" alt="image" />
        <h3>tasty food</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₦3,700</span>
        <a href="#" className="btn">add to cart</a>
      </div>
      <div className="box">
        <a href="#" className="fas fa-heart" />
        <a href="#" className="fas fa-eye" />
        <img src="images/dish-4.png" alt="image" />
        <h3>tasty food</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₦3,700</span>
        <a href="#" className="btn">add to cart</a>
      </div>
      <div className="box">
        <a href="#" className="fas fa-heart" />
        <a href="#" className="fas fa-eye" />
        <img src="images/dish-5.png" alt="image" />
        <h3>tasty food</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₦3,700</span>
        <a href="#" className="btn">add to cart</a>
      </div>
      <div className="box">
        <a href="#" className="fas fa-heart" />
        <a href="#" className="fas fa-eye" />
        <img src="images/dish-6.png" alt="image" />
        <h3>tasty food</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
        <span>₦3,700</span>
        <a href="#" className="btn">add to cart</a>
      </div>
    </div>
  </section>
  {/* dishes section ends */}
  {/* about section starts  */}
  <section className="about" id="about">
    <h3 className="sub-heading"> about us </h3>
    <h1 className="heading"> why choose us? </h1>
    <div className="row">
      <div className="image">
        <img src="images/about-img.png" alt="image" />
      </div>
      <div className="content">
        <h3>best food in the country</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sequi corrupti corporis quaerat voluptatem ipsam neque labore modi autem, saepe numquam quod reprehenderit rem? Tempora aut soluta odio corporis nihil!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nemo. Sit porro illo eos cumque deleniti iste alias, eum natus.</p>
        <div className="icons-container">
          <div className="icons">
            <i className="fas fa-shipping-fast" />
            <span>free delivery</span>
          </div>
          <div className="icons">
            <i className="fas fa-dollar-sign" />
            <span>easy payments</span>
          </div>
          <div className="icons">
            <i className="fas fa-headset" />
            <span>24/7 service</span>
          </div>
        </div>
        <a href="#" className="btn">learn more</a>
      </div>
    </div>
  </section>
  {/* about section ends */}
  {/* menu section starts  */}
  <section className="menu" id="menu">
    <h3 className="sub-heading"> our menu </h3>
    <h1 className="heading"> today's speciality </h1>
    <div className="box-container">
      <div className="box">
        <div className="image">
          <img src="images/menu-1.jpg" alt="image" />
          <a href="#" className="fas fa-heart" />
        </div>
        <div className="content">
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <h3>delicious food</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
          <a href="#" className="btn">add to cart</a>
          <span className="price">₦4,200.00</span>
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img src="images/menu-2.jpg" alt="image" />
          <a href="#" className="fas fa-heart" />
        </div>
        <div className="content">
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <h3>delicious food</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
          <a href="#" className="btn">add to cart</a>
          <span className="price">₦4,200.00</span>
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img src="images/menu-3.jpg" alt="image" />
          <a href="#" className="fas fa-heart" />
        </div>
        <div className="content">
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <h3>delicious food</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
          <a href="#" className="btn">add to cart</a>
          <span className="price">₦4,200.00</span>
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img src="images/menu-4.jpg" alt="image" />
          <a href="#" className="fas fa-heart" />
        </div>
        <div className="content">
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <h3>delicious food</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
          <a href="#" className="btn">add to cart</a>
          <span className="price">₦4,200.00</span>
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img src="images/menu-5.jpg" alt="image" />
          <a href="#" className="fas fa-heart" />
        </div>
        <div className="content">
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <h3>delicious food</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
          <a href="#" className="btn">add to cart</a>
          <span className="price">₦4,200.00</span>
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img src="images/menu-6.jpg" alt="image" />
          <a href="#" className="fas fa-heart" />
        </div>
        <div className="content">
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <h3>delicious food</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
          <a href="#" className="btn">add to cart</a>
          <span className="price">₦4,200.00</span>
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img src="images/menu-7.jpg" alt="image" />
          <a href="#" className="fas fa-heart" />
        </div>
        <div className="content">
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <h3>delicious food</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
          <a href="#" className="btn">add to cart</a>
          <span className="price">₦4,200.00</span>
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img src="images/menu-8.jpg" alt="image" />
          <a href="#" className="fas fa-heart" />
        </div>
        <div className="content">
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <h3>delicious food</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
          <a href="#" className="btn">add to cart</a>
          <span className="price">₦4,200.00</span>
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img src="images/menu-9.jpg" alt="image" />
          <a href="#" className="fas fa-heart" />
        </div>
        <div className="content">
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <h3>delicious food</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
          <a href="#" className="btn">add to cart</a>
          <span className="price">₦4,200.00</span>
        </div>
      </div>
    </div>
  </section>
  {/* menu section ends */}
  {/* review section starts  */}
  <section className="review" id="review">
    <h3 className="sub-heading"> customer's review </h3>
    <h1 className="heading"> what they say </h1>
    <div className="swiper-container review-slider">
      <div className="swiper-wrapper">
        <div className="swiper-slide slide">
          <i className="fas fa-quote-right" />
          <div className="user">
            <img src="images/pic-1.png" alt="image" />
            <div className="user-info">
              <h3>john deo</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
        </div>
        <div className="swiper-slide slide">
          <i className="fas fa-quote-right" />
          <div className="user">
            <img src="images/pic-2.png" alt="image" />
            <div className="user-info">
              <h3>john deo</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
        </div>
        <div className="swiper-slide slide">
          <i className="fas fa-quote-right" />
          <div className="user">
            <img src="images/pic-3.png" alt="image" />
            <div className="user-info">
              <h3>john deo</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
        </div>
        <div className="swiper-slide slide">
          <i className="fas fa-quote-right" />
          <div className="user">
            <img src="images/pic-4.png" alt="image" />
            <div className="user-info">
              <h3>john deo</h3>
              <div className="stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
        </div>
      </div>
    </div>
  </section>
  {/* review section ends */}
  {/* order section starts  */}
  <section className="order" id="order">
    <h3 className="sub-heading"> order now </h3>
    <h1 className="heading"> free and fast </h1>
    <form>
      <div className="inputBox">
        <div className="input">
          <span>your name</span>
          <input type="text" placeholder="enter your name" />
        </div>
        <div className="input">
          <span>your number</span>
          <input type="number" placeholder="enter your number" />
        </div>
      </div>
      <div className="inputBox">
        <div className="input">
          <span>your order</span>
          <input type="text" placeholder="enter food name" />
        </div>
        <div className="input">
          <span>additional food</span>
          <input type="test" placeholder="extra with food" />
        </div>
      </div>
      <div className="inputBox">
        <div className="input">
          <span>how musch</span>
          <input type="number" placeholder="how many orders" />
        </div>
        <div className="input">
          <span>date and time</span>
          <input type="datetime-local" />
        </div>
      </div>
      <div className="inputBox">
        <div className="input">
          <span>your address</span>
          <textarea name="address" placeholder="enter your address" id="true" cols={30} rows={10} defaultValue={""} />
        </div>
        <div className="input">
          <span>your message</span>
          <textarea name="message" placeholder="enter your message" id="true" cols={30} rows={10} defaultValue={""} />
        </div>
      </div>
      <input type="submit" defaultValue="order now" className="btn" />
    </form>
  </section>
  {/* order section ends */}
  {/* footer section starts  */}
  <section className="footer">
    <div className="box-container">
      <div className="box">
        <h3>locations</h3>
        <a href="#">india</a>
        <a href="#">japan</a>
        <a href="#">russia</a>
        <a href="#">USA</a>
        <a href="#">france</a>
      </div>
      <div className="box">
        <h3>quick links</h3>
        <a href="#">home</a>
        <a href="#">dishes</a>
        <a href="#">about</a>
        <a href="#">menu</a>
        <a href="#">reivew</a>
        <a href="#">order</a>
      </div>
      <div className="box">
        <h3>contact info</h3>
        <a href="#">+123-456-7890</a>
        <a href="#">+111-222-3333</a>
        <a href="#">shaikhanas@gmail.com</a>
        <a href="#">anasbhai@gmail.com</a>
        <a href="#">mumbai, india - 400104</a>
      </div>
      <div className="box">
        <h3>follow us</h3>
        <a href="#">facebook</a>
        <a href="#">twitter</a>
        <a href="#">instagram</a>
        <a href="#">linkedin</a>
      </div>
    </div>
    <div className="credit"> copyright @ {new Date().getFullYear()} by <span>Brainwavee</span> </div>
  </section>
  {/* footer section ends */}
  {/* loader part  */}
  <div ref={ref1} className="loader-container">
    <img src="images/loader.gif" alt="image" />
  </div>
  {/* <Script src="https://unpkg.com/swiper/swiper-bundle.min.js" /> */}
    </>
  )
}

Home.getInitialProps = async (context) => {
/*   const { data } = await client.get("/api/tickets");
  return { tickets: data } */
}

export default Home;
