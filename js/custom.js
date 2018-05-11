$(".masthead-nav li").click(function(){
	$(".masthead-nav li").removeClass("active");
	$(this).addClass("active");
	$(".row").hide();
	$(".row#"+$(this).attr("target")).show();
});

$("#send-comment").click(function(){
    if($("[name='nama-comment']").val() && $("[name='comment']").val()){
        $(".list-comment").append(`<div class="col-sm-12" style="padding: 0px">
          <div class="col-md-3"><img src="img/user.png" alt="Profile Image" class="img-circle img-responsive" style=""\></div>
          <div class="col-md-9 name-comment">`+ $("[name='nama-comment']").val() +`</div>
          <div class="col-md-9 comment">`+ $("[name='comment']").val() +`</div>
        </div>`);
    } else {
        alert("Data tidak boleh kosong.")
    }
});

var ctx = document.getElementById("skillChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["PHP, Laravel", "Python, Tornado", "HTML, CSS", "Javacript, Jquery"],
        datasets: [{
            label: 'Skill and Passion',
            data: [13, 11, 17, 15],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});