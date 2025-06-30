import { useEffect, useState } from "react";

function App() {
  const images = [
    "https://i.pinimg.com/736x/66/ab/31/66ab31e9602943b5a67458c1d84a0af5.jpg",
    "https://i.pinimg.com/736x/0e/e5/5f/0ee55f792e926c05983425c447095623.jpg",
    "https://i.pinimg.com/736x/21/85/83/218583e2b1a3903cf8351f7dc2fad294.jpg",
    "https://i.pinimg.com/736x/73/6b/25/736b252366c42f8618ed8afe22496bdb.jpg",
  ];

  const [pos, setPos] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (pos === images.length - 1) {
        setPos(0);
      } else {
        setPos(pos + 1);
      }
    }, 3000);

    // clean up function
    return () => {
      clearInterval(intervalId);
    };
  }, [pos]);

  console.log(pos);
  return (
    <>
      <div className="w-[100] h-[100vh] bg-gray-800 flex justify-center items-center">
        <div className="carousel-container w-[70%] h-[600px] bg-white flex overflow-hidden  ">
          {/* <div className="w-[100%] h-[100%] bg-amber-300 shrink-0 bg-cover bg-[url(https://i.pinimg.com/736x/66/ab/31/66ab31e9602943b5a67458c1d84a0af5.jpg)]"></div>
          <div className="w-[100%] h-[100%] bg-blue-600 shrink-0  translate-x-[-100%] "></div>
          <div className="w-[100%] h-[100%] bg-green-600 shrink-0 translate-x-[-200%]"></div>
          <div className="w-[100%] h-[100%] bg-amber-950 shrink-0 translate-x-[-300%] "></div> */}

          {images.map((item) => {
            return (
              <img
                src={item}
                className={`w-[100%] h-[100%] object-cover object-center shrink-0 bg-cover transition-all translate-x-[-${
                  pos * 100
                }%]`}
              ></img>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
