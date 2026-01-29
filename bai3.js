let bookName=prompt("Nhap ten sach:");
let bookType=prompt("Nhap loai sach:");
let bookDecoration=prompt("Tinh trang sach:")

switch(bookType){
    case "Khoa hoc":
        if(bookDecoration==="co"){
            console.log("Sach nay co san trong thu vien");
        }else{
            console.log("Sach da duoc muon");
        }
        break;   
    case "Lich su":
        if(bookDecoration==="co"){
            console.log("Sach nay co san trong thu vien");
        }else{
            console.log("Sach da duoc muon");
        }    
        break;
    case "Van hoc":
        console.log( "Sách này có thể đọc giải trí");
        break;
    case "Truyen":
        console.log( "Sách này có thể đọc giải trí");
        break
    default:
        console.log("Loai sach khong hop le");
        break;
}   