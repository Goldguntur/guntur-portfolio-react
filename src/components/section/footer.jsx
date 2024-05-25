export default function Footer() {
  return (
    <>
      <div id="footer" className="w-full pt-44 mt-32 text-center">
        <h1 className=" lg:text-4xl md:text-2xl text-2l font-bold mb-4">
          Created by Gunture17
        </h1>
        <h3 className="text-md md:text-lg lg:text-2xl mb-4 font-medium ">
          tooll's
        </h3>
        <div className="flex justify-center gap-x-10 gap-y-3  flex-wrap mb-5">
          <img src="./react.svg" alt="react" width="34" />
          <img src="./next.svg" alt="next" width="34" />
          <img src="./tailwind.svg" alt="tailwind" width="34" />
          <img src="./vscode.svg" alt="vscode" width="34" />
          <img src="./headless-ui.svg" alt="healess ui" width="34" />
          <img src="./nodejs.svg" alt="nodeJS" width="34" />
          <img src="./GSAP.svg" alt="GSAP" width="34" />
          <img src="./vercel.svg" alt="vercel" width="34" />
        </div>
        <p className=" text-xs md:text-sm lg:text-base mb-8">
          this website is built with{" "}
          <strong className="text-primary">react and tailwind</strong>
        </p>
        <p className="text-xs md:text-sm lg:text-base">
          &copy;copyright gunture17
        </p>
      </div>
    </>
  );
}
