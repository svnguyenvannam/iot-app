import "./featuredInfo.css";
import { People } from "@material-ui/icons";
import axios from "axios";
import ReactAudioPlayer from 'react-audio-player';
import { useEffect, useState } from "react";

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

export default function FeaturedInfo() {
    const [info, setInfo] = useState({
        person: Math.floor(Math.random() * 15) + 2,
        humidity: Math.floor(Math.random() * (95 - 73)) + 73,
        temperature: Math.floor(Math.random() * (35-10)) + 10
    })
    const [playing, toggle] = useAudio("https://file01.fpt.ai/text2speech-v5/short/2022-02-25/bb35dcc541c81e6cb36f6c214b609823.mp3");
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
            const getData = async () => {
                const res = await axios.get("https://minhconan.azurewebsites.net/data");
                console.log(res.data)
            }
            getData()
            setInfo(() => {
                return {
                    person: Math.floor(Math.random() * 15) + 2,
                    humidity: Math.floor(Math.random() * (95 - 73)) + 73,
                    temperature: Math.floor(Math.random() * 18) + 30
                }
            });
            if (info.humidity > 70 || info.humidity < 40 || info.temperature > 35 || info.temperature < 20) {
                toggle()
            }
        }, 10000);
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
        </div>
    );
}
