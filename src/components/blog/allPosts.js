import React, { useState } from "react";
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import '../../sass/app.scss';
import { Button } from 'react-bootstrap'
import Arrow from '../arrow'
import Image from '../Images'

const AllPosts = ({ posts }) => {

  const [postsNumber, setPostsNumber] = useState(3)

  const seeMorePosts = () => setPostsNumber(postsNumber + 3)

  const visiblePosts = posts.slice(1, postsNumber)


  return (
    <div className="mt-10 position-relative">
      {visiblePosts.map((p, i) => (
        <a href={p.path} key={p.path}>

          <div className="mt-5">
            <div className="d-flex section-intro-home">
              <div className="container-img-blog ">
                <Image src={p.image} alt={p.title} className="img-blog " />
              </div>
              <div className="blog-right-text">
                <div className="mt-5 mb-2 ">
                  <p className="head-x-small oBold">{p.head}</p>
                </div>
                <div>
                  <p className="title-large oExtraBold">{p.title}</p>
                </div>
                <div className="mt-4 mb-2">
                  <p className="details-small oRegular">{p.details}</p>
                </div>
                <Link to={p.path} className="container-arrow-blog">
                  <Arrow id="arrow-effect-blog" rot={false} text="ler" blog={true} />

                </Link>
              </div>


            </div>
            {i !== (visiblePosts.length - 1) ? (
              <div className="section-intro-home mt-5 mb-3">

                <hr className="gold" style={{ height: "2px" }} />

              </div>
            ) : (<></>)}
          </div>
        </a>
      ))}

      {posts.length > postsNumber && (
        <div className="max-width m-auto center">
          <Button
            onClick={() => seeMorePosts()}
            className="btn-more-posts mt-10 details-x-small center"
          >Ver mais notícias
          </Button>
        </div>
      )}

    </div>
  )
}
export default AllPosts