class Linux {
// A constructor with only two parameters
// The name and the url for the Linux OS distributions...
constructor(name,url) {
this.name = name;
this.url = url;
}

// Creating a method to show the objects

}

// Creating an instance for the class
// LinuxOS1 = new Linux("Mint", "GS");
LinuxOS1  = new  Linux("Mint","linuxmint.com");
console.log(LinuxOS1.name, " <=> ", LinuxOS1.url);


LinuxOS2  = new  Linux("Manjaro","manjaro.org");
console.log(LinuxOS2.name, " <=> ", LinuxOS2.url);

LinuxOS3  = new   Linux("Ubunto","ubuntu.com");
console.log(LinuxOS3.name, " <=> ", LinuxOS3.url);
