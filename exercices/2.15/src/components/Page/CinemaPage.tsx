import Cinema from "../Main/Cinema";
const CinemaPage = () => {

  const cinema1Name = "UGC De Brouckère";

  const moviesCinema1 = [
    {
      id: 1,
      title: "AVATAR: THE WAY OF WATER",
      director: "James Cameron",
      time: "192 min",
      description: "The highly anticipated sequel to 'Avatar,' exploring the underwater ecosystems of Pandora and the challenges faced by Jake Sully and his family.",
      image: "https://path_to_image/avatar_2.jpg",
      budget: 350, // Budget en millions de dollars
    },
    {
      id: 2,
      title: "THE SUPER MARIO BROS. MOVIE",
      director: "Aaron Horvath, Michael Jelenic",
      time: "92 min",
      description: "A fun animated adventure featuring Mario and his friends as they try to rescue Princess Peach from Bowser's clutches in this vibrant, video game-inspired movie.",
      image: "https://path_to_image/super_mario_movie.jpg",
      budget: 100,
    },
    {
      id: 3,
      title: "TOP GUN: MAVERICK",
      director: "Joseph Kosinski",
      time: "130 min",
      description: "The long-awaited sequel to the classic 'Top Gun,' following Pete 'Maverick' Mitchell as he trains a new generation of pilots for a dangerous mission.",
      image: "https://path_to_image/top_gun_maverick.jpg",
      budget: 170,
    },
    {
      id: 4,
      title: "SPIDER-MAN: NO WAY HOME",
      director: "Jon Watts",
      time: "148 min",
      description: "Peter Parker's world is turned upside down when his secret identity is revealed, leading him to seek help from Doctor Strange and facing the multiverse's greatest villains.",
      image: "https://path_to_image/spiderman_no_way_home.jpg",
      budget: 200,
    },
  ];
  

  const cinema2Name = "UGC Toison d'Or";

  const moviesCinema2 = [
    {
      id: 5,
      title: "AVENGERS: ENDGAME",
      director: "Anthony Russo, Joe Russo",
      time: "181 min",
      description: "The Avengers assemble one final time to defeat Thanos and reverse the catastrophic events that wiped out half of all life in the universe.",
      image: "https://path_to_image/avengers_endgame.jpg",
      budget: 356,
    },
    {
      id: 6,
      title: "JURASSIC WORLD: DOMINION",
      director: "Colin Trevorrow",
      time: "146 min",
      description: "Dinosaurs now roam freely on Earth, leading to new challenges and global consequences for humanity in this thrilling conclusion to the Jurassic World saga.",
      image: "https://path_to_image/jurassic_world_dominion.jpg",
      budget: 185,
    },
    {
      id: 7,
      title: "BLACK PANTHER: WAKANDA FOREVER",
      director: "Ryan Coogler",
      time: "161 min",
      description: "The people of Wakanda struggle with the loss of their king, T'Challa, and face new threats as they try to protect their nation and its resources.",
      image: "https://path_to_image/black_panther_wakanda_forever.jpg",
      budget: 250,
    },
    {
      id: 8,
      title: "FURIOUS 7",
      director: "James Wan",
      time: "137 min",
      description: "The seventh installment in the Fast & Furious franchise, focusing on the crew's fight against a dangerous terrorist while dealing with personal loss.",
      image: "https://path_to_image/furious_7.jpg",
      budget: 190,
    },
  ];
  

  
  return (
    <div className="content" style={{paddingBottom: '100px'}}>
    
      <Cinema name={cinema1Name} movies= {moviesCinema1}/>

      <Cinema name={cinema2Name} movies={moviesCinema2}/>

    </div>
  );
};

export default CinemaPage;
