var object;
	function show(sum,p){
		var pp=p.toString;
		document.getElementById("1").innerHTML="Height";
		document.getElementById("2").innerHTML="Hair Color";
		document.getElementById("3").innerHTML="Skin Color";
		document.getElementById("4").innerHTML="Birth Year";
		document.getElementById("5").innerHTML="Gender";
		 fetch('https://tejusravi.000webhostapp.com/swap-api/'+p+'/'+sum+'/')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
               appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
		document.getElementById("tejas").innerHTML=sum;
		document.getElementById("first").innerHTML=data[0].name;
		document.getElementById("second").innerHTML=data[0].height;
		document.getElementById("third").innerHTML=data[0].hair_color;
		document.getElementById("fourth").innerHTML=data[0].skin_color;
		document.getElementById("fifth").innerHTML=data[0].birth;
		document.getElementById("sixth").innerHTML=data[0].gender;
		document.getElementById("tejas").innerHTML=sum;
	}
		
	}
	function show1(sum,p){
		var pp=p.toString;
		document.getElementById("1").innerHTML="Position";
		document.getElementById("2").innerHTML="Color";
		document.getElementById("3").innerHTML="Width";
		document.getElementById("4").innerHTML="No of year";
		document.getElementById("5").innerHTML="No of moon";
		 fetch('https://tejusravi.000webhostapp.com/swap-api/'+p+'/'+sum+'/')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
               appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
		document.getElementById("tejas").innerHTML=sum;
		document.getElementById("first").innerHTML=data[0].name;
		document.getElementById("second").innerHTML=data[0].position;
		document.getElementById("third").innerHTML=data[0].color;
		document.getElementById("fourth").innerHTML=data[0].width;
		document.getElementById("fifth").innerHTML=data[0].noy;
		document.getElementById("sixth").innerHTML=data[0].nom;
		document.getElementById("tejas").innerHTML=sum;
	}
		
	}
	function show2(sum,p){
		var pp=p.toString;
		document.getElementById("1").innerHTML="capacity";
		document.getElementById("2").innerHTML="range";
		document.getElementById("3").innerHTML="year";
		document.getElementById("4").innerHTML="weight";
		document.getElementById("5").innerHTML="seat";
		 fetch('https://tejusravi.000webhostapp.com/swap-api/'+p+'/'+sum+'/')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
               appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
		document.getElementById("tejas").innerHTML=sum;
		document.getElementById("first").innerHTML=data[0].name;
		document.getElementById("second").innerHTML=data[0].capacity;
		document.getElementById("third").innerHTML=data[0].range;
		document.getElementById("fourth").innerHTML=data[0].year;
		document.getElementById("fifth").innerHTML=data[0].weight;
		document.getElementById("sixth").innerHTML=data[0].seat;
		document.getElementById("tejas").innerHTML=sum;
	}
		
	}

	function getobject(p){
		object= p;
		document.getElementById("tejas").innerHTML=1;
		document.getElementById("back-button").disabled=false;
		document.getElementById("forward-button").disabled=false;
		switch(p){
			case 'person':show(1,p);break;
			case 'planet':show1(1,p);break;
			case 'spaces':show2(1,p);break;
			case 'species':show(1,p);break;

		}
		
		

	}
	function add() {

		var t=document.getElementById('tejas').textContent;
		sum=parseInt(t);
		
		if(sum<5){
			
			document.getElementById("back-button").disabled=false;
			sum++;
			
		
		switch(object){
			case 'person':show(sum,object);break;
			case'planet':show1(sum,object);break;
			case 'spaces':show2(sum,object);break;
			case 'species':show(sum,object);break;

		}
		
	}else{
		document.getElementById("forward-button").disabled=true;
	}
	
	}
	function sub() {
		document.getElementById("forward-button").disabled=false;
		var t=document.getElementById('tejas').textContent;
		sum=parseInt(t);
		if(sum>1){
		sum--;
		switch(object){
			case 'person':show(sum,object);break;
			case'planet':show1(sum,object);break;
			case 'spaces':show2(sum,object);break;
			case 'species':show(sum,object);break;

		}
	}
	else{
		document.getElementById("back-button").disabled=true;
	}
}