// JavaScript Document
$(document).ready(function(){
	
						   });
var progress_time;


$('body').on('blur' ,'.textbox-full , .textbox', function(){
											
		var obj = this.id;
		var content = $("#"+obj).val();
		if($.trim(content) !='')
		{
			$("#"+obj).css({'border':'1','border-color':'#DDD','border-style':'solid'});
			}
	});


$('body').on('keydown' , '.nospace' , function(e){
					if(e.keyCode ==32)
					{return false;}
			 });

$('body').on('keydown' , '.isNumeric' , function(e){
					//alert(e.keyCode);	
					//|| e.keyCode !=8 || e.keyCode !=173
					if(e.keyCode >=48 && e.keyCode <= 57 )
					{}
					else if ( e.keyCode ==8 || e.keyCode ==173){}
					else{return false;}
			 });



	
	
	
function statusBarJs( value )
{
		clearTimeout(progress_time);

		$('#infoBox').fadeIn();
		$('.bar span').removeClass('stop');	
		$('.bar span').css('width', '100%');
		$('#upload-info').html(value);
}
	

function _statusBarJs( value )
{
		//$('#infoBox').fadeIn();
		$('.bar span').addClass('stop');
		$('.bar span').css('width', '100%');
		$('#upload-info').html(value);
		
		progress_time = setTimeout(function(){
				$('#infoBox').fadeOut(300);							
											},10000);
				
	}
	


function validateForm(myForm)
{
	var response = true;
            $('#' + myForm + ' input ,' +'#'+ myForm + ' select , ' + '#'+myForm + ' textarea').each(function() {

               var data = this.value;
			   var id = this.id;
			   var title = this.title;
			   //alert(title);
			   $("#"+id).css({'border':'1','border-color':'#DDD','border-style':'solid'});
			   
			   if(data =='' && title =="*")
			   {
			   		$("#"+id).css({'border':'1','border-color':'#ff0066','border-style':'dashed'});
			   		response = false
			   }
            });
            return response;
	}
	
	
					   
	
	


$("body").on('click' , '.staff-unlock' , function(e){

	var obj = this;
	var id = this.id;
	id = id.split('_')[1];
	var response = confirm("Are you sure you want to block this account");
	if(response==0)
	{ return false; }
	statusBarJs("Blocking...");
	$.post("staff-manager/code/block-staff.php" , { staff_id : id } , function(r){
		//alert(r);
		if(r ==1)
		{
			_statusBarJs("The user was blocked successfully");
			$(obj).removeClass('fa-unlock').addClass('fa-lock');
			$(obj).removeClass('staff-unlock').addClass('staff-lock');
		}
		else
		{
			_statusBarJs("Operation failed. Try again!");
		}
	});
		e.stopPropagation(); 
});


$("body").on('click' , '.staff-lock',  function(e){

	var obj = this;
	var id = this.id;
	id = id.split('_')[1];
	var response = confirm("Are you sure you want to open this account");
	if(response==0)
	{ return false; }
	statusBarJs("Opening...");
	$.post("staff-manager/code/unblock-staff.php" , { staff_id : id } , function(r){
		//alert(r);
		if(r ==1)
		{
			_statusBarJs("The user was opened successfully");
			$(obj).removeClass('fa-lock').addClass('fa-unlock');
			$(obj).removeClass('staff-lock').addClass('staff-unlock');
		}
		else
		{
			_statusBarJs("Operation failed. Try again!");
		}
	});
	
	e.stopPropagation(); 
});


$("body").on('click' , '.student-lock',  function(e){

	var obj = this;
	var id = this.id;
	id = id.split('-')[1];
	var response = confirm("Are you sure you want to open this student account");
	if(response==0)
	{ return false; }
	statusBarJs("Opening...");
	$.post("student-manager/secondary/code/unblock-student.php" , { admission_no : id } , function(r){
		//alert(r);
		if(r ==1)
		{
			_statusBarJs("The user was opened successfully");
			$(obj).removeClass('fa-lock').addClass('fa-unlock');
			$(obj).removeClass('student-lock').addClass('student-unlock');
		}
		else
		{
			_statusBarJs("Operation failed. Try again!");
		}
	});
	
	e.stopPropagation(); 
});


var blockObj, blockId;

$("body").on('click' , '.student-unlock',  function(e){

	
	
	 blockObj = this;
	 blockId = this.id;
	 blockId = blockId.split('-')[1];
	$("#reason").val('');
	$(".opt-check").hide();
	$(".fade2").show(300, function(){
								 
				$("#div-reason").fadeIn(200 , function(){
							 // alert(blockId);						   
													   });				   
								   });
	scrollTop();
	
});


function blockStudent()
{
	
	var reason = $("#reason").val();
	if(reason =='')
	{
		alert("Select a reason for blocking this student and press continue!");
		return false;
		
		}
		
	$('#div-reason').hide(300 , function(){
					$(".fade2").fadeOut(200);					 
										 });
	
		
	statusBarJs("Locking...");
	$.post("student-manager/secondary/code/block-student.php" , { admission_no : blockId , reason : reason } , function(r){
		//alert(r);
		if(r ==1)
		{
			_statusBarJs("The student was blocked successfully");
			$(blockObj).removeClass('fa-unlock').addClass('fa-lock');
			$(blockObj).removeClass('student-unlock').addClass('student-lock');
		}
		else
		{
			_statusBarJs("Operation failed. Try again!");
		}
	});
	
	
	}














$("body").on('click' , '.result-lock',  function(e){

	var obj = this;
	var id = this.id;
	id = id.split('-')[2];
	var response = confirm("Are you sure you want to open this result access?");
	if(response==0)
	{ return false; }
	statusBarJs("Opening...");
	$.post("student-manager/secondary/code/unblock-result.php" , { admission_no : id } , function(r){
		//alert(r);
		if(r ==1)
		{
			_statusBarJs("The result access was opened successfully");
			$(obj).removeClass('fa-lock').addClass('fa-unlock');
			$(obj).removeClass('result-lock').addClass('result-unlock');
		}
		else
		{
			_statusBarJs("Operation failed. Try again!");
		}
	});
	
	e.stopPropagation(); 
});




$("body").on('click' , '.result-unlock',  function(e){

	var obj = this;
	var id = this.id;
	id = id.split('-')[2];
	var response = confirm("Are you sure you want to block this result access");
	if(response==0)
	{ return false; }
	statusBarJs("Locking...");
	$.post("student-manager/secondary/code/block-result.php" , { admission_no : id } , function(r){
		//alert(id + ' ' + r);
		if(r ==1)
		{
			_statusBarJs("The result access was blocked successfully");
			$(obj).removeClass('fa-unlock').addClass('fa-lock');
			$(obj).removeClass('result-unlock').addClass('result-lock');
		}
		else
		{
			_statusBarJs("Operation failed. Try again!");
		}
	});
	
	e.stopPropagation(); 
});













$("body").on('click' , '.delete-staff',  function(e){

	var obj = this;
	var id = this.id;
	id = id.split('_')[1];
	var response = confirm("Are you sure you want to delete");
	if(response==0)
	{ return false; }
	statusBarJs("Deleting...");
	$.post("staff-manager/code/delete-staff.php" , { staff_id : id } , function(r){
		//alert(r);
		if(r ==1)
		{
			_statusBarJs("The user was deleted successfully");
			//alert(id);
			$("."+id).fadeOut(400);
		}
		else
		{
			_statusBarJs("Operation failed. Try again!");
		}
	});
	
	e.stopPropagation(); 
});




function scrollTop()
{
	$('html, body').animate({scrollTop: '30px'}, 400);
	}
	


function close_edit_div()
{
	$(".edit-div").fadeOut(400, function(){
		$(".fade2").hide(400);
	});
}


////////////////////////// SMS /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////


function closeSms()
{
	$('#sms-div').fadeOut(300, function(){
		$(".fade2").hide(300);
		
	});
}

function sendSms()
{
	var message = $("#single-message").val();
	var contact = $("#recipient").val();
	statusBarJs("Sending sms ...");
	$.post('communication/code/send-sms.php' , {message : message , contact_list : JSON.stringify(contact) } , function(r){
	//	alert(r);
		_statusBarJs(r);
	});
}


function openSms( number )
{
	//alert(number);
	number =  $.trim(number);
	if(number =='')
	{
		alert(" Number not found ");
		return false;
	}
	
	$("#recipient").val(number );
	$("#single-recipient").html(number );
		$(".fade2").fadeIn(300, function(){
			$("#sms-div").show(300);
			scrollTop();
		});
}


function openSmsBulk()
{
	//alert(number);
	if(contact_array.length < 1)
	{
		alert("Number not found");
		return false;
	}
	
	contact_ready = contact_array.slice();
	$(".contactDiv").html('');
	
		$(".fade2").fadeIn(300, function(){
			$("#sms-bulk-div").show(300);
			scrollTop();
			//alert(contact_ready.length);
			var i = contact_ready.length;
			var j;
			for(j =0; j < i; j++)
			{	
				
				var content = '<div style="" class="numberDiv transparent-border">';
				content +=	  '<span style="float:left">' + contact_ready[j] +' </span>'; 
				content +=	  '<i class="fa-minus-circle fa"></i> </div>';
				
				$(content).appendTo(".contactDiv");
			}
		});
}


function closeSmsBulk()
{
	$('#sms-bulk-div').fadeOut(300, function(){
		$(".fade2").hide(300);
		
	});
}


$('body').on('click' ,'.fa-minus-circle' , function(){
	var num = $(this).parent('div').find('span').text();
	num = $.trim(num);
	///alert(num);
	var i = contact_ready.indexOf(num);
		if(i != -1)
		{
			contact_ready.splice(i,1);
		}
	$(this).parent('div').fadeOut(400);
	//alert(contact_ready.length);
});


function sendBulkSms()
{
	var message = $("#bulk-message").val();
	var contact = contact_ready;
	statusBarJs("Sending sms ...");
	$.post('communication/code/send-sms.php' , {message : message , contact_list : JSON.stringify(contact) } , function(r){
	//	alert(r);
		_statusBarJs(r);
	});
}



////////////////////////// END  SMS ////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////


function print_page(page)
{
	var content = $("#"+page).html();
	//content = '<link type="text/css" rel="stylesheet" href="css/print.css" media="print" />' + '<link type="text/css" rel="stylesheet" href="css/print.css" media="screen" />'+ content;
	var myWindow;
	myWindow = window.open('print_page.php','_blank');
	myWindow.document.write(content);
	myWindow.print();
	myWindow.close();
	
	}
	
	
function printer(div)
{
$('#'+div).printElement({
            overrideElementCSS:[
		'css/printElement.css'
		]
            });
}






