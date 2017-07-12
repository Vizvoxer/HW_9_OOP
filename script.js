function SetClock(offset = 0) {
    var clockContainer = document.createElement("div");
    this.fullTime = true;
    var that = this;

    clockContainer.classList.add("clock");
    document.querySelector("body").appendChild(clockContainer);

        function displayTime() {
            var date = new Date();
            var localDate = date.getTime();
            var localOffset = date.getTimezoneOffset() * 60000;
            var utc = localDate + localOffset;
            var targetDate =  utc + (3600000*offset);
            var offsetDate = new Date(targetDate);
            var timeData = {
                hours : offsetDate.getHours().toString(),
                minutes : offsetDate.getMinutes().toString(),
                seconds : offsetDate.getSeconds().toString()
            };

           for(el in timeData){
                if(timeData[el].length == 1) {
                    timeData[el] = 0 + timeData[el]
                }
           }

            if (that.fullTime) {
                clockContainer.innerHTML = timeData.hours + ":" + timeData.minutes + ":" + timeData.seconds;
            } else {
                clockContainer.innerHTML = timeData.hours + ":" + timeData.minutes;
            }
        }


    clockContainer.addEventListener("click", this.toggleTimeFormat.bind(this));

    setInterval(displayTime,1000);
}

SetClock.prototype.toggleTimeFormat = function() {
    this.fullTime = !this.fullTime;
}

var ukrainianTime = new SetClock(3);

var another = new SetClock();




