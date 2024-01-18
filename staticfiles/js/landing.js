const imgHolder = document.querySelector(".image-holder");
var image = document.createElement("img");
const results = document.querySelector(".result-btn");
var fingerId = localStorage.getItem("fingerIdTarget");
results.setAttribute("id", fingerId);
window.addEventListener("load", displayFile);

function getFile() {
  var source = localStorage.getItem("fcont");
  image.setAttribute("src", source);
  image.setAttribute("id", "img_open");
  imgHolder.appendChild(image);
  localStorage.removeItem("fcont");
}
function displayFile() {
  let imageHold = document.querySelector(".image-holder");
  setTimeout(() => {
    var p = document.getElementsByTagName("p")[0];
    imageHold.removeChild(p);
    getFile();
  }, 1500);
}

const btn = document.querySelectorAll("#actionbutton");
btn.forEach((button, index) => {
  button.addEventListener("click", () => {
    let position = index;
    console.log(index);
    let img_open = document.getElementById("processed-image");
    switch (position) {
      case 0:
        normalize(img_open);
        break;
      case 1:
        segmentize(img_open);
        break;
      case 2:
        filter(img_open);
        break;
      case 3:
        binarized(img_open);
        break;
      case 4:
        thinning(img_open);
        break;
      case 5:
        features(img_open);
        break;
    }

    function binarized(img_processed) {
      let django_source = `${"../../media/md_output/Binarize_temp.jpg"}`;
      img_processed.setAttribute("src", django_source);
    }
    function segmentize(img_processed) {
      let django_source = `${"../../media/md_output/Segmentize_temp.jpg"}`;
      img_processed.setAttribute("src", django_source);
    }
    function normalize(img_processed) {
      let django_source = `${"../../media/md_output/Normalize_temp.jpg"}`;
      img_processed.setAttribute("src", django_source);
    }
  });
});

//Input Value Functionality ==>/

var patternValue = document.getElementById("pattern");
patternValue.value = null;
patternValue.addEventListener("change", (event) => {
  var valueTxt = event.target.value;
  sessionStorage.setItem("spanTitle", valueTxt);
  var spanElt = document.querySelector(".span");
  var item = sessionStorage.getItem("spanTitle");
  spanElt.textContent = item;
});

var rrc1 = document.getElementById("lrc");
rrc1.addEventListener("change", (e) => {
  var valueCount = e.target.value;
  localStorage.setItem("firstCount", valueCount);
});

var rrc2 = document.getElementById("lrc2");
rrc2.addEventListener("change", (e) => {
  var valueCount = e.target.value;
  localStorage.setItem("scndCount", valueCount);
});

var rrc3 = document.getElementById("lrc3");
rrc3.addEventListener("change", (e) => {
  var valueCount = e.target.value;
  localStorage.setItem("thirdCount", valueCount);
});

var rrc4 = document.getElementById("lrc4");
rrc4.addEventListener("change", (e) => {
  var valueCount = e.target.value;
  localStorage.setItem("fthCount", valueCount);
});

var rrc5 = document.getElementById("lrc5");
rrc5.addEventListener("change", (e) => {
  var valueCount = e.target.value;
  localStorage.setItem("fifthCount", valueCount);
});

//LEFT FINGER
var lrc = document.getElementById("rrc");
lrc.addEventListener("change", (e) => {
  var valueCount = e.target.value;
  localStorage.setItem("flcnt", valueCount);
});
var lrc2 = document.getElementById("rrc2");
lrc2.addEventListener("change", (e) => {
  var valueCount = e.target.value;
  localStorage.setItem("slcnt", valueCount);
});

var lrc3 = document.getElementById("rrc3");
lrc3.addEventListener("change", (e) => {
  var valueCount = e.target.value;
  localStorage.setItem("tlcnt", valueCount);
});

var lrc4 = document.getElementById("rrc4");
lrc4.addEventListener("change", (e) => {
  var valueCount = e.target.value;
  localStorage.setItem("flcnt", valueCount);
});

var lrc5 = document.getElementById("rrc5");
lrc5.addEventListener("change", (e) => {
  var valueCount = e.target.value;
  localStorage.setItem("fflcnt", valueCount);
});

results.addEventListener("click", (event) => {
  let currentlyselected = event.target.id;

  switch (currentlyselected) {
    case "1":
      var span = document.querySelector(".span");
      var fingVal = span.innerHTML;
      localStorage.setItem("fstpattern", fingVal);
      var fstCount = localStorage.getItem("firstCount");
      localStorage.setItem("rrc1", fstCount);
      break;

    case "2":
      var span = document.querySelector(".span");
      var fingVal = span.innerHTML;
      localStorage.setItem("scndcount", fingVal);
      var scnd_count = localStorage.getItem("scndCount");
      localStorage.setItem("rrc2", scnd_count);
      break;

    case "3":
      var span = document.querySelector(".span");
      var fingVal = span.innerHTML;
      localStorage.setItem("thirdcount", fingVal);
      var thd_count = localStorage.getItem("thirdCount");
      localStorage.setItem("rrc3", thd_count);
      break;

    case "4":
      var span = document.querySelector(".span");
      var fingVal = span.innerHTML;
      localStorage.setItem("fthcount", fingVal);
      var fth_count = localStorage.getItem("fthCount");
      localStorage.setItem("rrc4", fth_count);
      break;
    case "5":
      var span = document.querySelector(".span");
      var fingVal = span.innerHTML;
      localStorage.setItem("fifthcount", fingVal);
      var fifth_count = localStorage.getItem("fifthCount");
      localStorage.setItem("rrc5", fifth_count);
      break;
    //Switch Cases For Left Fingers;
    case "6":
      var span = document.querySelector(".span");
      var fingVal = span.innerHTML;
      localStorage.setItem("fstLeftCount", fingVal);
      var fifth_count = localStorage.getItem("flcnt");
      localStorage.setItem("lrc", fifth_count);
      break;
    case "7":
      var span = document.querySelector(".span");
      var fingVal = span.innerHTML;
      localStorage.setItem("leftScndCount", fingVal);
      var fifth_count = localStorage.getItem("slcnt");
      localStorage.setItem("lrc2", fifth_count);
      break;
    case "8":
      var span = document.querySelector(".span");
      var fingVal = span.innerHTML;
      localStorage.setItem("leftThdCount", fingVal);
      var fifth_count = localStorage.getItem("tlcnt");
      localStorage.setItem("lrc3", fifth_count);
      break;
    case "9":
      var span = document.querySelector(".span");
      var fingVal = span.innerHTML;
      localStorage.setItem("leftFthCount", fingVal);
      var fifth_count = localStorage.getItem("flcnt");
      localStorage.setItem("lrc4", fifth_count);
      break;
    case "10":
      var span = document.querySelector(".span");
      var fingVal = span.innerHTML;
      localStorage.setItem("leftFifCount", fingVal);
      var fifth_count = localStorage.getItem("fflcnt");
      localStorage.setItem("lrc5", fifth_count);

      let form = document.getElementsByTagName("form")[0];

      confirm("Saved Please Click Again To View Results") &&
        form.setAttribute("target", "_blank");
      form.setAttribute("action", "/result/");
      form.setAttribute("enctype", "multipart/form-data");
      // let scrptSrc = `${"location.href = '{% url 'result' %}'"}`;
      break;
    default:
      "Nothing To Be saved";
  }

  if (currentlyselected != "10") {
    window.confirm("Saved Please Close The Tab And Continue") && window.close();
  }
});
