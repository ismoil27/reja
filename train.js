// Task-E: shunday function tuzing unga faqat bitta musbat integer argument qilib berilsin,
// va u ushbu argumentni tub son bolsa true aksincha false return qilsin.
// Masalan: tubSonmi(5) return true, tubSonmi(10) return false.
// Tub sonlar faqat ozi va 1soniga toliq bolinadigan sonlar.

function isPrimeNum(n) {
  if (n % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

let res = isPrimeNum(5);
console.log(res);
