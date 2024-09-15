import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faHouse, faLocationCrosshairs, faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import "./JobOverview.css"

function JobOverview(props) {
  return (
    <div className='JobOverview'>
      <div className='jobPublic'>
        <h4 className='tittleJob'>Công việc</h4>
        <div className='overviewpublic'>
          <FontAwesomeIcon icon={faBriefcase} className='iconOver'/>
          <p className='txtOver'>Chưa có nghề nghiệp</p>
        </div>
      </div>
      <div className='jobPublic'>
        <h4 className='tittleJob'>Đại học</h4>
        <div className='overviewpublic'>
          <FontAwesomeIcon icon={faBriefcase} className='iconOver'/>
          <p className='txtOver'>Đã học tại Đại học Bách khoa Đà Nẵng</p>
        </div>
      </div>
      <div className='jobPublic'>
        <h4 className='tittleJob'>Trường trung học</h4>
        <div className='overviewpublic'>
          <FontAwesomeIcon icon={faBriefcase} className='iconOver'/>
          <p className='txtOver'>Chưa có nghề nghiệp</p>
        </div>
      </div>
    </div>
  )
}

export default JobOverview
