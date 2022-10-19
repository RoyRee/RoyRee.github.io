import React from "react";

import cn from 'classnames';

import section1Styles from '../Homepage_section1.module.scss';


function Banner(){
    return(
        <div className={cn(section1Styles.contain_block1, section1Styles.contain_block1_layout)}>
        <div
          style={{ '--src': `url(${require('assets/ed563e91c8f2745673f4330a4402ca21.png').default})` }}
          className={cn(section1Styles.image, section1Styles.image_layout)}
        />

        <div className={cn(section1Styles.flex, section1Styles.flex_layout2)}>
          <div className={cn(section1Styles.flex, section1Styles.flex_layout1)}>
            <h1 className={cn(section1Styles.hero_title, section1Styles.hero_title_layout)}>
              Getting started with Ethereum
            </h1>
            <h4 className={cn(section1Styles.highlights1, section1Styles.highlights1_layout)}>
              Ethereum is a decentralized, open-source blockchain with smart contract functionality.
            </h4>
            <h4 className={cn(section1Styles.highlights2_box, section1Styles.highlights2_box_layout)}>
              <div className={section1Styles.highlights2}>
                <span className={section1Styles.highlights2_span0}>
                  Ethereum is a technology that's home to digital money, global payments, and applications. The
                  community has built a booming digital economy, bold new ways for creators to earn online, and
                  so much more. It's open to everyone, wherever you are in the world – all you need is the
                  internet. Today, billions of people...{' '}
                </span>
                <span className={section1Styles.highlights2_span1}>
                  Read more
                  <br />
                </span>
              </div>
            </h4>
          </div>

          <div className={cn(section1Styles.flex1, section1Styles.flex1_layout5)}>
            <div className={section1Styles.flex__item4}>
              <div className={cn(section1Styles.flex1, section1Styles.flex1_layout3)}>
                <div className={section1Styles.flex__item5}>
                  <img
                    src={require('assets/3a04d82801f69ffdb0932270d776c6e5.png').default}
                    alt=""
                    className={cn(section1Styles.icon, section1Styles.icon_layout)}
                  />
                </div>
                <div className={section1Styles.flex__spacer7} />
                <h5 className={cn(section1Styles.highlights21, section1Styles.highlights21_layout)}>
                  Rahul Shrirame - November 01, 2022
                </h5>
              </div>
            </div>
            <div className={section1Styles.flex__spacer8} />
            <div className={section1Styles.flex__item6}>
              <div className={cn(section1Styles.flex1, section1Styles.flex1_layout4)}>
                <h5 className={cn(section1Styles.highlights21, section1Styles.highlights21_layout1)}>
                  4 min read
                </h5>
                <div className={section1Styles.flex__spacer9} />
                <div className={section1Styles.flex__item7}>
                  <img
                    src={require('assets/9769b0811095daf6a67faa3b11c5526d.png').default}
                    alt=""
                    className={cn(section1Styles.image1, section1Styles.image1_layout)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Banner;