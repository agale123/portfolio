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
    title: "NWSL 2023 Standings",
    img: "2023week4.png",
    github: "https://github.com/agale123/soccer-analytics/tree/main/nwsl-rank",
    twitter: "https://twitter.com/agale137/status/1650320203434323970",
    desc: `
          Refreshed my popular 2022 NWSL Standings bump chart to add more data about
          wins/losses and goals for/against. The left side shows how the standings
          have changed each week, while the right side shows the current season
          stats. The bump chart now has thinner lines between weeks so it is
          easier to see movement with overlapping lines. Used cubic splines for
          better looking curves between weeks.
        `,
  },
  {
    title: "Goal Build-up",
    img: "4-23-RGN-goal5.png",
    github:
      "https://github.com/agale123/soccer-analytics/tree/main/goal-buildup",
    twitter: "https://twitter.com/agale137/status/1650170628719403008",
    desc: `
        I wanted to highlight fun build-up plays that lead to goals. This example
        shows the 5th goal from the Reign's 5-2 win over Chicago. The play began
        with Tullis-Joyce handling a tricky back pass. Huerta did a give-and-go
        with Sonnett before dribbling down field and passing to Balcer. Balcer
        sent in a cross to Fishlock who scored her second goal of the match.
      `,
  },

  {
    title: "Substitution Patterns",
    img: "2022_substitution.png",
    github:
      "https://github.com/agale123/soccer-analytics/tree/main/substitutions",
    twitter: "https://twitter.com/agale137/status/1649613559238889473",
    desc: `
        I looked back at how teams differed in their substitution patterns in 2022. Some
        teams, like San Diego, started subbing early while other teams, like North Carolina, waited
        the longest before subbing. Angel City rarely used their fifth
        substitute while Houston almost always did.
      `,
  },
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
    title: "Season Heatmap",
    img: "2023_season.png",
    twitter: "https://twitter.com/agale137/status/1623409489520242689",
    github:
      "https://github.com/agale123/soccer-analytics/tree/main/schedule-infographic",
    desc: `
      This heatmap provides a high level understanding of the distribution of
      games. It highlights that there will only be Challenge Cup games during
      the World Cup and after the World Cup there won't be any midweek games.
    `,
  },
  {
    title: "NWSL Draftee Minutes",
    img: "2022_draftee_minutes.png",
    twitter: "https://twitter.com/agale137/status/1613207527688396801",
    github: "https://github.com/agale123/soccer-analytics/tree/main/draft",
    desc: `
      This breaks down how many minutes draft picks from different college
      conferences have played in 2022. Pac-12 players earned the most minutes,
      followed by the ACC. Racing Louisville relied most heavily on draft picks,
      while teams like Gotham barely played any draft picks.
    `,
  },
  {
    title: "Score Waterfall",
    img: "reign_score_progression.png",
    twitter: "https://twitter.com/agale137/status/1598827570786861059",
    github:
      "https://github.com/agale123/soccer-analytics/tree/main/score-waterfall",
    desc: `
      This set of visualizations highlight how game scores for a team progressed
      throughout each game during a season. All matches start at 0-0 and then
      curve upwards as either team scores. OL Reign was almost never behind by
      two goals during the season and had lots of low scoring matches. The color
      indicates when goals were scored, so the game that ended 4-1 had several
      late goals.
    `,
  },
  {
    title: "Goal-Assist Combos",
    img: "goal_assist_combos.png",
    twitter: "https://twitter.com/agale137/status/1588909000774631424",
    github:
      "https://github.com/agale123/soccer-analytics/tree/main/goal-assist-combos",
    desc: `
      I wanted to understand which partnerships in the NWSL led to the most
      goals. During the 2016-2022 window, Sam Kerr and Yuki Nagasato combined
      for the most goals, with Nagasato providing most of the assists. Notably,
      Trinity Rodman and Ashley Sanchez made this list despite joining the
      league much more recently than others on the list.
    `,
  },
  {
    title: "2023 World Cup Schedule Explorer",
    img: "world_cup_website.png",
    github: "https://github.com/agale123/world-cup-2023",
    link: "https://2023wwc.alisongale.com/",
    desc: `
      Built this website for exploring the teams and schedule
      for the 2023 Women's World Cup. This site features an
      interactive schedule that allows projecting the schedule based
      on team finish, a tool to plan an itinerary based on team
      preferences, and a map to visualize a team's path as they
      progress through the tournament.
    `,
  },
  {
    title: "Moving Window Points",
    img: "moving_window_points.png",
    twitter: "https://twitter.com/agale137/status/1581332881770962944",
    github:
      "https://github.com/agale123/soccer-analytics/tree/main/moving-window-points",
    desc: `
      The goal of these charts is to highlight streaks of teams performing well
      or poorly. The height of the line represents the average points gained
      from the previous 5 matches. OL Reign, North Carolina, and Kansas City all
      had very strong finishes to the season, while Gotham struggled towards
      the end.
    `,
  },
  {
    title: "Golden Boot Race",
    img: "golden_boot.png",
    twitter: "https://twitter.com/agale137/status/1578428929668714497",
    github:
      "https://github.com/agale123/soccer-analytics/tree/main/golden-boot",
    desc: `
      2022 had a very tight race for the Golden Boot, but Alex Morgan led the
      race for most of the season. This highlights how goals were distributed
      over the course of 2022.
    `,
  },
  {
    title: "NWSL 2022 Standings",
    img: "nwsl_2022_standings.jpg",
    twitter: "https://twitter.com/agale137/status/1576724797165555712",
    github: "https://github.com/agale123/soccer-analytics/tree/main/nwsl-rank",
    desc: `
      A bump chart was the perfect way to highlight the NWSL race for the
      shield. Kansas City's mid-season jump from 12th to 1st was impressive.
      And the last minute shuffling of the top 4 teams made for an exciting
      final few weeks..
    `,
  },
  {
    title: "Decision Day Simulation",
    img: "decision_day.gif",
    twitter: "https://twitter.com/agale137/status/1576726367445848064",
    github:
      "https://github.com/agale123/soccer-analytics/tree/main/playoff-possibilities",
    desc: `
      There has been much discussion around whether to schedule the final games
      of the season at the same time. This shows how the standings would have
      changed through the course of the games if they had been played
      simultaneously.
    `,
  },
  {
    title: "Pass Analyzer",
    img: "pass_analyzer.png",
    github: "https://github.com/agale123/wisd",
    link: "https://wisd.alisongale.com/",
    desc: `
    This web app visualizes information about passes during the 2020 Men's
    Euros. Trained a pass completion likelihood model in Python and included
    that data alongside other key details for each pass. Visualized all
    passes within discrete time periods, including player locations, using d3.
    `,
  },
];
