import "./featuredInfo.css";
import { People} from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Số người trong phòng</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">3</span>
          <span className="featuredMoneyRate">
            < People className="featuredIcon negative"/>
          </span>
        </div>
      
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Nhiệt độ</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">37°C</span>
          
        </div>
        
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Độ ẩm</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">75 %</span>
          
        </div>
        
      </div>
    </div>
  );
}
