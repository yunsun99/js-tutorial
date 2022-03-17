const clockTitle = document.querySelector('.js-clock');

function getDay() {
  const date = new Date();
  const christmas = new Date('2022-12-25T00:00:00');
  const leftTime = christmas - date;
  const leftDays = Math.floor(leftTime / 1000 / 60 / 60 / 24);
  const leftHours = String(
    Math.floor((leftTime / 1000 / 60 / 60) % 24)
  ).padStart(2, '0');
  const leftMinutes = String(Math.floor((leftTime / 1000 / 60) % 60)).padStart(
    2,
    '0'
  );
  const leftSeconds = String(Math.floor((leftTime / 1000) % 60)).padStart(
    2,
    '0'
  );

  clockTitle.innerText = `${leftDays}d ${leftHours}h ${leftMinutes}m ${leftSeconds}s`;
}

getDay();
setInterval(getDay, 1000);
