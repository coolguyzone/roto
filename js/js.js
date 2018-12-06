(function() {
  "use strict";

  // let cardList =
  //   "Frenzied Goblin|Mogg Fanatic|Orcish Lumberjack|Lightning Bolt|Goblin Grenade|Firebolt|Galvanic Blast|Skirk Drill Sergeant|Ember Hauler|Goblin Wardriver|Mogg War Marshal|Sparksmith|Atog|Embersmith|Generator Servant|Goblin Lookout|Incinerate|Shrapnel Blast|Searing Blaze|Dragon Fodder|Krenko's Command|Tribal Flames|Arms Dealer|Spikeshot Goblin|Gempalm Incinerator|Goblin Artillery|Goblin Matron|Dragonsoul Knight|Orcish Mechanics|Hissing Iguanar|Brimstone Volley|Arc Lightning|Hordeling Outburst|Furnace Celebration|Honden of Infinite Rage|Beetleback Chief|Tar pitcher|Scrapyard Mongrel|Treasonous Ogre|Kird Chieftain|Goblin Heelcutter|Solar Blast|Aftershock|Barrage Ogre|Emrakul's Hatcher|Pyrotechnics|Kuldotha Flamefiend|Rapacious One|Chartooth Cougar|Rolling Thunder|Fireball|Disciple of the Vault|Carnophage|Diregraf Ghoul|Typhoid Rats|Gnarled Scarhide|Shambling Goblin|Executioner's Capsule|Duress|Dark Ritual|Salvage Slasher|Knight of Infamy|Dauthi Slayer|Blind Creeper|Spiteful Returned|Fallen Askari|Augur of Skulls|Mesmeric Fiend|Bile Blight|Chainer's Edict|Doom Blade|Sign in Blood|Gatekeeper of Malakir|Bone Shredder|Phyrexian Rager|Necrogen Scudder|Cadaver Imp|Liliana's Specter|Vampire Nighthawk|Ichor Slick|Read the Bones|Drag Down|Murder|Drown in Sorrow|Moriok Scavenger|Disciple of Phenax|Squelching Leeches|Paragon of Open Graves|Liliana's Shade|Faceless Butcher|Tendrils of Corruption|Pestilence|Moan of the Unhallowed|Honden of Night's Reach|Gray Merchant of Asphodel|Warren Pilferers|Nightfire Giant|Mind Sludge|Dead Ringers|Twisted Abomination|Corrupt|Enslave|Avacyn's Pilgrim|Llanowar Elves|Elves of Deep Shadow|Joraga Treespeaker|Experiment One|Sunblade Elf|Prey Upon|Rancor|Vines of Vastwood|Sakura Tribe Elder|Strangleroot Geist|Kalonian Tusker|Wild Mongrel|Shinen of Life's Roar|Sylvan Ranger|Wall of Blossoms|Albino Troll|River Boa|Mire Boa|Rampant Growth|Lignify|Sprout Swarm|Epic Confrontation|Naturalize|Civic Wayfinder|Yavimaya Elder|Grazing Gladehart|Matca Rioters|Imperious Perfect|Leatherback Baloth|Citanul Woodreaders|Cultivate|Elephant Guide|Beast Within|Kozilek's Predator|Penumbra Spider|Blastoderm|Briarhorn|Rhox Charger|Gaea's Embrace|Acidic Slime|Garruk's Packleader|Sentinel Spider|Honden of Life's Web|Baloth Woodcrasher|Durkwood Baloth|Deadwood Treefolk|Tromp the Domains|Krosan Tusker|Jugle Weaver|Pelakka Wurm|Elite Vanguard|Mardu Woe-Reaper|Steppe Lynx|Hopeful Eidolon|Akrasan Squire|Gideon's Lawkeeper|Dispeller's Capsule|Knight of Meadowgrain|Soltari Priest|Accorder Paladin|Cloistered Youth|Lone Missionary|Ajani's Pridemate|Dauntless River Marshal|Sigiled Paladin|Syndic of Tithes|Wall of Omens|Myrsmith|Aven Squire|Knight of Glory|Journey to Nowhere|Otherworldly Journey|Disenchant|Pacifism|Guardians of Akrasa|Flickerwisp|Fiend Hunter|Banisher Priest|Kor Sanctifiers|Attended Knight|Sandsteppe Outcast|Stonecloaker|Oblivion Ring|Arrest|Empyrial Armor|Griffin Guide|Blinding Beam|Sanctum Gargoyle|Auriok Salvagers|Glimmerpoint Stag|Master Splicer|Celestial Crusader|Faith's Fetters|Honden of Cleansing Fire|Cloudgoat Ranger|Guardian of the Gateless|Serra Angel|Gleam of Resistance|Noble Templar|Urbis Protector|Phantom Bear|Delver of Secrets|Nephalia Smuggler|Enclave Cryptologist|Preordain|Ponder|Silent Departure|Azure Mage|Welkin Tern|Vaporkin|Augur of Bolas|Frost Walker|Merfolk Looter|Narcolepsy|Essence Scatter|Mana Leak|Think Twice|Trinket Mage|Man-o'-War|Pestermite|Civilized Scholar|Jorubai Murk Lurker|Sea Gate Oracle|Prodigal Sorcerer|Calcite Snapper|Esperzoa|Claustrophobia|Dissolve|Stoic Rebuttal|Complicate|Thirst for Knowledge|Compulsive Research|Wing Splicer|Faerie Mechanist|Master Thief|Thieving Magpie|Ninja of the Deep Hours|Foresee|Wash Out|Ray of Command|Sleep|Riftwing Cloudskate|Mulldrifter|Air Servant|Mind Control|Traumatic Visions|Honden of Seeing Winds|Aethersnipe|Jetting Glasskite|Opportunity|Power Sink|Feudkiller's Verdict|Arcbound Worker|Chronomaton|Signal Pest|Origin Spellbomb|Panic Spellbomb|Pyrite Spellbomb|Bonesplitter|Trusty Machete|Arcbound Slith|Arcbound Stinger|Myr Retriever|Epochrasite|Myr Sire|Perilous Myr|Immolating Souleater|Gust-Skimmer|Spined Thopter|Necropede|Porcelain Legionnaire|Prophetic Prism|Ichor Wellspring|Mycosynth Wellspring|Mind Stone|Sylvok Replica|Cathodion|Palladium Myr|Pilgrims Eye|Blinding Souleater|Kiln Walker|Moriok Replica|Skeleton Shard|Sickleslicer|Arcbound Hybrid|Etched Oracle|Juggernaut|Cogwork Librarian|Pierce Strider|Pith Driller|Slash Panther|Icy Manipulator|Serrated Arrows|Dross Golem|Clone Shell|Arcbound Bruiser|Skyreach Manta|Strandwalker|Darksteel Sentinel|Geistcatcher's Rig|Dreamstone Hedron|Tangle Golem|Ulamog's Crusher|Momentary Blink|Ardent Plea|Lyev Skyknight|Ethercaste Knight|Glassdust Hulk|Mortify|Pillory of the Sleepless|Tidehollow Sculler|Rally the Peasants|Flamewright|Warleader's Helix|Behemoth Sledge|Dryad Militant|Enlisted Wurm|Qasali Pridemage|Selesnya Evangel|Agony Warp|Warped Physique|Soul Manipulation|Tidehollow Strix|Moroii|Frostburn Weird|Izzet Charm|Izzet Chronarch|Beetleform Mage|Coiling Oracle|Snakeform|Bituminous Blast|Blightning|Terminate|Murderous Redcap|Spike Jester|Consume Strength|Dreg Mangler|Putrefy|Boggart Ram-Gang|Branching Bolt|Ghor Clan Rampager|Savage Twister|Vengeful Rebirth|Fusion Elemental|Frontier Bivouac|Mystic Monastery|Nomad Outpost|Opulent Palace|Sandsteppe Citadel|Arcane Sanctum|Crumbling Necropolis|Jungle Shrine|Savage Lands|Seaside Citadel|Buried Ruin|Urza's Factory|Dread Statuary";

  // // turn cardlist into array
  // let cardArray = cardList.split("|");

  // Element Variables
  let cardPileBtns = document.querySelectorAll(".take-pile-btn");
  let cardPile1Btn = document.querySelector(".take-pile-1");
  let cardPile2Btn = document.querySelector(".take-pile-2");
  let cardPile3Btn = document.querySelector(".take-pile-3");
  let cardPile4Btn = document.querySelector(".take-pile-4");
  let resetDraftBtn = document.querySelector(".reset-draft-btn");
  let cardPiles = document.querySelectorAll(".card-pile");
  let cardPileLists = document.querySelectorAll(".pile-list");
  let cardCount = document.querySelector(".card-count");
  let playerTurn = document.querySelector(".player-turn");

  // Firebase Variables
  const ref = firebase.database().ref();

  // General Functions
  function getData(dataString) {
    return ref
      .child(dataString)
      .once("value")
      .then(function(snapshot) {
        return snapshot.val();
      });
  }

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));

      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  function refreshVisualPiles() {
    getData("draftPoolRemaining").then(function(value) {
      cardCount.innerHTML = value.length + " Cards Left";
    });
    getData("player1Turn").then(function(value) {
      if (value) {
        playerTurn.innerHTML = "Player 1's Pick";
      } else {
        playerTurn.innerHTML = "Player 2's Pick";
      }
    });
    cardPileLists.forEach(function(list) {
      list.innerHTML = "";
    });

    populatePile("cardPile1");
    populatePile("cardPile2");
    populatePile("cardPile3");
    populatePile("cardPile4");
    populatePile("player1Pile");
    populatePile("player2Pile");
  }

  // Initialize Functions
  function createNewDraftList() {
    getData("fullCubeList").then(function(value) {
      let newDraftList = shuffleArray(value).splice(0, 100);
      ref.child("draftPoolRemaining").set(newDraftList);
    });
  }

  function replacePilesWithTopCard() {
    getData("draftPoolRemaining").then(function(draftPool) {
      let tempDraftPool = draftPool;
      for (let i = 1; i < 5; i++) {
        let tempCardPile = [];
        tempCardPile.push(tempDraftPool.pop());
        ref
          .child("cardPile" + i)
          .child("array")
          .set(tempCardPile);
      }
      ref.child("draftPoolRemaining").set(tempDraftPool);
    });
  }

  function resetPiles() {
    replacePilesWithTopCard();
    ref.child("player1Pile").set({ number: 4 });
    ref.child("player2Pile").set({ number: 5 });
  }

  function initializeNewDraft() {
    createNewDraftList();
    resetPiles();
    ref.child("player1Turn").set(true);
    refreshVisualPiles();
  }

  // Draft Functions
  function addCardsToPiles(cardPile) {
    getData("draftPoolRemaining").then(function(draftPool) {
      let tempDraftPool = draftPool;
      for (let i = 1; i < 5; i++) {
        getData("cardPile" + i).then(function(pile) {
          let tempCardPile = [];
          if (cardPile !== "cardPile" + i) {
            tempCardPile = pile.array;
          }
          tempCardPile.push(tempDraftPool.pop());
          ref
            .child("cardPile" + i)
            .child("array")
            .set(tempCardPile);
          ref.child("draftPoolRemaining").set(tempDraftPool);
        });
      }
    });
  }

  function addPileToPlayerPool(playerPile, cardPile) {
    getData(cardPile).then(function(pile) {
      getData(playerPile).then(function(pickedCards) {
        if (pickedCards.array === undefined) {
          ref
            .child(playerPile)
            .child("array")
            .set(pile.array);
        } else {
          ref
            .child(playerPile)
            .child("array")
            .set(pickedCards.array.concat(pile.array));
        }
        refreshVisualPiles();
      });
    });
  }

  function pickPile(cardPile) {
    getData("player1Turn").then(function(res) {
      if (res) {
        addPileToPlayerPool("player1Pile", cardPile);
      } else {
        addPileToPlayerPool("player2Pile", cardPile);
      }
      addCardsToPiles(cardPile);
      ref.child("player1Turn").set(!res);
    });
    refreshVisualPiles();
  }

  // Element Functions
  function populatePile(pile) {
    getData(pile).then(function(value) {
      console.log(value);
      if (value.array !== undefined) {
        value.array.forEach(function(card) {
          let newCard = document.createElement("li");
          newCard.innerHTML = `<li data-checked="true"><a href="http://gatherer.wizards.com/Pages/Card/Details.aspx?name=${card}"><img src="http://gatherer.wizards.com/Handlers/Image.ashx?name=${card}&amp;set=&amp;type=card"></a></li>`;
          cardPileLists[value.number].appendChild(newCard);
        });
      }
    });
  }

  // Events
  window.onload = function() {
    refreshVisualPiles();
  };

  resetDraftBtn.addEventListener("click", event => {
    initializeNewDraft();
  });

  cardPileBtns.forEach(ele => {
    ele.addEventListener("click", event => {
      switch (ele.classList[1]) {
        case "take-pile-1":
          pickPile("cardPile1");
          break;
        case "take-pile-2":
          pickPile("cardPile2");
          break;
        case "take-pile-3":
          pickPile("cardPile3");
          break;
        case "take-pile-4":
          pickPile("cardPile4");
          break;
      }
    });
  });
})();
