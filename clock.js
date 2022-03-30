const updateTime = () => {
  const currentTime = new Date();

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  const hoursHand = document.querySelector(".hours");
  const minutesHand = document.querySelector(".minutes");
  const secondsHand = document.querySelector(".seconds");

  if (seconds === 0 || minutes === 0 || hours === 0 ){
    secondsHand.style.transitionDuration = '0s' ;       
  }

  const hoursHandDeg = ((hours / 12) * 360) - 90;
  const minutesHandDeg = ((minutes / 60) * 360) - 90;
  const secondsHandDeg = ((seconds / 60) * 360) - 90 ;

  hoursHand.style.transform = `rotate(${hoursHandDeg}deg)`;
  minutesHand.style.transform = `rotate(${minutesHandDeg}deg)`;
  secondsHand.style.transform = `rotate(${secondsHandDeg}deg)`;

  console.log( `second : ${seconds} , degree : ${secondsHandDeg}`  ) ; 

};

setInterval(updateTime, 1000);

