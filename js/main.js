function heightcontent() {		
	try{
		var divTop = $('#s4-workspace').offset().top; // full list page 
		var height = $(this).height() - divTop; //- $('#footer').outerHeight();
		$('#s4-workspace').outerHeight(height);
		
		var qrStr = window.location.search;
		var spQrStr = qrStr.substring(1);
		var FormEle = $(".Form-ds");
		if(FormEle != undefined) { 
		if(FormEle.offset() != undefined){
			var divTop2 = FormEle.offset().top;
			var iScrollHeight = FormEle.prop("scrollHeight");
			var height2 = $(this).height() - divTop2 - $('.div-link').outerHeight() - $('.divBottom').outerHeight() - 20 ;
			if (iScrollHeight < height2 && spQrStr.indexOf('IsDlg=1')!= -1)
				{
					FormEle.css('height', 'auto');
				}
				else
				{
					FormEle.outerHeight(height2) + FormEle.css('overflow-y', 'auto');
				}
			}
		}
	}
	catch(e){
		console.log(e);
	}

}
$(window).load(heightcontent);
$(window).resize(heightcontent);
