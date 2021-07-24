const secondTitle = document.getElementById("second-title");
const myname = document.getElementById("myname");
const university = document.getElementById("university");
const fuculty = document.getElementById("fuculty");
const from = document.getElementById("from");
const research = document.getElementById("research");
const hobby = document.getElementById("hobby");

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

const thirdTitle = document.getElementById("third-title");
const act0Image = document.getElementById("act0-image");
const act0Title = document.getElementById("act0-title");
const act0Content = document.getElementById("act0-content");
// const act1Image = document.getElementById("act1-image");
// const act1Title = document.getElementById("act1-title");
// const act1Content = document.getElementById("act1-content");
// const act2Image = document.getElementById("act2-image");
// const act2Title = document.getElementById("act2-title");
// const act2Content = document.getElementById("act2-content");
// const act3Image = document.getElementById("act3-image");
// const act3Title = document.getElementById("act3-title");
// const act3Content = document.getElementById("act3-content");

const myData = {
  myname: "熊谷 相良",
  university: "新潟大学",
  fuculty: "創生学部",
  from: "長野県高森町",
  research: "農業画像の物体検出",
  hobby: "マラソン、野球観戦",
};

const recentActivity = {
  act1: {
    img: "./images/トレイルランニング走り途中.jpg",
    title: "トレイルマラソン",
    content:
      "7月18日に新潟市秋葉区で開催された、トレイルランナーズカップ新潟2021に参加しました。この日は気温が30℃を超える天気で非常にタフなレースとなりましたが、なんとか完走できました。",
  },
  act2: {
    img: "./images/燕ハーフ写真.jpg",
    title: "燕さくらマラソン",
    content:
      "4月17日に新潟県燕市で開催された、燕さくらマラソン(ハーフの部)に参加しました。この日は大雨の中、ビチョビチョになりながら走りました。",
  },
  act3: {
    img: "./images/noimage.png",
    title: "就職活動終了",
    content:
      "2021年3月に就職活動を終了しました。2022年4月からエンジニアとして頑張ります。",
  },
};

secondTitle.onmouseover = function () {
  myname.textContent = myData.myname;
  university.textContent = myData.university;
  fuculty.textContent = myData.fuculty;
  from.textContent = myData.from;
  research.textContent = myData.research;
  hobby.textContent = myData.hobby;
};

button1.onclick = function () {
  act0Image.setAttribute("src", recentActivity.act1.img);
  act0Title.textContent = recentActivity.act1.title;
  act0Content.textContent = recentActivity.act1.content;
};

button2.onclick = function () {
  act0Image.setAttribute("src", recentActivity.act2.img);
  act0Title.textContent = recentActivity.act2.title;
  act0Content.textContent = recentActivity.act2.content;
};

button3.onclick = function () {
  act0Image.setAttribute("src", recentActivity.act3.img);
  act0Title.textContent = recentActivity.act3.title;
  act0Content.textContent = recentActivity.act3.content;
};

// thirdTitle.onmouseover = function () {
//   act1Image.setAttribute("src", recentActivity.act1.img);
//   act1Title.textContent = recentActivity.act1.title;
//   act1Content.textContent = recentActivity.act1.content;
//   act2Image.setAttribute("src", recentActivity.act2.img);
//   act2Title.textContent = recentActivity.act2.title;
//   act2Content.textContent = recentActivity.act2.content;
//   act3Image.setAttribute("src", recentActivity.act3.img);
//   act3Title.textContent = recentActivity.act3.title;
//   act3Content.textContent = recentActivity.act3.content;
// };
