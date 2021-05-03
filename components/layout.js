import React, { Component, useContext } from 'react';
import Head from 'next/head';
import {Navbar} from './navbar.js'
import {Footer} from "./footer.js"

export default class Layout extends Component {
    
    render() {

    const { children, title, description, style, className } = this.props;

    return (
        <div>
        <Head>
            {process.env.NODE_ENV !== 'production' && (
                <link rel="stylesheet" type="text/css" href={'/_next/static/css/styles.chunk.css?v=' + Date.now()} />
            )}
            <link rel="shortcut icon" href="/souppLogoPng.ico" />
            <title>{title}</title>

            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="description" content={description}/>
        </Head>

        <header id="navBar">
            <Navbar></Navbar>
        </header>

        <main className="mainContent">{children}</main>
        
        <footer>
            <Footer></Footer>
        </footer>
    </div>
    );
  }
}