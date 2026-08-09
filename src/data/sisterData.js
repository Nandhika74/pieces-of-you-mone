// =====================================
// PERSONALIZE MONE'S WEBSITE HERE
// =====================================
//
// Welcome! Everything on Mone's birthday website can be customized right here.
// You can edit her nickname, photos, movie captions, book list, favorite memories,
// and the final birthday message below.

export const sisterData = {
  // 1. BASIC INFORMATION
  sisterName: "Mone",
  nickname: "Mone",
  birthDateText: "August 2026",
  tagline: "a little world I made for Mone",

// MUSIC & CINEMA SOUNDTRACK (Mia & Sebastian's Theme - La La Land)
  music: {
    title: "Mia & Sebastian's Theme",
    movie: "La La Land",
    composer: "Justin Hurwitz",
    audioPath: "/audio/mia-and-seb-theme.mp3",
    youtubeUrl: "https://www.youtube.com/watch?v=CL3j45_G-eA",
    youtubeEmbedId: "CL3j45_G-eA",
    verifiedText: "YouTube Verified Soundtrack • Justin Hurwitz",
    albumCover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop",
    quote: "A quiet piano melody that feels like nostalgia, growth, and two sisters on the same wavelength.",
  },

  // 2. CENTRAL THEME & QUOTES
  centralQuote: "Some things are given to us. Some things we borrow. And some things quietly become a part of us.",
  pathmakerQuote: "Without even realizing it, you’ve been my quiet guide, my path-maker, and my constant inspiration.",
  pathmakerSubtext: "Two years ahead, but always holding a warm space right beside me.",
  pathmakerSteps: [
    { first: "You explored the world first...", second: "And gave me the quiet confidence to follow." },
    { first: "You built your own tastes & quirks...", second: "And subtly shaped so many things I love today." },
    { first: "You faced new beginnings ahead of me...", second: "And showed me there was nothing to be afraid of." },
    { first: "You walked through every phase first...", second: "So I always had an elder sister lighting up the path." },
  ],

  // 3. COLOR PALETTE CONFIG (Green Lays & Warm Ivory Theme)
  colors: {
    bgWarmCream: "#FAF6EF",
    bgIvory: "#FFFDF9",
    sageGreen: "#8A9A86",
    forestGreen: "#2D3B2D",
    mutedOlive: "#556B2F",
    subtleGold: "#7B3E48",
    darkAccent: "#1E2B1E",
  },

  // 4. CHILDHOOD PHOTO (Screen 02)
  childhoodPhoto: {
    url: "photos/family-childhood.png",
    alt: "Mone and me childhood memory holding hands in front of the blue car",
    line1: "Before we became who we are now...",
    line2: "there was just us.",
  },

  // 4B. US & YOU AND ME POLAROID GALLERY (6 Dedicated Slots)
  usMemories: [
    {
      id: "us-1",
      title: "Happy You",
      date: "Bright Side",
      url: "/photos/happy .jpg",
      caption: "Keep smiling and be happy always.",
      rotation: "-3deg",
    },
    {
      id: "us-2",
      title: "Pasakara mone",
      date: "Quiet Moments",
      url: "/photos/pasakara you.jpg",
      caption: "404 error not found with me.only with mirdhul😒",
      rotation: "2deg",
    },
    {
      id: "us-3",
      title: "Serious phone mode",
      date: "Mischief Mode",
      url: "/photos/serious mone.jpg",
      caption: "The mode which is always on when i am around.🤦‍♀️🤷‍♀️",
      rotation: "-1.5deg",
    },
    {
      id: "us-4",
      title: "Funny You",
      date: "Comedy Queen",
      url: "/photos/funny you.jpg",
      caption: "You are not as good as me in making jokes though🥱",
      rotation: "3deg",
    },
    {
      id: "us-5",
      title: "Theeni pandaram you",
      date: "Easy Breeze",
      url: "/photos/chill-mode-you.jpg",
      caption: "I hope the world knows how much theeni pandaram you are.<perks of being thin i guess>",
      rotation: "-2deg",
    },
    {
      id: "us-6",
      title: "Irritated Mode You",
      date: "Not In The Mood",
      url: "/photos/irritated-mode-you.jpg",
      caption: "sadly,The version that is abundant when i am near",
      rotation: "1.5deg",
    },
  ],

  // 5. MONE'S STORY & PHOTOS (Screen 04)
  moneStoryPhotos: [
    {
      id: "childhood",
      title: "Childhood Days",
      category: "Childhood Memory",
      url: "/photos/bday-celeb.jpg",
      caption: "Mone & Me holding hands — eventhough how much struggle we gone through or how many fights we do put i hope the hand hold persists forever!",
      rotation: "-3deg",
    },
    {
      id: "college",
      title: "College Era",
      category: "College Life",
      url: "/photos/college-mone.jpg",
      caption: "The miniku who had no idea about her core subjects!Glad that you finished and now chose what makes you happy😂",
      rotation: "2deg",
    },
    {
      id: "ncc",
      title: "NCC Discipline",
      category: "NCC Girl",
      url: "/photos/ncc-discipline.jpg",
      caption: "The serious moded senior --now belongs to passed out batch",
      rotation: "-2deg",
    },
    {
      id: "passion",
      title: "Things She Loves to do",
      category: "Quiet Moments",
      url: "/photos/her likes.jpeg",
      caption: "Your fav go to do actionss....wooohhhh --i forgot to add SLEEPINGGG-which is the chore you do mostly🏃‍♀️‍➡️",
      rotation: "4deg",
    },
    {
      id: "love-1",
      title: "Things She Loves — Food version",
      category: "Things She Loves",
      url: "/photos/things-she-loves.jpg",
      caption: "A college of what you love to eat❤️",
      rotation: "2deg",
    },
    
    {
      id: "KAVIDHAI-the thing you're good at",
      title: "Kavingnar M1",
      url:"/photos/pen.jpeg",
      caption: "I hope you write frequently and keep the kavingar in you alive",
      rotation: "-1deg",
    },
    {
      id: "recent",
      title: "Today's Mone",
      category: "Recent Portrait",
      url:"/photos/ilm mone.jpeg",
      caption: "The samuthrakani moni-ILM TEACHER AMMA(tbh i was wondered of your speech and fluency it lowkey made me to pursue your profession😂)",
      rotation: "-1deg",
    },
  ],

  // 6. INTERACTIVE BOOKSHELF ("Things I borrowed from you" - Screen 05)
  books: [
    {
      id: "book-1",
      title: "Metamorphosis",
      author: "Franz kafka",
      color: "#2C3E35",
      spineColor: "#1B2A23",
      coverUrl: "https://m.media-amazon.com/images/I/81QOkf8RSIL._AC_UF1000,1000_QL80_.jpg",
      caption: "You read this first. And somehow, it eventually ended up in insta feed also.",
    },
    {
      id: "book-2",
      title: "White nights",
      author: "Fyodor Dostoevsky",
      color: "#6B5B45",
      spineColor: "#4A3E2D",
      coverUrl:"/photos/white nights.jpg",
      caption:"I think we all've been dreamers once in life."
    },
    {
      id: "book-3",
      title: "The Kite Runner",
      author: "Khaled Hossein",
      color: "#8A9A86",
      spineColor: "#5E6B5A",
      coverUrl: "https://m.media-amazon.com/images/I/81YXfTztoZL._AC_UF1000,1000_QL80_.jpg",
      caption:"You told me that it was very touching story",
    },
    {
      id: "book-4",
      title: "Crime and punishment",
      author: "Fyodor Dostoevsky",
      color: "#4A3B52",
      spineColor: "#322638",
      coverUrl:"https://m.media-amazon.com/images/I/71A4LeITQhL.jpg",
      caption:"I guess you like this so much that's why you left them at home!jk",
    },
    {
      id: "book-5",
      title: "Letters to Milena",
      author: "Franz kafka",
      coverUrl: "https://m.media-amazon.com/images/I/61c2B4KQwgL._UF1000,1000_QL80_.jpg",
      caption:"We wonder about the love of kafka who still not ended up with milena."

    },
   
  ],

  // 7. CINEMATIC MOVIE ARCHIVE ("Stories that stayed with you" - Screen 06)
  movies: [
    {
      id: "pride-prejudice",
      title: "Pride & Prejudice",
      year: "2005",
      isSpecial: true,
      specialTag: "SPECIAL FAVORITE",
      specialCaption: "This one stopped being yours fav to became ours fav.",
      posterUrl: "/photos/download-1.jpg",
      quote: "You have bewitched me body and soul and i Love...Love..Love you",
      caption: "Our absolute favvv...We've quoted the hand-flex scene and the dawn walk of darcy a hundred times.",
      category: "Movie",
    },
    {
      id: "shawshank",
      title: "The Shawshank Redemption",
      year: "1994",
      isSpecial: false,
      posterUrl: "https://images.moviesanywhere.com/53dd4d73ac5d1dacd2e577550023dab5/429f797f-c4ca-4d27-8fc5-ca552a5d86e7.jpg",
      quote: "Hope is a good thing, maybe the best of things.",
      caption: "A masterpiece which you liked in which i slept halfway.",
      category: "Movie",
    },
    {
      id: "dead-poets",
      title: "Dead Poets Society",
      year: "1989",
      isSpecial: false,
      posterUrl: "https://m.media-amazon.com/images/M/MV5BMDYwNGVlY2ItMWYxMS00YjZiLWE5MTAtYWM5NWQ2ZWJjY2Q3XkEyXkFqcGc@._V1_.jpg",
      quote: "Carpe Diem. Seize the day, boys.",
      caption: "O Captain! My Captain! The film that fueled your love for literature.",
      category: "Movie",
    },
    {
      id: "la-la-land",
      title: "La La Land",
      year: "2016",
      isSpecial: false,
      posterUrl: "https://m.media-amazon.com/images/S/pv-target-images/178c2a0f654a66eda07ca098fa243728b6bc7c5f4359863860e12c50be3b8e39.jpg",
      quote: "I am not good enough...",
      caption: "The piano theme that plays in our hearts whenever we think of cinema.and the ending which still haunts and you gave the clarity of why it is!",
      category: "Movie",
    },
    {
      id: "atonement",
      title: "Atonement",
      year: "2007",
      isSpecial: false,
      posterUrl: "https://m.media-amazon.com/images/S/pv-target-images/ab94a9058f2b4dbede0731c28e3d76f2c7168b5f4835168a3451a20bf72ffcf1.jpg",
      quote: "I will return. Find you, love you, marry you...",
      caption: "Heartbreakingly beautiful. The green dress alone is iconic😁.and the characters that hated the most remains in this movie.",
      category: "Movie",
    },
    {
      id: "five-feet-apart",
      title: "5 Feet Apart",
      year: "2019",
      isSpecial: false,
      posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRncVMO-UWjnFNiEAW0l4jiplJon1V8KKxZqHx2QHHZ-A&s=10",
      quote: "We need that touch from the one we love...",
      caption: "The emotional rollercoaster you watched with a full box of tissues.and obviously one of our favvvss",
      category: "Movie",
    },
    {
      id: "hail-mary",
      title: "Project Hail Mary",
      year: "Upcoming / Book",
      isSpecial: false,
      posterUrl: "https://m.media-amazon.com/images/I/91mxeWvV0bL._AC_UF1000,1000_QL80_.jpg",
      quote: "Fascinating journey through space and courage.",
      caption: "A thrilling story of intelligence, science, and unlikely bond which you saw in theatres leaving me behind... and also which i not yet watched",
      category: "Movie",
    },
    {
      id: "500-days",
      title: "500 Days of Summer",
      year: "2009",
      isSpecial: false,
      posterUrl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p193428_p_v8_bb.jpg",
      quote: "Realising that everything you believe in complete utter bullshit...the love,soulmates",
      caption: "Unfiltered reality of romance and timing...believe that there will be a autumn after every summer..dont lose hope sista.",
      category: "Movie",
    },
    {
      id: "10-things",
      title: "10 Things I Hate About You",
      year: "1999",
      isSpecial: false,
      posterUrl: "https://images.moviesanywhere.com/8edf619758fb2be9e49ef83b4adc104d/58ea4aed-6799-4787-ae94-0f2ed3b23d77.jpg",
      quote: "I hate the way you talk to me...",
      caption: "Peak 90s nostalgia and Kat Stratford energy that suits you so well and the dialogue is peak which made us watch the movie i guess!",
      category: "Movie",
    },
    {
      id: "before-sunset",
      title: "Before Sunset",
      year: "2004",
      isSpecial: false,
      posterUrl: "https://m.media-amazon.com/images/S/pv-target-images/68114a7cbd5af78b4e215b414171551143ce9bb91366b8be57f4837654beece8.jpg",
      quote: "Baby, you are gonna miss that plane...",
      caption: "Pure conversation and intimate longing walking through Paris which you watched recently i guess!",
      category: "Movie",
    },
     {
  id: "kannathil-muthamittal",
  title: "Kannathil Muthamittal",
  year: "2002",
  isSpecial: false,
  posterUrl: "https://i.pinimg.com/736x/70/22/af/7022af51d054482c4e39b9c65b25fd0a.jpg",
  quote: "kaasu kuduthu vaangningala pa🥹",
  caption: "Longing of a gurl searching her mom(home).",
  category: "Movie",
},
{
  id: "how-to-lose-a-guy-in-10-days",
  title: "How to Lose a Guy in 10 Days",
  year: "2003",
  isSpecial: false,
  posterUrl: "https://m.media-amazon.com/images/M/MV5BMjE4NTA1NzExN15BMl5BanBnXkFtZTYwNjc3MjM3._V1_.jpg",
  quote: "You cant lose something that you never had!.",
  caption: "A chaotic, funny rom-com full of ridiculous plans, unexpected feelings, and the kind of chemistry you can't help but enjoy.",
  category: "Movie",
},

  ],

  series: [
    {
      id: "bridgerton",
      title: "Bridgerton",
      year: "Series",
      posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlBTFyK-suhZDqCxr10LiGDBKVGssMOAMNx8pV4l8TI3jIs0lyVXVOTjMI&s=10",
      quote: "You are the bane of my existence and the object of all my desires--from your fav season.",
      caption: "The serious which i recommended eventually turns out to be our favv",
      category: "Series",
    },
    {
  id: "young-sheldon",
  title: "Young Sheldon",
  year: "Series",
  posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHTsBhVTItpK_T0cO0A_XYG07YqfZKnGdXqidhnbJM5Q&s=10",
  quote: "I'm not crazy. My mother had me tested.",
  caption: "One of those series that became a comfort show and somehow made us love Sheldon even more.",
  category: "Series",
},

   

  ],

  // 9. WAVELENGTH STATEMENTS (Chapter 06)
  wavelengthPhrases: [
    "po d pichakaaari",
    "Senju thaa thannu",
    "ithuponavaleyyy",
    "Maatuuu saaanii",
    "Thanu enaku oru help uh",
    "neeyuuu repost potu irukiyaaa",
    "Nalla irukulaaaa",
    "Eludhi thariyaa thanuuuu",
  ],

  // 10. SAME WAVELENGTH PHOTOS (Screen 09)
  sameWavelengthPhotos: [
    {
      id: "wave-1",
      url: "/photos/random.jpg",
      caption: "US-you,me,minthuu",
      rotation: "-2deg",
    },
    {
      id: "wave-center",
      url: "/photos/us 3--3.jpg",
      caption: "Our favorite picture together — on the exact same wavelength",
      isCenter: true,
      rotation: "0deg",
    },
    {
      id: "wave-2",
      url: "/photos/recent.jpeg",
      caption: "The day i tortured you for soft ice cream-which you still did not got for me🥹",
      rotation: "3deg",
    },
    {
      id: "wave-3",
      url: "/photos/us two.jpg",
      caption: "one random diwali--where your friend asked for a pic and i also hoped in for the pic",
      rotation: "-4deg",
    },
    {
      id: "wave-4",
      url: "/photos/we all.jpg",
      caption: "Candid smiles that mean everything",
      date: "Random Tuesday",
      rotation: "5deg",
    },
  ],

  // 11. PERSONALITY HIGHLIGHTS ("Very Mone" - Screen 10)
  personality: {
    greenLays: {
      title: "GREEN LAYS",
      tagline: "The iconic green packet standard.",
      description: "Cream & Onion perfection. Her non-negotiable go-to snack obsession that needs no introduction.",
      patternColor: "#7A8C6A",
        backgroundImage:"/photos/green lays.jpg",
    },
   
    paniPuri: {
      title: "PANI PURI",
      tagline: "Your weakness.",
      description: "No further explanation required. Extra kaaram with kannula thanni🤣.",
      backgroundImage:"/photos/sddefault.jpg",
    },
    nccGirl: {
      title: "NCC GIRL",
      tagline: "When you care about something, you don't do it halfway.",
      description: "Parade discipline, and every effort you had put in will return in some means and you did a great job in NCC and i am proud of you my gurrlll💖.",
      backgroundImage:"/photos/ncc.jpg",

    },
    herBoldness:{
      title:"Enjoys Alone time",
      tagline:"She handles everything on her own,Enjoys alone space more than anything",
      description:"You may enjoy all your space but remember that i always be there for you when you need me❤️🫂",
       backgroundImage:"/photos/alone.jpg",
    },
  },

  // 12. WHAT I ADMIRE ABOUT MONE (Screen 11)
  admireStatements: [
    "You care deeply about the things you choose.",
    "When something matters to you, you give it your whole effort.",
    "Sometimes you worry that people misunderstand you.",
    "But I know you know what you're doing.",
    "And I believe in you.",
    "I hope you never forget that.",
  ],

  // 13. OUR STORY THROUGH THE ERAS (Screen 12)
  storyThroughEras: [

    {
      id: "era-2",
      era: "School",
      title: "School Versions of Us",
      date: "School Days",
      tags: ["School", "Us", "Friendship"],
      url: "/photos/school-us.jpg",
      caption: "I love you for always having me there when I had no friends in school, and I could rely on you. Thank you for that.",
    },
    
    {
      id: "era-4",
      era: "Adventures",
      title: "Ooru Day",
      date: "Random Moments",
      tags: ["Adventures", "Random Moments", "Laughs"],
      url: "/photos/ooru-fun.jpg",
      caption: "A random day at Ooru — full of laughter, Aaru, Thotti, and memories I still treasure.",
    },
 
    {
      id: "era-6",
      era: "Now",
      title: "Diwali Surprise",
      date: "Special Days",
      tags: ["Special Days", "Us", "Laughs"],
      url: "/photos/diwali-celeb.jpg",
      caption: "Hurrying to Zudio — somehow got a photo with the celebrity😂",
    },
    {
      id: "era-7",
      era: "Now",
      title: "Growing Up Together — Birthday",
      date: "Birthday 2025",
      tags: ["Special Days", "Us"],
      url: "/photos/bday-celeb.jpg",
      caption: "🥹sorry I can't be there with you on your day!; we'll have fun when we meet.",
    },
    
    {
      id: "wave-1",
      title: "My favourites of us❤️",
      url:"/photos/random.jpg",
      caption: "US-you,me,minthuu",
      rotation: "-2deg",
    },
    {
      id: "wave-center",
      url: "/photos/us 3--3.jpg",
      title:"On my birthday😁",
      caption: "Our favorite picture together — on the exact same wavelength",
      isCenter: true,
      rotation: "0deg",
    },
    {
      id: "wave-2",
      title:"No need of intro -ig😂",
      url: "/photos/recent.jpeg",
      caption: "The day i tortured you for soft ice cream-which you still did not got for me🥹",
      rotation: "3deg",
    },
    {
      id: "wave-3",
      url: "/photos/us two.jpg",
      title:"Thala kuda diwali mattu tha photo eduka mudiyuthu-photo patrakurai🥱",
      caption: "one random diwali--where your friend asked for a pic and i also hoped in for the pic",
      rotation: "-4deg",
    },
    {
      id: "wave-4",
      url: "/photos/we all.jpg",
      title:"Our little choas fam",
      caption: "Candid smiles that mean everything",
      date: "Random Tuesday",
      rotation: "5deg",
    },
  ],

  archiveMemories: [],

  // 14. FUNNY INHERITANCE TEASING (Screen 14)
  funnyInheritance: [
    { item: "Books", status: "CHECKED", icon: "✓" },
    { item: "Movies", status: "CHECKED", icon: "✓" },
    { item: "Thoughts", status: "CHECKED", icon: "✓" },
    { item: "Recommendations", status: "CHECKED", icon: "✓" },
    { item: "Reels", status: "CHECKED", icon: "✓" },
    { item: "Taste", status: "CHECKED", icon: "✓" },
    {
      item: "Your Clothes",
      status: "DENIED",
      icon: "❌",
      isDenied: true,
      deniedReason: "ACCESS DENIED ❌",
      punchline: "Unfortunately, our sizes have decided that this particular inheritance is unavailable.",
      followUp: "Everything else, I'll happily take.",
    },
  ],

  // 15. GROWING UP TOGETHER LINES (Screen 15)
  growingTogetherText: {
    opening: ["Two years apart.", "Different people.", "Different choices.", "Different lives."],
    transition: "And somehow...",
    headline: "The same wavelength.",
    paragraph1: "I don't think I'll ever be able to explain what it's like to grow up with someone who is both ahead of you and beside you.",
    paragraph2: "Hope we cherish our sisterhood till the end of our lives.",
  },

  // 16. THE BIRTHDAY LETTER (Screen 16)
  birthdayLetter: {
    salutation: "Dearest Mone,",
    paragraphs: [
      "Happy Birthday to my path-maker, my movie buddy, and my sister and my thollai.",
      "Looking back at everything we've shared, I realize how much of who I am today was quietly shaped by watching you. You read a book, and suddenly I wanted to see what made you turn those pages. You found a movie, and it became my comfort watch. You faced a challenge, and showed me how to handle things with grace and effort.",
      "You are worthy of all the good fortunes that come along your way and i hope you know that!May we always be happy like we'were in our childhood days!I know you sometimes worry that people misunderstand you or don't see how deeply you care. But I see it. I see the heart you put into the things that matter to you, whether it was NCC, your books, or simply standing up for what you believe in.",
      "I believe in you so much, Mone. I hope this year brings you peace, immense happiness, delicious pani puri,and more money to give me😁",
      "Thank you for walking a little ahead of me, so I could find some of my way too.",
    ],
    closing: "With all my love,",
    signature: "Your annoying but loving sibling ♡",
  },

  // 17. FINAL REVEAL & SURPRISE (Screen 17)
  finalReveal: {
    bestPhotoUrl: "/photos/random.jpg",
    quoteLine1: "Some things are given to us.",
    quoteLine2: "Some things we borrow.",
    quoteLine3: "Some things quietly become part of us.",
    mainHeadline: "HAPPY BIRTHDAY, MONE ❤️",
    subHeadline: "Thank you for being there of me,and i shall always be there for you too🫂",
    toast: "Here's to growing up together, even when we're grown up.",
    finalILoveYou: "LOVE YOU SOO MUCH GURL😘.",
    footerNote: "made with love, by your annoying sibling ♡",
  },

  // 18. MINI QUIZ DATA
  quizQuestions: [
    {
      id: 1,
      question: "What is Mone's absolute, non-negotiable street food weakness?",
      options: ["Momos", "Pani Puri with Extra Teekha", "Cheese Pizza", "French Fries"],
      correctIndex: 1,
      feedback: "Correct! Double puri, extra kaaram from hindi kaara bhaiya! 🌶️",
    },
    {
      id: 2,
      question: "Which iconic film stopped being just hers and became 'OURS'?",
      options: ["The Matrix", "Pride & Prejudice (2005)", "Inception", "Titanic"],
      correctIndex: 1,
      feedback: "Most ardently! Hand-flex scene etched in memory forever! 📖✨",
    },
    {
      id: 3,
      question: "What describes Mone's approach when she genuinely cares about something?",
      options: ["Half-hearted attempt", "She gives everything to what matters", "She gives up easily", "Ignores it completely"],
      correctIndex: 1,
      feedback: "Spot on! NCC discipline & total dedication! 💪",
    },
  ],
};
