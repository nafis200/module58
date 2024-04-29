const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 mt-10">
      <div className="hero-content flex-col lg:flex-row">
       <div className="lg:w-1/2 relative">
       <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <img className="w-[150px] h-[270px]" src={"https://i.postimg.cc/cC94wYzy/Sundarban-Tiger.jpg"} alt="" />
       </div>
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
