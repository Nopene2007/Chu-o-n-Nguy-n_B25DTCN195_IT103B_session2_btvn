let bookName=prompt("Nhap ten sach:");
let borrowBookName=prompt("Nhap ten sach muon:");
let likeBook=prompt("Muc do yeu thich(1->5):");

if(likeBook<=5 && likeBook==4){
    console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");
}else if(likeBook==3){
    console.log( "Sách này khá ổn, có thể mượn");
}else if(likeBook<=2){ 
    console.log( "Sách này bạn có thể cân nhắc mượn lại sau");
}       