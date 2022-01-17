import React from "react"
import styled from "styled-components"

const Map = () => {
  return(
    <StyledMap>
      <iframe src="https://snazzymaps.com/embed/342381" width="100%" height="100%" style={{border: "none"}} title="Upcare Google Map"></iframe>
    </StyledMap>
  )
}

export default Map

const StyledMap = styled.div`
  position: relative;
  width: 100%;
  height: 40vw;
  padding: 3rem 6vw 8vw;
  @media only screen and (max-width: 768px){
    height: 80rem;
    padding: 3rem 6vw 20rem;
  }
`