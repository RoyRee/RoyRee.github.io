import React from "react";

import cn from 'classnames';

import section1Styles from '../Homepage_section1.module.scss';


function SideMenuBar(){
    return(
        <div className={section1Styles.flex__item2}>
            <div className={cn(section1Styles.flex, section1Styles.flex_layout)}>
              <div className={cn(section1Styles.block15, section1Styles.block15_layout)}>
                <div className={cn(section1Styles.contain_block, section1Styles.contain_block_layout)}>
                  <div className={cn(section1Styles.contain_block2, section1Styles.contain_block2_layout)}>
                    <div className={cn(section1Styles.group, section1Styles.group_layout1)}>
                      <div className={cn(section1Styles.group, section1Styles.group_layout1)}>
                        <div className={cn(section1Styles.box1, section1Styles.box1_layout)} />

                        <div className={cn(section1Styles.block16, section1Styles.block16_layout)}>
                          <div className={cn(section1Styles.group, section1Styles.group_layout)}>
                            <img
                              src={require('assets/c2d07e33f5c2b21711f739cfa8dc4232.png').default}
                              alt=""
                              className={cn(section1Styles.icon1, section1Styles.icon1_layout)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className={cn(section1Styles.flex1, section1Styles.flex1_layout2)}>
                        <h5 className={cn(section1Styles.highlights3, section1Styles.highlights3_layout)}>|</h5>
                        <div className={section1Styles.flex__spacer5} />
                        <h5 className={cn(section1Styles.highlights5, section1Styles.highlights5_layout)}>Search</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h5 className={cn(section1Styles.highlights3, section1Styles.highlights3_layout1)}>Topics</h5>
              <hr size={1} className={cn(section1Styles.line, section1Styles.line_layout)} />

              <div className={cn(section1Styles.block1, section1Styles.block1_layout)}>
                <div className={cn(section1Styles.block2, section1Styles.block2_layout)}>
                  <div className={cn(section1Styles.block3, section1Styles.block3_layout)}>
                    <div className={section1Styles.block3__item}>
                      <div className={cn(section1Styles.block4, section1Styles.block4_layout)}>
                        <px-posize track-style='{"flexGrow":1}' x="0px 86fr 6fr" y="0px minmax(0px, max-content) 0fr">
                          <h5 className={section1Styles.highlights31}>Ethereum</h5>
                        </px-posize>
                      </div>
                    </div>
                    <div className={section1Styles.block3__spacer} />
                    <div className={section1Styles.block3__item1}>
                      <img
                        src={require('assets/8b38bfb1e868b5a371aea0a35c6ae93a.png').default}
                        alt=""
                        className={cn(section1Styles.image2, section1Styles.image2_layout)}
                      />
                    </div>
                  </div>
                </div>

                <div className={cn(section1Styles.block5, section1Styles.block5_layout)}>
                  <div className={cn(section1Styles.group, section1Styles.group_layout2)}>
                    <div className={cn(section1Styles.block6, section1Styles.block6_layout)}>
                      <h5 className={cn(section1Styles.highlights3, section1Styles.highlights3_layout2)}>NFT</h5>
                    </div>
                  </div>
                </div>

                <div className={cn(section1Styles.block5, section1Styles.block5_layout)}>
                  <div className={cn(section1Styles.group, section1Styles.group_layout2)}>
                    <div className={cn(section1Styles.block6, section1Styles.block6_layout)}>
                      <h5 className={cn(section1Styles.highlights3, section1Styles.highlights3_layout2)}>Web 3.0</h5>
                    </div>
                  </div>
                </div>

                <div className={cn(section1Styles.block5, section1Styles.block5_layout)}>
                  <div className={cn(section1Styles.group, section1Styles.group_layout2)}>
                    <div className={cn(section1Styles.block6, section1Styles.block6_layout)}>
                      <h5 className={cn(section1Styles.highlights3, section1Styles.highlights3_layout3)}>
                        Smart Contract
                      </h5>
                    </div>
                  </div>
                </div>

                <div className={cn(section1Styles.block2, section1Styles.block2_layout1)}>
                  <div className={cn(section1Styles.block3, section1Styles.block3_layout)}>
                    <div className={section1Styles.block3__item2}>
                      <div className={cn(section1Styles.block4, section1Styles.block4_layout)}>
                        <h5 className={cn(section1Styles.highlights3, section1Styles.highlights3_layout2)}>Bitcoin</h5>
                      </div>
                    </div>
                    <div className={section1Styles.block3__spacer1} />
                    <div className={section1Styles.block3__item3}>
                      <img
                        src={require('assets/8b38bfb1e868b5a371aea0a35c6ae93a.png').default}
                        alt=""
                        className={cn(section1Styles.image2, section1Styles.image2_layout)}
                      />
                    </div>
                  </div>
                </div>

                <div className={cn(section1Styles.block5, section1Styles.block5_layout1)}>
                  <div className={cn(section1Styles.group, section1Styles.group_layout2)}>
                    <div className={cn(section1Styles.block6, section1Styles.block6_layout)}>
                      <h5 className={cn(section1Styles.highlights3, section1Styles.highlights3_layout3)}>
                        Cryptocurrency
                      </h5>
                    </div>
                  </div>
                </div>

                <div className={cn(section1Styles.block2, section1Styles.block2_layout1)}>
                  <div className={cn(section1Styles.block3, section1Styles.block3_layout)}>
                    <div className={section1Styles.block3__item4}>
                      <div className={cn(section1Styles.block4, section1Styles.block4_layout)}>
                        <h5 className={cn(section1Styles.highlights3, section1Styles.highlights3_layout2)}>
                          Metaverse
                        </h5>
                      </div>
                    </div>
                    <div className={section1Styles.block3__spacer2} />
                    <div className={section1Styles.block3__item5}>
                      <img
                        src={require('assets/8b38bfb1e868b5a371aea0a35c6ae93a.png').default}
                        alt=""
                        className={cn(section1Styles.image2, section1Styles.image2_layout)}
                      />
                    </div>
                  </div>
                </div>

                <div className={cn(section1Styles.block2, section1Styles.block2_layout1)}>
                  <div className={cn(section1Styles.block3, section1Styles.block3_layout)}>
                    <div className={section1Styles.block3__item6}>
                      <div className={cn(section1Styles.block4, section1Styles.block4_layout)}>
                        <h5 className={cn(section1Styles.highlights3, section1Styles.highlights3_layout2)}>Hashing</h5>
                      </div>
                    </div>
                    <div className={section1Styles.block3__spacer3} />
                    <div className={section1Styles.block3__item7}>
                      <img
                        src={require('assets/8b38bfb1e868b5a371aea0a35c6ae93a.png').default}
                        alt=""
                        className={cn(section1Styles.image2, section1Styles.image2_layout)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default SideMenuBar;