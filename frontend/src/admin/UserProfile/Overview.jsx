import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faHouse, faLocationCrosshairs, faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import "./Overview.css";

function Overview(props) {
  return (
    <div className='overviewUs'>
      <div className='headOverview'>
        <h3 className='headOver'>Tổng quan</h3>
      </div>
      <div className='overviewpublic'>
        <FontAwesomeIcon icon={faBriefcase} className='iconOver'/>
        <p className='txtOver'>Chưa có nghề nghiệp</p>
      </div>
      <div className='overviewpublic'>
        <FontAwesomeIcon icon={faGraduationCap} className='iconOver'/>
        <p className='txtOver'>Đã học tại Đại học Bách khoa Đà Nẵng</p>
      </div>
      <div className='overviewpublic'>
        <FontAwesomeIcon icon={faHouse} className='iconOver'/>
        <p className='txtOver'>Đang sống tại Đà Nẵng</p>
      </div>
      <div className='overviewpublic'>
        <FontAwesomeIcon icon={faLocationCrosshairs} className='iconOver'/>
        <p className='txtOver'>Đến từ Nghệ An</p>
      </div>
      <div className='overviewpublic'>
        <FontAwesomeIcon icon={faHeartPulse} className='iconOver'/>
        <p className='txtOver'>Chưa có mối quan hệ</p>
      </div>
    </div>
  );
}

export default Overview;
