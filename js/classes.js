class grad {
    constructor(ime, maxTemp, minTemp, vjerojatnostPadalina, jacinaVjetra) {
        this.ime = ime;
        this.maxTemp = maxTemp;
        this.minTemp = minTemp;
        this.vjerojatnostPadalina = vjerojatnostPadalina;
        this.jacinaVjetra = jacinaVjetra;
    }   
}

let dubrovnik = new grad("Dubrovnik", 30, 21, 12, 5);

console.log(dubrovnik);

let niz = {dubrovnik, Osijek, Rijeka, Split, Zadar, Zagreb};

console.log(niz);

