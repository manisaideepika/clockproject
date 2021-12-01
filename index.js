function clock(){
	var hours = document.getElementById('hour');
	var minutes = document.getElementById('minutes');
	var seconds = document.getElementById('seconds');
	var period = document.getElementById('period');

	

	var h = new Date().getHours();
	var m = new Date().getMinutes();
	var s = new Date().getSeconds();
	var am = "AM";

	
	if(h == 0){
		h = 12;
		am= "PM";
		
	}
	if(h > 12){
		h = (h - 12);
		am = "PM";
	}

	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;

	hours.innerHTML = h;
	minutes.innerHTML = m;
	seconds.innerHTML = s;
	period.innerHTML = am;

}

var interval = setInterval(clock, 1000);

