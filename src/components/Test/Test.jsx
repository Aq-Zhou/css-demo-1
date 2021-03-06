import React, {useEffect, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade} from "swiper";

import './Test.scss';
import 'swiper/css';


// var mySwiper = new Swiper('.swiper-container', {
//     pagination: '.swiper-pagination', //分页器
//     direction: 'vertical', //垂直方向换页
//     slideToClickedSlide: true, //slide1向slide2 swipe的过程中轻点slide1会回到slide1
//
//     /* 初始化animate */
//     onInit: function (swiper) {  //Swiper2.x的初始化是onFirstInit
//         swiperAnimateCache(swiper);  //隐藏动画元素
//         swiperAnimate(swiper); //初始化完成开始动画
//
//     },
//     onSlideChangeEnd: function (swiper) {
//         swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
//     }
// })


const Test = () => {

    const [swiperState, setSwiperState] = useState(1)

    const swiperRef = useRef();

    const SwiperChange = () => {
        setSwiperState(swiperRef.current.swiper.activeIndex + 1)
        console.log(swiperRef.current.swiper.activeIndex + 1)
    }


    useEffect(() => {
        console.log(`swiperState`, swiperState)
    })


    return (
        <div className="Test">
            <div className="SwiperContainer">
                <Swiper
                    direction='vertical'
                    modules={[EffectFade]}
                    pagination={{clickable: true}}
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => {
                        SwiperChange()
                    }}
                    ref={swiperRef}
                >
                    {/*1*/}
                    <SwiperSlide className="container">
                        <img className="bg" src={require('../../images/Test/1/bg.png')} alt=""/>
                        <img className={(swiperState === 1 ? ("city") : ("cityHidden"))}
                             src={require('../../images/Test/1/City.png')} alt=""/>
                        <img className="title1" src={require('../../images/Test/1/Title.png')} alt=""/>
                        <img className="line" src={require('../../images/Test/1/Line.png')} alt=""/>
                        <img className="yunnan" src={require('../../images/Test/1/YunNan.png')} alt=""/>
                    </SwiperSlide>

                    {/*2*/}
                    <SwiperSlide className="container">
                        <img className="bg" src={require('../../images/Test/2/bg.png')} alt=""/>
                        <img className="route" src={require('../../images/Test/2/Route.png')} alt=""/>
                        <img className="title" src={require('../../images/Test/2/Title.png')} alt=""/>
                        <img className="track" src={require('../../images/Test/2/Track.png')} alt=""/>
                        <img className="train" src={require('../../images/Test/2/Train.png')} alt=""/>
                        <img className="LOGO" src={require('../../images/Test/2/LOGO.png')} alt=""/>
                    </SwiperSlide>

                    {/*3*/}
                    <SwiperSlide className="container">
                        <img className="bg" src={require('../../images/Test/3/bg.png')} alt=""/>
                        <img className={(swiperState === 3) ? 'G56' : 'G56Hidden'}
                             src={require('../../images/Test/3/G56.png')} alt=""/>
                        <img className={(swiperState === 3) ? "title" : "titleHidden"} src={require('../../images/Test/3/Title.png')} alt=""/>
                        <img className={(swiperState === 3) ? "BinHai" : "BinHaiHidden"} src={require('../../images/Test/3/BinHai.png')} alt=""/>
                        <img className={(swiperState === 3) ? "Path" : "PathHidden"} src={require('../../images/Test/3/Path.png')} alt=""/>
                        <img className={(swiperState === 3) ? "RoadNet" : "RoadNetHidden"}src={require('../../images/Test/3/RoadNet.png')} alt=""/>
                        <img className={(swiperState === 3) ? "TaiAn" : "TaiAnHidden"}src={require('../../images/Test/3/TaiAn.png')} alt=""/>
                        <img className={(swiperState === 3) ? "WeiShan" : "WeiShanHidden"} src={require('../../images/Test/3/WeiShan.png')} alt=""/>
                        <img className={(swiperState === 3) ? "XiangYun" : "XiangYunHidden"} src={require('../../images/Test/3/XiangYun.png')} alt=""/>
                        <img className={(swiperState === 3) ? "XiPing" : "XiPingHidden"} src={require('../../images/Test/3/XiPing.png')} alt=""/>
                        <img className={(swiperState === 3) ? "YangBi" : "YangBiHidden"} src={require('../../images/Test/3/YangBi.png')} alt=""/>
                        <img className={(swiperState === 3) ? "LOGO" : "img-LOGO"} src={require('../../images/Test/3/LOGO.png')} alt=""/>
                        <img className={(swiperState === 3) ? "HuanCheng" : "HuanChengHidden"} src={require('../../images/Test/3/HuanCheng.png')} alt=""/>
                    </SwiperSlide>

                    {/*4*/}
                    <SwiperSlide className="container">
                        <img className="bg" src={require('../../images/Test/4/bg.png')} alt=""/>
                        <img className="JiMountain" src={require('../../images/Test/4/JiMountain.png')} alt=""/>
                        <img className="View" src={require('../../images/Test/4/View.png')} alt=""/>
                        <img className="Tower" src={require('../../images/Test/4/Tower.png')} alt=""/>
                        <img className="Ruins" src={require('../../images/Test/4/Ruins.png')} alt=""/>
                        <img className="LuoQuan" src={require('../../images/Test/4/LuoQuan.png')} alt=""/>
                        <img className="ErHaiPark" src={require('../../images/Test/4/ErHaiPark.png')} alt=""/>
                        <img className="CangMountain" src={require('../../images/Test/4/CangMountain.png')} alt=""/>
                        <img className="AncientCity" src={require('../../images/Test/4/AncientCity.png')} alt=""/>
                        <img className="LOGO2" src={require('../../images/Test/4/LOGO.png')} alt=""/>
                        <img className="Title" src={require('../../images/Test/4/Title.png')} alt=""/>
                        <img className="NanZhao" src={require('../../images/Test/4/NanZhao.png')} alt=""/>
                        <img className="Palace" src={require('../../images/Test/4/Palace.png')} alt=""/>
                        <img className="SoIsland" src={require('../../images/Test/4/SoIsland.png')} alt=""/>
                        <img className="title2" src={require('../../images/Test/4/Title.png')} alt=""/>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Test;

