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

  let cardList =
    "Frenzied Goblin|Mogg Fanatic|Orcish Lumberjack|Lightning Bolt|Goblin Grenade|Firebolt|Galvanic Blast|Skirk Drill Sergeant|Ember Hauler|Goblin Wardriver|Mogg War Marshal|Sparksmith|Atog|Embersmith|Generator Servant|Goblin Lookout|Incinerate|Shrapnel Blast|Searing Blaze|Dragon Fodder|Krenko's Command|Tribal Flames|Arms Dealer|Spikeshot Goblin|Gempalm Incinerator|Goblin Artillery|Goblin Matron|Dragonsoul Knight|Orcish Mechanics|Hissing Iguanar|Brimstone Volley|Arc Lightning|Hordeling Outburst|Furnace Celebration|Honden of Infinite Rage|Beetleback Chief|Tar pitcher|Scrapyard Mongrel|Treasonous Ogre|Kird Chieftain|Goblin Heelcutter|Solar Blast|Aftershock|Barrage Ogre|Emrakul's Hatcher|Pyrotechnics|Kuldotha Flamefiend|Rapacious One|Chartooth Cougar|Rolling Thunder|Fireball|Disciple of the Vault|Carnophage|Diregraf Ghoul|Typhoid Rats|Gnarled Scarhide|Shambling Goblin|Executioner's Capsule|Duress|Dark Ritual|Salvage Slasher|Knight of Infamy|Dauthi Slayer|Blind Creeper|Spiteful Returned|Fallen Askari|Augur of Skulls|Mesmeric Fiend|Bile Blight|Chainer's Edict|Doom Blade|Sign in Blood|Gatekeeper of Malakir|Bone Shredder|Phyrexian Rager|Necrogen Scudder|Cadaver Imp|Liliana's Specter|Vampire Nighthawk|Ichor Slick|Read the Bones|Drag Down|Murder|Drown in Sorrow|Moriok Scavenger|Disciple of Phenax|Squelching Leeches|Paragon of Open Graves|Liliana's Shade|Faceless Butcher|Tendrils of Corruption|Pestilence|Moan of the Unhallowed|Honden of Night's Reach|Gray Merchant of Asphodel|Warren Pilferers|Nightfire Giant|Mind Sludge|Dead Ringers|Twisted Abomination|Corrupt|Enslave|Avacyn's Pilgrim|Llanowar Elves|Elves of Deep Shadow|Joraga Treespeaker|Experiment One|Sunblade Elf|Prey Upon|Rancor|Vines of Vastwood|Sakura Tribe Elder|Strangleroot Geist|Kalonian Tusker|Wild Mongrel|Shinen of Life's Roar|Sylvan Ranger|Wall of Blossoms|Albino Troll|River Boa|Mire Boa|Rampant Growth|Lignify|Sprout Swarm|Epic Confrontation|Naturalize|Civic Wayfinder|Yavimaya Elder|Grazing Gladehart|Matca Rioters|Imperious Perfect|Leatherback Baloth|Citanul Woodreaders|Cultivate|Elephant Guide|Beast Within|Kozilek's Predator|Penumbra Spider|Blastoderm|Briarhorn|Rhox Charger|Gaea's Embrace|Acidic Slime|Garruk's Packleader|Sentinel Spider|Honden of Life's Web|Baloth Woodcrasher|Durkwood Baloth|Deadwood Treefolk|Tromp the Domains|Krosan Tusker|Jugle Weaver|Pelakka Wurm|Elite Vanguard|Mardu Woe-Reaper|Steppe Lynx|Hopeful Eidolon|Akrasan Squire|Gideon's Lawkeeper|Dispeller's Capsule|Knight of Meadowgrain|Soltari Priest|Accorder Paladin|Cloistered Youth|Lone Missionary|Ajani's Pridemate|Dauntless River Marshal|Sigiled Paladin|Syndic of Tithes|Wall of Omens|Myrsmith|Aven Squire|Knight of Glory|Jourey to Nowhere|Otherworldly Journey|Disenchant|Pacifism|Guardians of Akrasa|Flickerwisp|Fiend Hunter|Banisher Priest|Kor Sanctifiers|Attended Knight|Sandsteppe Outcast|Stonecloaker|Oblivion Ring|Arrest|Empyrial Armor|Griffin Guide|Blinding Beam|Sanctum Gargoyle|Auriok Salvagers|Glimmerpoint Stag|Master Splicer|Celestial Crusader|Faith's Fetters|Honden of Cleansing Fire|Cloudgoat Ranger|Guardian of the Gateless|Serra Angel|Gleam of Resistance|Noble Templar|Urbis Protector|Phantom Bear|Delver of Secrets|Nephalia Smuggler|Enclave Cryptologist|Preordain|Ponder|Silent Departure|Azure Mage|Welkin Tern|Vaporkin|Augur of Bolas|Frost Walker|Merfolk Looter|Narcolepsy|Essence Scatter|Mana Leak|Think Twice|Trinket Mage|Man-o'-War|Pestermite|Civilized Scholar|Jorubai Murk Lurker|Sea Gate Oracle|Prodigal Sorcerer|Calcite Snapper|Esperzoa|Claustrophobia|Dissolve|Stoic Rebuttal|Complicate|Thirst for Knowledge|Compulsive Research|Wing Splicer|Faerie Mechanist|Master Thief|Thieving Magpie|Ninja of the Deep Hours|Foresee|Wash Out|Ray of Command|Sleep|Riftwing Cloudskate|Mulldrifter|Air Servant|Mind Control|Traumatic Visions|Honden of Seeing Winds|Aethersnipe|Jetting Glasskite|Opportunity|Power Sink|Feudkiller's Verdict|Arcbound Worker|Chronomaton|Signal Pest|Origin Spellbomb|Panic Spellbomb|Pyrite Spellbomb|Bonesplitter|Trusty Machete|Arcbound Slith|Arcbound Stinger|Myr Retriever|Epochrasite|Myr Sire|Perilous Myr|Immolating Souleater|Gust Skimmer|Spined Thopter|Necropede|Porcelain Legionnaire|Prophetic Prism|Ichor Wellspring|Mycosynth Wellspring|Mind Stone|Sylvok Replica|Cathodion|Palladium Myr|Pilgrims Eye|Blinding Souleater|Kiln Walker|Moriok Replica|Skeleton Shard|Sickleslicer|Arcbound Hybrid|Etched Oracle|Juggernaut|Cogwork Librarian|Pierce Strider|Pith Driller|Slash Panther|Icy Manipulator|Serrated Arrows|Dross Golem|Clone Shell|Arcbound Bruiser|Skyreach Manta|Strandwalker|Darksteel Sentinel|Geistcatcher's Rig|Dreamstone Hedron|Tangle Golem|Ulamog's Crusher|Momentary Blink|Ardent Plea|Lyev Skynight|Ethercaste Knight|Glassdust Hulk|Mortify|Pillory of the Sleepless|Tidehollow Sculler|Rally the Peasants|Flamewright|Warleader's Helix|Behemoth Sledge|Dryad Militant|Enlilsted Wurm|Qasali Pridemage|Selesnya Evangel|Agony Warp|Warped Physique|Soul Manipulation|Tidehollow Strix|Moroii|Frostburn Weird|Izzet Charm|Izzet Chronarch|Beetleform Mage|Coiling Oracle|Snakeform|Bituminous Blast|Blightning|Terminate|Murderous Redcap|Spike Jester|Consume Strength|Dreg Mangler|Putrefy|Boggart Ram-Gang|Branching Bolt|Ghor Clan Rampager|Savage Twister|Vengeful Rebirth|Fusion Elemental|Frontier Bivouac|Mystic Monastery|Nomad Outpost|Opulent Palace|Sandsteppe Citadel|Arcane Sanctum|Crumbling Necropolis|Jungle Shrine|Savage Lands|Seaside Citadel|Buried Ruin|Urza's Factory|Dread Statuary";

  //turn cardlist into array
  let cardArray = cardList.split("|");
  let cardPileBtns = document.querySelectorAll(".take-pile-btn");
  let cardPile1Btn = document.querySelector(".take-pile-1");
  let cardPile2Btn = document.querySelector(".take-pile-2");
  let cardPile3Btn = document.querySelector(".take-pile-3");
  let cardPile4Btn = document.querySelector(".take-pile-4");
  let cardPiles = document.querySelectorAll(".card-pile");
  let cardPileLists = document.querySelectorAll(".pile-list");
  let cardPile1 = {
    number: 0,
    array: []
  }
  let cardPile2 = {
    number: 1,
    array: []
  }
  let cardPile3 = {
    number: 2,
    array: []
  }
  let cardPile4 = {
    number: 3,
    array: []
  }
  let player1Pile = {
    number: 4,
    array: []
  }
  let player2Pile = {
    number: 5,
    array: []
  }
  let cardsLeft = cardArray.length;
  let cardCount = document.querySelector(".card-count");
  let player1Turn = true;
  console.log(cardArray);
  console.log(cardPileBtns);
  const ref = firebase.database().ref();
  // let activeDraft = ref.child("activeDraftFlag");

  // activeDraft.set(true);

  // ref.on(
  //   "value",
  //   function(snapshot) {
  //     console.log(snapshot.val());
  //   },
  //   function(error) {
  //     console.log("Error: " + error.code);
  //   }
  // );

  // function getActiveDraftFlag() {
  //   return activeDraft.once('value').then(function(snapshot) {
  //     return snapshot.val();
  //   })
  // };

  function getData(dataString) {
    return ref.child(dataString).once('value').then(function(snapshot) {
      return snapshot.val();
    })
  };

  function setData(dataString,value) {
    ref.child(dataString).set(value)
  };

  function initializeDraft() {
    getData("activeDraftFlag").then(function(res) {
      console.log(res);
      if(!res) {
        cardArray = shuffleArray(cardArray).splice(0,100);
        cardPile1.array.push(cardArray.pop());
        cardPile2.array.push(cardArray.pop());
        cardPile3.array.push(cardArray.pop());
        cardPile4.array.push(cardArray.pop());
        setData("draftPoolRemaining",cardArray);
        setData("cardPile1",{number:0,array:cardPile1});
        setData("cardPile2",{number:1,array:cardPile2});
        setData("cardPile3",{number:2,array:cardPile3});
        setData("cardPile4",{number:3,array:cardPile4});
        setData("player1Pile",[""]);
        setData("player2Pile",[""]);
        setData("activeDraftFlag",true);
        setData("player1Turn",true);
        refreshVisualPiles();
      }
    })
  };
    

  initializeDraft();

  // function initializeDraft() {
  //   let activeFlag = getData("activeDraftFlag");
  //   if(activeFlag) {
  //     cardPile1 = getData("cardPile1");
  //     cardPile2 = getData("cardPile2");
  //     cardPile3 = getData("cardPile3");
  //     cardPile4 = getData("cardPile4");
  //     player1Pile = getData("player1Pile");
  //     player2Pile = getData("player2Pile");
  //     cardArray = getData("draftPoolRemaining");
  //   }
  //   else {
  //     cardPile1 = {
  //       number: 0,
  //       array: []
  //     }
  //     cardPile2 = {
  //       number: 1,
  //       array: []
  //     }
  //     cardPile3 = {
  //       number: 2,
  //       array: []
  //     }
  //     cardPile4 = {
  //       number: 3,
  //       array: []
  //     }
  //     player1Pile = {
  //       number: 4,
  //       array: []
  //     }
  //     player2Pile = {
  //       number: 5,
  //       array: []
  //     }
  //     cardArray = shuffleArray(cardArray).splice(0,99);
  //   }
  // };

  //shuffle Array
  function shuffleArray(array) {
    for (var i = array.length -1; i>0; i--) {
      var j = Math.floor(Math.random() * (i+1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  // cardArray = shuffleArray(cardArray).splice(0,99);

  cardCount.innerHTML = cardsLeft + " Cards Left";

  // cardPile1.array.push(cardArray.pop());
  // cardPile2.array.push(cardArray.pop());
  // cardPile3.array.push(cardArray.pop());
  // cardPile4.array.push(cardArray.pop());

  function populatePile(pile) {
    pile.array.forEach(function(card) {
      let newCard = document.createElement("li");
      newCard.innerHTML = `<li data-checked="true"><a href="http://gatherer.wizards.com/Pages/Card/Details.aspx?name=${card}"><img src="http://gatherer.wizards.com/Handlers/Image.ashx?name=${card}&amp;set=&amp;type=card"></a></li>`;
      cardPileLists[pile.number].appendChild(newCard);
    })
  }

  function refreshVisualPiles() {
    cardsLeft = cardArray.length;
    cardCount.innerHTML = cardsLeft + " Cards Left";
    cardPileLists.forEach(function(list) {
      list.innerHTML = "";
    });

    populatePile(cardPile1);
    populatePile(cardPile2);
    populatePile(cardPile3);
    populatePile(cardPile4);
    populatePile(player1Pile);
    populatePile(player2Pile);
  }

  // refreshVisualPiles();

  function pickPile(cardPile) {
    getData("player1Turn").then(function(res) {
      if(res) {
        player1Pile.array = player1Pile.array.concat(cardPile.array);
        setData("player1Pile",player1Pile);
        cardPile.array = [];
        cardPile1.array.push(cardArray.pop());
        setData("cardPile1",cardPile1);
        cardPile2.array.push(cardArray.pop());
        setData("cardPile2",cardPile2);
        cardPile3.array.push(cardArray.pop());
        setData("cardPile3",cardPile3);
        cardPile4.array.push(cardArray.pop());
        setData("cardPile4",cardPile4);
        setData("draftPoolRemaining",cardArray);
      }
      else {
        player2Pile.array = player2Pile.array.concat(cardPile.array);
        setData("player2Pile",player2Pile);
        cardPile.array = [];
        cardPile1.array.push(cardArray.pop());
        setData("cardPile1",cardPile1);
        cardPile2.array.push(cardArray.pop());
        setData("cardPile2",cardPile2);
        cardPile3.array.push(cardArray.pop());
        setData("cardPile3",cardPile3);
        cardPile4.array.push(cardArray.pop());
        setData("cardPile4",cardPile4);
        setData("draftPoolRemaining",cardArray);
      }
      player1Turn = !player1Turn;
      setData("player1Turn",player1Turn);
    });
  };

  cardPileBtns.forEach(ele => {
    ele.addEventListener("click", event => {
      switch(ele.classList[1]) {
        case "take-pile-1": 
          pickPile(cardPile1)
          break;
        case "take-pile-2": 
          pickPile(cardPile2)
          break;
        case "take-pile-3": 
          pickPile(cardPile3)
          break;
        case "take-pile-4": 
          pickPile(cardPile4)
          break;
      }
      refreshVisualPiles();
    });
  });
})();
