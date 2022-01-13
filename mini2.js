let a = +prompt("nhap mot so");
let numbers = [1,2,3,4,2,6,7,2,4,10];
let cnt=0;
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] == a){
        cnt++;
    }
}
if (cnt == 0){
    document.write(" Khong thay so " + a + " trong mang ")
}
else {
    document.write(" Mang co " + cnt + " so " + a)
}