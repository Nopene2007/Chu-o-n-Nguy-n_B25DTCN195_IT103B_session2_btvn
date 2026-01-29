let bookName=prompt("Nhap ten sach:");
let borrowPeople=prompt("co the thu vien hay chua(co the/khong co the):");
let bookStatus=prompt("Trang thai sach(co san/da muon/khong co san):");
let borrowDate=prompt("Ngay muon sach (so ngay):");

if(bookStatus=="co san" && borrowPeople==="co the"){
    console.log("Chúc mừng, bạn có thể mượn sách này");
}else if (bookStatus=="da muon" && borrowDate<30){
    switch(borrowPeople){
        case "co the":
            console.log("Sách đang được mượn, vui lòng đợi đến khi trả lại");
            break;
        case "khong co the":  
            console.log("Bạn không thể mượn sách nếu không có thẻ thư viện");  
            break;
        }    
}else if(bookStatus=="khong co san"){
    console.log("Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau");
    
}else{
    console.log( "Thông tin không hợp lệ, vui lòng nhập lại");
}
        
