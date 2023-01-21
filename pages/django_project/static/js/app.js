const input = document.querySelectorAll("input");
const imgContainer = document.querySelectorAll(".img_container");
const btn = document.querySelectorAll(".del");
const fetchFile = document.querySelectorAll(".fetch");

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("change", (event) => {
    var pos = event.target.id;
    var val = event.target.files[0];

    loopFiles(val);

    function loopFiles(val) {
      switch (pos) {
        case "1":
          var imgContainer = document.querySelector("#img_container_1");
          break;
        case "2":
          var imgContainer = document.querySelector("#img_container_2");
          break;
        case "3":
          var imgContainer = document.querySelector("#img_container_3");
          break;
        case "4":
          var imgContainer = document.querySelector("#img_container_4");
          break;
        case "5":
          var imgContainer = document.querySelector("#img_container_5");
          break;
        case "6":
          var imgContainer = document.querySelector("#img_container_6");
          break;
        case "7":
          var imgContainer = document.querySelector("#img_container_7");
          break;
        case "8":
          var imgContainer = document.querySelector("#img_container_8");
          break;
        case "9":
          var imgContainer = document.querySelector("#img_container_9");
          break;
        case "10":
          var imgContainer = document.querySelector("#img_container_10");
          break;
      }

      var fileUrl = URL.createObjectURL(val);
      var image = document.createElement("img");
      image.setAttribute("src", fileUrl);
      image.setAttribute("aria-label", pos);
      imgContainer.appendChild(image);
      sessionStorage.setItem("fingerIdTarg", image.getAttribute("aria-label"));
    }
    //reset import values
    // event.target.value = null;
  });
}

btn.forEach((del) => {
  del.onclick = function removeFiles(event) {
    var pos = event.target.id;
    switch (pos) {
      case "fst":
        var imgContainer = document.querySelector("#img_container_1");
        break;
      case "scnd":
        var imgContainer = document.querySelector("#img_container_2");
        break;
      case "thd":
        var imgContainer = document.querySelector("#img_container_3");
        break;
      case "fth":
        var imgContainer = document.querySelector("#img_container_4");
        break;
      case "fifth":
        var imgContainer = document.querySelector("#img_container_5");
        break;
      case "sixth":
        var imgContainer = document.querySelector("#img_container_6");
        break;
      case "sevth":
        var imgContainer = document.querySelector("#img_container_7");
        break;
      case "eight":
        var imgContainer = document.querySelector("#img_container_8");
        break;
      case "ninth":
        var imgContainer = document.querySelector("#img_container_9");
        break;
      case "tenth":
        var imgContainer = document.querySelector("#img_container_10");
        break;
    }

    if (imgContainer.hasChildNodes()) {
      let children = imgContainer.childNodes;
      for (const node of children) {
        node.remove();
      }
    } else {
      alert("No Files To Remove");
    }
  };
});

var imgSource = "fcont";

fetchFile.forEach((analyze, index) => {
  analyze.addEventListener("click", () => {
    let position = index;

    switch (position) {
      case 0:
        var imgContainer = document.querySelector("#img_container_1");
        break;
      case 1:
        var imgContainer = document.querySelector("#img_container_2");
        break;
      case 2:
        var imgContainer = document.querySelector("#img_container_3");
        break;
      case 3:
        var imgContainer = document.querySelector("#img_container_4");
        break;
      case 4:
        var imgContainer = document.querySelector("#img_container_5");
        break;
      case 5:
        var imgContainer = document.querySelector("#img_container_6");
        break;
      case 6:
        var imgContainer = document.querySelector("#img_container_7");
        break;
      case 7:
        var imgContainer = document.querySelector("#img_container_8");
        break;
      case 8:
        var imgContainer = document.querySelector("#img_container_9");
        break;
      case 9:
        var imgContainer = document.querySelector("#img_container_10");
        break;
    }

    if (imgContainer.hasChildNodes()) {
      let children = imgContainer.childNodes;
      for (const node of children) {
        localStorage.setItem(imgSource, node.getAttribute("src"));
      }
      var renewedId = sessionStorage.getItem("fingerIdTarg");
      localStorage.setItem("fingerIdTarget", renewedId);

      // window.open((window.location.href = "http://127.0.0.1:8000/landing/"));
      // window.open(
      //   window.location.pathname.concat(
      //     window.location.pathname,
      //     "127.0.0.1:8000/landing/"
      //   )
      // );
    } else if (!imgContainer.hasChildNodes()) {
      alert("Please Import Image File");
    }
  });
});
/*function onSelect(e) {
          if (e.files.length > 5) {
              alert("Only 5 files accepted.");
              e.preventDefault();
          }
      }*/
