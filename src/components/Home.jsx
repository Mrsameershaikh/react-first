import React from "react";
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    {/* header */}
      <div className="home">
        <main>
          <h1>ReacTech</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>


      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            eveniet, inventore quidem optio sint minima tempore perferendis eos
            qui commodi illum repellendus facere totam nesciunt deleniti hic
            alias autem neque.
          </p>
        </div>
      </div>


      <div className="home3">
            <div>
                <h1>Who we are?</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, eos repudiandae porro, facilis quasi velit, error at non aliquam earum adipisci quas! Numquam placeat quasi in, iste corporis non animi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fuga hic vitae sapiente adipisci suscipit?</p>
            </div>
      </div>

      <div className="home4">
            <div>
                <h1>Brands</h1>
                <article>

                    <div style={{ animationDelay:"0.3s" }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                    </div>

                    <div style={{ animationDelay:"0.5s" }}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                    </div>

                    <div style={{ animationDelay:"0.7s" }}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                    </div>

                    <div style={{ animationDelay:"1s" }}>
                    <AiFillInstagram/>
                    <p>Instagrm</p>
                    </div>

                </article>
            </div>
      </div>
    </>
  );
};

export default Home;
