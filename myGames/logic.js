const modal = document.querySelector('#modal');
var openD = document.getElementById("open-button");
var closeD = document.getElementById("close-button");

openD.addEventListener("click", function() {
    modal.show();
  });

  closeD.addEventListener("click", function() {
    modal.close();
  });

  function Entry(date, season, version, track, difficulty, raceLength, place, fastestLap, totalRaceTime, motoClass){
    this.date = date  
    this.season = season
      this.version = version
      this.track = track
      this.difficulty
      this.difficulty = difficulty
      this.raceLength = raceLength
      this.place = place
      this.fastestLap = fastestLap
      this.totalRaceTime = totalRaceTime
      this.motoClass = motoClass
  }

  function getMonthYear(date) {
    const selectedDate = new Date(date);
    const month = selectedDate.getMonth(); // Months are 0-based
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const year = selectedDate.getFullYear();
    console.log(`${date.value}`);
    console.log(`${months[month]}, ${year}`);
    console.log(typeof(year));
    stringyear = year.toString()

    console.log(typeof(stringyear));
    return `${months[month].slice(0, 3)} '${stringyear.slice(2, 4)}`;
  }

  function addToList(){
    // create object
    var date = document.getElementById("date").value
    var season = document.getElementById("season").value
    var version = document.getElementById("version-select");
    var selectedValue = version.options[version.selectedIndex].value;
    var track = document.getElementById("track").value;
    var  difficulty = document.getElementById("difficulty").value;
    var  raceLength = document.getElementById("race-length").value;
    var  place = document.getElementById("place").value;
    var  fastestLap = document.getElementById("fastest-lap").value;
    var  totalRaceTime = document.getElementById("total-race-time").value;
    var  motoClass = document.getElementById("moto-class").value;

    console.log(selectedValue);
    let entry = new Entry(getMonthYear(date), season, selectedValue, track, difficulty, raceLength, place, fastestLap, totalRaceTime, motoClass)
  
    console.log("ok to this point")
    // add object to list
    qatar.push(entry)
    // update the display
    var parentElement = document.getElementById('previous-results');
    var divsToRemove = parentElement.querySelectorAll('div:not(:nth-child(-n+4))');

    // Jedes ausgewählte Div-Element entfernen
    divsToRemove.forEach(function(div) {
      div.remove();
});
    updateDisplay(entry)
    return false
  }

  function updateDisplay(entry){
    console.log("and ok to this point")
    var t = "text"
    const myDiv = document.getElementById('previous-results');
    for(let i = 0; i<qatar.length; i++){
      const one = document.createElement('div');
      one.textContent = qatar[i].season
      const two = document.createElement('div');
      two.textContent = qatar[i].place
      const three = document.createElement('div');
      three.textContent = qatar[i].fastestLap
      const four = document.createElement('div');
      four.textContent = qatar[i].totalRaceTime

      myDiv.appendChild(one)
      myDiv.appendChild(two)
      myDiv.appendChild(three)
      myDiv.appendChild(four)
    }
      
      
    return false
  }
  let qatar = [];

  // task list:
  // - local Storage, so you don't lose your data
  // improve the look
  // - add more tracks
  // make the "open module" and "close module" the same thing.