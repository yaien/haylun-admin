import React, { useEffect, useState } from "react"
import Link from "next/link"
import Head from "../components/head"
import Master from "../components/master"
import Session from "../components/session"

const Home = () => {
  return (
    <Master>
      <Head></Head>
      <Session></Session>
    </Master>
  )
}

export default Home
