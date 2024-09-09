// TaskbarAdmin.js
import React from 'react';
import { Link } from 'react-router-dom';
import './TaskbarAdmin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function TaskbarAdmin() {
  return (
    <div className='taskbarAd'>
      <p><FontAwesomeIcon icon={faBars} />Trinity</p>
      <Link className="pass-link" to="/admin/listUs"><FontAwesomeIcon icon={faUser} />User</Link>
      <Link className="pass-link" to="/admin/listPo">Article</Link>
      <Link className="pass-link" to="/forgot">Forgot Password</Link>
      <Link  to="/" className="pass-link signout"><FontAwesomeIcon icon={faRightFromBracket} />Sign Out</Link>
    </div>
  );
}

export default TaskbarAdmin;
