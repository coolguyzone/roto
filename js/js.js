let privateDraft = false;
let privateDraftDB;

(function() {
  "use strict";

  // let cardList =
  //   "Frenzied Goblin|Mogg Fanatic|Orcish Lumberjack|Lightning Bolt|Goblin Grenade|Firebolt|Galvanic Blast|Skirk Drill Sergeant|Ember Hauler|Goblin Wardriver|Mogg War Marshal|Sparksmith|Atog|Embersmith|Generator Servant|Goblin Lookout|Incinerate|Shrapnel Blast|Searing Blaze|Dragon Fodder|Krenko's Command|Tribal Flames|Arms Dealer|Spikeshot Goblin|Gempalm Incinerator|Goblin Artillery|Goblin Matron|Dragonsoul Knight|Orcish Mechanics|Hissing Iguanar|Brimstone Volley|Arc Lightning|Hordeling Outburst|Furnace Celebration|Honden of Infinite Rage|Beetleback Chief|Tar pitcher|Scrapyard Mongrel|Treasonous Ogre|Kird Chieftain|Goblin Heelcutter|Solar Blast|Aftershock|Barrage Ogre|Emrakul's Hatcher|Pyrotechnics|Kuldotha Flamefiend|Rapacious One|Chartooth Cougar|Rolling Thunder|Fireball|Disciple of the Vault|Carnophage|Diregraf Ghoul|Typhoid Rats|Gnarled Scarhide|Shambling Goblin|Executioner's Capsule|Duress|Dark Ritual|Salvage Slasher|Knight of Infamy|Dauthi Slayer|Blind Creeper|Spiteful Returned|Fallen Askari|Augur of Skulls|Mesmeric Fiend|Bile Blight|Chainer's Edict|Doom Blade|Sign in Blood|Gatekeeper of Malakir|Bone Shredder|Phyrexian Rager|Necrogen Scudder|Cadaver Imp|Liliana's Specter|Vampire Nighthawk|Ichor Slick|Read the Bones|Drag Down|Murder|Drown in Sorrow|Moriok Scavenger|Disciple of Phenax|Squelching Leeches|Paragon of Open Graves|Liliana's Shade|Faceless Butcher|Tendrils of Corruption|Pestilence|Moan of the Unhallowed|Honden of Night's Reach|Gray Merchant of Asphodel|Warren Pilferers|Nightfire Giant|Mind Sludge|Dead Ringers|Twisted Abomination|Corrupt|Enslave|Avacyn's Pilgrim|Llanowar Elves|Elves of Deep Shadow|Joraga Treespeaker|Experiment One|Sunblade Elf|Prey Upon|Rancor|Vines of Vastwood|Sakura-Tribe Elder|Strangleroot Geist|Kalonian Tusker|Wild Mongrel|Shinen of Life's Roar|Sylvan Ranger|Wall of Blossoms|Albino Troll|River Boa|Mire Boa|Rampant Growth|Lignify|Sprout Swarm|Epic Confrontation|Naturalize|Civic Wayfinder|Yavimaya Elder|Grazing Gladehart|Matca Rioters|Imperious Perfect|Leatherback Baloth|Citanul Woodreaders|Cultivate|Elephant Guide|Beast Within|Kozilek's Predator|Penumbra Spider|Blastoderm|Briarhorn|Rhox Charger|Gaea's Embrace|Acidic Slime|Garruk's Packleader|Sentinel Spider|Honden of Life's Web|Baloth Woodcrasher|Durkwood Baloth|Deadwood Treefolk|Tromp the Domains|Krosan Tusker|Jungle Weaver|Pelakka Wurm|Elite Vanguard|Mardu Woe-Reaper|Steppe Lynx|Hopeful Eidolon|Akrasan Squire|Gideon's Lawkeeper|Dispeller's Capsule|Knight of Meadowgrain|Soltari Priest|Accorder Paladin|Cloistered Youth|Lone Missionary|Ajani's Pridemate|Dauntless River Marshal|Sigiled Paladin|Syndic of Tithes|Wall of Omens|Myrsmith|Aven Squire|Knight of Glory|Journey to Nowhere|Otherworldly Journey|Disenchant|Pacifism|Guardians of Akrasa|Flickerwisp|Fiend Hunter|Banisher Priest|Kor Sanctifiers|Attended Knight|Sandsteppe Outcast|Stonecloaker|Oblivion Ring|Arrest|Empyrial Armor|Griffin Guide|Blinding Beam|Sanctum Gargoyle|Auriok Salvagers|Glimmerpoint Stag|Master Splicer|Celestial Crusader|Faith's Fetters|Honden of Cleansing Fire|Cloudgoat Ranger|Guardian of the Gateless|Serra Angel|Gleam of Resistance|Noble Templar|Urbis Protector|Phantasmal Bear|Delver of Secrets|Nephalia Smuggler|Enclave Cryptologist|Preordain|Ponder|Silent Departure|Azure Mage|Welkin Tern|Vaporkin|Augur of Bolas|Frost Walker|Merfolk Looter|Narcolepsy|Essence Scatter|Mana Leak|Think Twice|Trinket Mage|Man-o'-War|Pestermite|Civilized Scholar|Jorubai Murk Lurker|Sea Gate Oracle|Prodigal Sorcerer|Calcite Snapper|Esperzoa|Claustrophobia|Dissolve|Stoic Rebuttal|Complicate|Thirst for Knowledge|Compulsive Research|Wing Splicer|Faerie Mechanist|Master Thief|Thieving Magpie|Ninja of the Deep Hours|Foresee|Wash Out|Ray of Command|Sleep|Riftwing Cloudskate|Mulldrifter|Air Servant|Mind Control|Traumatic Visions|Honden of Seeing Winds|Aethersnipe|Jetting Glasskite|Opportunity|Power Sink|Feudkiller's Verdict|Arcbound Worker|Chronomaton|Signal Pest|Origin Spellbomb|Panic Spellbomb|Pyrite Spellbomb|Bonesplitter|Trusty Machete|Arcbound Slith|Arcbound Stinger|Myr Retriever|Epochrasite|Myr Sire|Perilous Myr|Immolating Souleater|Gust-Skimmer|Spined Thopter|Necropede|Porcelain Legionnaire|Prophetic Prism|Ichor Wellspring|Mycosynth Wellspring|Mind Stone|Sylvok Replica|Cathodion|Palladium Myr|Pilgrim's Eye|Blinding Souleater|Kiln Walker|Moriok Replica|Skeleton Shard|Sickleslicer|Arcbound Hybrid|Etched Oracle|Juggernaut|Cogwork Librarian|Pierce Strider|Pith Driller|Slash Panther|Icy Manipulator|Serrated Arrows|Dross Golem|Clone Shell|Arcbound Bruiser|Skyreach Manta|Strandwalker|Darksteel Sentinel|Geistcatcher's Rig|Dreamstone Hedron|Tangle Golem|Ulamog's Crusher|Momentary Blink|Ardent Plea|Lyev Skyknight|Ethercaste Knight|Glassdust Hulk|Mortify|Pillory of the Sleepless|Tidehollow Sculler|Rally the Peasants|Flamewright|Warleader's Helix|Behemoth Sledge|Dryad Militant|Enlisted Wurm|Qasali Pridemage|Selesnya Evangel|Agony Warp|Warped Physique|Soul Manipulation|Tidehollow Strix|Moroii|Frostburn Weird|Izzet Charm|Izzet Chronarch|Beetleform Mage|Coiling Oracle|Snakeform|Bituminous Blast|Blightning|Terminate|Murderous Redcap|Spike Jester|Consume Strength|Dreg Mangler|Putrefy|Boggart Ram-Gang|Branching Bolt|Ghor-Clan Rampager|Savage Twister|Vengeful Rebirth|Fusion Elemental|Frontier Bivouac|Mystic Monastery|Nomad Outpost|Opulent Palace|Sandsteppe Citadel|Arcane Sanctum|Crumbling Necropolis|Jungle Shrine|Savage Lands|Seaside Citadel|Buried Ruin|Urza's Factory|Dread Statuary";

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
  let newPrivateDraftBtn = document.querySelector(".new-private-draft-btn");

  // Firebase Variables
  const ref = firebase.database().ref();

  //Firebase Listeners
  function refreshVisualPilesListener(dataString) {
    if (privateDraft) {
      console.log("privedraft");
      ref
        .child(privateDraftDB)
        .child(dataString)
        .on("value", function(snapshot) {
          let pile = snapshot.val();
          console.log(pile);
          if (pile.array !== undefined) {
            populatePile(pile);
          }
        });
    } else {
      ref.child(dataString).on("value", function(snapshot) {
        let pile = snapshot.val();
        console.log(pile);
        if (pile.array !== undefined) {
          populatePile(pile);
        }
      });
    }
  }
  //privateDraft
  function refreshVisualPrivatePilesListener(dbName, dataString) {
    ref
      .child(dbName)
      .child(dataString)
      .on("value", function(snapshot) {
        let pile = snapshot.val();
        console.log(pile);
        if (pile.array !== undefined) {
          populatePile(pile);
        }
      });
  }

  ref.child("draftPoolRemaining").on("value", function(snapshot) {
    let draftPool = snapshot.val();
    if (draftPool !== null) {
      if (draftPool.length === 100) {
        replacePilesWithTopCard();
      }
      cardCount.innerHTML = draftPool.length + " Cards Left";
    } else {
      cardCount.innerHTML = "No Cards Left";
    }
  });

  //privateDraft
  if (privateDraft) {
    ref.child(privateDraftDB).on("value", function(snapshot) {
      console.log("yaaa", snapshot.val().draftPoolRemaining);
      let draftPool = snapshot.val().draftPoolRemaining;
      if (draftPool !== null) {
        if (draftPool.length === 100) {
          replacePilesWithTopCard();
        }
        cardCount.innerHTML = draftPool.length + " Cards Left";
      } else {
        cardCount.innerHTML = "No Cards Left";
      }
    });
  }

  ref.child("player1Turn").on("value", function(snapshot) {
    let player1Turn = snapshot.val();
    if (player1Turn) {
      playerTurn.innerHTML = "Player 1's Pick";
    } else {
      playerTurn.innerHTML = "Player 2's Pick";
    }
  });

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

  //Upload Cube Functions TODO: allow cube uploads
  function getCardFromApi(cardName) {
    return axios
      .get("https://api.magicthegathering.io/v1/cards?name=" + cardName)
      .then(function(data) {
        let cardData = data.data.cards[0];
        delete cardData.artist;
        delete cardData.flavor;
        delete cardData.foreignNames;
        delete cardData.layout;
        delete cardData.legalities;
        delete cardData.number;
        delete cardData.printings;
        delete cardData.rarity;
        delete cardData.releaseDate;
        delete cardData.set;
        delete cardData.setName;
        delete cardData.source;
        return cardData;
      });
  }

  function deleteCubeList(cubeName) {
    ref.child(cubeName).remove();
  }

  function createCubeList(cubeName, cubeArray) {
    cubeArray.forEach(function(card) {
      getCardFromApi(card).then(function(cardObj) {
        ref
          .child(cubeName)
          .child(card)
          .set(cardObj);
      });
    });
  }

  // Initialize Functions
  function createNewDraftList() {
    getData("newCube").then(function(value) {
      let newDraftList = Object.values(value);
      newDraftList = shuffleArray(newDraftList).splice(0, 100);
      ref.child("draftPoolRemaining").set(newDraftList);
    });
  }

  function createNewPrivateDraftList(dbName) {
    privateDraft = true;
    privateDraftDB = dbName;
    getData("newCube").then(function(value) {
      let newDraftList = Object.values(value);
      newDraftList = shuffleArray(newDraftList).splice(0, 100);
      ref.child(dbName).update({ draftPoolRemaining: newDraftList });
    });
  }

  function replacePilesWithTopCard() {
    if (privateDraft) {
      getData(privateDraftDB).then(function(draftPool) {
        let privateDraftPool = draftPool.draftPoolRemaining;
        let tempDraftPool = privateDraftPool;
        for (let i = 1; i < 5; i++) {
          let tempCardPile = [];
          tempCardPile.push(tempDraftPool.pop());
          ref
            .child(privateDraftDB)
            .child("cardPile" + i)
            .child("array")
            .set(tempCardPile);
          ref
            .child(privateDraftDB)
            .child("cardPile" + i)
            .child("number")
            .set(i - 1);
        }
        ref
          .child(privateDraftDB)
          .child("draftPoolRemaining")
          .set(tempDraftPool);
      });
    } else {
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
  }

  //private
  function replacePrivatePilesWithTopCard(dbName) {
    getData(dbName).then(function(draftPool) {
      let privateDraftPool = draftPool.draftPoolRemaining;
      let tempDraftPool = privateDraftPool;
      for (let i = 1; i < 5; i++) {
        let tempCardPile = [];
        tempCardPile.push(tempDraftPool.pop());
        ref
          .child(dbName)
          .child("cardPile" + i)
          .child("array")
          .set(tempCardPile);
        ref
          .child(dbName)
          .child("cardPile" + i)
          .child("number")
          .set(i - 1);
      }
      ref
        .child(dbName)
        .child("draftPoolRemaining")
        .set(tempDraftPool);
    });
  }

  function resetPiles() {
    clearHTMLPiles();
    clearHTMLPlayerPiles();
    ref.child("player1Pile").set({ number: 4 });
    ref.child("player2Pile").set({ number: 5 });
  }

  function resetPrivatePiles(dbName) {
    clearHTMLPiles();
    clearHTMLPlayerPiles();
    ref.child(dbName).update({ player1Pile: { number: 4 } });
    ref.child(dbName).update({ player2Pile: { number: 5 } });
  }

  function initializeNewDraft() {
    createNewDraftList();
    resetPiles();
    enableAllButtons();
    ref.child("player1Turn").set(true);
  }

  function initializeNewPrivateDraft(dbName) {
    createNewPrivateDraftList(dbName);
    resetPrivatePiles(dbName);
    enableAllButtons();
    ref.child(dbName).update({ player1Turn: true });
    ref.child(privateDraftDB).on("value", function(snapshot) {
      let draftPool = snapshot.val().draftPoolRemaining;
      if (draftPool !== null) {
        if (draftPool.length === 100) {
          replacePrivatePilesWithTopCard(dbName);
        }
        cardCount.innerHTML = draftPool.length + " Cards Left";
      } else {
        cardCount.innerHTML = "No Cards Left";
      }
    });

    refreshVisualPrivatePilesListener(dbName, "cardPile1");
    refreshVisualPrivatePilesListener(dbName, "cardPile2");
    refreshVisualPrivatePilesListener(dbName, "cardPile3");
    refreshVisualPrivatePilesListener(dbName, "cardPile4");
    refreshVisualPrivatePilesListener(dbName, "player1Pile");
    refreshVisualPrivatePilesListener(dbName, "player2Pile");
  }

  // Draft Functions
  function pickPileButtonClick(ele) {
    if (privateDraft) {
      getData(privateDraftDB).then(function(privateDraftData) {
        let draftPool = privateDraftData.draftPoolRemaining;
        if (draftPool !== null) {
          clearHTMLPiles();
        }
        switch (ele.classList[1]) {
          case "take-pile-1":
            if (draftPool === null) {
              cardPileLists[0].innerHTML = "";
            }
            pickPile("cardPile1");
            break;
          case "take-pile-2":
            if (draftPool === null) {
              cardPileLists[1].innerHTML = "";
            }
            pickPile("cardPile2");
            break;
          case "take-pile-3":
            if (draftPool === null) {
              cardPileLists[2].innerHTML = "";
            }
            pickPile("cardPile3");
            break;
          case "take-pile-4":
            if (draftPool === null) {
              cardPileLists[3].innerHTML = "";
            }
            pickPile("cardPile4");
            break;
        }
      });
    } else {
      getData("draftPoolRemaining").then(function(draftPool) {
        if (draftPool !== null) {
          clearHTMLPiles();
        }
        switch (ele.classList[1]) {
          case "take-pile-1":
            if (draftPool === null) {
              cardPileLists[0].innerHTML = "";
            }
            pickPile("cardPile1");
            break;
          case "take-pile-2":
            if (draftPool === null) {
              cardPileLists[1].innerHTML = "";
            }
            pickPile("cardPile2");
            break;
          case "take-pile-3":
            if (draftPool === null) {
              cardPileLists[2].innerHTML = "";
            }
            pickPile("cardPile3");
            break;
          case "take-pile-4":
            if (draftPool === null) {
              cardPileLists[3].innerHTML = "";
            }
            pickPile("cardPile4");
            break;
        }
      });
    }
  }

  function addCardsToPiles(cardPile) {
    if (privateDraft) {
      getData(privateDraftDB).then(function(privateDraftData) {
        let draftPool = privateDraftData.draftPoolRemaining;
        let tempDraftPool = draftPool;
        for (let i = 1; i < 5; i++) {
          getData(privateDraftDB).then(function(data) {
            let pile = data["cardPile" + i];
            let tempCardPile = [];
            if (cardPile !== "cardPile" + i) {
              tempCardPile = pile.array;
              if (draftPool !== null) {
                tempCardPile.push(tempDraftPool.pop());
              }
            } else {
              if (draftPool !== null) {
                tempCardPile.push(tempDraftPool.pop());
              } else {
                tempCardPile = [{ name: " " }];
                document.querySelector(".take-pile-" + i).disabled = true;
              }
            }
            ref
              .child(privateDraftDB)
              .child("draftPoolRemaining")
              .set(tempDraftPool);
            ref
              .child(privateDraftDB)
              .child("cardPile" + i)
              .child("array")
              .set(tempCardPile);
          });
        }
      });
    } else {
      getData("draftPoolRemaining").then(function(draftPool) {
        let tempDraftPool = draftPool;
        for (let i = 1; i < 5; i++) {
          getData("cardPile" + i).then(function(pile) {
            let tempCardPile = [];
            if (cardPile !== "cardPile" + i) {
              tempCardPile = pile.array;
              if (draftPool !== null) {
                tempCardPile.push(tempDraftPool.pop());
              }
            } else {
              if (draftPool !== null) {
                tempCardPile.push(tempDraftPool.pop());
              } else {
                tempCardPile = [{ name: " " }];
                document.querySelector(".take-pile-" + i).disabled = true;
              }
            }
            ref.child("draftPoolRemaining").set(tempDraftPool);
            ref
              .child("cardPile" + i)
              .child("array")
              .set(tempCardPile);
          });
        }
      });
    }
  }

  function addPileToPlayerPool(playerPile, cardPile) {
    if (privateDraft) {
      getData(privateDraftDB).then(function(privateDraftData) {
        console.log("cardpile", privateDraftData[cardPile], cardPile);
        console.log("playerpile", privateDraftData.playerPile, playerPile);
        let pile = privateDraftData[cardPile];
        let pickedCards = privateDraftData[playerPile];
        if (pickedCards.array === undefined) {
          ref
            .child(privateDraftDB)
            .child(playerPile)
            .child("array")
            .set(pile.array);
        } else {
          ref
            .child(privateDraftDB)
            .child(playerPile)
            .child("array")
            .set(pickedCards.array.concat(pile.array));
        }
      });
    } else {
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
        });
      });
    }
  }

  function pickPile(cardPile) {
    if (privateDraft) {
      getData(privateDraftDB).then(function(privateDraftData) {
        let res = privateDraftData.player1Turn;
        if (res) {
          cardPileLists[4].innerHTML = "";
          addPileToPlayerPool("player1Pile", cardPile);
        } else {
          cardPileLists[5].innerHTML = "";
          addPileToPlayerPool("player2Pile", cardPile);
        }
        addCardsToPiles(cardPile);
        ref
          .child(privateDraftDB)
          .child("player1Turn")
          .set(!res);
      });
    } else {
      getData("player1Turn").then(function(res) {
        if (res) {
          cardPileLists[4].innerHTML = "";
          addPileToPlayerPool("player1Pile", cardPile);
        } else {
          cardPileLists[5].innerHTML = "";
          addPileToPlayerPool("player2Pile", cardPile);
        }
        addCardsToPiles(cardPile);
        ref.child("player1Turn").set(!res);
      });
    }
  }

  // Update HTML Element Functions
  function populatePile(pile) {
    if (pile.array !== undefined) {
      pile.array.forEach(function(card) {
        let newCard = document.createElement("li");
        newCard.innerHTML = `<li data-checked="true"><a target="_blank" href="http://gatherer.wizards.com/Pages/Card/Details.aspx?name=${
          card.name
        }"><img src="http://gatherer.wizards.com/Handlers/Image.ashx?name=${
          card.name
        }&amp;set=&amp;type=card"></a></li>`;
        cardPileLists[pile.number].appendChild(newCard);
      });
    }
  }

  function clearHTMLPiles() {
    for (let i = 0; i < 4; i++) {
      cardPileLists[i].innerHTML = "";
    }
  }

  function clearHTMLPlayerPiles() {
    for (let i = 4; i < 6; i++) {
      cardPileLists[i].innerHTML = "";
    }
  }

  function enableAllButtons() {
    cardPile1Btn.disabled = false;
    cardPile2Btn.disabled = false;
    cardPile3Btn.disabled = false;
    cardPile4Btn.disabled = false;
  }

  function disableEmptyPileButtons() {
    for (let i = 1; i < 5; i++) {
      getData("cardPile" + i).then(function(pile) {
        if (pile.array.length === 1 && pile.array[0].name === " ") {
          document.querySelector(".take-pile-" + i).disabled = true;
        }
      });
    }
  }

  function namePrivateDraft() {
    let name = prompt("Please Enter A Unique Name For Your Draft");
    initializeNewPrivateDraft(name);
  }

  // HTML Events
  window.onload = function() {
    disableEmptyPileButtons();
    refreshVisualPilesListener("cardPile1");
    refreshVisualPilesListener("cardPile2");
    refreshVisualPilesListener("cardPile3");
    refreshVisualPilesListener("cardPile4");
    refreshVisualPilesListener("player1Pile");
    refreshVisualPilesListener("player2Pile");
  };

  resetDraftBtn.addEventListener("click", event => {
    initializeNewDraft();
  });

  newPrivateDraftBtn.addEventListener("click", event => {
    namePrivateDraft();
  });

  cardPileBtns.forEach(ele => {
    ele.addEventListener("click", event => {
      pickPileButtonClick(ele);
    });
  });
})();
