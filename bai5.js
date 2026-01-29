let bookName=prompt("Nhap ten sach:");
let bookStatus=prompt("Trang thai(co san/da muon):");
let bookPublic=prompt("Nam xuat ban:");
let year= new Date().getFullYear();
let bookAge= year - bookPublic;

if(bookStatus==="co san" && bookAge<=5){
    console.log("Sách này mới và có sẵn để mượn");
}else if(bookStatus==="co san" && bookAge>5 && bookAge<=10){   
    console.log( "Sách này có sẵn nhưng đã lâu năm"); 
}else if(bookStatus==="da muon" && bookAge<=10){
    console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
}else{
    console.log("Sách này đã mượn và khá cũ");    
}