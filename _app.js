import React from 'react';
import App from 'next/app';
import Nav from './components/Nav';
import Head from 'next/head';
import Footer from './components/Footer';
import Script from "next/script";

export default class CMApp extends App {
  render() {
    const { Component } = this.props;

    return (

        <div>
          <Head>
            <title>PageMo</title>



          </Head>

        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"/>

          <Nav className="flex"/>
          <div className="main-content">
          <Component className="flex"/>
          </div>
          <Footer />
          <style jsx>
            {`
              .main-content {
                margin-top: 30px;
              }

            `}
          </style>
        </div>


    )
  }
}
