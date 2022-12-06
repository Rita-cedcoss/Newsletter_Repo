import React from "react";

const Newspaper = () => {
  return (
    <>
      <div className="ContainerNewspaper">
        {/* header container */}
        <header className="header">
          <nav className="header__navbar">
            <p>1st june</p>
            <p>News</p>
          </nav>
        </header>
        {/* heading section */}
        <section className="sectionHeading">
          <h1>NEWSPAPER</h1>
        </section>
        <section className="sectionArticles">
          <div className="sectionArticles__content">
            <h1>Lorem Ipsum is simply dummy text of the printing </h1>
            <h5>1 june 2020</h5>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="sectionArticles__img"></div>
        </section>
        <section className="sectionArticles">
          <div className="sectionArticles__img"></div>
          <div className="sectionArticles__content">
            <h1>Lorem Ipsum is simply</h1>
            <h5>1 june 2020</h5>
            <p>
              Lorem Ipsum has been the industry's standard dummy been the
              industry's standard dummy been the industry's standard dummy been
              the industry's standard dummy been the industry's standard dummy
            </p>
          </div>
        </section>
        <section className="sectionFooter">
          <div className="sectionFooter__Content">
            <h2>Your Title Here</h2>
            <p>
              Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has
              been the industry's standard dummy Lorem Ipsum has been the
              industry's standard dummy
            </p>
          </div>
          <div className="sectionFooter__Content">
            <h2>Your Title Here</h2>
            <p>
              Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has
              been the industry's standard dummy Lorem Ipsum has been the
              industry's standard dummy
            </p>
          </div>
          <div className="sectionFooter__Content">
            <h2>Your Title Here</h2>
            <p>
              Lorem Ipsum has been the industry's standard dummy Lorem Ipsum has
              been the industry's standard dummy Lorem Ipsum has been the
              industry's standard dummy
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Newspaper;
