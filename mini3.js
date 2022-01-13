
function demo() {
    let numbers=[1,2,3,4,5,6,7,8,9,10];
    let cnt = 0;
    let tong = 0;
    for (cnt;cnt<numbers.length;cnt++) {
        if (numbers[cnt] >= 2) {
        if (checkPrime(numbers[cnt])) {
            tong += numbers[cnt];
        }
    }
    }
    function checkPrime() {
        let check=true;
        for (let i=2;i<= Math.sqrt(numbers[cnt]);i++){
            if (numbers[cnt]%i==0){
                check=false;
                break;
            }
        }
        return check;
    }
    document.write(tong);
}