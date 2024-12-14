const kelime = "javascript";
let gizliKelime = "_".repeat(kelime.length).split("");
let kalanHak = 6;
let tamamlandimi = false;

console.log("Kelimeyi tahmin etmeye başla:");
console.log(gizliKelime.join(" "));

for (let i = 0; i < kalanHak; i++) {
    if (!gizliKelime.includes("_")) {
        tamamlandimi = true;
        break;
    }

    const tahmin = prompt(`Bir harf tahmin et (Kalan hak: ${kalanHak - i}):`).toLowerCase();

    if (tahmin.length !== 1 || !/^[a-z]$/i.test(tahmin)){
        console.log("Yalnız bir harf gir.");
        i--;
        continue;
    }
    if (kelime.includes(tahmin)){
        console.log(`Doğru! "${tahmin}" harf var.`);
        for (let j = 0; j < kelime.length; j++) {
            if (kelime[j] === tahmin) {
                gizliKelime[j] = tahmin;
            }
        }
    }
    else{
        console.log(`Yanlış! "${tahmin}" harf yok.`);
    }
    console.log(gizliKelime.join(" "));
}
if (tamamlandimi){
    console.log(`Tebrikler! Kelimeyi buldun: ${kelime}`);
}
else{
    console.log(`Oyunu kaybettin. Doğru kelime: ${kelime}`);
}
