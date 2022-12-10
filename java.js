    function add() {
      const name = document.getElementById("Name").value;
      const amount =document.getElementById("amount").value;
      list[am]=name;
      am++;
      list[am]=amount;
      am++;
      document.getElementById("list").innerHTML=document.getElementById("list").innerHTML+ name+"------";
      document.getElementById("list").innerHTML=document.getElementById("list").innerHTML+ amount+"<br>";
    }
    const list=[];
    let am=0;
    function rand(){
        let a = Math.floor(Math.random()*(list.length/2));
        document.getElementById("t").innerHTML=list[(a*2)];
        console.log(a);
    }