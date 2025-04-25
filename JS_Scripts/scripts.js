// the following script is for the rotating ads

const adFrame = document.getElementById("ad-frame");
const ads = ["HTML/ad1.html", "HTML/ad2.html", "HTML/ad3.html"];
let index = 0;

setInterval(() => {
  index = (index + 1) % ads.length;
  adFrame.src = ads[index];
}, 5000); // change ad every 5 seconds

// the following script is for the posts
const posts = [
  {
    views: 18,
    text: "I'm Alive :D",
    likes: 4300,
    shares: 259,
    comments: 21,
    date: "247 BC",
  },
  {
    views: 7,
    text: "R.I.P Dad :( But I gotta promotion!",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "229 BC",
  },
  {
    views: 7,
    text: "I'm married!",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "226 BC",
  },
  {
    views: 7,
    text: "R.I.P Hasdribal :( But I got another promotion! Those Spansih tribes better watch out, cause I'm comin for them!",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "221 BC",
  },
  {
    views: 7,
    text: "Just conquered Saguntum 😈 What you gonna do about it Rome???",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "219 BC",
  },
  {
    views: 7,
    text: "I'm a wanted man now lol",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "218 BC",
  },
  {
    views: 7,
    text: "Ohhhh 💩 Rome just declared war... My b Carthage.",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "218 BC",
  },
  {
    views: 7,
    text: "On the move from Spain! Headed over the Alps and into Italy with a massive army! There's no way Rome can stop us when we have 50,000 infantry, 9,000 cavalry, and 37 elephants!!! Don't worry though Spain, my brother Hasdrubal and half of my army are staying to protect you ❤️",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "218 BC",
  },
  {
    views: 7,
    text: "Okay, the Alps were maybe a bad idea... Just lost 30,000 infantry, 4,000 cavalry, and 17 elephants in 15 days.",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "218 BC",
  },
  {
    views: 7,
    text: "These Roman's are weak! Two major victories in two months!! Time to spend the rest of winter with my new allies in Gaul ☺️🥶",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "218 BC",
  },
  {
    views: 7,
    text: "Winters over!!! Time for a suprise attack in Etruria 💀",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "217 BC",
  },
  {
    views: 7,
    text: "Okay, the swamp was a bad route to take... Just lost a lotta troops and my sight in an eye 🥺",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "217 BC",
  },
  {
    views: 7,
    text: "R.I.P. Etruria lol. Just devestated it and crushed the Roman army at Lake Trasimene!! Killed 15,000 and captured 10,000 all with one good eye 💪💪",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "217 BC",
  },
  {
    views: 7,
    text: "Who's this Fabius guy??? He's always following me around but never wants to fight. Face me like a man bro!!",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "217 BC",
  },
  {
    views: 7,
    text: "Rome shoulda stuck with Fabius lol. Ended his dictatorship and the two new consuls immediatly lost at Cannae. They even had way more troops than us 🤣🤣",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "217 BC",
  },
  {
    views: 7,
    text: "Wow I am a good general. All these Roman allies are joining us. Welcome to the team Capua!!",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "217 BC",
  },
  {
    views: 7,
    text: "Why take Rome when I can win over all of its allies instead!",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "217 BC",
  },
  {
    views: 7,
    text: "BRUH! Why no reinforcements from Carthage 😡 Please help 🥺👉👈",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "216 BC",
  },
  {
    views: 7,
    text: "OMG why is Fabius back, this time as consul #demotion",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "215 BC",
  },
  {
    views: 7,
    text: "Geez these Fabian tactics are annoying 😡 Always taking over towns right after I capture them!",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "213 BC",
  },
  {
    views: 7,
    text: "To the Roman's in the citadel at Tarentum, GIVE UP ALREADY!! I already took rest of the city, yall are just being annoying now.",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "212 BC",
  },
  {
    views: 7,
    text: "Dang, Rome really had to go and take back Syracuse and Capua rn 😑😒",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "211 BC",
  },
  {
    views: 7,
    text: "It was fun while it lasted guys but Tarentum just got captured by Rome, so I gotta run now 🏃‍♂️💨",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "209 BC",
  },
  {
    views: 7,
    text: "R.I.P Hasdrubal, you were a great brother 😢",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "207 BC",
  },
  {
    views: 7,
    text: "SCIPIO! Get the heck outa Africa! Not cool bro. Not cool.",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "204 BC",
  },
  {
    views: 7,
    text: "Masinissa you traitor! How could you join the Roman's??!?! Now I gotta come back and teach both you and Scipio a lesson!",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "203 BC",
  },
  {
    views: 7,
    text: "",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "2 BC",
  },
  // Add more posts here
];

const postsContainer = document.getElementById("posts-container");
const modal = document.getElementById("post-modal");
const modalContent = document.getElementById("modal-content");

function renderPosts() {
  posts.forEach((post) => {
    const postEl = document.createElement("div");
    postEl.className = "post";
    postEl.innerHTML = `
  <div class="post-header">
    <img class="profile-pic" src="Images/pfp.png" alt="Profile">
    <strong>Hannibal Barca</strong>
  </div>
  <div class="post-body">${post.text.length > 100 ? post.text.substring(0, 100) + "..." : post.text}</div>
  <div class="post-date">${post.date}</div>
  <div class="post-footer">
    <div><span>${post.views} Views</span></div>
    <div>
      <span>❤ ${post.likes}</span>
      <span>${post.shares} Shares</span>
      <span>${post.comments} Comments</span>
    </div>
  </div>
  <div class="post-icons">
    <span>👍 Like</span>
    <span>💬 Comment</span>
    <span>↪ Share</span>
  </div>
`;
    postEl.addEventListener("click", () => openModal(post));
    postsContainer.appendChild(postEl);
  });
}

function openModal(post) {
  modalContent.innerHTML = `
<span class="close-btn" onclick="closeModal()">&times;</span>
<div class="post-header">
  <img class="profile-pic" src="Images/pfp.png" alt="Profile">
  <strong>Hannibal Barca</strong>
</div>
<div class="post-body" style="white-space: normal;">${post.text}</div>
<div class="post-date">${post.date}</div>
<div class="post-footer">
  <div><span>${post.views} Views</span></div>
  <div>
    <span>❤ ${post.likes}</span>
    <span>${post.shares} Shares</span>
    <span>${post.comments} Comments</span>
  </div>
</div>
<div class="post-icons">
  <span>👍 Like</span>
  <span>💬 Comment</span>
  <span>↪ Share</span>
</div>
`;
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

renderPosts();