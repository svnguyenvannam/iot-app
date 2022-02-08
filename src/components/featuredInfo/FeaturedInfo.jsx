import "./featuredInfo.css";
import { People } from "@material-ui/icons";
import axios from "axios";
import ReactAudioPlayer from 'react-audio-player';
import { useEffect, useState } from "react";

export default function FeaturedInfo() {
    const [info, setInfo] = useState({
        person: Math.floor(Math.random() * 15) + 2,
        humidity: Math.floor(Math.random() * 15) + 2,
        temperature: Math.floor(Math.random() * 15) + 2
    })

    // useEffect(() => {
    //     const getInfo = async () => {
    //         try {
    //             const res = await axios.get("https://minhconan.azurewebsites.net/data");
    //             console.log(res.data)
    //             setInfo(res.data);
    //         }
    //         catch (e) {
    //             console.error(e.message);
    //         }
    //     }
    //     getInfo();
    // }, [])
    useEffect(() => {
        const interval = setInterval(() => {
            setInfo(() => {
                return {
                    person: Math.floor(Math.random() * 15) + 2,
                    humidity: Math.floor(Math.random() * (95 - 73)) + 73,
                    temperature: Math.floor(Math.random() * 18) + 30
                }
            });
        }, 30000);
        return () => clearInterval(interval);
    }, [])
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         const getInfo = async () => {
    //             try {
    //                 const res = await axios.get("https://minhconan.azurewebsites.net/data");
    //                 console.log(res.data)
    //                 setInfo(res.data);
    //             }
    //             catch (e) {
    //                 console.error(e.message);
    //             }
    //         }
    //         getInfo();
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Số người trong phòng</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{info.person}</span>
                    <span className="featuredMoneyRate">
                        < People className="featuredIcon negative" />
                    </span>
                </div>

            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Nhiệt độ</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{`${info.temperature} °C`}</span>

                </div>

            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Độ ẩm</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{`${info.humidity} %`}</span>
                </div>
            </div>
            {/* <audio autoPlay>
                <source src="https://file01.fpt.ai/text2speech-v5/short/2022-02-07/bb35dcc541c81e6cb36f6c214b609823.mp3" />
            </audio> */}
            <ReactAudioPlayer
                src="https://file01.fpt.ai/text2speech-v5/short/2022-02-07/bb35dcc541c81e6cb36f6c214b609823.mp3"
                autoPlay
                controls
            />
        </div>
    );
}
