import React from "react";

const Newspaper = () => {
  return (
      <div className="container">
        {/* header container */}
        <header className="header">
            <p>1st june</p>
            <p>News</p>
        </header>
        {/* heading section */}
        <section className="heading">
          <h1>NEWSPAPER</h1>
        </section>
        {/* article section */}
        <section className="article">
          <div className="article__content">
            <h1 className="article__heading">Lorem Ipsum is simply dummy text of the printing </h1>
            <h5>1 june 2020</h5>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="article__avatar"></div>
        </section>
        <section className="article">
          <div className="article__avatar"></div>
          <div className="article__content">
            <h1>Lorem Ipsum is simply</h1>
            <h5>1 june 2020</h5>
            <p>
              Lorem Ipsum has been the industry's standard dummy been the
              industry's standard dummy been the industry's standard dummy been
              the industry's standard dummy been the industry's standard dummy
            </p>
          </div>
        </section>
        {/* footer section */}
        <section className="footer">
          <div className="footer__content">
            <h2 className="article__heading">Your Title Here</h2>
            <p>
              Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has
              been the industry's standard dummy Lorem Ipsum has been the
              industry's standard dummy
            </p>
          </div>
          <div className="footer__content">
            <h2 className="article__heading">Your Title Here</h2>
            <p>
              Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has
              been the industry's standard dummy Lorem Ipsum has been the
              industry's standard dummy
            </p>
          </div>
          <div className="footer__content">
            <h2 className="article__heading">Your Title Here</h2>
            <p>
              Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has
              been the industry's standard dummy Lorem Ipsum has been the
              industry's standard dummy
            </p>
          </div>
        </section>
      </div>
  );
};

export default Newspaper;
