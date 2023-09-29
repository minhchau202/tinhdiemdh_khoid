function tinh(){
let ten = document.getElementById("ten").value;
let toan = +document.getElementById("toan").value;
let van = +document.getElementById("van").value;
let anh = +document.getElementById("anh").value;
let tong = + toan + van + anh;
document.getElementById('a').innerHTML = 'tên thí sinh' + ten ;
document.getElementById('b').innerHTML = 'điểm' + tong  ;
if(tong>25){
    document.getElementById('c').innerHTML= "kết quả: đỗ"
}else{
    document.getElementById('c').innerHTML= "kết quả: trượt"
}
}