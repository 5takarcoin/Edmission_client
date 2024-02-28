import React from 'react'
import { CiGlobe } from 'react-icons/ci'
import { GoLocation } from 'react-icons/go'
import { IoSchoolOutline } from 'react-icons/io5'
import { RiCoinLine, RiSchoolLine } from 'react-icons/ri'
import { TbCurrencyTaka, TbExternalLink } from 'react-icons/tb'

const AboutCard = () => {
  return (
    <div>
        <h1>About</h1>
        <p><span><CiGlobe /></span><span>www.buet.ac.bd</span><span><TbExternalLink/></span></p>
        <p><span><GoLocation /></span><span>Keranigonj, Dhaka - 1000, Bangladesh</span><span><TbExternalLink/></span></p>
        <p><span><RiSchoolLine /></span><span>Public</span></p>
        <p><span><IoSchoolOutline /></span><span>Engineering</span></p>
        <p><span><RiCoinLine/><span>Closed Credit</span></span></p>
        <p><span><TbCurrencyTaka /></span><span>20,000 BDT</span> <span>(Per Year)</span></p>
    </div>
  )
}

export default AboutCard