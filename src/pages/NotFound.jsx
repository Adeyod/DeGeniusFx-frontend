const NotFound = () => {
  return (
    <div className="">
      <div className="flex gap-y-3 flex-col justify-center items-center mt-52">
        <p className="text-3xl italic text-red-500 font-bold">ERROR 404</p>
        <p className="text-xl md:text-2xl italic">
          The resource you are looking for can not be found here
        </p>
      </div>
    </div>
  );
};

export default NotFound;
