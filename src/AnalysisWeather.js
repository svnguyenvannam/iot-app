function AnalysisWeather(Temp,Humi){
let message="";
if(Temp>=34 && Humi >=80){
message="Nhiệt độ và độ ẩm trong phòng đang ở mức rất cao bạn nên bật điều hòa hoặc ra khỏi phòng";
}
else if(Temp>=34 && Humi >=70 && Humi <80){
    message="Nhiệt độ và độ ẩm đang cao bạn nên bật điều hòa để giúp không khí căn phòng tốt hơn";
}
else if(Temp>=34 && Humi >=40 && Humi <70){
    message="Trong phòng đang nóng bạn nên bật quạt hoặc điều hòa để căn phòng mát hơn";
}
else if(Temp>=34 && Humi <40){
    message="Nhiệt độ cao và độ ẩm thấp bạn không nên ở quá lâu trong phòng";
}
else if(Temp>=28 && Temp<34 && Humi >=80){
    message="Nhiệt độ  đang ở mức hợp lý và độ ẩm đang cao bạn nên bật máy hút ẩm";
}
else if(Temp>=28 && Temp<34 && Humi >=70 && Humi <80){
    message="Nhiệt độ và độ ẩm đang ở mức hợp lý nếu ngoài trời không mưa nên mở cửa sổ ra";
}
else if(Temp>=28 && Temp<34 && Humi >=40 && Humi <70){
    message="Nhiệt độ và độ ẩm đang ở mức phù hợp bạn nên mở cửa sổ để căn phòng thông thoáng hơn";
}
else if(Temp>=28 && Temp<34 && Humi <40){
    message="Trong phòng không khí đang khô có thể gây ra ngứa hoặc khô da";
}
else if(Temp>=19 && Temp<28 && Humi >=80){
    message="Độ ẩm đang cao cần giảm xuống để tránh mạt bụi phát triển";
}
else if(Temp>=19 && Temp<28 && Humi >=70 && Humi <80){
    message="Nhiệt độ tốt nhưng không trong phòng ẩm ướt nếu ở lâu có thể bị bệnh liên quan đến hô hấp";
}
else if(Temp>=19 && Temp<28 && Humi >=40 && Humi <70){
    message="Nhiệt độ và độ ẩm đang ở mức tốt chúc bạn một ngày tốt lành";
}
else if(Temp>=19 && Temp<28 && Humi <40){
    message="Nhiệt trong phòng đang rất thoải mái nhưng độ ẩm thấp bạn nên để thêm 1 chút nước trong phòng";
}
else if(Temp<19 && Humi >=80){
    message="Độ ẩm cao cẩn thận trơn trượt trên sàn nhà";
}
else if(Temp<19 && Humi >=70 && Humi <80){
    message="Nhiệt độ thấp và độ ẩm  cao bạn nên bật điều hòa để căn phòng ấm hơn";
}
else if(Temp<19 && Humi >=40 && Humi <70){
    message="Trong phòng đang lạnh bạn nên bật thêm điều hòa hoặc máy sưởi";
}
else if(Temp<19 && Humi <40){
    message="Nhiệt độ và độ ẩm trong phòng đang ở mức thấp bạn nên bật điều hòa hoặc ra khỏi phòng";
}
return message;
}