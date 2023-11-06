const modal = document.querySelector('#modal');
var openD = document.getElementById("open-button");
var closeD = document.getElementById("close-button");

openD.addEventListener("click", function() {
    modal.show();
  });

  closeD.addEventListener("click", function() {
    modal.close();
  });

  function Entry(date, season, version){
    this.date = date  
    this.season = season
      this.version = version
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
    const version = document.getElementById("version-select");
    const selectedValue = version.options[version.selectedIndex].value;
    console.log(selectedValue);
    let entry = new Entry(getMonthYear(date), season, selectedValue)
    console.log("ok to this point")
    // add object to list
    qatar.push(entry)
    // update the display
    // document.getElementById("previous-results").innerHTML = ""
    updateDisplay(entry)
    return false
  }

  function updateDisplay(entry){
    console.log("and ok to this point")
    var t = "text"
    const myDiv = document.getElementById('previous-results');
    const myNewDiv = document.createElement('div');
    const myP = document.createElement('p');
    myP.innerText = `Season ${entry.season} ${entry.version} ${entry.date}`
    myNewDiv.appendChild(myP)
    myDiv.appendChild(myNewDiv)
      
      
    return false
  }

  let qatar = [];