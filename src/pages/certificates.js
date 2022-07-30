import React from 'react'
import Layout from '../components/Layout'

import springcert from '../images/certificates/springboard certificate.jpg';
import awsbcm from '../images/certificates/awsBCM.png';
import awssrm from '../images/certificates/awsSRM.png';
import hacktn from '../images/certificates/hackathon.png';
import seocert from '../images/certificates/SeoCert.png';


export default function Certificates() {
  return (
    <div>
      <h2 class="container mx-auto rounded-xl shadow-lg md:mx-auto text-2xl text-center bg-darkest font-bold m-5 border-b-2 p-2 drop-shadow-2xl
       bg-gradient-to-r from-crimson">CERTIFICATES PAGE</h2>
      <Layout>
      <section class="bg-lighter border-2 mb-5 p-1 border-lightest shadow-xl bg-gradient-to-t from-darker">
      <h2 class="text-4xl text-center bg-darkest font-bold m-5 border-b-2 p-2 drop-shadow-2xl bg-gradient-to-r from-crimson">CERTIFICATES</h2>
        <div class="grid grid-cols-1 gap-1 p-5 lg:grid-cols-2 xl:grid-cols-2 bg-gradient-to-t from-darker content-center">
          <div class="grid-cols p-5 shadow-xl content-center">
            <img src={springcert} alt="Springboard certificate of completion" class="mt-2 object-cover h-480 w-960 border-2 border-lightest"></img>
          </div>
          
        </div>
        <div class="grid grid-cols-1 gap-1 p-5 lg:grid-cols-2 xl:grid-cols-2 bg-gradient-to-t from-darker">
          <div class="grid-cols p-5 shadow-xl">
            <img src={awsbcm} alt="AWS billing and cost management" class="mt-2 object-cover h-480 w-960 border-2 border-lightest"></img>
          </div>
          <div class="grid-cols p-5 shadow-xl">
            <img src={awssrm} alt="AWS shared responsiblity model" class="mt-2 object-cover h-480 w-960 border-2 border-lightest"></img>
          </div>
          <div class="grid-cols p-5 shadow-xl">
            <img src={hacktn} alt="Hackathon Tennessee certificate of completion" class="mt-2 object-cover h-480 w-960 border-2 border-lightest"></img>
          </div>
          <div class="grid-cols p-5 shadow-xl">
            <img src={seocert} alt="semrush local seo certificate of completion" class="mt-2 object-cover h-480 w-960 border-2 border-lightest"></img>
          </div>
        </div>
      </section>
      </Layout>
    </div>
  )
}
