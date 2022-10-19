import React from 'react';
import cn from 'classnames';

import section1Styles from './Homepage_section1.module.scss';
import section2Styles from './Homepage_section2.module.scss';
import Banner from './Banner/Banner';
import SideMenuBar from './SideMenuBar/SideMenuBar';
import styles from './Homepage.module.scss';
import TrendingBlogs from './TrendingBlogs/TrendingBlogs';
import Card from './Card/Card';


function renderSection1(props) {
  return (
    <section className={cn(section1Styles.section1, section1Styles.section1_layout)}>
      <div className={cn(section1Styles.flex, section1Styles.flex_layout4)}>
        {/* <Navbar/> */}
        <div className={cn(section1Styles.flex1, section1Styles.flex1_layout9)}>
          <SideMenuBar/>
          <div className={section1Styles.flex__spacer6} />
          <div className={section1Styles.flex__item3}>
            <div className={cn(section1Styles.flex, section1Styles.flex_layout3)}>
            <Banner/>
            <TrendingBlogs/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function renderSection2(props) {
  return (
    <section className={cn(section2Styles.section2, section2Styles.section2_layout)}>
      <Card/>
    </section>
  );
}


export default function Homepage(props) {
  return (
    <main className={cn('homepage', styles.main, styles.main_layout)}>
      {renderSection1(props)}
      {renderSection2(props)}
    </main>
  );
}

Homepage.inStorybook = true;
