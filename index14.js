{
    var guests = ["Ali","Kashif","Abdullah","Yasir","Aslam"];
    guests.splice(3,1,"Ashraf");
    console.log("Hurray we have got Bigger table you all are invited at todays dinner");
    guests.unshift("Rumaisa");
    guests.splice(3,0,"Kulsom");
    guests.push("Razia");
    console.log(guests.pop()+" Sorry you are not inivted");
    console.log(guests.pop()+" Sorry you are not inivted");
    console.log(guests);
}