// Sorted with newest at the top
const CARDS = [
  /*
    {
        "title": "",
        "img": "",
        "twitter": "",
        "github": "",
        "link": "",
    },
    */
  {
    title: "Women's March Madness",
    img: "womens_march_madness.png",
    github: "https://github.com/agale123/data-viz/tree/main/march-madness",
    link: "https://wbb.alisongale.com",
    desc: `
        Highlighted how far each seed has progressed for Women's March
        Madness tournaments going back to 1984. This interactive visual allows
        you to highlight a specific seed or team to see how performance has
        changed over time. 2023 was the first year since 2011 to not feature a
        #1 seed in the Championship. Built using d3.
    `,
  },
  {
    title: "Portland: Road to 100 Wins",
    img: "POR_road_to_100.png",
    twitter: "https://twitter.com/agale137/status/1640126305932021760",
    github:
      "https://github.com/agale123/soccer-analytics/tree/main/road-to-100",
    desc: `
        The Portland Thorns became the first NWSL team to win 100 regular season
        matches. This visualization renders the results of all of Portland's
        regular season matches with Championship and shield winning seasons
        highlighted. The 2014 season saw many high scoring wins and losses while
        recent years have featured more consistent wins.
    `,
  },
  {
    title: "2023 NWSL Offseason Movement",
    img: "2023_offseason.png",
    twitter: "https://twitter.com/agale137/status/1637994844563075072",
    github:
      "https://github.com/agale123/soccer-analytics/tree/main/offseason-movement",
    desc: `
        This visualization summarizes offseason player movement in the NWSL
        between the 2022 and 2023 seasons. Arrows denote movement between teams
        and into and out of the league. OL Reign retained the most players from
        2022 while five teams retained only 17 players. Washington Spirit relied
        heavily on bringing in external players while teams like Gotham and
        Houston relied on transfers from other teams.
    `,
  },
  {
    title: "Enchantments Lottery",
    img: "enchantments_lottery.png",
    twitter: "https://twitter.com/agale137/status/1624226213484204035",
    github:
      "https://github.com/agale123/data-viz/tree/main/enchantments-lottery",
    desc: `
        After many years of unsuccessful attempts to secure a backpacking permit
        for the Enchantments I wanted to explore the data from past lotteries to
        understand how to improve my odds. Sunday is the day with the best odds
        and the shoulder months also see a reduced number of applications.
    `,
  },
  {
    title: "2023 Gaps Between Games",
    img: "2023_gaps_between_games.png",
    twitter: "https://twitter.com/agale137/status/1623409901488975872",
    github:
      "https://github.com/agale123/soccer-analytics/tree/main/schedule-infographic",
    desc: `
        The 2022 Washington Spirit had a notoriously difficult start to the
        season with little rest between games. This inspired me to start breaking
        down the schedule to see which teams have more balanced schedules. In
        2023, Orlando and Angel City have 3 times as many pairs of
        games with 3-4 days rest compared to the Portland Thorns.
    `,
  },
  {
    title: "NWSL Season Heatmap",
    img: "2023_season.png",
    twitter: "https://twitter.com/agale137/status/1623409489520242689",
    github:
      "https://github.com/agale123/soccer-analytics/tree/main/schedule-infographic",
    desc: `
      `,
  },
  {
    title: "NWSL Draftee Minutes",
    img: "2022_draftee_minutes.png",
    twitter: "https://twitter.com/agale137/status/1613207527688396801",
    github: "https://github.com/agale123/soccer-analytics/tree/main/draft",
    desc: `
    `,
  },
  {
    title: "OL Reign Score Progression",
    img: "reign_score_progression.png",
    twitter: "https://twitter.com/agale137/status/1598827570786861059",
    github:
      "https://github.com/agale123/soccer-analytics/tree/main/score-waterfall",
    desc: `
      `,
  },
  {
    title: "Goal Scoring Combos",
    img: "goal_assist_combos.png",
    twitter: "https://twitter.com/agale137/status/1588909000774631424",
    github:
      "https://github.com/agale123/soccer-analytics/tree/main/goal-assist-combos",
    desc: `
      `,
  },
  {
    title: "2023 World Cup Schedule Explorer",
    img: "world_cup_website.png",
    github: "https://github.com/agale123/world-cup-2023",
    link: "https://2023wwc.alisongale.com/",
    desc: `
    `,
  },
  {
    title: "Moving Window Points",
    img: "moving_window_points.png",
    twitter: "https://twitter.com/agale137/status/1581332881770962944",
    github:
      "https://github.com/agale123/soccer-analytics/tree/main/moving-window-points",
    desc: `
      `,
  },
  {
    title: "Golden Boot Race",
    img: "golden_boot.png",
    twitter: "https://twitter.com/agale137/status/1578428929668714497",
    github:
      "https://github.com/agale123/soccer-analytics/tree/main/golden-boot",
    desc: `
      `,
  },
  {
    title: "NWSL 2022 Standings",
    img: "nwsl_2022_standings.jpg",
    twitter: "https://twitter.com/agale137/status/1576724797165555712",
    github: "https://github.com/agale123/soccer-analytics/tree/main/nwsl-rank",
    desc: `
    `,
  },
  {
    title: "Decision Day Simulation",
    img: "decision_day.gif",
    twitter: "https://twitter.com/agale137/status/1576726367445848064",
    github:
      "https://github.com/agale123/soccer-analytics/tree/main/playoff-possibilities",
    desc: `
      `,
  },
  {
    title: "Pass Analyzer",
    img: "pass_analyzer.png",
    github: "https://github.com/agale123/wisd",
    link: "https://wisd.alisongale.com/",
    desc: `
    `,
  },
];
