/**
 *  
 */

	// 03_내장객체/06_Math.Quiz01.html
	/* 
	console.log(Math.round(123.456 * (1/100)) / (1/100));	// 십의 자리 반올림 >> 100
	console.log(Math.round(123.456 * (1/10)) / (1/10));		// 일의 자리 반올림 >> 120
	console.log(Math.round(123.456 * 1) / 1);				// 정수 반올림 >> 123
	console.log(Math.round(123.456 * 10) / 10);				// 소수 1자리 반올림 >> 123.5
	console.log(Math.round(123.456 * 100) / 100);			// 소수 2자리 반올림 >> 123.46
	console.log(Math.round(123.456 * 1000) / 1000);			// 소수 3자리 반올림 >> 123.456
	 */

	// n자리로 반올림 값을 반환하는 myRound 함수
	function myRound (n, digits) {
		digits || (digits = 0);	// digits 전달이 없으면, digits 은 0으로 처리
		return Math.round(n * Math.pow(10, digits)) / Math.pow(10, digits);
	}
	
	//04_함수/Quiz01.html
	function watch () {
		setTimeout ( function () {
			
			// 현재시간 보여주기
			var now = new Date();
			
			document.getElementById('year').textContent = now.getFullYear();
			document.getElementById('month').textContent = fillZero(now.getMonth() + 1, 2);
			document.getElementById('date').textContent = fillZero(now.getDate(), 2);
			document.getElementById('hour').textContent = now.getHours();
			document.getElementById('minute').textContent = fillZero(now.getMinutes(), 2);
			document.getElementById('second').textContent = fillZero(now.getSeconds(), 2);
			
			// 재귀 호출
			watch();
			}, 1000);
	}	// 호출
	
	//04_함수/Quiz02.html
	function fillZero (n, digits) {
		var strN = '' + n;	// 문자열로 바꾸기
		
		while (strN.length != digits) {
			strN = '0' + strN; 			
		}
		return strN;
	}
	
	//04_함수/Quiz3.html
	
	function dDay() {
		
			setTimeout(function (){
				// D-DAY 계산 및 표시
				//var d_day = new Date(2020, 10, 19, 18, 30, 30);
				var d_day = new Date('2020-12-03');
				
				// 현재 시간
				var today = new Date();
				
				// 설정 시간
				var restTime = d_day.getTime() - today.getTime();	// 남은 시간이 밀리초 단위로 저장
				var result = '';

				if (restTime <= 0) {
					// d-day가 지났음
					document.getElementById('d-day').textContent = '입니다.';
					return ;	// 더 이상 진행하지 않음
				} 
				
				// 남은 시간 계산
				restTime = parseInt(restTime / 1000);	// restTime이 초단위로 바뀜
				var second = restTime % 60;
				var minute = parseInt(restTime / 60) % 60;
				var hour = parseInt(restTime / 3600) % 24; 
				var day = parseInt(restTime / 3600) / 24;
				
				if (day > 0) {
					result += (day + '일 ');
				} 
				result += (hour + '시 ' + minute + '분 ' + second + '초');
				
				document.getElementById('d-day').textContent = result;
				
				if (day == 0) {
					document.getElementById('d-day').style.color='red';
				}
				
				// 재귀호출
				dDay();
				
			}, 1000);
			
	}
