$(".btn_clinic").click( function() {
	
	$.getJSON("clinic.json",function(obj){
		
		$.each(obj, function(key, value) {
		 $("ul".append("<li>"+value.clinic_name+"</li>");
	});
		
		
		});
	
});