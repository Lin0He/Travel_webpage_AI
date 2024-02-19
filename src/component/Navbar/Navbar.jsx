import React, { useEffect }  from 'react'
import "./navbar.css"


const Navbar = () => {
  useEffect(() => {
  const dots = document.querySelectorAll(".Navbar-box a");
  const removeActiveClass =() => {
    dots.forEach((dot) => {
      dot.classList.remove("active");
    })
  }

  const addActiveClass = (entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        let currentDot = document.querySelector(`.Navbar-box a[href='#${entry.target.id}']`);
        let currentPage = document.querySelector(`.${entry.target.id}-box`);
        removeActiveClass();
        currentDot.classList.add("active");
        currentPage.style.opacity = "1"; // Fade in
      } else {
        let currentPage = document.querySelector(
          `.${entry.target.id}-box`
        );
        currentPage.style.opacity = "0"; // Fade out
      }
    })
  };

  const options ={
    threshold:0.9,
  };
  const observer = new IntersectionObserver(addActiveClass, options);
  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
    observer.observe(section);
  });
  return () => observer.disconnect();
  }, []);

  return (
    <div className='Navbar-container'>
        <div className='Navbar-box' href='#'>
          <a href='#intro' className='active' data-section="Intro"></a>
          <a href='#demo' data-section="Explore"></a>
          <a href='#drink' data-section="Flex"></a>
          <a href='#eat' data-section="Wander"></a>
          <a href='#searchbar' data-section="Search"></a>
          <a href='#contact' data-section="Contact"></a>
        </div>
    </div>
  )
}

export default Navbar