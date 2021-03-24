import React, { Component } from 'react';
import Head from 'next/head';
import {Navbar} from './navbar.js'
// import {Footer} from "./footer/footer.js"
// import "../styles/layout.css"

export default class Layout extends Component {
  render() {
    const { children, title, style, className } = this.props;

    return (
        <div>
        <Head>
            {process.env.NODE_ENV !== 'production' && (
                <link rel="stylesheet" type="text/css" href={'/_next/static/css/styles.chunk.css?v=' + Date.now()} />
            )}
        </Head>

        <header id="navBar">
            <Navbar></Navbar>
        </header>

        <main className="mainContent">{children}</main>
        
        {/* <footer>
            <Footer></Footer>
        </footer> */}
    </div>
    );
  }
}