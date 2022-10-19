import React from "react";

import cn from 'classnames';

import section1Styles from '../Homepage_section1.module.scss';


function TrendingBlogs(){
    return(
        <div className={cn(section1Styles.flex1, section1Styles.flex1_layout8)}>
                <h5 className={cn(section1Styles.highlights4, section1Styles.highlights4_layout)}>Trending:</h5>
                <div className={section1Styles.flex__spacer10} />
                <div className={section1Styles.flex__item8}>
                  <div className={cn(section1Styles.flex, section1Styles.flex_layout3)}>
                    <div className={cn(section1Styles.flex1, section1Styles.flex1_layout6)}>
                      <div className={section1Styles.flex__item9}>
                        <div className={cn(section1Styles.block7, section1Styles.block7_layout)}>
                          <h5 className={cn(section1Styles.highlights3, section1Styles.highlights3_layout4)}>Market</h5>
                        </div>
                      </div>
                      <div className={section1Styles.flex__spacer11} />
                      <div className={section1Styles.flex__item9}>
                        <div className={cn(section1Styles.block7, section1Styles.block7_layout)}>
                          <h5 className={cn(section1Styles.highlights3, section1Styles.highlights3_layout4)}>Ledger</h5>
                        </div>
                      </div>
                      <div className={section1Styles.flex__spacer11} />
                      <div className={section1Styles.flex__item10}>
                        <div className={cn(section1Styles.block12, section1Styles.block12_layout)}>
                          <h5 className={cn(section1Styles.highlights3, section1Styles.highlights3_layout4)}>Token</h5>
                        </div>
                      </div>
                      <div className={section1Styles.flex__spacer11} />
                      <div className={section1Styles.flex__item11}>
                        <div className={cn(section1Styles.block11, section1Styles.block11_layout)}>
                          <h5 className={cn(section1Styles.highlights3, section1Styles.highlights3_layout4)}>
                            Encryption
                          </h5>
                        </div>
                      </div>
                      <div className={section1Styles.flex__spacer11} />
                      <div className={section1Styles.flex__item12}>
                        <div className={cn(section1Styles.block13, section1Styles.block13_layout)}>
                          <h5 className={cn(section1Styles.highlights3, section1Styles.highlights3_layout4)}>Github</h5>
                        </div>
                      </div>
                      <div className={section1Styles.flex__spacer11} />
                      <div className={section1Styles.flex__item13}>
                        <div className={cn(section1Styles.block10, section1Styles.block10_layout)}>
                          <h5 className={cn(section1Styles.highlights3, section1Styles.highlights3_layout4)}>
                            Decentralization
                          </h5>
                        </div>
                      </div>
                      <div className={section1Styles.flex__spacer11} />
                      <div className={section1Styles.flex__item14}>
                        <div className={cn(section1Styles.block14, section1Styles.block14_layout)}>
                          <h5 className={cn(section1Styles.highlights3, section1Styles.highlights3_layout4)}>DLTs</h5>
                        </div>
                      </div>
                    </div>

                    <div className={cn(section1Styles.flex1, section1Styles.flex1_layout7)}>
                      <div className={section1Styles.flex__item15}>
                        <div className={cn(section1Styles.block8, section1Styles.block8_layout)}>
                          <h5 className={cn(section1Styles.highlights3, section1Styles.highlights3_layout4)}>
                            Cryptocurrency
                          </h5>
                        </div>
                      </div>
                      <div className={section1Styles.flex__spacer12} />
                      <div className={section1Styles.flex__item16}>
                        <div className={cn(section1Styles.block9, section1Styles.block9_layout)}>
                          <h5 className={cn(section1Styles.highlights3, section1Styles.highlights3_layout4)}>
                            Use Cases
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
    )
}

export default TrendingBlogs