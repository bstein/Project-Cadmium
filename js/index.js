$(document).ready(function()
{
  var div = document.getElementById('div');
  var width = $(window).width();
  var height = $(window).height();
  var widthTolerance = width * 0.1;
  var heightTolerance = height * 0.1;

  colorIndex = Math.floor(Math.random() * 18);
  var tags = getTags();

  for (i = 0; i < tags.length; i++)
  {
      $newb = $('<a class=\"tagText\" href=\"https://www.instagram.com/explore/tags/' + tags[i]
                + '\" target=\"_blank\" onClick=\"shuffleElements()\">'
                + tags[i] + '</a>').css({
        'color':colors[colorIndex],
        'text-decoration':'none',
        'font-size':'500%',
        'font-family':'\'Open Sans\', sans-serif'
      });

      // offset random in order to reduce left side splatter bias
      // also deal with width/height tolerances to avoid edge splatter bias
      var posx = (((Math.random() - .03) * (width + widthTolerance)) - widthTolerance).toFixed();
      var posy = (((Math.random() - .03) * (height + heightTolerance)) - heightTolerance).toFixed();

      $newb.css({
          'position':'absolute',
          'left':posx+'px',
          'top':posy+'px'
      }).appendTo('div');
  }

  document.body.style.backgroundColor = "white";
  colorLoop();
});

function colorLoop()
{
  colorIndex++;
  colorIndex = colorIndex % 19;
  $("a.tagText").animate({color: colors[colorIndex]},2000);
  setTimeout(colorLoop, 10);
}

function shuffleElements()
{
  var div = document.querySelector('div');
  for (var i = div.children.length; i >= 0; i--)
  {
    div.appendChild(div.children[Math.random() * i | 0]);
  }
}

function shuffleArray(array)
{
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/* colors
red         #F44336
pink        #E91E63
purple      #9C27B0
deep purple #673AB7
indigo      #3F51B5
blue        #2196F3
light blue  #03A9F4
cyan        #00BCD4
teal        #009688
green       #4CAF50
light green #8BC34A
lime        #CDDC39
yellow      #FFEB3B
amber       #FFC107
orange      #FF9800
deep orange #FF5722
brown       #795548
grey        #9E9E9E
blue grey   #607D8B
*/

var colorIndex = -1;
var colors = ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5",
                "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50",
                "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800",
                "#FF5722", "#795548", "#9E9E9E", "#607D8B"];

function getTags()
{
    return shuffleArray(
      ["love", "instagood", "photooftheday", "beautiful", "tbt", "happy",
      "cute", "fashion", "followme", "me", "follow", "like4like", "picoftheday",
      "selfie", "summer", "friends", "instadaily", "girl", "fun", "repost",
      "art", "smile", "tagsforlikes", "instalike", "food", "nature", "style",
      "igers", "family", "likeforlike", "nofilter", "instamood",
      "follow4follow", "fitness", "amazing", "life", "vscocam", "travel",
      "beauty", "bestoftheday", "sun", "beach", "music", "followforfollow",
      "sky", "photo", "vsco", "l4l", "dog", "f4f", "sunset", "swag", "pretty",
      "instagram", "hair", "foodporn", "ootd", "makeup", "cat", "party",
      "girls", "cool", "lol", "tflers", "baby", "night", "funny", "instapic",
      "model", "motivation", "healthy", "christmas", "gym", "hot", "yummy",
      "black", "pink", "iphoneonly", "blue", "instacool", "work", "design",
      "followback", "flowers", "webstagram", "photography", "instafood", "my",
      "instafollow", "fit", "blackandwhite", "tweegram", "iphonesia", "wedding",
      "instasize", "workout", "instalove", "home", "winter", "sweet", "nyc",
      "red", "birthday", "drawing", "throwback", "handmade", "lifestyle",
      "goodmorning", "holiday", "london", "awesome", "igdaily", "morning",
      "blessed", "new", "sea", "inspiration", "likes", "happiness", "nice",
      "clouds", "dogsofinstagram", "look", "puppy", "tattoo", "green", "coffee",
      "white", "dinner", "wcw", "eyes", "shopping", "weekend", "일상", "fitfam",
      "nails", "sunday", "boy", "instago", "latepost", "paris", "day", "loveit",
      "delicious", "yum", "instagramhub", "relax", "good",
      "all_shots", "dress", "breakfast", "shoes", "italy", "bored",
      "instagramers", "japan", "nike", "best", "instafashion", "foodie", "snow",
      "spring", "onedirection", "artist", "vacation", "health", "landscape",
      "catsofinstagram", "halloween", "architecture", "goodnight", "dubai",
      "bestfriend", "colorful", "vintage", "bodybuilding", "chanel", "memories",
      "tb", "2016", "instaphoto", "trip", "lunch", "mcm", "chocolate",
      "goodtimes", "outfit", "friend", "flower", "indonesia", "adorable",
      "live", "loveher", "usa", "training", "newyork", "picture",
      "cake", "friday", "perfect", "likeforfollow", "peace", "cats",
      "likesforlikes", "bff", "20likes", "photographer", "shoutout", "anime",
      "pet", "sketch", "bestfriends", "water", "amor", "daily", "happybirthday",
      "saturday", "lovely", "city", "sister", "moda", "gay", "quote", "dance",
      "illustration", "dogs", "autumn", "tumblr", "blonde",
      "fitspo", "luxury", "bomdia", "color", "pic", "eatclean", "jj", "beer",
      "istanbul", "mylove", "likeback", "2015", "boanoite", "view", "forever",
      "picstitch", "snapchat", "fashionista", "i", "california", "truth",
      "kids", "crazy", "vegan", "insta", "sunshine", "thailand", "fresh",
      "uae", "instamoment", "light", "latergram", "kuwait", "disney", "1",
      "gucci", "dior", "quotes", "miami", "homemade", "top", "instacollage",
      "wanderlust", "lovehim", "throwbackthursday", "adventure", "school",
      "portrait", "sisters", "france", "boyfriend", "prada", "sunrise", "la",
      "harrystyles", "car", "fall", "photoshoot", "the", "canon", "travelgram",
      "instadog", "onlineshop", "tree", "loveyou", "street", "diet",
      "fashionblogger", "gorgeous", "hermes", "painting", "sale", "holidays",
      "football", "jewelry", "instatravel", "sunny", "colors", "goals",
      "familia", "ocean", "animal", "today", "yoga", "cold", "kitty",
      "friendship", "ink", "time", "likes4likes", "sport", "natural", "blogger",
      "followher", "hiphop", "weightloss", "nailart", "stylish", "artwork",
      "australia", "abs", "niallhoran", "nikon", "tattoos", "mylife", "draw",
      "world", "you", "kiss", "cleaneating", "kpop", "babygirl", "cutie",
      "adidas", "a", "brother", "2014", "mexico", "running", "polishgirl",
      "instachile", "animals", "gold", "strong", "handsome", "iloveyou",
      "trees", "dessert", "pets", "dogstagram", "justinbieber", "tired",
      "s4s", "qatar", "fendi", "sexy", "lovethem", "starbucks", "wine",
      "russia", "gopro", "germany", "bahrain", "givenchy", "potd", "body",
      "spain", "mountains", "louistomlinson", "couple", "boys", "losangeles",
      "feliz", "photogrid", "enjoy", "ksa", "barcelona", "heart", "mood",
      "amigos", "chicago", "monday", "iphone", "with", "traveling", "florida",
      "muscle", "sundayfunday", "yolo", "exercise", "brasil", "jakarta",
      "turkey", "vegas", "louisvuitton", "uk", "streetart", "2", "roadtrip",
      "venezuela", "followhim", "goodvibes", "mua", "makeupartist", "face",
      "inlove", "creative", "crossfit", "merrychristmas", "regrann", "instafit",
      "true", "and", "pizza", "celine", "rain", "lfl", "liampayne", "moscow",
      "valentino", "tgif", "burberry", "cartier", "icecream", "drinks",
      "princess", "explore", "summertime", "yellow", "streetstyle",
      "pleasefollow", "bali", "petstagram", "canada", "weather", "cousins",
      "instahub", "foodgasm", "gift", "kik", "chill", "like4follow", "garden",
      "gymlife", "followers", "in", "graffiti", "100happydays", "cardio", "diy",
      "follows", "teamo", "mom", "teamfollowback", "train", "shop", "lake",
      "chloe", "run", "amo", "healthyfood", "kitten", "zaynmalik", "orange",
      "eat", "old", "familytime", "comment", "catstagram", "followall", "man",
      "passion", "haha", "exo", "lips", "follower", "statigram", "to", "god",
      "1d", "rock", "2017", "interiordesign", "beard", "babyboy",
      "happynewyear", "cafe", "bajumurah", "book", "dream", "lights", "olshop",
      "accessories", "streetphotography", "2013", "vscogood", "starwars",
      "video", "korea", "movie", "woman", "besties", "bikini", "italia",
      "foodstagram", "classic", "cars", "kawaii", "dope", "lmao", "outdoors",
      "free", "money", "bride", "tokyo", "mybaby", "hairstyle", "nail",
      "sayajual", "nutrition", "hijab", "success", "spamforspam", "mydubai",
      "purple", "toronto", "brunette", "красота", "instacat", "420", "instagay",
      "goodday", "instaart", "decor", "sad", "youtube", "smiles", "tasty",
      "people", "berlin", "house", "rp", "hiking", "fitnessaddict", "interior",
      "naturelovers", "film", "concert", "books", "thankful", "bmw", "bts",
      "sol", "lasvegas", "styles", "brazil", "paradise", "drink",
      "followbackteam", "bag", "manga", "newyear", "travelling", "wow",
      "michaelkors", "longhair", "trustedseller", "sunnyday", "organic",
      "getfit", "europe", "puppylove", "sleep", "america", "pool", "igaddict",
      "hungry", "hkig", "men", "so", "heels", "malaysia", "tea", "dj",
      "thankyou", "zara", "drunk", "fitnessmodel", "soccer", "brothers",
      "women", "daughter", "park", "designer", "freedom", "following", "madrid",
      "shoutouts", "jualan", "excited", "singapore", "bike", "sunglasses",
      "abudhabi", "selfies", "moment", "hawaii", "meow", "urban",
      "arianagrande", "sleepy", "rose", "россия", "rip", "blog", "likebackteam",
      "focus", "lv", "india", "texas", "no", "jualanku", "mac", "nephew", "glasses",
      "likeall", "ilovemydog", "for", "fire", "pictureoftheday", "sfs", "laugh",
      "son", "clothes", "business", "asian", "meme", "hongkong", "it", "sbn",
      "river", "siambrandname", "apple", "faith", "sushi", "dedication",
      "workflow", "bandung", "rainbow", "likealways", "fff", "blueeyes",
      "mountain", "strength", "guitar", "liveauthentic", "queen", "instastyle",
      "dark", "evening", "ny", "lipstick", "photos", "spam4spam", "quoteoftheday",
      "paint", "gains", "likeforlikes", "chile", "liker", "balenciaga",
      "foodpics", "honda", "doodle", "arte", "bw", "out", "england", "fitlife",
      "tasmurah", "fish", "piccollage", "determination", "sydney",
      "dogoftheday", "doha", "singer", "amsterdam", "mensfashion", "funtimes",
      "murah", "sand", "cloudporn", "skyporn", "xmas", "hope", "church",
      "doglover", "brooklyn", "pencil", "forest", "horse", "lookbook",
      "pitbull", "moon", "haircut", "cooking", "rap", "little",
      "tagsforlikesapp", "fitnessmotivation", "beastmode", "louboutin",
      "melbourne", "doubletap", "girly", "game", "selenagomez", "colombia",
      "cosplay", "bluesky", "glam", "foto", "greece", "batman", "kisses",
      "sneakers", "recent4recent", "homesweethome", "walk", "song",
       "great", "followalways", "liketeam", "trend", "omg", "entrepreneur",
       "guy", "protein", "believe", "legs", "festival", "vida", "team",
       "healthychoices", "ysl", "olshopindo", "sanfrancisco", "girlfriend",
       "retro", "china", "sketchbook", "chicken", "fitgirl", "is", "foodpic",
       "regram", "edm", "of", "cali", "fruit", "surf", "niece", "jesus", "3",
       "rolex", "liking", "chic", "instababy", "progress", "lastnight",
       "miumiu", "show", "healthyeating", "proud", "power", "giveaway",
       "together", "fbf", "miss", "goodtime", "cousin", "outfitoftheday",
       "inked", "nightout", "harrypotter", "dxb", "studio", "q8", "hashtag",
       "sweden", "bangkok", "basketball", "pokemon", "college", "versace",
       "5sos", "fishing", "linda", "hollywood", "domingo", "grateful",
       "homedecor", "twins", "bar", "jimmychoo", "harry", "sandiego", "de",
       "vape", "menswear", "random", "sepatumurah", "original", "etsy", "play",
       "inspire", "portugal", "chillin", "tshirt", "watch", "socute",
       "building", "necklace", "disneyland", "easter", "relaxing",
       "saudiarabia", "nomakeup", "dreams", "myworld", "glutenfree", "dad",
       "girlswholift", "izmir", "skincare", "kikme", "healthylifestyle",
       "bbq", "perfection", "hotel", "milano", "jeans", "young", "dc",
       "healthyliving", "country", "catlover", "workhard", "restaurant",
       "jordan", "hardwork", "hello", "cupcakes", "grunge", "alone",
       "nailpolish", "us", "magic", "truelove", "recentforrecent",
       "bnw", "children", "gayboy", "always", "riyadh", "gainpost",
       "tagsforlike", "bed", "bvlgari", "chilling", "marvel", "thebest",
       "playa", "vscophile", "glitter", "brunch", "vans", "memes", "colour",
       "models", "trendy", "chihuahua", "thanks", "lookoftheday", "lovelife",
       "retrica", "kloset", "beautifulday", "silver", "waves", "cheese",
       "history", "sports", "oldschool", "rome", "reflection", "louis",
       "brown", "saturdaynight", "japanese", "salad", "eating", "bday",
      "favorite", "silly", "lgbt", "smoke", "boston", "tourist", "island",
      "ford", "ankara", "amigas", "weightlossjourney", "colorado", "classy",
      "custom", "go", "atlanta", "instapet", "myself", "graduation", "roses",
      "clothing", "joy", "topshop", "likeme", "roma", "clean", "happyday",
      "single", "instafun", "delish", "moments", "camera", "pictures", "norway",
      "bestie", "cloud", "toptags", "cookies", "active", "bae", "tiffany",
      "vegetarian", "justgoshoot", "shredded", "mirror", "tourism",
      "instabeauty", "warm", "boss", "먹방", "this", "shirt", "nightlife",
      "newyorkcity", "photograph", "petsofinstagram", "turnup", "instafamous",
      "her", "ready", "real", "mother", "lesbian", "cheers", "thanksgiving",
      "wood", "shooting", "foco", "fitmom", "behappy", "missyou",
      "instagrammers", "ice", "yay", "colours", "strawberry", "bird",
      "instalife", "camping", "metal", "fashionable", "poland", "taiwan",
      "birthdaygirl", "ferragamo", "seattle", "boat", "on", "lynaround", "road",
      "reading", "collection", "2012", "hat", "big", "converse", "coach",
      "wonderful", "sayajualmurah", "riodejaneiro", "argentina",
      "christmastree", "puppies", "baking", "job", "bro", "skyline", "club",
      "like4likes", "decoration", "skirt", "followtrain", "tagforlikes",
      "watercolor", "foodphotography", "earth", "glamour", "back",
      "nevergiveup", "readystock", "travelphotography", "onlineshopping",
      "simple", "muscles", "sweets", "streetwear", "downtown", "frozen",
      "gamer", "hk", "momlife", "vscogrid", "curlyhair", "curls", "aesthetics",
      "nopainnogain", "loveyourself", "skate", "vip", "bracelet", "angel",
      "band", "taylorswift", "naturalhair", "fitspiration", "girlswithtattoos",
      "tas", "otaku", "swimming", "respect", "pop", "sharjah", "legend", "lady",
      "flashbackfriday", "niall", "abstract", "energy", "ireland",
      "makeupaddict", "bf", "surabaya", "vancouver", "r4r", "ignation",
      "leather", "noexcuses", "positive", "one", "selca", "liam", "sleeping",
      "gaming", "beast", "4", "weddingday", "stylist", "nomnom", "now",
      "transformationtuesday", "zayn", "pug", "instacute", "redlips",
      "frenchbulldog", "italian", "epic", "instaday", "spam", "emo", "amore",
      "asia", "pnw", "mare", "milin", "hipster", "livefolk", "yesterday",
      "lifeisgood", "bigbang", "jj_forum", "daddy", "squaready", "mygirl",
      "winning", "december", "vinyl", "carporn", "beachlife", "babe",
      "monochrome", "babies", "poetry", "hilarious", "facebook", "instaboy",
      "lovemyjob", "depression", "instahappy", "justdoit", "xbox", "craftbeer",
      "myboy", "motd", "praia", "trustedolshop", "thursday", "tan", "bridge",
      "high", "gymrat", "instahealth", "boots", "squats", "star", "sp", "help",
      "celebration", "aesthetic", "mine", "jualankaka", "fat", "nofilterneeded",
      "pen", "fotografia", "french", "plants", "dead", "jualansis", "golf",
      "artsy", "xoxo", "korean", "hairstylist", "present", "milan", "do",
      "cocktails", "transformation", "facts", "graphicdesign", "fly",
      "naturephotography", "candy", "fashionblog", "pasta", "ps4",
      "switzerland", "bands", "army", "realtalk", "boutique", "slimmingworld",
      "tv", "wild", "philippines", "весна", "sick", "king", "grind", "actor",
      "tasbranded", "v", "finally", "gallery", "soul", "grey", "sneakerhead",
      "textgram", "working", "details", "ring", "tbh", "ร", "baseball",
      "traveler", "pics", "purse", "support", "chef", "jdm", "guys", "tour",
      "manhattan", "nerd", "manicure", "mommy", "walking", "ride", "petsagram",
      "musica", "tag", "travelingram", "crochet", "banana", "jualbaju", "all",
      "lmfao", "supernatural", "graphic", "raw", "amomuito", "hijabers",
      "cosmetics", "houston", "alain", "dt", "herbalife", "online",
      "healthylife", "paz", "up", "fashiondiaries", "cycling", "skateboarding",
      "snapshot", "fridaynight", "lyn", "tuesday", "atl", "beyonce", "lazy",
      "squad", "pose", "humor", "shoutoutforshoutout", "edit", "loveofmylife",
      "gm", "afternoon", "depressed", "movies", "heaven", "cinema", "paleo",
      "olshopmurah", "wellness", "datenight", "dayoff", "dancing",
      "culture", "class", "dank", "navidad", "minimal", "artofvisuals",
      "ferrari", "sorrynotsorry", "place", "shoutout4shoutout", "selfiesunday",
      "foodlover", "qotd", "wednesday", "trainhard", "dancer", "we", "redhair",
      "instaselfie", "yes", "airport", "physique", "floral", "audi", "africa",
      "nba", "truestory", "neverstopexploring", "vw", "iphone6", "paper",
      "bulldog", "unique", "artoftheday", "foods", "selfietime", "orlando",
      "siblings", "directioner", "igersoftheday", "filter", "vscorussia",
      "bags", "sepatu", "october", "oman", "pastel", "birds", "deontem",
      "vacaciones", "leaves", "vapelife", "свадьба", "stunning", "change",
      "scenery", "igersitalia", "vogue", "goodlife", "babyshower", "gifts",
      "games", "pup", "baju", "flawless", "igtravel", "comedy", "marketing",
      "lift", "snap", "office", "fireworks", "namaste", "lukehemmings", "5",
      "adoptdontshop", "surprise", "amen", "bookstagram", "lindo", "jewellery",
      "trusted", "modeling", "buongiorno", "coffeetime", "event", "romance",
      "jualtas", "instakids", "instaframe", "instagirl", "islam", "word",
      "museum", "be", "cantwait", "yogaeverydamnday", "mercedes",
      "positivevibes", "lashes", "tods", "mi", "brand", "c4c", "partiu",
      "arizona", "exok", "b", "toyota", "myeverything", "redhead", "wildlife",
      "prom", "menstyle", "musthave", "dailylook", "skull", "boho",
      "catoftheday", "tagstagram", "instanature", "nissan", "bangtanboys",
      "fashiongram", "fashionstyle", "alternative", "beautifuldestinations",
      "vietnam", "ukraine", "calumhood", "mothersday", "bunny", "природа",
      "santa", "diva", "stars", "ibiza", "bella", "anastasiabeverlyhills",
      "outside", "forsale", "future", "meditation", "tattooed", "eye",
      "streetfashion", "mia", "words", "boxing", "capture", "mytravelgram",
      "ashtonirwin", "reseller", "hijabfashion", "mama", "followforlike",
      "polishboy", "wip", "comments", "legday", "scotland", "snack",
      "composition", "earrings", "aşk", "puppiesofinstagram", "onelove", "solo",
      "mango", "at", "rainyday", "iphoneography", "rihanna", "godisgood",
      "egypt", "takemeback", "spb", "famous", "ginger", "denim", "frenchie",
      "labrador", "casual", "fiesta", "michaelclifford", "valentinesday",
      "cupcake", "yamaha", "make", "beautyblogger", "lego", "monster",
      "kitchen", "chilegram", "flex", "mothernature", "dallas", "jungkook",
      "instalikes", "comics", "summer2016", "first", "seoul", "sogood",
      "happyfriday", "montreal", "peaceful", "gf", "dm", "море", "journey",
      "antalya", "maccosmetics", "ss", "jimin", "sretsis", "lucky", "21",
      "weird", "bear", "deus", "happyhalloween", "kid", "agameoftones",
      "timehop", "sf", "sony", "dancemoms", "curly", "anniversary",
      "skylovers", "dressmurah", "baekhyun", "hellokitty", "squat", "rj",
      "chanyeol", "magazine", "instafitness", "sehun", "modern", "mma",
      "special", "ladies", "obsessed", "mode", "españa", "glass", "chevy",
      "punk", "haircolor", "prague", "promo", "shadow", "vscodaily",
      "thatsdarling", "neko", "toocute", "photoshop", "horses",
      "familyfirst", "pokemongo", "lebanon", "ombre", "detox", "nfl", "gymtime",
      "study", "child", "puertorico", "stance", "sixpack", "share",
      "goldenretriever", "personaltrainer", "cartoon", "sabado", "kicks",
      "badass", "racing", "highlife", "bodybuilder", "vscogram", "motorcycle",
      "toys", "panama", "wisdom", "twitter", "fluffy", "porsche", "bass",
      "grass", "longhairdontcare", "kai", "childhood", "shoplocal",
      "austria", "ripped", "not", "vscoph", "bmx", "weddingdress", "jual",
      "macro", "tasimport", "blond", "ifollowback", "beats", "wwe", "champagne",
      "sweater", "iphone5", "cover", "nature_perfection", "happysunday",
      "ig_captures", "fitgirls", "disaya", "hike", "kittens", "win",
      "traveller", "caracas", "frio", "craft", "burger", "nailswag", "nye",
      "piercing", "m", "18", "natureza", "letsgo", "waiting", "comment4comment",
      "daddysgirl", "long", "samsung", "super", "siguemeytesigo", "rio",
      "jacket", "bazaarpaknil", "hard", "israel", "bridal", "cuddles", "suga",
      "jeep", "him", "digitalart", "partytime", "husky", "bacon", "yo",
      "philly", "speed", "waterfall", "instaartist", "dagelan", "xboxone",
      "zoo", "exom", "horror", "bye", "cut", "superman", "спорт", "sweat",
      "spoiled", "ps3", "l", "mtb", "fanart", "can", "newzealand", "happygirl",
      "buenasnoches", "gang_family", "fam", "pride", "drive", "happyholidays",
      "pumpkin", "boom", "instamagandroid", "feet", "hi", "valencia",
      "plantbased", "motivated", "after", "jin", "medan", "scary", "likeit",
      "university", "5secondsofsummer", "celebrate", "venice", "dieta",
      "kidsfashion", "window", "comingsoon", "actress", "teen", "futbol",
      "seafood", "estilo", "iifym", "drake", "turbo", "alcohol", "outdoor",
      "desert", "eyeliner", "indie", "lamborghini", "collage", "sis",
      "instapuppy", "butterfly", "lyrics", "staystrong", "mini", "foodblogger",
      "wall", "nutella", "myheart", "bright", "newborn", "doggy", "snapback",
      "balance", "weddings", "buildings", "got7", "husband", "fitnessjourney",
      "elegant", "runner", "deusnocomando", "vegansofig", "just", "barber",
      "styleblogger", "naruto", "ff", "jam", "eggs", "student", "producer",
      "skin", "cuties", "ana", "eyebrows", "festa", "marijuana", "instaquote",
      "greeneyes", "saudi", "kwankao", "challenge", "artistic", "jhope",
      "hamburg", "iloveit", "buenosdias", "fail", "inspired", "instatraveling",
      "casa", "fotorus", "instamakeup", "nintendo", "romantic", "last"]);
}
