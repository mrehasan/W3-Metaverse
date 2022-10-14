/*Album: Write a function called make_album() that builds a Object 
describing a music album. The function should take in an artist name and 
an album title, and it should return a Object containing these two pieces
of information. Use the function to make three dictionaries representing
different albums. Print each return value to show that Objects are storing 
the album information correctly. Add an optional parameter to make_album()
that allows you to store the number of tracks on an album. If the calling 
line includes a value for the number of tracks, add that value to the
album’s Object. Make at least one new function call that includes the
number of tracks on an album.
*/
function make_album() {
    this.datastore = [];

this.add = function (artist,title,number){
    if(artist && title && number){
        this.datastore.push({
            artist: artist,
            title: title,
            number: number
        });
        return this.datastore;
    }
};
}
var dictionary1 = new make_album();
dictionary1.add("Ali","Jhoom", 5);
dictionary1.add("Atif","Jal Pari",7);
dictionary1.add("Snow Petrol","Tears and Rain",9);

console.log(dictionary1.datastore);