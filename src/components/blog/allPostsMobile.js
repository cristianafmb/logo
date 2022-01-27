import React, { useState } from "react";
import { Link } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import '../../sass/app.scss';
import { Row, Col, Button } from 'react-bootstrap'


const AllPosts = ({ posts }) => {

  const [postsNumber, setPostsNumber] = useState(3)

  const seeMorePosts = () => setPostsNumber(postsNumber + 3)

  const visiblePosts = posts.slice(1, postsNumber)


  return (
    <div className="mt-10 position-relative">
      {visiblePosts.map((p, i) => (
        <a href={p.path} key={p.path}>

          <div className="mt-5">
            <div className="section-intro-home">
              <div className="mt-5 mb-2 ">
                <p className="head-x-small oBold">{p.head}</p>
              </div>
              <div>
                <p className="title-large pExtraBold">{p.title}</p>
              </div>
              <div className="mt-4 mb-2">
                <p className="details-small oRegular">{p.details}</p>
              </div>
              <Link to={p.path} className="calCell bottom-0 text-decoration-none mt-3">
                <svg className="svg">
                  <defs>
                    <marker id="m" markerWidth="4" markerHeight="8"
                      refX="0" refY="1" viewBox="0 0 1 2">
                      <polygon points="0,0 1,1 0,2" fill="#8c6f2a" />
                    </marker>
                  </defs>
                  <line x1="0" y1="50%" x2="90%" y2="50%"
                    strokeWidth="1" markerEnd="url(#m)" stroke="#8c6f2a" />
                </svg>
                <p className="hover-to-show oOblique mt-2 details-small">ler</p>
              </Link>

              <div className="blog-right-text">

              </div>

            </div>
            
          </div>
        </a>
      ))}

      {posts.length > postsNumber && (
        <div className="max-width m-auto center">
          <Button
            onClick={() => seeMorePosts()}
            className="btn-more-posts mt-10 details-small"
          >Ver mais notícias
          </Button>
        </div>
      )}

    </div>
  )
}
export default AllPosts