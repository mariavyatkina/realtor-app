import React from 'react'
import './Home.css';
import styled, {css} from 'styled-components/macro'
export default function Home() {
    const HomeSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
    `;
    const HomeWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    `
    return (
        <HomeSection>
            <HomeWrapper>
        <div className="jumbotron col-6">
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4"/>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
      </div>
      </HomeWrapper>

      </HomeSection>
    )
}
