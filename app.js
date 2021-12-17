var jet = document.getElementById("jet");
var board = document.getElementById("board");
//var pause_button = document.getElementById("pause")
//var lif = 3;
var gamePaused = true;

function startGame(stuf) {
  if(gamePaused == true){
  window.addEventListener("keydown", (e) => {
    var left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));
    if (e.key == "ArrowLeft" && left > -10) {
      jet.style.left = left - 15 + "px";
    }
    else if (e.key == "ArrowRight" && left <= 520) {
      jet.style.left = left + 15 + "px";
    }

    if(e.key == 8){
      window.addEventListener("keydown")
    }


    if (e.key == "ArrowUp" || e.keyCode == 32) {
      // 32 is for spacebar
      var bullet = document.createElement("div");
      bullet.classList.add("bullets");
      board.appendChild(bullet);

      var movebullet = setInterval(() => {
        var rocks = document.getElementsByClassName("rocks");

        for (var i = 0; i < rocks.length; i++) {
          var rock = rocks[i];
          if (rock != undefined) {
            var rockbound = rock.getBoundingClientRect();
            var bulletbound = bullet.getBoundingClientRect();

            if (
              bulletbound.left >= rockbound.left &&
              bulletbound.right <= rockbound.right &&
              bulletbound.top <= rockbound.top &&
              bulletbound.bottom <= rockbound.bottom
            ) {
              rock.parentElement.removeChild(rock);

              document.getElementById("points").innerHTML =
                parseInt(document.getElementById("points").innerHTML) + 1;
            }
          }
        }
        var bulletbottom = parseInt(
          window.getComputedStyle(bullet).getPropertyValue("bottom")
        );

        if (bulletbottom >= 600) {
          clearInterval(movebullet);
        }

        bullet.style.left = left + 28 + "px";
        bullet.style.bottom = bulletbottom + 3 + "px";
      });
    }
  });




  var generaterocks = setInterval(() => {
    var rock = document.createElement("div");
    rock.classList.add("rocks");
    var rockleft = parseInt(
      window.getComputedStyle(rock).getPropertyValue("left")
    );
    rock.style.left = Math.floor(Math.random() * 550) + "px";

    board.appendChild(rock);
  }, 1000);

  var moverocks = setInterval(() => {
    var rocks = document.getElementsByClassName("rocks");

    if (rocks != undefined) {
      for (var i = 0; i < rocks.length; i++) {
        var rock = rocks[i];
        var rocktop = parseInt(
          window.getComputedStyle(rock).getPropertyValue("top")
        );
        if (rocktop >= 550) {
          alert("Game Over");
          clearInterval(moverocks);
          window.location.reload();
        }

        rock.style.top = rocktop + 5 + "px";
      }
    }
  }, 100);
  document.getElementById("board").style = "visibility:visible;"
  document.getElementById("jet").style = "visibility:visible;"
  document.getElementById("marq").style = "visibility:visible;"
  document.getElementById("score").style = "visibility:visible;"
  document.getElementById("points").style = "visibility:visible;"
  document.getElementById("ebala").remove();
}
}