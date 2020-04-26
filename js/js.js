let privateDraft = false;
let privateDraftDB;

(function() {
  "use strict";
let cardList =
 "Frenzied Goblin|Goblin Banneret|Gone|Lightning Bolt|Goblin Grenade|Firebolt|Rigging Runner|Goblin Shortcutter|Riot Piker|Goblin Wardriver|Mogg War Marshal|Sparksmith|Skinbrand Goblin|Goblin Trailblazer|Generator Servant|Goblin Bishwhacker|Incinerate|Fire|Searing Blaze|Dragon Fodder|Krenko's Command|Tribal Flames|Arms Dealer|Flamewave Invoker|Gempalm Incinerator|Goblin Artillery|Goblin Matron|Guttersnipe|Pyrewild Shaman|Hissing Iguanar|Brimstone Volley|Arc Lightning|Hordeling Outburst|Furnace Celebration|Honden of Infinite Rage|Beetleback Chief|Tar pitcher|Scrapyard Mongrel|Treasonous Ogre|Kird Chieftain|Goblin Heelcutter|Solar Blast|Aftershock|Charging Monstrosaur|Emrakul's Hatcher|Pyrotechnics|Kuldotha Flamefiend|Oni of Wild Places|Chartooth Cougar|Rolling Thunder|Fireball|Pilfering Imp|Carnophage|Diregraf Ghoul|Typhoid Rats|Gnarled Scarhide|Ruthless Sniper|Executioner's Capsule|Duress|Dark Ritual|Dauthi Horror|Knight of Infamy|Cabal Interrogator|Blind Creeper|Fretwork Colony|Fallen Askari|Augur of Skulls|Mesmeric Fiend|Bile Blight|Chainer's Edict|Doom Blade|Sign in Blood|Wanted Scoundrels|Bone Shredder|Phyrexian Rager|Necrogen Scudder|Cadaver Imp|Liliana's Specter|Vampire Nighthawk|Ichor Slick|Read the Bones|Parting Thoughts|Murder|Drown in Sorrow|Bone Picker|Disciple of Phenax|Accursed Witch|Paragon of Open Graves|Liliana's Shade|Faceless Butcher|Befoul|Pestilence|Moan of the Unhallowed|Honden of Night's Reach|Gray Merchant of Asphodel|Indulgent Tormentor|Nightfire Giant|Mind Sludge|Murderous Cut|Twisted Abomination|Corrupt|Enslave|Avacyn's Pilgrim|Llanowar Elves|Elves of Deep Shadow|Joraga Treespeaker|Experiment One|Sunblade Elf|Prey Upon|Rancor|Vines of Vastwood|Sakura-Tribe Elder|Strangleroot Geist|Kalonian Tusker|Wild Mongrel|Shinen of Life's Roar|Sylvan Ranger|Wall of Blossoms|Albino Troll|River Boa|Mire Boa|Rampant Growth|Lignify|Sprout Swarm|Epic Confrontation|Naturalize|Civic Wayfinder|Yavimaya Elder|Grazing Gladehart|Llanowar Envoy|Imperious Perfect|Hunting Moa|Spike Feeder|Cultivate|Elephant Guide|Beast Within|Iwamori of the Open Fist|Penumbra Spider|Blastoderm|Briarhorn|Rhox Charger|Gaea's Embrace|Acidic Slime|Garruk's Packleader|Sentinel Spider|Honden of Life's Web|Baloth Woodcrasher|Durkwood Baloth|Deadwood Treefolk|Tromp the Domains|Krosan Tusker|Jungle Weaver|Pelakka Wurm|Elite Vanguard|Mardu Woe-Reaper|Soul Warden|Healer's Hawk|Akrasan Squire|Gideon's Lawkeeper|Dispeller's Capsule|Knight of Meadowgrain|Soltari Priest|Accorder Paladin|Cloistered Youth|Lone Missionary|Ajani's Pridemate|Dauntless River Marshal|Sigiled Paladin|Syndic of Tithes|Wall of Omens|Myrsmith|Aven Squire|Knight of Glory|Journey to Nowhere|Otherworldly Journey|Disenchant|Pacifism|Guardians of Akrasa|Flickerwisp|Fiend Hunter|Banisher Priest|Kor Sanctifiers|Attended Knight|Sandsteppe Outcast|Stonecloaker|Oblivion Ring|Arrest|Unquestioned Authority|Griffin Guide|Blinding Beam|Sanctum Gargoyle|Goldnight Commander|Glimmerpoint Stag|Master Splicer|Celestial Crusader|Faith's Fetters|Honden of Cleansing Fire|Cloudgoat Ranger|Guardian of the Gateless|Serra Angel|Gleam of Resistance|Noble Templar|Urbis Protector|Reef Shaman|Delver of Secrets|Vortex Elemental|Enclave Cryptologist|Preordain|Ponder|Silent Departure|Azure Mage|Curious Homunculus|Vaporkin|Cloudseeder|Waterfront Bouncer|Merfolk Looter|Narcolepsy|Essence Scatter|Mana Leak|Think Twice|Fettergeist|Man-o'-War|Pestermite|Tandem Lookout|Marang River Prowler|Sea Gate Oracle|Prodigal Sorcerer|Spiketail Drakeling|Esperzoa|Supreme WIll|Dissolve|Capsize|Complicate|Thirst for Knowledge|Compulsive Research|Wing Splicer|Soulsworn Spirit|Elgaud Shieldmate|Lu Xun, Scholar General|Ninja of the Deep Hours|Foresee|Wash Out|Ray of Command|Sleep|Riftwing Cloudskate|Mulldrifter|Air Servant|Mind Control|Traumatic Visions|Honden of Seeing Winds|Aethersnipe|Jetting Glasskite|Opportunity|Power Sink|Subjugator Angel|Thraben Gargoyle|Chronomaton|Signal Pest|Origin Spellbomb|Panic Spellbomb|Pyrite Spellbomb|Bonesplitter|Trusty Machete|Diamond Mare|Soultether Golem|Ichorclaw Myr|Epochrasite|Jhoira's Toolbox|Perilous Myr|Immolating Souleater|Gust-Skimmer|Spined Thopter|Necropede|Porcelain Legionnaire|Prophetic Prism|Ichor Wellspring|Mycosynth Wellspring|Mind Stone|Sylvok Replica|Harvest Hand|Palladium Myr|Pilgrim's Eye|Blinding Souleater|Serrated Biskelion|Moriok Replica|Cryptolith Fragment|Sickleslicer|Treasure Keeper|Etched Oracle|Juggernaut|Cogwork Librarian|Pierce Strider|Pith Driller|Slash Panther|Icy Manipulator|Serrated Arrows|Dross Golem|Clone Shell|Golem Artisan|Skyreach Manta|Strandwalker|Darksteel Sentinel|GOld-Forged Sentinel|Dreamstone Hedron|Tangle Golem|Ulamog's Crusher|Momentary Blink|Ardent Plea|Lyev Skyknight|Ethercaste Knight|Cloudblazer|Mortify|Pillory of the Sleepless|Tidehollow Sculler|Rally the Peasants|Flamewright|Warleader's Helix|Behemoth Sledge|Dryad Militant|Enlisted Wurm|Qasali Pridemage|Selesnya Guildmage|Agony Warp|Warped Physique|Soul Manipulation|Tidehollow Strix|Moroii|Frostburn Weird|Izzet Charm|Gelectrode|Beetleform Mage|Coiling Oracle|Snakeform|Bituminous Blast|Blightning|Terminate|Murderous Redcap|Spike Jester|Consume Strength|Dreg Mangler|Putrefy|Boggart Ram-Gang|Branching Bolt|Ghor-Clan Rampager|Savage Twister|Vengeful Rebirth|Fusion Elemental|Frontier Bivouac|Mystic Monastery|Nomad Outpost|Opulent Palace|Sandsteppe Citadel|Arcane Sanctum|Crumbling Necropolis|Jungle Shrine|Savage Lands|Seaside Citadel|Buried Ruin|Urza's Factory|Dread Statuary";
  //
  // // turn cardlist into array
// let cardArray = cardList.split("|");
  // createCubeList("alex-pauper-cube", cardArray);

  // Element Variables
  let cardPileBtns = document.querySelectorAll(".take-pile-btn");
  let cardPile1Btn = document.querySelector(".take-pile-1");
  let cardPile2Btn = document.querySelector(".take-pile-2");
  let cardPile3Btn = document.querySelector(".take-pile-3");
  let cardPile4Btn = document.querySelector(".take-pile-4");
  let cardPiles = document.querySelectorAll(".card-pile");
  let cardPileLists = document.querySelectorAll(".pile-list");
  let cardCount = document.querySelector(".card-count");
  let playerTurn = document.querySelector(".player-turn");
  let newPrivateDraftBtn = document.querySelector(".new-private-draft-btn");
  let joinExistingDraftBtn = document.querySelector(".join-existing-draft-btn");
  let draftName = document.querySelector(".draft-name");
  let newDraftModal = document.querySelector(".new-draft-modal");
  let addCubeModal = document.querySelector(".add-cube-modal");
  let draftSelectionBtn = document.querySelector(".submit-draft-selection-btn");
  let submitCubeBtn = document.querySelector(".submit-cube-upload-btn");
  let currentCube = "alex-pauper-cube";
  let newDraftName;
  let draftDropdown = document.querySelector(".draft-dropdown");
  let closeModalBtns = document.querySelectorAll(".close-modal");

  // Firebase Variables
  const ref = firebase.database().ref();

  //Firebase Listeners

  //TODO figure out why this refreshes twice sometimes.
  //TODO figure out how to do this without using JS variable names as CSS classes.
  function refreshVisualPrivatePilesListener(dbName, dataString) {
    let pile;
    ref
      .child(dbName)
      .child(dataString)
      .on("value", function(snapshot) {
        pile = snapshot.val();
        if (pile.array[0].name != " ") {
          populatePile(pile);
        }
        let pileLength = pile.array.length;
        let HTMLpileLength =
          document.querySelectorAll(`.${dataString} li`).length / 2;
        if (pile.array[0].name === " " && HTMLpileLength > 0) {
          location.reload();
        }
        if (pile.array[0].name != " " && pileLength != HTMLpileLength) {
          location.reload();
        }
      });
  }

  //this setTimeout is kind of a hack
  //TODO: come up with better solution for the synchronicity issue here
  setTimeout(function() {
    if (privateDraftDB) {
      ref.child(privateDraftDB).on("value", function(snapshot) {
        let draftPool = snapshot.val().draftPoolRemaining;
        if (draftPool !== undefined) {
          if (draftPool.length === 100) {
            replacePilesWithTopCard();
          }
          cardCount.innerHTML = draftPool.length + " Cards Left";
        } else {
          cardCount.innerHTML = "No Cards Left";
        }
      });

      //privateDraft

      ref.child(privateDraftDB).on("value", function(snapshot) {
        let player1Turn = snapshot.val().player1Turn;
        if (player1Turn) {
          playerTurn.innerHTML = "Player 1's Pick";
        } else {
          playerTurn.innerHTML = "Player 2's Pick";
        }
      });
    }
  }, 500);

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
  // TODO: make this work correctly for split cards
  function getCardFromApi(cardName) {
    // if(cardName.includes('//')) {
    //   let slicePoint = cardName.indexOf('/') -1;
    //   cardName = cardName.slice(0, slicePoint);
    // }
    return axios
      .get("https://api.magicthegathering.io/v1/cards?name=" + cardName)
      .then(function(data) {
        let cardData;
        data.data.cards.forEach(ele => {
          if(ele.name === cardName) {
            cardData = ele;
          }
        })
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
          .child("cubes")
          .child(cubeName)
          .child(card)
          .set(cardObj);
      });
    });
  }

  // Initialize Functions

  function createNewPrivateDraftList(dbName) {
    privateDraft = true;
    privateDraftDB = dbName;
    getData("cubes").then(function(value) {
      value = value[currentCube];
      let newDraftList = Object.values(value);
      newDraftList = shuffleArray(newDraftList).splice(0, 100);
      ref.child(dbName).update({ draftPoolRemaining: newDraftList });
    });
  }

  function replacePilesWithTopCard() {
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

  function resetPrivatePiles(dbName) {
    clearHTMLPiles();
    clearHTMLPlayerPiles();
    ref.child(dbName).update({ player1Pile: { number: 4 } });
    ref.child(dbName).update({ player2Pile: { number: 5 } });
  }

  function initializeNewPrivateDraft(dbName) {
    createNewPrivateDraftList(dbName);
    resetPrivatePiles(dbName);
    enableAllButtons();
    ref.child(dbName).update({ player1Turn: true });
    ref.child(privateDraftDB).on("value", function(snapshot) {
      let draftPool = snapshot.val().draftPoolRemaining;
      if (draftPool !== undefined) {
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
    draftName.innerHTML = "Private Draft: " + dbName;
    localStorage.setItem("privateDraftName", dbName);
  }

  function loadExistingDraft(name) {
    privateDraft = true;
    privateDraftDB = name;
    enableAllButtons();
    clearHTMLPiles();
    clearHTMLPlayerPiles();
    refreshVisualPrivatePilesListener(name, "cardPile1");
    refreshVisualPrivatePilesListener(name, "cardPile2");
    refreshVisualPrivatePilesListener(name, "cardPile3");
    refreshVisualPrivatePilesListener(name, "cardPile4");
    refreshVisualPrivatePilesListener(name, "player1Pile");
    refreshVisualPrivatePilesListener(name, "player2Pile");
    draftName.innerHTML = "Private Draft: " + name;
    localStorage.setItem("privateDraftName", name);
  }

  function loadCubeSelection(dbName) {
    ref.child("cubes").on("value", function(snapshot) {
      snapshot.forEach(function(ele) {
        let newCubeOption = document.createElement("option");
        newCubeOption.innerHTML = ele.key;
        draftDropdown.appendChild(newCubeOption);
      });
    });
  }

  // Draft Functions
  function pickPileButtonClick(ele) {
    getData(privateDraftDB).then(function(privateDraftData) {
      let draftPool = privateDraftData.draftPoolRemaining;
      if (draftPool !== undefined) {
        clearHTMLPiles();
      }
      switch (ele.classList[1]) {
        case "take-pile-1":
          if (draftPool === undefined) {
            cardPileLists[0].innerHTML = "";
          }
          pickPile("cardPile1");
          break;
        case "take-pile-2":
          if (draftPool === undefined) {
            cardPileLists[1].innerHTML = "";
          }
          pickPile("cardPile2");
          break;
        case "take-pile-3":
          if (draftPool === undefined) {
            cardPileLists[2].innerHTML = "";
          }
          pickPile("cardPile3");
          break;
        case "take-pile-4":
          if (draftPool === undefined) {
            cardPileLists[3].innerHTML = "";
          }
          pickPile("cardPile4");
          break;
      }
    });
  }

  function addCardsToPiles(cardPile) {
    getData(privateDraftDB).then(function(privateDraftData) {
      let draftPool = privateDraftData.draftPoolRemaining;
      let tempDraftPool = draftPool;
      for (let i = 1; i < 5; i++) {
        getData(privateDraftDB).then(function(data) {
          let pile = data["cardPile" + i];
          let tempCardPile = [];
          if (cardPile !== "cardPile" + i) {
            tempCardPile = pile.array;
            if (draftPool && tempDraftPool) {
              tempCardPile.push(tempDraftPool.pop());
            }
          } else {
            if (draftPool) {
              tempCardPile.push(tempDraftPool.pop());
            } else {
              tempCardPile = [{ name: " " }];
              document.querySelector(".take-pile-" + i).disabled = true;
            }
          }
          if (draftPool) {
            if (draftPool.length < 1) {
              tempDraftPool = null;
            }
          }
          if (draftPool) {
            ref
              .child(privateDraftDB)
              .child("draftPoolRemaining")
              .set(tempDraftPool);
          }

          ref
            .child(privateDraftDB)
            .child("cardPile" + i)
            .child("array")
            .set(tempCardPile);
        });
      }
    });
  }

  function addPileToPlayerPool(playerPile, cardPile) {
    getData(privateDraftDB).then(function(privateDraftData) {
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
  }

  function pickPile(cardPile) {
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
      getData(privateDraftDB).then(function(draftData) {
        let pile = draftData["cardPile" + i];
        if (pile.array.length === 1 && pile.array[0].name === " ") {
          document.querySelector(".take-pile-" + i).disabled = true;
        }
      });
    }




  }

  // function namePrivateDraft() {
  //   let name = prompt("Please Enter A Unique Name For Your Draft");
  //   if (!validateName(name)) {
  //     alert(
  //       "Please only include alphanumeric symbols and hyphens in your draft name."
  //     );
  //     return;
  //   }
  //   let uniqueName = false;
  //   getData(name).then(function(data) {
  //     console.log(data);
  //     if (!data) {
  //       uniqueName = true;
  //     }
  //     if (uniqueName) {
  //       initializeNewPrivateDraft(name);
  //     } else {
  //       alert("That name is already in use, please try again.");
  //     }
  //   });
  // }


  function namePrivateDraft() {
    unhide(newDraftModal);
  }

  function submitDraftSelection() {
    newDraftName = document.querySelector(".new-draft-modal input[type='text']")
      .value;
    if (!validateName(newDraftName)) {
      alert(
        "Please only include alphanumeric symbols and hyphens in your draft name."
      );
      return;
    }
    let uniqueName = false;
    getData(newDraftName).then(function(data) {
      if (!data) {
        uniqueName = true;
      }
      if (!uniqueName) {
        alert("That name is already in use, please try again.");
        return;
      } else if (document.querySelector(".existing-cube-radial").checked) {
        currentCube =
          draftDropdown.options[draftDropdown.selectedIndex].innerHTML;
        hide(newDraftModal);
        initializeNewPrivateDraft(newDraftName);
      } else if (document.querySelector(".add-cube-radial").checked) {
        hide(newDraftModal);
        unhide(addCubeModal);
      }
    });
  }

  //TODO ADD VALIDATION HERE FOR <100 CARDS OR WEIRD CHARS
  function submitCubeList() {
    let newCubeName = document.querySelector(
      ".add-cube-modal input[type='text']"
    ).value;
    let textAreaData = document.querySelector(".cube-list-textarea textarea")
      .value;
    let submittedCubeArray = textAreaData.split("\n");
    createCubeList(newCubeName, submittedCubeArray);
    setTimeout(function() {
      currentCube = newCubeName;
      hide(addCubeModal);
      initializeNewPrivateDraft(newDraftName);
    }, 10000);
  }

  function joinExistingDraft() {
    let name = prompt("Please enter the name of an existing draft");
    if (!validateName(name)) {
      alert(
        "Please only include alphanumeric symbols and hyphens in your draft name."
      );
      return;
    }
    let nameExists = false;
    getData(name).then(function(data) {
      if (data) {
        nameExists = true;
      }
      if (nameExists) {
        localStorage.setItem("privateDraftName", name);
        location.reload();
      } else {
        alert("No draft exists with that name, try again.");
      }
    });
  }

  // HTML Events
  window.onload = function() {
    if (localStorage.getItem("privateDraftName")) {
      privateDraftDB = localStorage.getItem("privateDraftName");
      clearHTMLPiles();
      clearHTMLPlayerPiles();
      loadExistingDraft(privateDraftDB);
    }
    // disableEmptyPileButtons();
    loadCubeSelection();
  };

  newPrivateDraftBtn.addEventListener("click", event => {
    namePrivateDraft();
  });

  joinExistingDraftBtn.addEventListener("click", event => {
    joinExistingDraft();
  });

  cardPileBtns.forEach(ele => {
    ele.addEventListener("click", event => {
      pickPileButtonClick(ele);
    });
  });

  draftSelectionBtn.addEventListener("click", event => {
    submitDraftSelection();
  });

  submitCubeBtn.addEventListener("click", event => {
    submitCubeList(ref);
  });

  //input validations
  function validateName(name) {
    let acceptedChars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-";
    for (let i = 0; i < name.length; i++) {
      if (!acceptedChars.includes(name[i])) {
        return false;
      }
    }
    return true;
  }
  function tester() {
    getData("cubes").then(function(data) {
      alert(data);
    });
  }

  //Modal Close button

  closeModalBtns.forEach(ele => {
    ele.addEventListener("click", event => {
      closeModal(ele);
    })
  })

  function closeModal(element) {
    hide(element.parentElement);
  }

  function hide(ele) {
    ele.classList.add("hidden");
  }

  function unhide(ele) {
    ele.classList.remove("hidden");
    ele.style.display = "block";
  }

})();
