var hiroName;
var dieRoll;
var dieResult;
var special;
var conflict;

var character = {
    name : "John",
    mind : 5,
    body : 5,
    ch1Stat : false,
    ch1Choice : false,
    ch1Ending : false
};


var heroButton = document.querySelector('#heroNameForm');
heroButton.addEventListener('submit', function(event) {
  event.preventDefault();
  character.name = this.querySelector('input').value;
  console.log("Character is named "+ character.name)
  introduction(character);
  document.getElementById('nameEntry').innerHTML = "";
  // document.getElementById('characterName').style.border = '2px solid white';
  document.getElementById('characterName').style.backgroundColor = "#000063";
  // document.getElementById('characterStat').style.border = '2px solid white';
  document.getElementById('characterSheet').style.backgroundColor = "#000063";
  // document.getElementById('characterInv').style.border = '2px solid white';
  document.getElementById('characterInv').style.backgroundColor = "#000063";
  document.getElementById('storyDiv').style.backgroundColor = "black";
  document.getElementById('dieBox').innerHTML = "<button id='dieShape' onclick='rollDie()'>roll D20</button>"
  updateStat(character);
});

function updateStat(input){
  document.getElementById('characterName').innerHTML = input.name;
  document.getElementById('characterStat').innerHTML = 'Mind level: ' + input.mind + '<br>Body level: ' + input.body;
  document.getElementById('characterInv').innerHTML = 'Inventory';
};

function roll(stat, die){
  dieRoll = Math.floor(Math.random()*die);
  dieResult = stat + dieRoll;
  console.log("D"+die+" rolled: "+dieRoll);
  console.log("Final result: "+dieResult);
}

function rollDie() {
  roll(0,20);
  dieRoll = dieRoll+1;
  document.getElementById('dieBox').innerHTML = "<div id='dieShape'>"+dieRoll+"</div>";
  setTimeout(function(){ document.getElementById('dieBox').innerHTML = "<button id='dieShape' onclick='rollDie()'>roll D20</button>"; }, 1000);
}

function saveFile(location) {

  var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(character));

  var dl = document.createElement('a');
    dl.href = 'data:' + data;
    dl.download = 'saveCH1.json';
    dl.id = 'save';
    dl.innerHTML = '<br>download savefile';

  document.getElementById(location).appendChild(dl);
}

function introduction(input) {
  console.log("introduction");
  console.log('mind='+input.mind);
  console.log('body='+input.body);
  var intro = document.createElement('div');
  intro.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at sem id sem scelerisque scelerisque. Donec ac efficitur elit. Maecenas dui dolor, ultricies eu consectetur et, commodo a odio. Morbi euismod lectus in arcu tincidunt, at viverra diam pulvinar. Donec ac lacus viverra, cursus dolor sed, facilisis felis. Morbi non quam eget turpis efficitur pharetra in id magna. Aliquam erat volutpat. Vivamus eget est ac dui accumsan suscipit quis vitae sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec vel massa eu eros rutrum scelerisque eget in mi. Donec consectetur turpis vitae porta tincidunt. Morbi sed eros sed elit imperdiet mollis scelerisque id ante. Cras consequat risus at ipsum dictum, pulvinar suscipit nisl laoreet. Donec in turpis quis enim consequat ultricies eu venenatis nunc. Morbi massa magna, rutrum a mollis at, aliquam et ligula. Cras eleifend consectetur commodo. Proin semper purus sed fringilla iaculis. Ut nec tincidunt mi. Nulla facilisi. Proin vestibulum lorem et rhoncus interdum. Donec scelerisque dignissim nunc id ultrices. Nunc cursus varius ornare. Mauris dictum pellentesque lacinia. Aenean facilisis, sem sed volutpat luctus, mauris neque vulputate sapien, ac porttitor velit massa et tortor. Etiam diam tellus, tristique pellentesque tincidunt vel, luctus sit amet sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent consequat tincidunt est ac egestas. Ut vestibulum feugiat hendrerit. Etiam eget nisi quis risus feugiat ullamcorper non sit amet felis. In volutpat eros in augue scelerisque tincidunt. Etiam scelerisque, metus vel lacinia fringilla, dui dolor lobortis neque, ut dignissim leo ipsum ut sem. Integer sit amet dolor ac nunc porta mollis sed in ipsum. Nulla et feugiat eros, ut commodo nibh. Donec scelerisque semper interdum. Sed rhoncus mauris arcu, at bibendum lacus vehicula eget. Donec quis tristique metus, quis dignissim felis. Aenean accumsan faucibus leo vel dignissim. Nullam non lorem sit amet leo viverra convallis at et quam. Suspendisse auctor nibh nec mauris tincidunt, quis congue ligula tincidunt. Etiam varius nulla nec arcu dapibus aliquet. Mauris finibus quam at lectus faucibus rhoncus. Curabitur vel tellus sit amet est mattis tincidunt. Etiam ac eros in erat ultricies venenatis vel at felis. Donec id mi sit amet diam consequat laoreet ac nec libero. Sed quis leo aliquam nibh tempor imperdiet. Fusce mi augue, aliquet et libero nec, maximus ullamcorper justo. Sed convallis lacus ut tincidunt fringilla. Cras congue nulla vitae neque eleifend, non aliquam nisl convallis. Morbi tristique blandit ante, sit amet pellentesque tortor mattis sagittis. Suspendisse scelerisque pulvinar sodales. Donec fringilla ac nisi ut bibendum. Nullam ut iaculis mi, sit amet dapibus urna. Quisque quis blandit odio. Nunc neque nibh, ullamcorper sit amet mollis non, faucibus condimentum diam. Aliquam rhoncus ex quis placerat tempor. Maecenas egestas sit amet nulla a interdum. Etiam volutpat rutrum tellus, in vehicula lacus. Nam semper tincidunt ligula ac tristique. Fusce tincidunt augue a nibh molestie, in finibus orci gravida. Vivamus mattis mi pharetra lectus rutrum blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.';
  // intro.innerHTML = 'This is the story of a character named ' + input.name;
  intro.id = 'introduction';
  special = document.createElement('div');
  special.innerHTML = 'Was ' + input.name + ' <a onclick="smart(character)">smart</a> or <a onclick="strong(character)">strong?</a>';
  special.id = "choice1";
  document.getElementById('story').appendChild(intro);
  document.getElementById('story').appendChild(special);
}

function smart(input) {
  document.getElementById('story').removeChild(special);
  input.mind = input.mind + 3;
  updateStat(character);
  console.log("choice smart");
  input.ch1Stat = "smart";
  console.log("mind="+input.mind);
  console.log("body="+input.body);
  var div = document.createElement('div');
  div.innerHTML = input.name + ' was a smart person.';
  div.id = 'smart';
  document.getElementById('story').appendChild(div);
  conflict();
}

function strong(input) {
  document.getElementById('story').removeChild(special);
  character.body = input.body + 3;
  updateStat(character);
  console.log("choice strong");
  input.ch1Stat = "strong";
  console.log("mind="+input.mind);
  console.log("body="+input.body);
  var div = document.createElement('div');
  div.innerHTML = input.name + ' was a strong person.';
  div.id = 'strong';
  document.getElementById('story').appendChild(div);
  conflict();
}

function conflict(input) {
  conflict = document.createElement('div');
  conflict.innerHTML = 'There was a chance to <a onclick="talk(character)">talk</a> or <a onclick="fight(character)">fight</a>.';
  conflict.id = 'choice2';
  document.getElementById('story').appendChild(conflict);
}

function talk(input) {
  document.getElementById('story').removeChild(conflict);
  console.log("choice talk");
  input.ch1Choice = "talk";
  roll(input.mind, 5);
  updateStat(character);
  if (dieResult>=9) {
    console.log('pass');
    input.ch1Ending = "pass";
    var div = document.createElement('div');
    div.innerHTML = input.name + ' was able to talk through the problem.';
    div.id = 'endingGood';
    document.getElementById('story').appendChild(div);
    saveFile("story");
  } else {
    console.log('fail');
    input.ch1Ending = "fail";
    var div = document.createElement('div');
    div.innerHTML = input.name + ' found that talking did no good here.';
    div.id = 'endingBad';
    document.getElementById('story').appendChild(div);
    saveFile("story");
  };
}

function fight(input) {
  document.getElementById('story').removeChild(conflict);
  console.log("choice fight");
  input.ch1Choice = "fight";
  roll(input.body, 5);
  updateStat(character);
  if (dieResult>=9) {
    console.log('pass');
    input.ch1Ending = "pass";
    var div = document.createElement('div');
    div.innerHTML = input.name + ' was able to fight through the problem.';
    div.id = 'endingGood';
    document.getElementById('story').appendChild(div);
    saveFile("story");
  } else {
    console.log('fail');
    input.ch1Ending = "fail";
    var div = document.createElement('div');
    div.innerHTML = input.name + ' found that fighting did no good here.';
    div.id = 'endingBad';
    document.getElementById('story').appendChild(div);
    saveFile("story");
  };
}
