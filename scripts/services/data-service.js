(function() {


  angular
    .module("myApp")
    .factory("DataService", DataService);

  DataService.$inject = [];


  function DataService() {

    var dataList = [
      {
        type: 'desktop',
        priority: 3,
        studio: 'Krazy Keet Games',
        name: 'Annex: Conquer the World',
        logoSrc: 'http://other00.deviantart.net/159a/o/2014/261/d/9/d9959473ba41802a216d2bbbb2b7bb3f.png',
        version: '4.0',
        description: 'Annex: Conquer the World is an anime themed real time strategy game that brings fast paced combat with a diverse arsenal. Play as one of four factions: The East Ocean Alliance, the NEO Republic, the Shadow Organization, or the Renegades as they struggle for dominance all over the world, competing for a priceless red mineral. The game now contains 4 factions, over 30 tech trees, original maps, and tileset. Built using open source RTS MegaGlest, the focus of the game is multi-player and single-player skirmishes. However there are also scripted scenarios/missions!',
        platforms: ['Windows', 'Linux', 'OSX'],
        media: [
          'http://media.indiedb.com/images/games/1/9/8080/Annex_Screen_4.png',
          'http://media.indiedb.com/images/games/1/9/8080/Annex_Screen_1.jpg',
          'https://youtu.be/flE7v6J49bY'
        ],
        download: 'http://www.desura.com/games/annex-conquer-the-world',
        team: true,
        role: ['Designer', 'Lua - Scripts', 'Xml Defs', 'Art', 'Animation'],
        gitHub: 'https://bitbucket.org/annexctw'
      },
      {
        type: 'desktop',
        priority: 4,
        studio: 'Krazy Keet Games',
        name: 'Terra Centauri: Last Stand',
        logoSrc: 'http://i59.tinypic.com/2u5c94n.jpg',
        version: '0.5',
        description: '"Terra Centauri: Last Stand" is a single player real time strategy game, with some RPG elements. An ambitious project, the idea is to create a universe full of various playable races, lifeforms, vehicles, and locations. The Idea is that with continuous support from fans Terra can continue to grow and evolve.',
        platforms: ['Windows', 'Linux'],
        media: [
          'http://i59.tinypic.com/2zgsx9u.jpg',
          'http://i60.tinypic.com/29crvrt.jpg',
          'https://youtu.be/_eDUGezLY7w'
        ],
        download: 'https://www.patreon.com/terra',
        gitHub: 'https://github.com/Ishmaru/terra_centauri_data'
      },
      {
        type: 'desktop',
        priority: 2,
        studio: 'Krazy Keet Games',
        name: 'Command Assault',
        logoSrc: 'https://raw.githubusercontent.com/Ishmaru/Assault-Command-Mod-for-MG/master/command_assault.png',
        version: '1.6',
        description: 'Assault Command is a fast paced RTS experience. With focus on combat over base construction.',
        platforms: ['TBA'],
        media: [
          'https://raw.githubusercontent.com/Ishmaru/Assault-Command-Mod-for-MG/master/screen2.png',
          'https://raw.githubusercontent.com/Ishmaru/Assault-Command-Mod-for-MG/master/screen1.png'
        ],
        download: 'https://forum.megaglest.org/index.php?topic=9830.msg92526#msg92526',
        gitHub: 'https://github.com/Ishmaru/Assault-Command-Mod-for-MG',
        requires: "Megaglest"
      },
      {
        type: 'desktop',
        priority: 2,
        studio: 'Krazy Keet Games',
        name: 'CHASM',
        version: 'unreleased',
        logoSrc: 'http://orig04.deviantart.net/4235/f/2013/016/b/b/bbc8ab2daf68929da76f0e9733a38e05-d5rp4wy.png',
        description: 'Chasm is base in a Fantasy World War 2 world. The powerful Republic of Cruix launched a war of conquest against the world and the only nation able to withstand the onslaught is the wealthy Kindom of Alandia. This game is focused on simple custom deathmatch style battle. There are no Campaigns, Scenarios, or Multiplayer in this game. Still Chasm boasts higher resolution models and textures and still a lot of fun!',
        platforms: ['TBA'],
        media: [
          'http://media.moddb.com/images/members/1/487/486330/screen546.jpg',
          'http://pre14.deviantart.net/fa9f/th/pre/f/2010/195/0/2/027af24036a850d8ec962bc4ab4fd3e7.jpg',
          'https://youtu.be/J5K3kqfr7GM'
        ],
        download: null
      },
      {
        type: 'desktop',
        priority: 0,
        studio: 'Krazy Keet Games',
        name: 'Super Ricochet Arena',
        version: '1.1',
        logoSrc: 'http://media.indiedb.com/images/articles/1/149/148357/auto/Super_Ricoch.png',
        description: 'Super Ricochet Arena is a fast paced top down arena game with unique mechanic where all bullets "ricochet" off walls which allows for some strategic shooting.',
        platforms: ['TBA'],
        media: [
          'http://media.indiedb.com/images/games/1/22/21726/kestrel2.jpg',
          'http://media.indiedb.com/images/games/1/22/21726/Iron_Crusaders1.jpg',
          'https://youtu.be/mVYJVDLGDeQ'
        ],
        download: 'http://gamejolt.com/games/super-ricochet-arena/89844'
      },
      {
        type: 'mobile',
        priority: 5,
        studio: 'Titanomachy Studios',
        name: 'Pocket Assault',
        version: '1.3',
        logoSrc: 'http://media.indiedb.com/cache/images/games/1/27/26277/thumb_620x2000/Pocket_Assault.jpg',
        description: 'It’s a simple shooter that is easy to learn, and fun to play. Work your way through 13 progressively challenging levels while using every means at your disposal to complete each level.',
        platforms: ['TBA'],
        media: [
          'http://media.indiedb.com/images/games/1/27/26277/screen3.jpg',
          'http://media.indiedb.com/images/games/1/27/26277/screen4.jpg',
          'https://www.youtube.com/watch?v=vdfoRqV786A'
        ],
        android: 'https://play.google.com/store/apps/details?id=com.titanomachystudios.pocketassault&hl=en',
        itunes: 'https://itunes.apple.com/us/app/pocket-assault/id1099522677?mt=8'
      },
      {
        type: 'mobile',
        priority: 1,
        studio: 'Titanomachy Studios',
        name: 'Retro Grand Prix',
        version: '1.0',
        logoSrc: 'https://lh3.googleusercontent.com/4e_WM23WTKfYWNaAxdEGWp75j6wuvXZOB36B4ID-EAKBLKxIxOY17w2zCX7sIhZAGNU=w300-rw',
        description: 'Retro Grand Prix is a Retro Futuristic Racing game. Dodge obstacles, explosives and terrain as you race your opponent into brutal victory!',
        platforms: ['TBA'],
        media: [
          'https://lh3.googleusercontent.com/V7kKChD0Qy-MIVvvcQ_ExQiY5dxQrdPJeiG79uG_bQAPpZry2ec2uItqVyE7G1J_6bc=h900-rw',
          'https://lh3.googleusercontent.com/9Yg2nrmjjXHil1KJqXMiX0mRqXwb4Hppq9afehIuCHXuby9m_--jDk7SGQqcv1t07De8=h900-rw',
          'https://youtu.be/SqocBbJeuoI'
        ],
        android: 'https://play.google.com/store/apps/details?id=com.titanomachystudios.retrograndprix'
      },
      {
        type: 'web',
        priority: 6,
        name: 'Brave Battle Arena',
        studio: 'Krazy Keet Games',
        logoSrc: 'https://raw.githubusercontent.com/Ishmaru/Brave-Battle-Quest/master/art/bba.png',
        url: 'http://ishmaru.github.io/Brave-Battle-Quest/',
        media: ['https://raw.githubusercontent.com/Ishmaru/Brave-Battle-Quest/master/art/bbascreen1.png', 'https://raw.githubusercontent.com/Ishmaru/Brave-Battle-Quest/master/art/bbascreen2.png'],
        gitHub: 'https://github.com/Ishmaru/Brave-Battle-Quest',
        description: 'This is a classic JRPG combat style game, where you and your opponent trade turns using distinct skills till one succeeds, and spoils are taken. This game continues so long as Akari is alive.',
        technologies: ['HTML', 'Javascript', 'CSS', 'jQuery', 'Animate CSS']
      },
      {
        type: 'web',
        priority: 6,
        name: 'Indie Think Tank',
        logoSrc: 'https://dl.dropboxusercontent.com/s/pg2iw08cyt8blh1/Screen%20Shot%202016-07-08%20at%206.39.12%20PM.png',
        url: 'https://whispering-dusk-51539.herokuapp.com/',
        gitHub: 'https://github.com/Ishmaru/indie_think_tank',
        description: 'Have a awesome game idea? Post it here! Are you a game developer looking for something to do? Check out our Ideas, and share with the community! Its that simple.',
        technologies: ['Ruby on Rails', 'HTML', 'CSS', 'Bootstrap']
      },
      {
        type: 'web',
        priority: 1,
        name: 'RnR',
        logoSrc: 'https://dl.dropboxusercontent.com/s/bh70wrir8sfkucy/RNR2.jpg',
        url: 'https://enigmatic-inlet-27771.herokuapp.com/',
        media: ['https://raw.githubusercontent.com/Ishmaru/rnr/master/public/images/rnr_screenshot.jpg'],
        gitHub: 'https://github.com/Ishmaru/rnr',
        description: "RnR is an app that uses your Instagram account to decide how to spend your well-earned vacations. Our group app uses Instagram's API to filter through the likes of many images that you've liked and presents some suggestions based on the results.",
        technologies: ['Node JS', 'Express', 'Mongo DB', 'Mongoose', 'EJS', 'Passport', 'Materialize'],
        team: true,
        role: ['GitHub Master', 'Back End developer']
      },
      {
        type: 'art',
        medium: 'logo',
        priority: 1,
        name: 'Krazy Keet Games',
        logoSrc: 'http://other00.deviantart.net/e280/o/2014/261/9/0/90bbc32acb71e0387a611b22dd27fdc7.png'
      },
      {
        type: 'art',
        medium: '3D',
        priority: 5,
        name: 'Karina Battle',
        logoSrc: 'http://other00.deviantart.net/d4c5/o/2010/353/b/9/b986246b08e6f028e2977ce507557404.jpg'
      },
      {
        type: 'art',
        medium: '3D',
        priority: 3,
        name: 'Chasm Image',
        logoSrc: 'http://other00.deviantart.net/127c/o/2011/003/f/6/f6e053d41c832a3dc570cd5c5aafbe6e.jpg'
      },
      {
        type: 'art',
        medium: '3D',
        priority: 3,
        name: 'TANK',
        logoSrc: 'http://other00.deviantart.net/cbde/o/2011/003/9/7/97f552d8b15b06d97b1961149e49033e.jpg'
      },
      {
        type: 'art',
        medium: '3D',
        priority: 4,
        name: 'Mech Battle',
        logoSrc: 'http://other00.deviantart.net/8fa5/o/2010/353/1/7/1719108e102ec02f90a21c3ccfefbf66.jpg'
      },
      {
        type: 'art',
        medium: '3D',
        priority: 6,
        name: 'Dojo',
        logoSrc: 'http://other00.deviantart.net/8122/o/2010/353/3/1/3161d3d532d90314ab7de2e7229760b2.jpg'
      },
      {
        type: 'art',
        medium: '3D',
        priority: 4,
        name: 'Space',
        logoSrc: 'http://other00.deviantart.net/4f3b/o/2010/353/1/5/1525c57900f4fd2ba1ef14a82841dbd3.jpg'
      },
      {
        type: 'art',
        medium: '3D',
        priority: 1,
        name: 'Beach Hut',
        logoSrc: 'http://other00.deviantart.net/05c0/o/2011/003/6/d/6dafc5e847d886b237be1916e5f5aa1e.jpg'
      }
    ];

    return {dataList};
  };

})();



