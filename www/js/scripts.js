var num1 = 0;
var num2 = 0;
$(document).ready(function(){
	
	$('#inicio').on('click', start);
	$('#fin').on('click', fnfin);
	$('#mas1').on('click', function() {add(this.id)});
	$('#mas2').on('click', function() {add(this.id)});
	$('#menos1').on('click', function() {sub(this.id)});
	$('#menos2').on('click', function() {sub(this.id)});
	$('#a24').on('click', function() {select(this.id)});
	$('#a30').on('click', function() {select(this.id)});
	
	
	function start(){
		
		txteq = $('#eq1').val();
		$('#eq1p2').text(txteq);
		txteq = $('#eq2').val();
		$('#eq2p2').text(txteq);
		
		num1 = 0;
		num2 = 0;

		$('#pag1').removeClass('visible').addClass('oculto');
		$('#pag2').removeClass('oculto').addClass('visible');		
		
		if($('#a24').hasClass('on')){
			$('#ax').text('a 24');
			
		}else if($('#a30').hasClass('on')){
			$('#ax').text('a 30');
		}
	}
	
	function fnfin(){
		$('#eq1').val('Equipo 1');
		$('#eq2').val('Equipo 2');
		$('#eq1p2').text('Equipo 1');
		$('#eq2p2').text('Equipo 2');
		$('#ax').text('');
		$('#cont1').text('0');
		$('#cont2').text('0');
		$('#pag1').removeClass('oculto').addClass('visible');
		$('#pag2').removeClass('visible').addClass('oculto');
		$('img').attr('src','img/0.png');
		
	}
	
	function select(id){
		ident = id;
		ident = ident.replace('a','');
		ident = parseInt(ident);
		if(ident==24){
			$('#a24').removeClass('off').addClass('on');
			$('#a30').removeClass('on').addClass('off');
		}else if(ident==30){
			$('#a30').removeClass('off').addClass('on');
			$('#a24').removeClass('on').addClass('off');
		}
	}
	
	function add(id){
		
		console.log("Entro en add");
		ident=id;
		ident = ident.replace('mas','');
		ident = parseInt(ident);
		
		if($('#a24').hasClass('on')){
			
			if(ident==1 && num1<24){
			
			num1 = $('#cont1').text();
			num1 = parseInt(num1);
			console.log("Val anterior eq1: " + num1);
			num1 += 1;
			$('#cont1').text(num1);
			console.log("Val actual eq1: " + num1);
			
			n = 1;
				do{
					console.log(" ");
					elem = $('#1-'+n).attr('src');
					console.log("attr: " + elem);
					img = elem[4]; 
					img2 = img;
					img = parseInt(img);
					console.log("img antes if: " + img);
					
					if((n==3 || n==6) && img<2){
						console.log("if 1");
						img += 1;
						console.log("img dsps if: " + img);
						elem = elem.replace(img2,img);
						$('#1-'+n).attr('src', elem);
						console.log(elem);
						break;
						
					}else if((n!=3 && n!=6) && img<5){
						console.log("if 2");
						img += 1;
						console.log("img dsps if: " + img);
						elem = elem.replace(img2,img);
						$('#1-'+n).attr('src', elem);
						console.log(elem);
						break;
					}else{
						n++;
					}
				}while(n<=6)
			
			
			}else if(ident==2 && num2<24){

			num2 = $('#cont2').text();
			num2 = parseInt(num2);
			console.log("Val anterior eq2: " + num2);
			num2 += 1;
			$('#cont2').text(num2);
			console.log("Val actual eq2: " + num2);
			
				n = 1;
				do{
					console.log(" ");
					elem = $('#2-'+n).attr('src');
					console.log("attr: " + elem);
					img = elem[4]; 
					img2 = img;
					img = parseInt(img);
					console.log("img antes if: " + img);
					
					if((n==3 || n==6) && img<2){
						console.log("if 1");
						img += 1;
						console.log("img dsps if: " + img);
						elem = elem.replace(img2,img);
						$('#2-'+n).attr('src', elem);
						console.log(elem);
						break;
						
					}else if((n!=3 && n!=6) && img<5){
						console.log("if 2");
						img += 1;
						console.log("img dsps if: " + img);
						elem = elem.replace(img2,img);
						$('#2-'+n).attr('src', elem);
						console.log(elem);
						break;
					}else{
						n++;
					}
				}while(n<=6)
			
			}	
		}else if ($('#a30').hasClass('on')){
			
			if(ident==1 && num1<30){
			
				num1 = $('#cont1').text();
				num1 = parseInt(num1);
				console.log("Val anterior eq1: " + num1);
				num1 += 1;
				$('#cont1').text(num1);
				console.log("Val actual eq1: " + num1);
				
				n = 1;
				do{
					elem = $('#1-'+n).attr('src');
					console.log("attr: " + elem);
					img = elem[4]; 
					img2 = img;
					img = parseInt(img);
					console.log("img antes if: " + img);
					
					if(img<5){
						img += 1;
						console.log("img dsps if: " + img);
						elem = elem.replace(img2,img);
						$('#1-'+n).attr('src', elem);
						console.log(elem);
						break;
					}else{
						n++;
					}
				}while(n<=6)
				
			
			}else if(ident==2 && num2<30){

			num2 = $('#cont2').text();
			num2 = parseInt(num2);
			console.log("Val anterior eq2: " + num2);
			num2 += 1;
			$('#cont2').text(num2);
			console.log("Val actual eq2: " + num2);	

			n = 1;
				do{
					elem = $('#2-'+n).attr('src');
					console.log("attr: " + elem);
					img = elem[4]; 
					img2 = img;
					img = parseInt(img);
					console.log("img antes if: " + img);
					
					if(img<5){
						img += 1;
						console.log("img dsps if: " + img);
						elem = elem.replace(img2,img);
						$('#2-'+n).attr('src', elem);
						console.log(elem);
						break;
					}else{
						n++;
					}
				}while(n<=6)
			
			}	
		}	
	}
	
	function sub(id){
		
		console.log("Entro en sub");
		ident=id;
		ident = ident.replace('menos','');
		ident = parseInt(ident);
		
		if(ident==1 && num1>0){
			
			num1 = $('#cont1').text();
			num1 = parseInt(num1);
			console.log("Val anterior eq1: " + num1);
			num1 -= 1;
			$('#cont1').text(num1);
			console.log("Val actual eq1: " + num1);
			
			n = 6;
			do{
				elem = $('#1-'+n).attr('src');
				console.log("attr: " + elem);
				img = elem[4]; 
				img2 = img;
				img = parseInt(img);
				console.log("img antes if: " + img);
				
				if(img>0){
					img -= 1;
					console.log("img dsps if: " + img);
					elem = elem.replace(img2,img);
					$('#1-'+n).attr('src', elem);
					console.log(elem);
					break;
				}else{
					n--;
				}
			}while(n>=1)
			
		}else if(ident==2 && num2>0){

			num2 = $('#cont2').text();
			num2 = parseInt(num2);
			console.log("Val anterior eq2: " + num2);
			num2 -= 1;
			$('#cont2').text(num2);
			console.log("Val actual eq2: " + num2);	

			n = 6;
			do{
				elem = $('#2-'+n).attr('src');
				console.log("attr: " + elem);
				img = elem[4]; 
				img2 = img;
				img = parseInt(img);
				console.log("img antes if: " + img);
				
				if(img>0){
					img -= 1;
					console.log("img dsps if: " + img);
					elem = elem.replace(img2,img);
					$('#2-'+n).attr('src', elem);
					console.log(elem);
					break;
				}else{
					n--;
				}
			}while(n>=1)
			
		}	
	}
	
});