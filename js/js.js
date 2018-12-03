(function() {
  "use strict";

  var repeat = function(n, s) {
    return new Array(n + 1).join(s);
  };
  var counts = [];
  var output = "\n";
  var nodeList = document.getElementsByTagName("h3");
  for (var idx = 0; idx < nodeList.length; idx += 1) {
    var left = nodeList[idx].textContent + " ";
    var right =
      " " +
      (counts[counts.length] = nodeList[
        idx
      ].nextElementSibling.getElementsByTagName("li").length);
    output +=
      left + repeat(20 - left.length - right.length, ".") + right + "\n";
  }
  var total = String(
    counts.reduce(function(a, b) {
      return a + b;
    }, 0)
  );
  output += repeat(20, "=") + "\n";
  output += repeat(20 - total.length, " ") + total + "\n";
  output += "\n";

  // var largeCard = document.getElementById("large-card");
  // document.body.addEventListener(
  //   "mouseover",
  //   function(event) {
  //     if (event.target.tagName === "IMG") {
  //       largeCard.alt = event.target.alt;
  //       largeCard.src = event.target.src;
  //     }
  //   },
  //   false
  // );
  //
  // var searchLargeCard = document.getElementById("search-large-img");
  // document.body.addEventListener(
  //   "mouseover",
  //   function(event) {
  //     if (event.target.tagName === "IMG") {
  //       searchLargeCard.alt = event.target.alt;
  //       searchLargeCard.src = event.target.src;
  //     }
  //   },
  //   false
  // );
  let testStack = document.querySelector(".test-stack");
  let cardList =
    "Frenzied Goblin|Mogg Fanatic|Orcish Lumberjack|Lightning Bolt|Goblin Grenade|Firebolt|Galvanic Blast|Skirk Drill Sergeant|Ember Hauler|Goblin Wardriver|Mogg War Marshal|Sparksmith|Atog|Embersmith|Generator Servant|Goblin Lookout|Incinerate|Shrapnel Blast|Searing Blaze|Dragon Fodder|Krenko's Command|Tribal Flames|Arms Dealer|Spikeshot Goblin|Gempalm Incinerator|Goblin Artillery|Goblin Matron|Dragonsoul Knight|Orcish Mechanics|Hissing Iguanar|Brimstone Volley|Arc Lightning|Hordeling Outburst|Furnace Celebration|Honden of Infinite Rage|Beetleback Chief|Tar pitcher|Scrapyard Mongrel|Treasonous Ogre|Kird Chieftain|Goblin Heelcutter|Solar Blast|Aftershock|Barrage Ogre|Emrakul's Hatcher|Pyrotechnics|Kuldotha Flamefiend|Rapacious One|Chartooth Cougar|Rolling Thunder|Fireball|Disciple of the Vault|Carnophage|Diregraf Ghoul|Typhoid Rats|Gnarled Scarhide|Shambling Goblin|Executioner's Capsule|Duress|Dark Ritual|Salvage Slasher|Knight of Infamy|Dauthi Slayer|Blind Creeper|Spiteful Returned|Fallen Askari|Augur of Skulls|Mesmeric Fiend|Bile Blight|Chainer's Edict|Doom Blade|Sign in Blood|Gatekeeper of Malakir|Bone Shredder|Phyrexian Rager|Necrogen Scudder|Cadaver Imp|Liliana's Specter|Vampire Nighthawk|Ichor Slick|Read the Bones|Drag Down|Murder|Drown in Sorrow|Moriok Scavenger|Disciple of Phenax|Squelching Leeches|Paragon of Open Graves|Liliana's Shade|Faceless Butcher|Tendrils of Corruption|Pestilence|Moan of the Unhallowed|Honden of Night's Reach|Gray Merchant of Asphodel|Warren Pilferers|Nightfire Giant|Mind Sludge|Dead Ringers|Twisted Abomination|Corrupt|Enslave|Avacyn's Pilgrim|Llanowar Elves|Elves of Deep Shadow|Joraga Treespeaker|Experiment One|Sunblade Elf|Prey Upon|Rancor|Vines of Vastwood|Sakura Tribe Elder|Strangleroot Geist|Kalonian Tusker|Wild Mongrel|Shinen of Life's Roar|Sylvan Ranger|Wall of Blossoms|Albino Troll|River Boa|Mire Boa|Rampant Growth|Lignify|Sprout Swarm|Epic Confrontation|Naturalize|Civic Wayfinder|Yavimaya Elder|Grazing Gladehart|Matca Rioters|Imperious Perfect|Leatherback Baloth|Citanul Woodreaders|Cultivate|Elephant Guide|Beast Within|Kozilek's Predator|Penumbra Spider|Blastoderm|Briarhorn|Rhox Charger|Gaea's Embrace|Acidic Slime|Garruk's Packleader|Sentinel Spider|Honden of Life's Web|Baloth Woodcrasher|Durkwood Baloth|Deadwood Treefolk|Tromp the Domains|Krosan Tusker|Jugle Weaver|Pelakka Wurm|Elite Vanguard|Mardu Woe-Reaper|Steppe Lynx|Hopeful Eidolon|Akrasan Squire|Gideon's Lawkeeper|Dispeller's Capsule|Knight of Meadowgrain|Soltari Priest|Accorder Paladin|Cloistered Youth|Lone Missionary|Ajani's Pridemate|Dauntless River Marshal|Sigiled Paladin|Syndic of Tithes|Wall of Omens|Myrsmith|Aven Squire|Knight of Glory|Jourey to Nowhere|Otherworldly Journey|Disenchant|Pacifism|Guardians of Akrasa|Flickerwisp|Fiend Hunter|Banisher Priest|Kor Sanctifiers|Attended Knight|Sandsteppe Outcast|Stonecloaker|Oblivion Ring|Arrest|Empyrial Armor|Griffin Guide|Blinding Beam|Sanctum Gargoyle|Auriok Salvagers|Glimmerpoint Stag|Master Splicer|Celestial Crusader|Faith's Fetters|Honden of Cleansing Fire|Cloudgoat Ranger|Guardian of the Gateless|Serra Angel|Gleam of Resistance|Noble Templar|Urbis Protector|Phantom Bear|Delver of Secrets|Nephalia Smuggler|Enclave Cryptologist|Preordain|Ponder|Silent Departure|Azure Mage|Welkin Tern|Vapor Kin|Augur of Bolas|Frost Walker|Merfolk Looter|Narcolepsy|Essence Scatter|Mana Leak|Think Twice|Trinket Mage|Man-o'-War|Pestermite|Civilized Scholar|Jorubai Murk Lurker|Sea Gate Oracle|Prodigal Sorcerer|Calcite Snapper|Esperzoa|Claustrophobia|Dissolve|Stoic Rebuttal|Complicate|Thirst for Knowledge|Compulsive Research|Wing Splicer|Faerie Mechanist|Master Thief|Thieving Magpie|Ninja of the Deep Hours|Foresee|Wash Out|Ray of Command|Sleep|Riftwing Cloudskate|Mulldrifter|Air Servant|Mind Control|Traumatic Visions|Honden of Seeing Winds|Aethersnipe|Jetting Glasskite|Opportunity|Power Sink|Feudkiller's Verdict|Arcbound Worker|Chronomaton|Signal Pest|Origin Spellbomb|Panic Spellbomb|Pyrite Spellbomb|Bonesplitter|Trusty Machete|Arcbound Slith|Arcbound Stinger|Myr Retriever|Epochrasite|Myr Sire|Perilous Myr|Immolating Souleater|Gust Skimmer|Spined Thopter|Necropede|Porcelain Legionnaire|Prophetic Prism|Ichor Wellspring|Mycosynth Wellspring|Mind Stone|Sylvok Replica|Cathodion|Palladium Myr|Pilgrims Eye|Blinding Souleater|Kiln Walker|Moriok Replica|Skeleton Shard|Sickleslicer|Arcbound Hybrid|Etched Oracle|Juggernaut|Cogwork Librarian|Pierce Strider|Pith Driller|Slash Panther|Icy Manipulator|Serrated Arrows|Dross Golem|Clone Shell|Arcbound Bruiser|Skyreach Manta|Strandwalker|Darksteel Sentinel|Geistcatcher's Rig|Dreamstone Hedron|Tangle Golem|Ulamog's Crusher|Momentary Blink|Ardent Plea|Lyev Skynight|Ethercast Knight|Glassdust Hulk|Mortify|Pillory of the Sleepless|Tidehollow Sculler|Rally the Peasants|Flamewright|Warleader's Helix|Behemoth Sledge|Dryad Militant|Enlilsted Wurm|Qasali Pridemage|Selesnya Evangel|Agony Warp|Warped Physique|Soul Manipulation|Tidehollow Strix|Moroii|Frostburn Weird|Izzet Charm|Izzet Chronarch|Beetleform Mage|Coiling Oracle|Snakeform|Bituminous Blast|Blightning|Terminate|Murderous Redcap|Spike Jester|Consume Strength|Dreg Mangler|Putrefy|Boggart Ramgang|Branching Bolt|Ghor Clan Rampager|Savage Twister|Vengeful Rebirth|Fusion Elemental|Frontier Bivouac|Mystic Monastery|Nomad Outpost|Opulent Palace|Sandsteppe Citadel|Arcane Sanctum|Crumbling Necropolis|Jungle Shrine|Savage Lands|Seaside Citadel|Buried Ruin|Urza's Factory|Dread Statuary";

  //turn cardlist into array

  let cardArray = cardList.split("|").splice(0, 99);
  let cardPileBtns = document.querySelectorAll(".take-pile-btn");
  let cardPile1Btn = document.querySelector(".take-pile-1");
  let cardPile2Btn = document.querySelector(".take-pile-2");
  let cardPile3Btn = document.querySelector(".take-pile-3");
  let cardPile4Btn = document.querySelector(".take-pile-4");
  let cardPiles = document.querySelectorAll(".card-pile");
  let cardPileLists = document.querySelectorAll(".pile-list");
  let cardPile1 = [];
  let cardPile2 = [];
  let cardPile3 = [];
  let cardPile4 = [];
  let cardsLeft = cardArray.length;
  let cardCount = document.querySelector(".card-count");
  let player1Pile = [];
  let player2Pile = [];
  let player1Turn = true;
  console.log(cardArray);
  console.log(cardPileBtns);
  var ref = firebase.database().ref();

  var usersRef = ref.child("newCardArray");
  usersRef.set(["mountain", "forest"]);

  ref.on(
    "value",
    function(snapshot) {
      console.log(snapshot.val());
    },
    function(error) {
      console.log("Error: " + error.code);
    }
  );

  //shuffle Array
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  cardArray = shuffle(cardArray);
  console.log(cardArray);
  console.log(cardPileBtns);

  cardCount.innerHTML = cardsLeft + " Cards Left";

  cardPile1.push(cardArray.pop());
  cardPile2.push(cardArray.pop());
  cardPile3.push(cardArray.pop());
  cardPile4.push(cardArray.pop());

  function refreshVisualPiles() {
    cardsLeft = cardArray.length;
    cardCount.innerHTML = cardsLeft + " Cards Left";
    cardPileLists.forEach(function(list) {
      list.innerHTML = "";
    });

    cardPile1.forEach(function(card) {
      let newCard = document.createElement("li");
      newCard.innerHTML = `<li data-checked="true"><a href="http://gatherer.wizards.com/Pages/Card/Details.aspx?name=${card}"><img src="http://gatherer.wizards.com/Handlers/Image.ashx?name=${card}&amp;set=&amp;type=card"></a></li>`;
      cardPileLists[0].appendChild(newCard);
    });
    cardPile2.forEach(function(card) {
      let newCard = document.createElement("li");
      newCard.innerHTML = `<li data-checked="true"><a href="http://gatherer.wizards.com/Pages/Card/Details.aspx?name=${card}"><img src="http://gatherer.wizards.com/Handlers/Image.ashx?name=${card}&amp;set=&amp;type=card"></a></li>`;
      cardPileLists[1].appendChild(newCard);
    });
    cardPile3.forEach(function(card) {
      let newCard = document.createElement("li");
      newCard.innerHTML = `<li data-checked="true"><a href="http://gatherer.wizards.com/Pages/Card/Details.aspx?name=${card}"><img src="http://gatherer.wizards.com/Handlers/Image.ashx?name=${card}&amp;set=&amp;type=card"></a></li>`;
      cardPileLists[2].appendChild(newCard);
    });
    cardPile4.forEach(function(card) {
      let newCard = document.createElement("li");
      newCard.innerHTML = `<li data-checked="true"><a href="http://gatherer.wizards.com/Pages/Card/Details.aspx?name=${card}"><img src="http://gatherer.wizards.com/Handlers/Image.ashx?name=${card}&amp;set=&amp;type=card"></a></li>`;
      cardPileLists[3].appendChild(newCard);
    });
    player1Pile.forEach(function(card) {
      let newCard = document.createElement("li");
      newCard.innerHTML = `<li data-checked="true"><a href="http://gatherer.wizards.com/Pages/Card/Details.aspx?name=${card}"><img src="http://gatherer.wizards.com/Handlers/Image.ashx?name=${card}&amp;set=&amp;type=card"></a></li>`;
      cardPileLists[4].appendChild(newCard);
    });
    player2Pile.forEach(function(card) {
      let newCard = document.createElement("li");
      newCard.innerHTML = `<li data-checked="true"><a href="http://gatherer.wizards.com/Pages/Card/Details.aspx?name=${card}"><img src="http://gatherer.wizards.com/Handlers/Image.ashx?name=${card}&amp;set=&amp;type=card"></a></li>`;
      cardPileLists[5].appendChild(newCard);
    });
  }

  refreshVisualPiles();

  cardPileBtns.forEach(ele => {
    ele.addEventListener("click", event => {
      if (ele.classList.contains("take-pile-1")) {
        if (player1Turn) {
          player1Pile = player1Pile.concat(cardPile1);
          console.log("player 1 pile", player1Pile);
          cardPile1 = [cardArray.pop()];
          console.log("card pile 1", cardPile1);
          cardPile2.push(cardArray.pop());
          cardPile3.push(cardArray.pop());
          cardPile4.push(cardArray.pop());
          player1Turn = false;
        } else {
          player2Pile = player2Pile.concat(cardPile1);
          console.log("player 2 pile", player2Pile);
          cardPile1 = [cardArray.pop()];
          console.log("card pile 1", cardPile1);
          cardPile2.push(cardArray.pop());
          cardPile3.push(cardArray.pop());
          cardPile4.push(cardArray.pop());
          player1Turn = true;
        }
      } else if (ele.classList.contains("take-pile-2")) {
        if (player1Turn) {
          player1Pile = player1Pile.concat(cardPile2);
          console.log("player 1 pile", player1Pile);
          cardPile2 = [cardArray.pop()];
          console.log("card pile 2", cardPile2);
          cardPile1.push(cardArray.pop());
          cardPile3.push(cardArray.pop());
          cardPile4.push(cardArray.pop());
          player1Turn = false;
        } else {
          player2Pile = player2Pile.concat(cardPile2);
          console.log("player 2 pile", player2Pile);
          cardPile2 = [cardArray.pop()];
          console.log("card pile 2", cardPile2);
          cardPile1.push(cardArray.pop());
          cardPile3.push(cardArray.pop());
          cardPile4.push(cardArray.pop());
          player1Turn = true;
        }
      } else if (ele.classList.contains("take-pile-3")) {
        if (player1Turn) {
          player1Pile = player1Pile.concat(cardPile3);
          console.log("player 1 pile", player1Pile);
          cardPile3 = [cardArray.pop()];
          console.log("card pile 3", cardPile3);
          cardPile1.push(cardArray.pop());
          cardPile2.push(cardArray.pop());
          cardPile4.push(cardArray.pop());
          player1Turn = false;
        } else {
          player2Pile = player2Pile.concat(cardPile3);
          console.log("player 2 pile", player2Pile);
          cardPile3 = [cardArray.pop()];
          console.log("card pile 3", cardPile3);
          cardPile1.push(cardArray.pop());
          cardPile2.push(cardArray.pop());
          cardPile4.push(cardArray.pop());
          player1Turn = true;
        }
      } else if (ele.classList.contains("take-pile-4")) {
        if (player1Turn) {
          player1Pile = player1Pile.concat(cardPile4);
          console.log("player 1 pile", player1Pile);
          cardPile4 = [cardArray.pop()];
          console.log("card pile 4", cardPile4);
          cardPile1.push(cardArray.pop());
          cardPile2.push(cardArray.pop());
          cardPile3.push(cardArray.pop());
          player1Turn = false;
        } else {
          player2Pile = player2Pile.concat(cardPile4);
          console.log("player 2 pile", player2Pile);
          cardPile4 = [cardArray.pop()];
          console.log("card pile 4", cardPile4);
          cardPile1.push(cardArray.pop());
          cardPile2.push(cardArray.pop());
          cardPile3.push(cardArray.pop());
          player1Turn = true;
        }
      }
      refreshVisualPiles();
    });
  });

  // cardPileBtns.forEach(ele => {
  //   ele.addEventListener("click", () => {
  //     let card = cardArray.pop();
  //     console.log("card", card);
  //     cardsLeft = cardArray.length;
  //     cardCount.innerHTML = cardsLeft + " Cards Left";
  //   });
  // });
})();

//Alex's work

// cardArray.forEach(ele => {
//   let newCard = document.createElement("li");
//   newCard.innerHTML = `<li data-checked="true"><a href="http://gatherer.wizards.com/Pages/Card/Details.aspx?name=${ele}"><img src="http://gatherer.wizards.com/Handlers/Image.ashx?name=${ele}&amp;set=&amp;type=card" /></a></li>`;
//   testStack.append(newCard);
// });
//
