import React from 'react';
import CardIcons from '../../Commons/CardIcons';
import {
  FaCircle,
  FaLongArrowAltDown,
  FaLongArrowAltUp,
  FaRegBell,
  FaSearch,
} from 'react-icons/fa';
import Input from '../../Commons/Input';
import './NavBar.css';
import Paragraph from '../../Commons/Paragraph';
import { Link } from 'react-router-dom';
import Button from '../../Commons/Button';

const NavBar = () => {
  return (
    <div className='navbar-conatainer'>
      <div className='navbar-brand-conatainer'>
        <div className='nabar-brand'>
          <Paragraph className='nav-content-header' content='Transactions' />
          <Paragraph
            className='nav-content-title'
            title='Welcome to your transactions'
          />
        </div>

        <div className='navbar-search-container'>
          <div className='fa-bell-shape'>
            <CardIcons icons={FaRegBell} className='fa-bell' />
            <CardIcons icons={FaCircle} className='fa-circle' />
          </div>

          <div className='form-container'>
            <form className='form'>
              <Input
                className='search-input'
                name='search'
                type='search'
                placeholder='Search'
              />
              <CardIcons icons={FaSearch} className='fa-search' />
            </form>
          </div>
        </div>
      </div>

      <div className='navbar-transaction-container'>
        <div id='nabar-income-container'>
          <div className='income-first-content'>
            <div className='income-content-arrowdown'>
              <CardIcons icons={FaLongArrowAltDown} />
            </div>

            <div className='title-container'>
              <Link to='/user' className='income-content-title'>
                Name
              </Link>
            </div>
          </div>

          <div className='income-second-content'>
            <Link to='/mode' className='income-content-title'>
              Mode
            </Link>
          </div>
        </div>

        <div id='navbar-expense-container'>
          <div className='expense-first-content'>
            <div className='expense-content-arrowup'>
              <CardIcons icons={FaLongArrowAltUp} />
            </div>

            <div className='title-container'>
              <Link to='/date' className='income-content-title'>
                Date
              </Link>
            </div>
          </div>

          <div className='expense-second-content'>
            <Link to='/amount' className='income-content-title'>
              Amount
            </Link>
          </div>
        </div>
      </div>

      <div className='navbar-route-links'>
        <div id='navbar-route-container'>
          <div className='link-history-container'>
            <Link to='/' className='link-history'>
              Home
            </Link>
          </div>
        </div>

        <div id='navbar-button-route'>
          <Button className='button-link' title='New Transaction' />
        </div>
      </div>

      <div className='history-header-container'>
        <div className='activity-content'>
          <Paragraph className='activity' content='Name' />
        </div>

        <div className='time-container'>
          <div className='mode-container'>
            <Paragraph className='mode' content='mode' />
          </div>
          <div className='date-container'>
            <Paragraph className='date' content='date' />
          </div>
        </div>

        <div className='amount-container'>
          <Paragraph className='amount' content='amount' />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
