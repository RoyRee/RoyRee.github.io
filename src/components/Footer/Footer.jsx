import React from "react";
import cn from 'classnames';
import section3Styles from '../Homepage_section3.module.scss';
import SubscribeNewsletter from "components/SubscribeNewsletter/SubscribeNewsletter";

function Footer(){
    return(
      <div className={cn(section3Styles.group, section3Styles.group_layout1)}>
        <div className={cn(section3Styles.flex, section3Styles.flex_layout)}>
          <SubscribeNewsletter/>
          <div className={cn(section3Styles.flex, section3Styles.flex_layout3)}>
            <div className={cn(section3Styles.flex1, section3Styles.flex1_layout1)}>
                <div className={section3Styles.flex__item3}>
                  <div className={cn(section3Styles.flex, section3Styles.flex_layout)}>
                    <h1 className={cn(section3Styles.big_title_box, section3Styles.big_title_box_layout)}>
                      <div className={section3Styles.big_title}>
                        <span className={section3Styles.big_title_span0}>Blockchain</span>
                        <span className={section3Styles.big_title_span1}>Sama</span>
                      </div>
                    </h1>
                    <h5 className={cn(section3Styles.highlights7, section3Styles.highlights7_layout)}>
                      We provide you the best articles and blogs related to Blockchain Technology and much more.
                    </h5>
                    <img
                      src={require('assets/1290cca9ec847568e53d72a4e8f3a774.png').default}
                      alt=""
                      className={cn(section3Styles.image4, section3Styles.image4_layout)}
                    />
                  </div>
                </div>
                <div className={section3Styles.flex__spacer1} />
                <div className={section3Styles.flex__item4}>
                  <div className={cn(section3Styles.flex, section3Styles.flex_layout1)}>
                    <div className={cn(section3Styles.small_text_body1, section3Styles.small_text_body1_layout)}>
                      Company
                    </div>
                    <div className={cn(section3Styles.small_paragraph_body, section3Styles.small_paragraph_body_layout)}>
                      About <br />
                      <br />
                      {'Features          '}
                      <br />
                      <br />
                      {'Works          '}
                      <br />
                      <br />
                      {'Career  '}
                    </div>
                  </div>
                </div>
                <div className={section3Styles.flex__spacer2} />
                <div className={section3Styles.flex__item5}>
                  <div className={cn(section3Styles.flex, section3Styles.flex_layout2)}>
                    <div className={cn(section3Styles.small_text_body1, section3Styles.small_text_body1_layout1)}>
                      Help
                    </div>
                    <div className={cn(section3Styles.small_paragraph_body, section3Styles.small_paragraph_body_layout)}>
                      Customer Support
                      <br />
                      <br />
                      {'Terms & Conditions'}
                      <br />
                      <br />
                      {'Privacy Policy'}
                    </div>
                  </div>
                </div>
                <div className={section3Styles.flex__spacer3} />
                <div className={section3Styles.flex__item6}>
                  <div className={cn(section3Styles.flex, section3Styles.flex_layout1)}>
                    <div className={cn(section3Styles.small_text_body1, section3Styles.small_text_body1_layout1)}>
                      Resources
                    </div>
                    <div className={cn(section3Styles.small_paragraph_body, section3Styles.small_paragraph_body_layout)}>
                      Free eBooks
                      <br />
                      <br />
                      {'Development Tutorial'}
                      <br />
                      <br />
                      {'How to - Blog'}
                      <br />
                      <br />
                      {'Youtube Playlist'}
                    </div>
                  </div>
                </div>
                  <div className={cn(section3Styles.small_text_body, section3Styles.small_text_body_layout)}>
                  © Copyright 2022, All Rights Reserved by BlockchainSama
                  </div>
              
            </div>
          </div>
        </div>
       </div>
    )
}

export default Footer;