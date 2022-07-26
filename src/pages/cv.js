import React from 'react'
import Layout from '../components/Layout'

import resume1 from '../images/resume/resume1.png';
import resume2 from '../images/resume/resume2.png';
import cover from '../images/resume/cover.png';

export default function CV() {
  return (
    <div>
      <h2 class="container mx-auto rounded-xl shadow-lg md:mx-auto text-2xl text-center bg-darkest font-bold m-5 border-b-2 p-2 drop-shadow-2xl
       bg-gradient-to-r from-crimson">CV PAGE</h2>
      <Layout>
      <section class="bg-lighter border-2 text-center mb-5 p-1 border-lightest shadow-xl bg-gradient-to-t from-darker">
      <h2 class="text-4xl text-center bg-darkest font-bold m-5 border-b-2 p-2 drop-shadow-2xl bg-gradient-to-r from-crimson"><a class="hover:text-darkest hover:bg-lightest p-2" target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1VYDAdMhPidGNNfUiKf9HjVtQy8v7VLfffDsXlQrwOVk/edit?usp=sharing">
          COVER LETTER</a></h2>
        <div class="grid grid-cols-1 gap-1 p-5 lg:grid-cols-2 xl:grid-cols-2 bg-gradient-to-t from-darker content-center">
          <div class="grid-cols p-5 shadow-xl content-center">
            <img src={cover} alt="Springboard certificate of completion" class="mt-2 object-cover h-480 w-960 border-2 border-lightest"></img>
          </div>
        </div>
        <h2 class="text-4xl text-center bg-darkest font-bold m-5 border-b-2 p-2 drop-shadow-2xl bg-gradient-to-r from-crimson"><a class="hover:text-darkest hover:bg-lightest p-2" target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1OnhCmoynRi-KrBFdWeKF8A567LHn_cLD/edit?usp=sharing&ouid=105266601067052062633&rtpof=true&sd=true">
          RESUME</a></h2>
        <div class="grid grid-cols-1 gap-1 p-5 lg:grid-cols-2 xl:grid-cols-2 bg-gradient-to-t from-darker content-center">
          <div class="grid-cols p-5 shadow-xl content-center">
            <img src={resume1} alt="Springboard certificate of completion" class="mt-2 object-cover h-480 w-960 border-2 border-lightest"></img>
          </div>
          <div class="grid-cols p-5 shadow-xl content-center">
            <img src={resume2} alt="Springboard certificate of completion" class="mt-2 object-cover h-480 w-960 border-2 border-lightest"></img>
          </div>
        </div>
      </section>
      </Layout>
    </div>
  )
}