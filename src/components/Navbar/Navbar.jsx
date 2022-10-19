import React from "react";
import cn from 'classnames';
import section1Styles from '../Homepage_section1.module.scss';
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <div className={cn(section1Styles.block26, section1Styles.block26_layout)}>
        <div className={cn(section1Styles.flex1, section1Styles.flex1_layout1)}>
          <h1 className={cn(section1Styles.big_title_box, section1Styles.big_title_box_layout)}>
            <Link to="/" style={{ textDecoration: 'none' }}>
            <div className={section1Styles.big_title}>
              <span className={section1Styles.big_title_span0}>Blockchain</span>
              <span className={section1Styles.big_title_span1}>Sama</span>
            </div>
            </Link>
          </h1>
          <div className={section1Styles.flex__spacer} />
          <div className={section1Styles.flex__item}>
            <div className={cn(section1Styles.flex1, section1Styles.flex1_layout)}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <h4 className={cn(section1Styles.highlights8, section1Styles.highlights8_layout)}>Home</h4>
              </Link>
                <div className={section1Styles.flex__spacer1} />
              <Link to="/news" style={{ textDecoration: 'none' }}>
                <h4 className={cn(section1Styles.highlights, section1Styles.highlights_layout)}>News</h4>
              </Link>
              <div className={section1Styles.flex__spacer2} />
              <Link to="/aboutus" style={{ textDecoration: 'none' }}>
              <h4 className={cn(section1Styles.highlights, section1Styles.highlights_layout)}>About Us</h4>
              </Link>
              <div className={section1Styles.flex__spacer3} />
              <Link to="/contact" style={{ textDecoration: 'none' }}>
              <h4 className={cn(section1Styles.highlights, section1Styles.highlights_layout)}>Contact</h4>
              </Link>
              <div className={section1Styles.flex__spacer4} />
              <div className={section1Styles.flex__item1}>
                <img
                  src={require('assets/0f7ecccedf6b7b70db7b62b781e59baf.png').default}
                  alt=""
                  className={cn(section1Styles.image5, section1Styles.image5_layout)}
                />
              </div>
            </div>
          </div>
        </div>
       </div>
    )
}



export default  Navbar;