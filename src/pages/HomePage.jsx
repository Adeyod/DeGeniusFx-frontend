const HomePage = () => {
  return (
    <div className="bg-slate-300 px-6 mb-[70px]">
      <div className="max-w-screen-lg m-auto">
        <p className="mb-4 text-2xl">
          Ut ad esse duis sunt dolore elit aute. Mollit ullamco do sit magna
          aliqua cillum commodo labore aute nulla sunt do laboris. Nulla id amet
          eiusmod incididunt velit non elit tempor anim exercitation dolore
          ipsum id non. Aliqua ut fugiat elit ea voluptate nulla. Occaecat
          adipisicing officia est anim ipsum velit.
        </p>

        <p className="my-4 text-2xl">
          Ut ad esse duis sunt dolore elit aute. Mollit ullamco do sit magna
          aliqua cillum commodo labore aute nulla sunt do laboris. Nulla id amet
          eiusmod incididunt velit non elit tempor anim exercitation dolore
          ipsum id non. Aliqua ut fugiat elit ea voluptate nulla. Occaecat
          adipisicing officia est anim ipsum velit.
        </p>
        <div className="">
          <p className="font-bold text-xl underline py-4">
            INVESTMENT PACKAGES
          </p>
          <div className="flex justify-center md:justify-between gap-2 flex-wrap mx-auto">
            <div className="flex flex-col items-center justify-center">
              <p className="font-bold">PACKAGE A</p>
              <img src="../../images/image1.jpeg" alt="productIng" />
            </div>
            <div className="">
              <p className="font-bold">PACKAGE B</p>
              <img src="../../images/image2.jpeg" alt="productIng" />
            </div>
            <div className="">
              <p className="font-bold">PACKAGE C</p>
              <img src="../../images/image1.jpeg" alt="productIng" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
