function RecentCard(props) {
  return (
    <>
      <div className="w-[300px] bg-cover h-[400px]  items-center">
        <img
          className="bg-cover rounded-sm w-full h-full shadow-black"
          src="https://i.pinimg.com/564x/43/76/4b/43764b3310310de67b5a20d8bb1dc07f.jpg"
          alt=""
        />
        <div className="text-white font-bold text-center relative top-[-65px]">
          <h1>TUNZA</h1>
          <p>RUGEED PORT</p>
        </div>
      </div>
      <div className="w-[300px] bg-cover h-[400px]  items-center">
        <img
          className="bg-cover rounded-sm w-full h-full shadow-black"
          src="https://i.pinimg.com/564x/e5/b5/26/e5b526999b02481d0879639d28f45430.jpg"
          alt=""
        />
        <div className="text-white font-bold text-center relative top-[-65px]">
          <h1>TIMOR</h1>
          <p>UNTOUCH BEACHES</p>
        </div>
      </div>
      <div className="w-[300px] bg-cover h-[400px]  items-center">
        <img
          className="bg-cover rounded-sm w-full h-full shadow-black"
          src="https://i.pinimg.com/564x/83/6c/80/836c80d497373ff9fa7d313139778a3a.jpg"
          alt=""
        />
        <div className="text-white font-bold text-center relative top-[-65px]">
          <h1>LOMBOOK</h1>
          <p>ELDLES LAVA</p>
        </div>
      </div>
    </>
  );
}

export default RecentCard;
