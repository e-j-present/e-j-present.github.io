// the following script is for the rotating ads

const adFrame = document.getElementById("ad-frame");
const ads = ["HTML/ad1.html", "HTML/ad2.html", "HTML/ad3.html", "HTML/ad4.html", "HTML/ad5.html", "HTML/ad6.html", "HTML/ad7.html", "HTML/ad8.html", "HTML/ad9.html", "HTML/ad10.html"];
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
    comment: [
        {
            profile_pic: "Images/scipio.png",
            name: "Hamilcar Barca",
            date: "245 BCE",
            comment: "Happy Birthday Son!!!"
        },
    ]
    
  },
  {
    views: 7,
    text: "R.I.P Dad :( But I gotta promotion!",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "229 BC",
    comment: [
        {
            profile_pic: "Images/pfp.png",
            name: "Hamilcar Barca",
            date: "245 BCE",
            comment: "Never forget son... ROME SUCKS 🤘🔥 #RomeStillSucks"
        },
    ]
  },
  {
    views: 7,
    text: "I'm married!",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "226 BC",
    comment: [
        {
            profile_pic: "Images/scipio.png",
            name: "Generic Carthaginian 1",
            date: "226 BCE",
            comment: "Congrats bro!"
        },
        {
            profile_pic: "Images/scipio.png",
            name: "Generic Carthaginian 2",
            date: "226 BCE",
            comment: "Thats so awesome!"
        }
    ]
  },
  {
    views: 7,
    text: "R.I.P Hasdribal :( But I got another promotion! Those Spansih tribes better watch out, cause I'm comin for them!",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "221 BC",
    comment: [
        
    ]
  },
  {
    views: 7,
    text: "Just conquered Saguntum 😈 What you gonna do about it Rome???",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "219 BC",
    comment: [
      {
        profile_pic: "Images/scipio.png",
        name: "Generic Carthaginian 1",
        date: "219 BCE",
        comment: "#ImagineBeingRoman"
      },
    ]
  },
  {
    views: 7,
    text: "I'm a wanted man now lol",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "218 BC",
    comment: [
        
    ]
  },
  {
    views: 7,
    text: "Ohhhh 💩 Rome just declared war... My b Carthage.",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "218 BC",
    comment: [
      {
        profile_pic: "Images/scipio.png",
        name: "Generic Carthiaginian 1",
        date: "218 BCE",
        comment: "👀 WDYM MY B? 👀"
      },   
    ]
  },
  {
    views: 7,
    text: "On the move from Spain! Headed over the Alps and into Italy with a massive army! There's no way Rome can stop us when we have 50,000 infantry, 9,000 cavalry, and 37 elephants!!! Don't worry though Spain, my brother Hasdrubal and half of my army are staying to protect you ❤️",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "218 BC",
    comment: [
        
    ]
  },
  {
    views: 7,
    text: "Okay, the Alps were maybe a bad idea... Just lost 30,000 infantry, 4,000 cavalry, and 17 elephants in 15 days.",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "218 BC",
    comment: [
        
    ]
  },
  {
    views: 7,
    text: "These Roman's are weak! Two major victories in two months!! Time to spend the rest of winter with my new allies in Gaul ☺️🥶",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "218 BC",
    comment: [
        
    ]
  },
  {
    views: 7,
    text: "Winters over!!! Time for a suprise attack in Etruria 💀",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "217 BC",
    comment: [
        
    ]
  },
  {
    views: 7,
    text: "Okay, the swamp was a bad route to take... Just lost a lotta troops and my sight in an eye 🥺",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "217 BC",
    comment: [
        
    ]
  },
  {
    views: 7,
    text: "R.I.P. Etruria lol. Just devestated it and crushed the Roman army at Lake Trasimene!! Killed 15,000 and captured 10,000 all with one good eye 💪💪",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "217 BC",
    comment: [
        
    ]
  },
  {
    views: 7,
    text: "Who's this Fabius guy??? He's always following me around but never wants to fight. Face me like a man bro!!",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "217 BC",
    comment: [
        
    ]
  },
  {
    views: 7,
    text: "Rome shoulda stuck with Fabius lol. Ended his dictatorship and the two new consuls immediatly lost at Cannae. They even had way more troops than us 🤣🤣",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "217 BC",
    comment: [
      {
        profile_pic: "Images/fabius.png",
        name: "Fabius Maximus",
        date: "217 BCE",
        comment: "Tell me about it 🙄"
      }
        
    ]
  },
  {
    views: 7,
    text: "Wow I am a good general. All these Roman allies are joining us. Welcome to the team Capua!!",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "217 BC",
    comment: [
        
    ]
  },
  {
    views: 7,
    text: "Why take Rome when I can win over all of its allies instead!",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "217 BC",
    comment: [
        
    ]
  },
  {
    views: 7,
    text: "BRUH! Why no reinforcements from Carthage 😡 Please help 🥺👉👈",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "216 BC",
    comment: [
        
    ]
  },
  {
    views: 7,
    text: "OMG why is Fabius back, this time as consul #demotion",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "215 BC",
    comment: [
        
    ]
  },
  {
    views: 7,
    text: "Geez these Fabian tactics are annoying 😡 Always taking over towns right after I capture them!",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "213 BC",
    comment: [
        
    ]
  },
  {
    views: 7,
    text: "To the Roman's in the citadel at Tarentum, GIVE UP ALREADY!! I already took rest of the city, yall are just being annoying now.",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "212 BC",
    comment: [
        
    ]
  },
  {
    views: 7,
    text: "Dang, Rome really had to go and take back Syracuse and Capua rn 😑😒",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "211 BC",
    comment: [
        
    ]
  },
  {
    views: 7,
    text: "It was fun while it lasted guys but Tarentum just got captured by Rome, so I gotta run now 🏃‍♂️💨",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "209 BC",
    comment: [
        {
            profile_pic: "Images/scipio.png",
            name: "Scipio Africanas",
            date: "209 BCE",
            comment: "Get back here coward! You can't run from me forever! 😡"
        }
    ]
  },
  {
    views: 7,
    text: "R.I.P Hasdrubal, you were a great brother 😢",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "207 BC",
    comment: [
        {
            profile_pic: "Images/scipio.png",
            name: "Hasdrubal Barca",
            date: "207 BCE",
            comment: "Peace out bro ✌️"
        }
    ]
  },
  {
    views: 7,
    text: "SCIPIO! Get the heck outa Africa! Not cool bro. Not cool.",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "204 BC",
    comment: [
      {
        profile_pic: "Images/scipio.png",
        name: "Scipio Africanas",
        date: "204 BCE",
        comment: "Nah"
      },
      {
        profile_pic: "Images/scipio.png",
        name: "Generic Roman 1",
        date: "204 BCE",
        comment: "Wow Scipio, what a savage 😎🔥"
      },
    ]
  },
  {
    views: 7,
    text: "Masinissa you traitor! How could you join the Roman's??!?! Now I gotta come back and teach both you and Scipio a lesson!",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "203 BC",
    comment: [
        {
            profile_pic: "Images/scipio.png",
            name: "Masinissa",
            date: "203 BCE",
            comment: "Sorry bro, but I gotta do what I gotta do 😔"
        },
        {
            profile_pic: "Images/scipio.png",
            name: "Scipio Africanas",
            date: "203 BCE",
            comment: "Come at me bro, I dare you 😏"
        }
    ]
  },
  {
    views: 7,
    text: "Had a nice chat with Scipio today, too bad his terms were absolutly insane!",
    likes: 20000,
    shares: 250,
    comments: 21,
    date: "202 BC",
    comment: [
        {
            profile_pic: "Images/scipio.png",
            name: "Scipio Africanas",
            date: "202 BCE",
            comment: "Just doing my job bro, you know how it is 😎"
        }
    ]
  },
  {
    views: 7, 
    text: "Chat, we are so cooked. Zama did not go well for us at all. Guess we lost the war 😞",
    likes: 20000,
    shares: 250,
    comments: 21, 
    date: "201 BC",
    comment: [
      {
        profile_pic: "Images/scipio.png",
        name: "Generic Carthaginian 1",
        date: "201 BCE",
        comment: "WHAT DO YOU MEAN WE LOST THE WAR!!! WHAT AM I GOING TO DO?!?"
      },
      {
        profile_pic: "Images/scipio.png",
        name: "Generic Carthaginian 2",
        date: "201 BCE",
        comment: "Bruh, who put this guy in charge 🤦‍♂️"
      },
    ]
  },
  {
    views: 7, 
    text: "OMG what are these peace terms!! Paying all this money, not being able to declare war, and we have to give up almost all our navy and elephants??!!?! This is so unfair 😡",
    likes: 20000,
    shares: 250,
    comments: 21, 
    date: "201 BC",
    comment: [
      {
        profile_pic: "Images/scipio.png",
        name: "Michael the Elephant Breeder (Elephant & Co.)",
        date: "201 BCE",
        comment: "If you want more elephants, I'll give you a good rate 🐘"
      },
      {
        profile_pic: "Images/scipio.png",
        name: "Generic Roman 1",
        date: "201 BCE",
        comment: "Imagine not having any money 💰"
      },
      {
        profile_pic: "Images/scipio.png",
        name: "Masinissa",
        date: "201 BCE",
        comment: "Since you can't declear war on anyone, we probably won't attack you frequently 😉"
      },
    ]
  },
  {
    views: 7, 
    text: "Just got elected Suffete!!! Bouta be some major reforms around here!",
    likes: 20000,
    shares: 250,
    comments: 21, 
    date: "200 BC",
    comment: [
        
    ]
  },
  {
    views: 7, 
    text: "WOW! Actually crazy! I'm suffering from success over here. I have such a positive impact on Carthage that both my own states senators and the Roman's want me out!",
    likes: 20000,
    shares: 250,
    comments: 21, 
    date: "196 BC",
    comment: [

    ]
  },
  {
    views: 7, 
    text: "Bye Carthage! Crazy that you would kick me out 🙄 I'm off to Tyre!",
    likes: 20000,
    shares: 250,
    comments: 21, 
    date: "195 BC",
    comment: [
        
    ]
  },
  {
    views: 7, 
    text: "Guess who the new military advisor of Tyre is?!!?!?!",
    likes: 20000,
    shares: 250,
    comments: 21, 
    date: "194 BC",
    comment: [
        {
            profile_pic: "Images/scipio.png",
            name: "Antiochus III the Great",
            date: "194 BCE",
            comment: "You're gonna be my new military advisor? I don't know if that's a good idea... 😬"
        }
    ]
  },
  {
    views: 7, 
    text: "Dang these Roman's have been after me my whole life! I cannot catch a break! Conquering my new home in Tyre and demanding I be turned over?!?!? I'm out of here, yall aint never catchin me.",
    likes: 20000,
    shares: 250,
    comments: 21, 
    date: "189 BC",
    comment: [
      {
        profile_pic: "Images/scipio.png",
        name: "Scipio Africanas",
        date: "189 BCE",
        comment: "You can't run from me forever Hannibal! I'm coming for you! 😡"
      }
    ]
  },
  {
    views: 7, 
    text: "Armenia and Bithynia are lit 🔥 Good luck catching me now Rome! I got a whole fleet of ships at my command!",
    likes: 20000,
    shares: 250,
    comments: 21, 
    date: "188 BC",
    comment: [
        {
            profile_pic: "Images/scipio.png",
            name: "Scipio Africanas",
            date: "188 BCE",
            comment: "You think a fleet of ships is gonna save you? I have a whole army of Romans at my command! 😏"
        }
    ]
  },
  {
    views: 7, 
    text: "It's crazy that the Roman's want me this bad! I'd rather die than give in!",
    likes: 20000,
    shares: 250,
    comments: 21, 
    date: "183 BC",
    comment: [
        
    ]
  },
  {
    views: 7, 
    text: "Goodbye guys! Its been real but I dont wanna get captured by the Romans, so I guess theres really only one option left 😔",
    likes: 20000,
    shares: 250,
    comments: 21, 
    date: "181 BC",
    comment: [
        
    ]
  },
  {
    views: 7, 
    text: "I'm dead ☠️",
    likes: 20000,
    shares: 250,
    comments: 21, 
    date: "181 BC",
    comment: [
        {
            profile_pic: "Images/scipio.png",
            name: "Scipio Africanas",
            date: "181 BCE",
            comment: "Haha loser 😆"
        }
    ]
  },
  // Add more posts here
];

const postsContainer = document.getElementById("posts-container");
const modal = document.getElementById("post-modal");
const modalContent = document.getElementById("modal-content");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatNumber(num) {
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + "B";
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, '') + "K";
  return num.toString();
}


function renderPosts() {
  posts.forEach((post) => {
    const postEl = document.createElement("div");
    postEl.className = "post";

    // Ensure comments count is synced with the actual array length
    const commentCount = post.comment ? post.comment.length : 0;
    post.likes = getRandomInt(25000,75000);
    post.views = getRandomInt(50000, 350000);
    post.shares = getRandomInt(0, 30);

    postEl.innerHTML = `
      <div class="post-header">
        <img class="profile-pic" src="Images/pfp.png" alt="Profile">
        <strong>Hannibal Barca</strong>
      </div>
      <div class="post-body">${post.text.length > 100 ? post.text.substring(0, 100) + "..." : post.text}</div>
      <div class="post-date">${post.date}</div>
      <div class="post-footer">
        <div><span>${formatNumber(post.views)} Views</span></div>
        <div>
          <span>❤ ${formatNumber(post.likes)}</span>
          <span>${post.shares} Shares</span>
          <span>${commentCount} Comments</span>
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
    let commentsHTML = "";
    if (post.comment && post.comment.length > 0) {
      commentsHTML = post.comment.map((c) => `
        <div class="single-comment">
          <img src="${c.profile_pic}" alt="pfp" class="comment-profile-pic">
          <div class="comment-content">
            <div class="comment-header">
              <strong>${c.name}</strong>
              <span class="comment-date">${c.date}</span>
            </div>
            <div class="comment-text">${c.comment}</div>
          </div>
        </div>
      `).join("");
    } else {
      commentsHTML = `<div class="no-comments" style="color: gray;">No Comments Yet!</div>`;
    }
    
    // Ensure comments count is synced with the actual array length
    const commentCount = post.comment ? post.comment.length : 0;
    modalContent.innerHTML = `
      <span class="close-btn" onclick="closeModal()">&times;</span>
      <div class="post-header">
        <img class="profile-pic" src="Images/pfp.png" alt="Profile">
        <strong>Hannibal Barca</strong>
      </div>
      <div class="post-body" style="white-space: normal;">${post.text}</div>
      <div class="post-date">${post.date}</div>
      <div class="post-footer">
        <div><span>${formatNumber(post.views)} Views</span></div>
        <div>
          <span>❤ ${formatNumber(post.likes)}</span>
          <span>${post.shares} Shares</span>
          <span>${commentCount} Comments</span>
        </div>
      </div>
      <div class="post-icons">
        <span>👍 Like</span>
        <span>💬 Comment</span>
        <span>↪ Share</span>
      </div>
      <div class="comment-section">
        <h3>Comments</h3>
        <div class="comment-box">
          ${commentsHTML}
        </div>
      </div>
    `;
    modal.style.display = "flex";
  }
  

function closeModal() {
  modal.style.display = "none";
}
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

renderPosts();