class Linux {
constructor(distro =  'Linux') {
this.distro = distro;
}

displayDistro () {
return ` ${this.distro}`;

} }

const Manjaro = new Linux('Manjaro');
Manjaro.displayDistro();

const  Mint = new Linux('Linux OS MINT');
Mint.displayDistro();

const  Debian = new Linux('Debian');
Debian.displayDistro();



console.log(Manjaro.displayDistro()) ;
console.log(Mint.displayDistro()) ;
console.log(Debian.displayDistro()) ;
