class Linux {

constructor(name,url) {
this.name = name; //
this.url = url; //
}

displayurl () {
return `Name: ${this.name}   *************  URL:${this.url}`;
} }

let lin1 = new Linux("Manjaro", "manjaro.org")
 console.log(lin1.displayurl ());
