var MSG_TYPE = "";
$(".b9-msgSend-box-content button").click(function(event) {
	/* Act on the event */
	if($(this).hasClass('btn-default')){
		$(".b9-msgSend-box-content button").removeClass('btn-success').addClass('btn-default');
		$(this).removeClass('btn-default').addClass('btn-success');
		MSG_TYPE = $(this).html();
		// alert(MSG_TYPE);
	}
	else{
		$(".b9-msgSend-box-content button").removeClass('btn-success').addClass('btn-default');
	}
});

$("#b9-msgSend-cancel").click(function(event) {
	/* Act on the event */
	$("#editor").text("");
});

$("#b9-msgSend-submit").click(function(event) {
	/* Act on the event */
	var msg;
	msg = $("#editor").children().html();
	if($(".b9-msgSend-box-content input").val() && MSG_TYPE && $("#editor p").text()){
		var data = {
			num: String,
			type: MSG_TYPE,
			title: $(".b9-msgSend-box-content input").val(),
			content: msg,
		};
		$.ajax({
			url: '/getMsg',
			type: 'GET',
			dataType: 'json',
		}).done(function(docs){
			if(docs){
				data.num = docs.length;
				
			}
			else{
				data.num = 0;
			}
			
				$.ajax({
					url: '/addMsg',
					type: 'POST',
					dataType: 'json',
					data: data,
				})
				.done(function() {
					alert("添加资讯成功");
				});
				
				
			getMsg();
			$("#editor p").text("");
		});
	}
	else{
		alert("请完整填写内容");
	}

});
getMsg();
function getMsg(){
	
	$.ajax({
		url: '/getMsg',
		type: 'GET',
		dataType: 'json',
	}).done(function(docs){
		$(".b9-msgSendManage-box").html("");
		for(var i=0;i<docs.length;i++){
			var list = makeList(docs[i].num, docs[i].title, docs[i].type);
			$(".b9-msgSendManage-box").append(list);
		}

		$(".list-group").click(function(event) {
			/* Act on the event */
			var num = $(this).children("a").children("h4").children("span").html();
			$.ajax({
				url: '/getMsg',
				type: 'GET',
				dataType: 'json',
			})
			.done(function(docs) {
				// console.log("success");
				var obj = docs[num];
				var type = obj.type;
				var label = "label-default";
				$(".msgTitle").html(obj.title);
				$(".msgType").children("p").children("span").html(obj.type);
				switch(type){
					case "藤椒百科":
						label = "label-primary";
						break;
					case "锈病解决":
						label = "label-success";
						break;
					case "虫害解决":
						label = "label-danger";
						break;
					case "干旱解决":
						label = "label-warning";
						break;
					case "冻害解决":
						label = "label-info";
						break;
				}
				$(".msgType").children("p").children("span").addClass(label);
				$(".msgMsg").html(obj.content);
				console.log(docs[0].type);
			});
			
		});
		

	});
}

function makeList(num,title,type){
	var label;
	switch(type){
		case "藤椒百科":
			label = "label-primary";
			break;
		case "锈病解决":
			label = "label-success";
			break;
		case "虫害解决":
			label = "label-danger";
			break;
		case "干旱解决":
			label = "label-warning";
			break;
		case "冻害解决":
			label = "label-info";
			break;

	}
	return '<div class="list-group" data-toggle="modal" data-target="#msgModal"><a class="list-group-item"><h4 class="list-group-item-heading"><span style="color:#f96;">'+num+'</span>     '+title+'</h4><span class="label '+ label +'">'+type+'</span></a></div>';
}


