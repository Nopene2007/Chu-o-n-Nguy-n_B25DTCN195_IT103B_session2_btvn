let book=100;
let human=15;
let takeBook=prompt("Nhap so sach muon:");
let humanTake=human * takeBook;
let bookLeft=book - humanTake;

if(bookLeft<10){
    console.log("thu vien co it sach");
}else if(bookLeft>=10 && bookLeft<=20){
    console.log("thu vien co so luong sach vua phai");
}else{
    console.log("thu vien co nhieu sach");
}        