process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin= "";
var input_stdin_array = "";
var input_currentline = 0;
var output = [];

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();  

     
    
});



function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
	
    var n = parseInt(readLine());
    var c = n-1;

    arr = readLine().split(' ');
    console.log(arr);
    arr = arr.map(Number);
    console.log(typeof arr,'typeof') ;
    for(n=n-1;n>=0;n--)
    {
    	process.stdout.write(arr[n].toString() + ' ');	
    }
    //output[c] = arr['0']+' ';
    //c--;
 	//console.log(output);
  	//process.stdout.write(output[i]);	
   
    //input_currentline	=	


}