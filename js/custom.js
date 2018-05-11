var portfolio = [
    {'nama-project': 'Project 1'},
    {'nama-project': 'Project 2'},
    {'nama-project': 'Project 3'},
    {'nama-project': 'Project 4'},
    {'nama-project': 'Project 5'},
    {'nama-project': 'Project 6'},
    {'nama-project': 'Project 7'},
    {'nama-project': 'Project 8'},
    {'nama-project': 'Project 9'},
    {'nama-project': 'Project 10'},
    {'nama-project': 'Project 11'},
    {'nama-project': 'Project 12'},
];

var galery = [
    {'nama-galery': 'Galery1'},
    {'nama-galery': 'Galery2'},
    {'nama-galery': 'Galery3'},
    {'nama-galery': 'Galery4'},
    {'nama-galery': 'Galery5'},
    {'nama-galery': 'Galery6'},
    {'nama-galery': 'Galery7'},
    {'nama-galery': 'Galery8'},
    {'nama-galery': 'Galery9'},
];

if(portfolio.length > 0){
    for(var i in portfolio){
        $(".list-portfolio").append(`
            <div class='box'>`+ portfolio[i]['nama-project'] +`</div>
        `);
    }
} else {
    $(".list-portfolio").append("<h3>Data Tidak ada</h3");
}

if(galery > 0){
    for(var i in galery){
        $(".list-galery").append(`
            <div class="col-md-3"><img src="img/`+ galery[i]['nama-galery'] +`.jpg" alt="Profile Image" class="img-circle img-responsive"></div>
        `);
    }
} else {
    $(".list-galery").append("<h3>Data Tidak ada</h3");
}

$(".masthead-nav li").click(function(){
	$(".masthead-nav li").removeClass("active");
	$(this).addClass("active");
	$(".row").fadeOut();
	$(".row#"+$(this).attr("target")).delay(500).fadeIn("slow");
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