/* ==================
    GLOBAL VARIABLES
 ==================== */
 let counter = {
	sec: 0,
	min: 0,
	hr: 0,
	SecConter: 0,
	minCounter: 0,
	hrCounter: 0
  };
  
  let { sec, min, hr, SecConter, minCounter, hrCounter } = counter;
  
  
  let timeInterval = "";
  
  let timerStatus = "stopped";
  
  /* ============================
	  WORKOUT TIMER ENGINE
  ================================ */
  const count = () => {
	sec++;
	if (sec / 60 == 1) {
	  sec = 0;
	  min++;
	} else {
	  if (min / 60 == 1) {
		min = 0;
		hr++;
	  }
	}
  };
  
  const addZero = () => {
	if (sec < 10) {
	  SecConter = "0" + sec.toString();
	} else {
	  SecConter = sec;
	}
	if (min < 10) {
	  minCounter = "0" + min.toString();
	} else {
	  minCounter = min;
	}
	if (hr < 10) {
	  hrCounter = "0" + hr.toString();
	} else {
	  hrCounter = hr;
	}
  };
  
  const workOutTimer = () => {
	count();
	addZero();
	document.getElementById("display").innerHTML =
	  hrCounter + ": " + minCounter + ": " + SecConter;
  };
  
  
  /* ===========================
	  START/PAUSE FUNCTIONALITY
  ============================== */
  
  const startStop = () => {
  
	if (timerStatus === "stopped") {
	  timerInterval = setInterval(workOutTimer, 1000);
	  document.getElementById("startPause").innerHTML = "pause";
	  timerStatus = "started";
	} else {
	  clearInterval(timerInterval);
	  document.getElementById("startPause").innerHTML = "start";
	  timerStatus = "stopped";
	}
  };
  
  /* =============================
	  THE RESET FUNCTIONALITY
   =============================== */
  
  const reset = () => {
	clearInterval(timerInterval);
	sec = 0;
	min = 0;
	hr = 0;
	const time = "00: 00: 00";
	document.getElementById("display").innerHTML = time;
	document.getElementById("startPause").innerHTML = "start";
  };
  