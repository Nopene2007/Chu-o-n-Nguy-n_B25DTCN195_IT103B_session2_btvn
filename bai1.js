let writerName = prompt("Nhập tên tác giả:");
let bookName=prompt("Nhập tên sách:");
let publicYear=prompt("Nhập năm xuất bản:");

let year= new Date().getFullYear();
let bookAge= year - publicYear;
if(bookAge<1){
    console.log("Day la sach moi");
}else if(bookAge>=1 && bookAge<=5){
    console.log("Day la sach kha moi");
}else{
    console.log("Day la sach cu");
}    