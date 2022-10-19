import React from "react";
import cn from 'classnames';
import section3Styles from '../Homepage_section3.module.scss';


function SubscribeNewsletter(){
    return(
        <div className={cn(section3Styles.group, section3Styles.group_layout)}>
        <div className={cn(section3Styles.block18, section3Styles.block18_layout)}>
          <div
            style={{ '--src': `url(${require('assets/fa691f7d1f74b079fa45cd387df54cb0.png').default})` }}
            className={cn(section3Styles.block19, section3Styles.block19_layout)}
          />
        </div>

        <div className={cn(section3Styles.flex, section3Styles.flex_layout)}>
          <h1 className={cn(section3Styles.hero_title1, section3Styles.hero_title1_layout)}>
            Subscribe to our newsletter
          </h1>

          <div className={cn(section3Styles.flex1, section3Styles.flex1_layout)}>
            <div className={section3Styles.flex__item}>
              <div className={cn(section3Styles.block20, section3Styles.block20_layout)}>
                <div className={cn(section3Styles.block21, section3Styles.block21_layout)}>
                  <px-posize
                    track-style='{"flexGrow":1}'
                    x="18px 80fr 169fr"
                    y="15px minmax(0px, max-content) 15fr">
                    <div className={section3Styles.text_body}>First name</div>
                  </px-posize>
                </div>
              </div>
            </div>
            <div className={section3Styles.flex__spacer} />
            <div className={section3Styles.flex__item1}>
              <div className={cn(section3Styles.block22, section3Styles.block22_layout)}>
                <div className={cn(section3Styles.block23, section3Styles.block23_layout)}>
                  <px-posize
                    track-style='{"flexGrow":1}'
                    x="18px 106fr 142fr"
                    y="15px minmax(0px, max-content) 15fr">
                    <div className={section3Styles.text_body}>Email address</div>
                  </px-posize>
                </div>
              </div>
            </div>
            <div className={section3Styles.flex__spacer} />
            <div className={section3Styles.flex__item2}>
              <div className={cn(section3Styles.block24, section3Styles.block24_layout)}>
                <div className={cn(section3Styles.block25, section3Styles.block25_layout)}>
                  <div className={cn(section3Styles.text_body1, section3Styles.text_body1_layout)}>
                    Subscribe Now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SubscribeNewsletter;