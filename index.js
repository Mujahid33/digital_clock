showTime = () => {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  hour = (hour < 10) ? `0${hour}` : hour;
  minute = (minute < 10) ? `0${minute}` : minute;
  second = (second < 10) ? `0${second}` : second;

  let displayTime = `${hour}:${minute}:${second}`;

  document.getElementById('clock').innerHTML = displayTime;
}

updateTime = () => {
  setInterval(showTime, 1000);
}

updateTime();