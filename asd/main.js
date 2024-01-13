class motherfucker{


    start(){
        this.fuckstat=true;
    }
    stat(){
        return this.fuckstat;
    }
    stop(){
        this.fuckstat=false;
    }
    toggle(){
        this.fuckstat=!this.fuckstat;
    }
}

let mother=new motherfucker();

mother.start();
console.log("Fuck Started  (Fuckstat): ", mother.stat());
mother.stop();
console.log("Fuck Stopped  (Fuckstat): ", mother.stat());
mother.toggle();
console.log("Fuck Toggle   (Fuckstat): ", mother.stat());

/* 
### Build It On Your Own

<ul>
  <h1>Skills</h1>
  <li>Software Engineer</li>
  <li>Web Developer (Full Stack)</li>
  <li>C/C++ Developer</li>
  <li>Windows And Linux System Administrator</li>
  <li></li>
</ul>
*/
