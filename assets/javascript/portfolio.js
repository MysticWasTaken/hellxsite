/*

Credits:
    - Lummit - https://obnoxious.club/ | https://github.com/Lumm1t/ | Discord: Lummit#0201
    - expl0it, shellcode.team
    - Steam (emoticon: https://steamcommunity-a.akamaihd.net/economy/emoticon/mgh_17)
    - Trollface image (http://www.rw-designer.com/icon-image/7835-256x256x32.png)
    - Tumblr images/icons:
        a) https://68.media.tumblr.com/730ba51e7f6b0203e023deeb0db8367b/tumblr_osgbbiLXWV1suieauo1_500.jpg
        b) https://68.media.tumblr.com/8436227895295acecdea170b612fb766/tumblr_nxgg5bYqm81rclv0wo1_500.jpg
        c) http://images.neon-sign.org/l-m/rose-flower-love-neon-sign.jpg
        d) https://media.istockphoto.com/vectors/rose-neon-sign-vector-id1088857104?k=6&m=1088857104&s=612x612&w=0&h=ZJCYow5i8noF6nTGHEd6b2bbe9X6rVx4cLDoceexAec=
        e) https://image.freepik.com/free-vector/polygonal-geometric-rose-neon-sign_1262-19626.jpg
        f) https://68.media.tumblr.com/49394d5aa66d4c7ea4ffebda38c6be7e/tumblr_orv2rd9eVC1rgewhto1_400.gif
        g) https://ih1.redbubble.net/image.268210271.5200/sticker,375x360-bg,ffffff.u2.png
        h) http://picture-cdn.wheretoget.it/ot63b4-l-610x610-shirt-rose-tumblr-grunge-grunge+t+shirt-clothes-t+shirt-tumblr+shirt-dead+roses-black+bear-soft+grunge-soft-soft+ghetto-ghetto-chill-cute-white-red-red+roses-white+tee-pale-sad-dar.jpg

Thanks for:
    - Google
    - StackOverflow
    - jQuery
    - jQuery Marquee
    - animate.css
    - typed.js

GitHub: https://github.com/Lumm1t/obnoxious.club

*/

'use strict';

const ipgeolocation = 'https://api.ipgeolocation.io/ipgeo?apiKey=1785ed53312f42c7b5ef89f65c3faa1a';

const timeouts = [];

const mobileAndTabletCheck = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

$(document).ready(() => {
  const links = [
    {
      name: 'saga',
      link: 'gothstar',
    },
    {
      name: 'eden',
      link: 'ed3n01',
    },
    {
      name: 'lem',
      link: 'horreur',
    },
    {
      name: 'author',
      link: 'P0STHUMAN',
    },
    {
      name: 'Mystic',
      link: 'black-pink',
    },
    {
      name: 'cough',
      link: 'grandness',
    },
    {
      name: 'lula',
      link: '_eq',
    },
    {
      name: 'Mhai',
      link: 'trapping',
    },
  ];

  for (let i in links) {
    let link = links[i];

    $('#marquee').append(`<a href="https://steamcommunity.com/id/${link.link}" target="_BLANK">${link.name}</a>`);

    link = $('#marquee').children('a').last();

    if (i != links.length - 1) $('#marquee').append(' / ');
  }

  if (mobileAndTabletCheck()) {
    $('#background').replaceWith('<div id="background" style="background-image: url(assets/images/mobile-background.jpg);"></div>');

    app.shouldIgnoreVideo = true;
  }

  app.titleChanger([ 'Mhai',  'cough', 'Mystic', 'author', 'lem', 'eden', 'saga', 'hell X']);
  app.iconChanger(['assets/others/fav.png', 'assets/others/fav.png', 'assets/others/fav.png', 'assets/others/fav.png', 'assets/others/fav.png', 'assets/others/fav.png', 'assets/others/fav.png', 'assets/others/fav.png', 'assets/others/fav.png']);
});

if ($.cookie('videoTime')) {
  app.videoElement.currentTime = $.cookie('videoTime');
  app.audioElement.currentTime = $.cookie('videoTime');
}

document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});

document.body.onkeyup = (event) => {
  if (event.keyCode == 32 && app.skippedIntro) {
    if (app.backgroundToggler) {
      app.videoElement.play();
      app.audioElement.play();
    } else {
      app.videoElement.pause();
      app.audioElement.pause();
    }

    return (app.backgroundToggler = !app.backgroundToggler);
  }
};

$('html').on('contextmenu', (event) => {
  const img = document.createElement('img');

  const trollfaceLight = app.skippedIntro ? '' : 'trollface-light';

  img.src = 'assets/others/trollface.jpg';
  img.width = 64;
  img.height = 64;
  img.alt = 'obnoxious.club';
  img.style = `position: absolute; left: ${event.pageX}px; top: ${event.pageY}px; z-index: 10`;
  img.className = `troll ${trollfaceLight}`;

  document.body.appendChild(img);
});

setInterval(() => {
  $('.troll').remove();
}, 600);

$('.skip').click(() => {
  skipIntro();
});

$.fn.extend({
  animateCss: function (animationName) {
    const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    this.addClass(`animated ${animationName}`).one(animationEnd, () => {
      $(this).removeClass(`animated ${animationName}`);
    });

    return this;
  },
});

// const writeLine = (text, speed, timeout, callback) => {
//   timeout = typeof timeout === 'number' ? timeout : [0, (callback = timeout)];

//   const lineNumber = app.id !== 2 ? ++app.id : (app.id += 2);

//   setTimeout(() => {
//     const typed = new Typed(`#line${lineNumber}`, {
//       strings: text,
//       typeSpeed: speed,
//       onComplete: callback,
//     });
//   }, timeout);
// };

$.getJSON(ipgeolocation, (data) => {
  clearCursor()
  writeLine([], () => {
    if (app.skippedIntro) return;

    clearCursor();


    writeLine([], () => {
      if (app.skippedIntro) return;

      clearCursor();

      writeLine([], () => {
        timeouts.push(
          setTimeout(() => {
            if (app.skippedIntro) return;

            clearCursor();

            setTimeout(() => {
              skipIntro();
            }, 300000);
          }, 300000)
        );
      });
    });
  });
});

const skipIntro = () => {
  if (app.skippedIntro) return;

  app.skippedIntro = true;

  timeouts.forEach((timeout) => {
    clearTimeout(timeout);
  });

  $('.enter').remove();

  $('#main').fadeOut(100, () => {
    $('#main').remove();

    $('#marquee').marquee({
      duration: 15000,
      gap: 420,
      delayBeforeStart: 1000,
      direction: 'left',
      duplicated: true,
    });

    setTimeout(() => {
      $('.brand-header').animateCss(app.effects[Math.floor(Math.random() * app.effects.length)]);
    }, 200);

    setTimeout(() => {
      const typed = new Typed('#brand', {
        strings: app.brandDescription,
        typeSpeed: 40,

        onComplete: () => {
          clearCursor();
        },
      });
    }, 1350);
    setTimeout(() => {
      const typed = new Typed('#discord', {
        strings: app.Discord,
        typeSpeed: 40,

        onComplete: () => {
          clearCursor();
        },
      });
    }, 4500);

    setTimeout(() => {
      if (!app.shouldIgnoreVideo) {
        app.videoElement.play();
        app.audioElement.play();
      }

      app.videoElement.addEventListener(
        'timeupdate',
        () => {
          $.cookie('videoTime', app.videoElement.currentTime, { expires: 1 });
        },
        false
      );

      $('.marquee-container').css('visibility', 'visible').hide().fadeIn(100);

      $('.marquee-container').animateCss('zoomIn');
      $('.head').fadeIn()

      $('.container').fadeIn(500);

      $('.background').fadeIn(200, () => {
        if (!app.shouldIgnoreVideo) $('#audio').animate({ volume: app.musicVolume }, app.musicFadeIn);
      });
    }, 200);
  });
};

const clearCursor = () => {
  return $('span').siblings('.typed-cursor').css('opacity', '0');
};
