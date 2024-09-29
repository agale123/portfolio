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
    title: "Temperature at Kickoff",
    img: "temp_at_kickoff.jpeg",
    twitter: "https://twitter.com/agale137/status/1752704825937244434",
    github: "https://github.com/agale123/soccer-analytics/tree/main/weather",
    desc: `
      In recent seasons, there have been many games scheduled during very hot
      periods of the day or year. Some cities like Houston or Orlando are hot 
      year round while others like Seattle tend to be much cooler at kickoff.
      Temperature is calculated as the five-year average temperature at 
      kickoff for each match.
    `,
  },
  {
    title: "Remaining Difficulty",
    img: "remaining_difficulty.png",
    twitter: "https://twitter.com/agale137/status/1834242274928328923",
    github: "https://github.com/agale123/soccer-analytics/blob/main/misc/schedule_difficulty.ipynb",
    desc: `
      With just a few weeks left in the season, the difficulty of remaining
      games will have a big impact on which teams make the playoffs. This
      highlights which teams are mostly playing higher or lower ranked teams.
      Variations were made to weight teams by points rather than rank.
    `,
  },
  {
    title: "NWSL Stadiums",
    img: "nwsl_stadiums.jpeg",
    twitter: "https://twitter.com/agale137/status/1767195848235258026",
    github: "https://github.com/agale123/soccer-analytics/tree/main/stadiums",
    desc: `
      Over the years, there have been games at over 30 stadiums. Some games were
      one-offs while one stadium (Providence Park) has hosted games for the
      entire history of the league. This shows some interesting statistics like
      the elevation of the stadium (Utah having the highest), stadium capacity,
      and average goals.
    `,
  },
  {
    title: "Draft Pick Experience",
    img: "draft_pick_experience.jpeg",
    twitter: "https://twitter.com/agale137/status/1796184336384884846",
    github: "https://github.com/agale123/soccer-analytics/tree/main/draft",
    desc: `
      Summary of how many draft picks from 2024 were signed after the first ten
      games of the season and how many minutes those players have gotten. Most
      of the first round draft picks have gotten good minutes and all but five
      of the draft picks from the first three rounds have been signed. There 
      have also been some standouts who were drafted late.
    `,
  },
  {
    title: "Geographic Distribution of Teams",
    img: "nearest_albers.png",
    twitter: "https://twitter.com/agale137/status/1749436631117926744",
    github: "https://github.com/agale123/soccer-analytics/tree/main/stadiums",
    desc: `
      As the NWSL has continued to grow, more fans are close to a team. I wanted
      to visualize how teams are spread across the country and which areas are
      furthest from a team. While this doesn't take into account population
      density, it is interesting to see how Utah filled in a big gap in the
      center of the US.
    `,
  },
  {
    title: "Evolution of a League",
    img: "nwsl_evolution.png",
    twitter: "https://twitter.com/agale137/status/1732404885306438044",
    github:
      "https://github.com/agale123/soccer-analytics/tree/main/nwsl-evolution",
    desc: `
      The NWSL has been expanding much more quickly and will return to two
      markets that it had previously left. This visualization highlights how
      the league has grown over time and how each of the teams have performed.
      Shield, championship, and cup wins are highlighted for the winning teams.
    `,
  },
  {
    title: "NWSL Age Demographics",
    img: "age_demographics.png",
    twitter: "https://twitter.com/agale137/status/1729904233938612709",
    github:
      "https://github.com/agale123/soccer-analytics/tree/main/age-breakdown",
    desc: `
      As more players bypass college to enter the NWSL, the demographics of
      teams will start to skew younger. Interesting patterns can also be seen
      when comparing the demographics of teams over time to understand how the
      balance of youth and veterans impacts team performance.
    `,
  },
  {
    title: "NWSL Season Quilt",
    img: "season_quilt.png",
    twitter: "https://twitter.com/agale137/status/1724084468506611906",
    github:
      "https://github.com/agale123/soccer-analytics/tree/main/season-quilt",
    desc: `
      For my first attempt at a data visualization quilt I embedded details
      about all 2023 NWSL games (regular season, Challenge Cup, and playoffs)
      into a quilt design. Each team is represented by a color and the relative
      sizes of the colors in each block represent which team won the game. The
      gray squares encode what type of game it was (regular season, playoffs,
      etc). Click through on the Twitter link to see the final quilt.
    `,
  },
  {
    title: "NWSL Point Spirals",
    img: "point_spiral.png",
    twitter: "https://twitter.com/agale137/status/1713916588481757237",
    github:
      "https://github.com/agale123/soccer-analytics/tree/main/points-swirl",
    desc: `
      I wanted to visualize how tight the NWSL table was across different
      seasons. In 2023, there was very little separating the top and bottom
      teams which was very different from past seasons that had more separation
      between the top and bottom teams. The spirals show the cumulative point
      totals for each team across all the past seasons.
    `,
  },
  {
    title: "Women's World Cup Minutes",
    img: "world_cup_minutes.jpg",
    twitter: "https://twitter.com/agale137/status/1689415373383204865",
    github:
      "https://github.com/agale123/soccer-analytics/tree/main/world-cup-misc",
    desc: `
      I explored how the USWNT load balanced minutes between players in
      past tournaments. I found that teams often don't rotate players much
      in the group stage and when they do it is often forced by card
      accumulation or in a situation where the team is not at risk of
      elimination.`,
  },
  {
    title: "Women's World Cup Projections",
    img: "group_D_table.png",
    github:
      "https://github.com/agale123/soccer-analytics/tree/main/world-cup-misc",
    twitter: "https://twitter.com/agale137/status/1685049032622710784",
    desc: `
      See different possible outcomes for who will make the knockout stage
      from each group based on how the final matchday shakes out. In Group
      D there were some particularly fun outcomes with possible 3-way ties
      that would go down to fair play points. To simplify this chart, it
      only looks at results where a single team scores but it covers the
      most common outcomes.
    `,
  },
  {
    title: "Women's World Cup History",
    img: "world_cup_history.png",
    github:
      "https://github.com/agale123/soccer-analytics/tree/main/world-cup-history",
    twitter: "https://twitter.com/agale137/status/1681371535813271554",
    desc: `
      See how all the 44 teams who have competed at the Women's World Cup
      have finished. With an expanded field of 32 teams, the 2023 tournament
      features 8 debutants. There have been 7 teams who have qualified for
      every year of the tournament so far. And the United States has been
      the most successful with 4 victories.
    `,
  },
  {
    title: "NWSL at the 2023 World Cup",
    img: "sankey_2023.png",
    github:
      "https://github.com/agale123/soccer-analytics/tree/main/world-cup-rosters",
    twitter: "https://twitter.com/agale137/status/1678769142453932032",
    desc: `
      Half of the teams in their years Women's World Cup feature an NWSL
      player. The United States has teh most representation by far, but both
      Brazil and Canada have very good representation in the NWSL. The OL
      Reign and Washington Spirit both have the most players featured in the
      World Cup.
    `,
  },
  {
    title: "USWNT Pairwise Minutes",
    img: "uswnt_pairs.png",
    github:
      "https://github.com/agale123/soccer-analytics/tree/main/uswnt-pairings",
    twitter: "https://twitter.com/agale137/status/1677311644391837696",
    desc: `
      See how many minutes each pair of players on the USWNT roster have
      played together since the last Olympics in 2021. Darker lines indicate
      more shared minutes. You can see which players and combinations of
      players have a lot of experience together at the national team level.
      I also posted followups that highlighted only the lines from a single
      player to get a better view of who they have played with.
    `,
  },
  {
    title: "200 NWSL Matches",
    img: "road_to_200.png",
    github: "https://github.com/agale123/soccer-analytics/tree/main/lu-barnes",
    link: "https://barnes.alisongale.com",
    desc: `
      To commemorate Lauren Barnes being the first player to hit 200 regular
      season appearances I created a scrollable visualization to highlight
      her accomplishments. She has played over 17,000 minutes, helped earn
      three NWSL Shields, and she has been a longtime captain of the team.
      This visualization shows all the Reign games since 2013 and highlights
      different statistics as you scroll. Barnes has scored 2 goals and
      contributed to 58 shutouts.
    `,
  },
  {
    title: "Points Season Comparison",
    img: "points_season_comparison.png",
    github:
      "https://github.com/agale123/soccer-analytics/tree/main/season-comparison",
    twitter: "https://twitter.com/agale137/status/1666079768578752513",
    desc: `
      This series of plots compares pairs of statistics for each team between
      two seasons. In this example, the points earned through the first ten
      matches are compared. This highlights how much the Washington Spirit have
      improved compared to last season and how fall the Chicago Red Stars have
      fallen.
    `,
  },
  {
    title: "1,000 NWSL Matches",
    img: "1000_matches.png",
    github: "https://github.com/agale123/soccer-analytics/tree/main/archive/2023/1000-games",
    twitter: "https://twitter.com/agale137/status/1652488060385525760",
    desc: `
      The Racing Louisville v OL Reign game on April 29, 2023 marked the 1,000th
      regular season NWSL game. This was my first attempt at generative art,
      using data from all 1,000 matches. Teams are represented by ovals that are
      oriented and sized to represent goals scored and season performance. I
      also created zoomed in views of individual matches to highlight
      high-scoring results and the first ever NWSL match.
    `,
  },
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
    img: "4-22-RGN-goal5.png",
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
