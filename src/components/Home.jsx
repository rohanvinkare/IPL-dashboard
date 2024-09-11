/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [matchesData, setMatchesData] = useState([]);
  console.log(matchesData.matchDetails);

  let data = {
    matchDetails: [
      {
        matchDetailsMap: {
          key: "Sat, 26 Mar 2022",
          match: [
            {
              matchInfo: {
                matchId: 45886,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "1st Match",
                matchFormat: "T20",
                startDate: "1648303200000",
                endDate: "1648303200000",
                state: "complete",
                status: "Kolkata Knight Riders won by 6 wkts",
                team1: {
                  teamId: 58,
                  teamName: "CHENNAI SUPER KINGS",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                team2: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                venueInfo: {
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 63,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 131,
                    wickets: 5,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 133,
                    wickets: 4,
                    overs: 18.3,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        adDetail: {
          name: "native_news_index_random_1",
          layout: "native_large",
          position: 1,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 27 Mar 2022",
          match: [
            {
              matchInfo: {
                matchId: 45891,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "2nd Match",
                matchFormat: "T20",
                startDate: "1648375200000",
                endDate: "1648375200000",
                state: "complete",
                status: "Delhi Capitals won by 4 wkts",
                team1: {
                  teamId: 61,
                  teamName: "DELHI CAPITALS",
                  teamSName: "DC",
                  imageId: 225644,
                },
                team2: {
                  teamId: 62,
                  teamName: "MUMBAI INDIANS",
                  teamSName: "MI",
                  imageId: 225645,
                },
                venueInfo: {
                  ground: "Brabourne Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 61,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 179,
                    wickets: 6,
                    overs: 18.2,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 177,
                    wickets: 5,
                    overs: 20,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 45896,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "3rd Match",
                matchFormat: "T20",
                startDate: "1648389600000",
                endDate: "1648389600000",
                state: "complete",
                status: "Punjab Kings won by 5 wkts",
                team1: {
                  teamId: 65,
                  teamName: "PUNJAB KINGS",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                team2: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                venueInfo: {
                  ground: "Dr DY Patil Sports Academy",
                  city: "Navi Mumbai ",
                  timezone: "+05:30",
                },
                currBatTeamId: 65,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 208,
                    wickets: 5,
                    overs: 19,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 205,
                    wickets: 2,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 28 Mar 2022",
          match: [
            {
              matchInfo: {
                matchId: 45901,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "4th Match",
                matchFormat: "T20",
                startDate: "1648476000000",
                endDate: "1648476000000",
                state: "complete",
                status: "Gujarat Titans won by 5 wkts",
                team1: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                team2: {
                  teamId: 966,
                  teamName: "LUCKNOW SUPER GIANTS",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                venueInfo: {
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 971,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 161,
                    wickets: 5,
                    overs: 19.4,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 158,
                    wickets: 6,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Tue, 29 Mar 2022",
          match: [
            {
              matchInfo: {
                matchId: 45906,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "5th Match",
                matchFormat: "T20",
                startDate: "1648562400000",
                endDate: "1648562400000",
                state: "complete",
                status: "Rajasthan Royals won by 61 runs",
                team1: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                team2: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                venueInfo: {
                  ground: "Maharashtra Cricket Association Stadium",
                  city: "Pune",
                  timezone: "+05:30",
                },
                currBatTeamId: 64,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 149,
                    wickets: 7,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 210,
                    wickets: 6,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        adDetail: {
          name: "native_news_index_random_2",
          layout: "native_large",
          position: 4,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 30 Mar 2022",
          match: [
            {
              matchInfo: {
                matchId: 45911,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "6th Match",
                matchFormat: "T20",
                startDate: "1648648800000",
                endDate: "1648648800000",
                state: "complete",
                status: "Royal Challengers Bangalore won by 3 wkts",
                team1: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                team2: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                venueInfo: {
                  ground: "Dr DY Patil Sports Academy",
                  city: "Navi Mumbai ",
                  timezone: "+05:30",
                },
                currBatTeamId: 59,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 132,
                    wickets: 7,
                    overs: 19.2,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 128,
                    wickets: 10,
                    overs: 18.5,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Thu, 31 Mar 2022",
          match: [
            {
              matchInfo: {
                matchId: 45916,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "7th Match",
                matchFormat: "T20",
                startDate: "1648735200000",
                endDate: "1648735200000",
                state: "complete",
                status: "Lucknow Super Giants won by 6 wkts",
                team1: {
                  teamId: 966,
                  teamName: "LUCKNOW SUPER GIANTS",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                team2: {
                  teamId: 58,
                  teamName: "CHENNAI SUPER KINGS",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                venueInfo: {
                  ground: "Brabourne Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 966,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 211,
                    wickets: 4,
                    overs: 19.3,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 210,
                    wickets: 7,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 01 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 45921,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "8th Match",
                matchFormat: "T20",
                startDate: "1648821600000",
                endDate: "1648821600000",
                state: "complete",
                status: "Kolkata Knight Riders won by 6 wkts",
                team1: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                team2: {
                  teamId: 65,
                  teamName: "PUNJAB KINGS",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                venueInfo: {
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 63,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 141,
                    wickets: 4,
                    overs: 14.3,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 137,
                    wickets: 10,
                    overs: 18.2,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 02 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 45926,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "9th Match",
                matchFormat: "T20",
                startDate: "1648893600000",
                endDate: "1648893600000",
                state: "complete",
                status: "Rajasthan Royals won by 23 runs",
                team1: {
                  teamId: 62,
                  teamName: "MUMBAI INDIANS",
                  teamSName: "MI",
                  imageId: 225645,
                },
                team2: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                venueInfo: {
                  ground: "Dr DY Patil Sports Academy",
                  city: "Navi Mumbai ",
                  timezone: "+05:30",
                },
                currBatTeamId: 64,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 170,
                    wickets: 8,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 193,
                    wickets: 8,
                    overs: 20,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 45931,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "10th Match",
                matchFormat: "T20",
                startDate: "1648908000000",
                endDate: "1648908000000",
                state: "complete",
                status: "Gujarat Titans won by 14 runs",
                team1: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                team2: {
                  teamId: 61,
                  teamName: "DELHI CAPITALS",
                  teamSName: "DC",
                  imageId: 225644,
                },
                venueInfo: {
                  ground: "Maharashtra Cricket Association Stadium",
                  city: "Pune",
                  timezone: "+05:30",
                },
                currBatTeamId: 971,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 171,
                    wickets: 6,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 157,
                    wickets: 9,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 03 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 45936,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "11th Match",
                matchFormat: "T20",
                startDate: "1648994400000",
                endDate: "1648994400000",
                state: "complete",
                status: "Punjab Kings won by 54 runs",
                team1: {
                  teamId: 58,
                  teamName: "CHENNAI SUPER KINGS",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                team2: {
                  teamId: 65,
                  teamName: "PUNJAB KINGS",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                venueInfo: {
                  ground: "Brabourne Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 65,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 126,
                    wickets: 10,
                    overs: 18,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 180,
                    wickets: 8,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 04 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 45941,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "12th Match",
                matchFormat: "T20",
                startDate: "1649080800000",
                endDate: "1649080800000",
                state: "complete",
                status: "Lucknow Super Giants won by 12 runs",
                team1: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                team2: {
                  teamId: 966,
                  teamName: "LUCKNOW SUPER GIANTS",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                venueInfo: {
                  ground: "Dr DY Patil Sports Academy",
                  city: "Navi Mumbai ",
                  timezone: "+05:30",
                },
                currBatTeamId: 966,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 157,
                    wickets: 9,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 169,
                    wickets: 7,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Tue, 05 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 45946,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "13th Match",
                matchFormat: "T20",
                startDate: "1649167200000",
                endDate: "1649167200000",
                state: "complete",
                status: "Royal Challengers Bangalore won by 4 wkts",
                team1: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                team2: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                venueInfo: {
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 59,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 169,
                    wickets: 3,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 173,
                    wickets: 6,
                    overs: 19.1,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 06 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 45951,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "14th Match",
                matchFormat: "T20",
                startDate: "1649253600000",
                endDate: "1649253600000",
                state: "complete",
                status: "Kolkata Knight Riders won by 5 wkts",
                team1: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                team2: {
                  teamId: 62,
                  teamName: "MUMBAI INDIANS",
                  teamSName: "MI",
                  imageId: 225645,
                },
                venueInfo: {
                  ground: "Maharashtra Cricket Association Stadium",
                  city: "Pune",
                  timezone: "+05:30",
                },
                currBatTeamId: 63,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 162,
                    wickets: 5,
                    overs: 16,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 161,
                    wickets: 4,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Thu, 07 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 45956,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "15th Match",
                matchFormat: "T20",
                startDate: "1649340000000",
                endDate: "1649340000000",
                state: "complete",
                status: "Lucknow Super Giants won by 6 wkts",
                team1: {
                  teamId: 966,
                  teamName: "LUCKNOW SUPER GIANTS",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                team2: {
                  teamId: 61,
                  teamName: "DELHI CAPITALS",
                  teamSName: "DC",
                  imageId: 225644,
                },
                venueInfo: {
                  ground: "Dr DY Patil Sports Academy",
                  city: "Navi Mumbai ",
                  timezone: "+05:30",
                },
                currBatTeamId: 966,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 155,
                    wickets: 4,
                    overs: 19.4,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 149,
                    wickets: 3,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 08 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 45961,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "16th Match",
                matchFormat: "T20",
                startDate: "1649426400000",
                endDate: "1649426400000",
                state: "complete",
                status: "Gujarat Titans won by 6 wkts",
                team1: {
                  teamId: 65,
                  teamName: "PUNJAB KINGS",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                team2: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                venueInfo: {
                  ground: "Brabourne Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 971,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 189,
                    wickets: 9,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 190,
                    wickets: 4,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 09 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 45966,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "17th Match",
                matchFormat: "T20",
                startDate: "1649498400000",
                endDate: "1649498400000",
                state: "complete",
                status: "Sunrisers Hyderabad won by 8 wkts",
                team1: {
                  teamId: 58,
                  teamName: "CHENNAI SUPER KINGS",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                team2: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                venueInfo: {
                  ground: "Dr DY Patil Sports Academy",
                  city: "Navi Mumbai ",
                  timezone: "+05:30",
                },
                currBatTeamId: 255,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 154,
                    wickets: 7,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 155,
                    wickets: 2,
                    overs: 17.4,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 45971,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "18th Match",
                matchFormat: "T20",
                startDate: "1649512800000",
                endDate: "1649512800000",
                state: "complete",
                status: "Royal Challengers Bangalore won by 7 wkts",
                team1: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                team2: {
                  teamId: 62,
                  teamName: "MUMBAI INDIANS",
                  teamSName: "MI",
                  imageId: 225645,
                },
                venueInfo: {
                  ground: "Maharashtra Cricket Association Stadium",
                  city: "Pune",
                  timezone: "+05:30",
                },
                currBatTeamId: 59,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 152,
                    wickets: 3,
                    overs: 18.3,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 151,
                    wickets: 6,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 10 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 45976,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "19th Match",
                matchFormat: "T20",
                startDate: "1649584800000",
                endDate: "1649584800000",
                state: "complete",
                status: "Delhi Capitals won by 44 runs",
                team1: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                team2: {
                  teamId: 61,
                  teamName: "DELHI CAPITALS",
                  teamSName: "DC",
                  imageId: 225644,
                },
                venueInfo: {
                  ground: "Brabourne Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 61,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 171,
                    wickets: 10,
                    overs: 19.4,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 215,
                    wickets: 5,
                    overs: 20,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 45981,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "20th Match",
                matchFormat: "T20",
                startDate: "1649599200000",
                endDate: "1649599200000",
                state: "complete",
                status: "Rajasthan Royals won by 3 runs",
                team1: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                team2: {
                  teamId: 966,
                  teamName: "LUCKNOW SUPER GIANTS",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                venueInfo: {
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 64,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 165,
                    wickets: 6,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 162,
                    wickets: 8,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 11 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 45986,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "21st Match",
                matchFormat: "T20",
                startDate: "1649685600000",
                endDate: "1649685600000",
                state: "complete",
                status: "Sunrisers Hyderabad won by 8 wkts",
                team1: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                team2: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                venueInfo: {
                  ground: "Dr DY Patil Sports Academy",
                  city: "Navi Mumbai ",
                  timezone: "+05:30",
                },
                currBatTeamId: 255,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 168,
                    wickets: 2,
                    overs: 19.1,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 162,
                    wickets: 7,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Tue, 12 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 45991,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "22nd Match",
                matchFormat: "T20",
                startDate: "1649772000000",
                endDate: "1649772000000",
                state: "complete",
                status: "Chennai Super Kings won by 23 runs",
                team1: {
                  teamId: 58,
                  teamName: "CHENNAI SUPER KINGS",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                team2: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                venueInfo: {
                  ground: "Dr DY Patil Sports Academy",
                  city: "Navi Mumbai ",
                  timezone: "+05:30",
                },
                currBatTeamId: 58,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 216,
                    wickets: 4,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 193,
                    wickets: 9,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 13 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 45996,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "23rd Match",
                matchFormat: "T20",
                startDate: "1649858400000",
                endDate: "1649858400000",
                state: "complete",
                status: "Punjab Kings won by 12 runs",
                team1: {
                  teamId: 62,
                  teamName: "MUMBAI INDIANS",
                  teamSName: "MI",
                  imageId: 225645,
                },
                team2: {
                  teamId: 65,
                  teamName: "PUNJAB KINGS",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                venueInfo: {
                  ground: "Maharashtra Cricket Association Stadium",
                  city: "Pune",
                  timezone: "+05:30",
                },
                currBatTeamId: 65,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 186,
                    wickets: 9,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 198,
                    wickets: 5,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Thu, 14 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 46001,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "24th Match",
                matchFormat: "T20",
                startDate: "1649944800000",
                endDate: "1649944800000",
                state: "complete",
                status: "Gujarat Titans won by 37 runs",
                team1: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                team2: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                venueInfo: {
                  ground: "Dr DY Patil Sports Academy",
                  city: "Navi Mumbai ",
                  timezone: "+05:30",
                },
                currBatTeamId: 971,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 155,
                    wickets: 9,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 192,
                    wickets: 4,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 15 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 46006,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "25th Match",
                matchFormat: "T20",
                startDate: "1650031200000",
                endDate: "1650031200000",
                state: "complete",
                status: "Sunrisers Hyderabad won by 7 wkts",
                team1: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                team2: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                venueInfo: {
                  ground: "Brabourne Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 255,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 176,
                    wickets: 3,
                    overs: 17.5,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 175,
                    wickets: 8,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 16 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 46011,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "26th Match",
                matchFormat: "T20",
                startDate: "1650103200000",
                endDate: "1650103200000",
                state: "complete",
                status: "Lucknow Super Giants won by 18 runs",
                team1: {
                  teamId: 62,
                  teamName: "MUMBAI INDIANS",
                  teamSName: "MI",
                  imageId: 225645,
                },
                team2: {
                  teamId: 966,
                  teamName: "LUCKNOW SUPER GIANTS",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                venueInfo: {
                  ground: "Brabourne Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 966,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 181,
                    wickets: 9,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 199,
                    wickets: 4,
                    overs: 20,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 46016,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "27th Match",
                matchFormat: "T20",
                startDate: "1650117600000",
                endDate: "1650117600000",
                state: "complete",
                status: "Royal Challengers Bangalore won by 16 runs",
                team1: {
                  teamId: 61,
                  teamName: "DELHI CAPITALS",
                  teamSName: "DC",
                  imageId: 225644,
                },
                team2: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                venueInfo: {
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 59,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 173,
                    wickets: 7,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 189,
                    wickets: 5,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 17 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 46021,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "28th Match",
                matchFormat: "T20",
                startDate: "1650189600000",
                endDate: "1650189600000",
                state: "complete",
                status: "Sunrisers Hyderabad won by 7 wkts",
                team1: {
                  teamId: 65,
                  teamName: "PUNJAB KINGS",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                team2: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                venueInfo: {
                  ground: "Dr DY Patil Sports Academy",
                  city: "Navi Mumbai ",
                  timezone: "+05:30",
                },
                currBatTeamId: 255,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 151,
                    wickets: 10,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 152,
                    wickets: 3,
                    overs: 18.5,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 46026,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "29th Match",
                matchFormat: "T20",
                startDate: "1650204000000",
                endDate: "1650204000000",
                state: "complete",
                status: "Gujarat Titans won by 3 wkts",
                team1: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                team2: {
                  teamId: 58,
                  teamName: "CHENNAI SUPER KINGS",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                venueInfo: {
                  ground: "Maharashtra Cricket Association Stadium",
                  city: "Pune",
                  timezone: "+05:30",
                },
                currBatTeamId: 971,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 170,
                    wickets: 7,
                    overs: 19.5,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 169,
                    wickets: 5,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 18 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 46031,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "30th Match",
                matchFormat: "T20",
                startDate: "1650290400000",
                endDate: "1650290400000",
                state: "complete",
                status: "Rajasthan Royals won by 7 runs",
                team1: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                team2: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                venueInfo: {
                  ground: "Brabourne Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 64,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 217,
                    wickets: 5,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 210,
                    wickets: 10,
                    overs: 19.4,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Tue, 19 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 46036,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "31st Match",
                matchFormat: "T20",
                startDate: "1650376800000",
                endDate: "1650376800000",
                state: "complete",
                status: "Royal Challengers Bangalore won by 18 runs",
                team1: {
                  teamId: 966,
                  teamName: "LUCKNOW SUPER GIANTS",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                team2: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                venueInfo: {
                  ground: "Dr DY Patil Sports Academy",
                  city: "Navi Mumbai ",
                  timezone: "+05:30",
                },
                currBatTeamId: 59,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 163,
                    wickets: 8,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 181,
                    wickets: 6,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 20 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 46041,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "32nd Match",
                matchFormat: "T20",
                startDate: "1650463200000",
                endDate: "1650463200000",
                state: "complete",
                status: "Delhi Capitals won by 9 wkts",
                team1: {
                  teamId: 61,
                  teamName: "DELHI CAPITALS",
                  teamSName: "DC",
                  imageId: 225644,
                },
                team2: {
                  teamId: 65,
                  teamName: "PUNJAB KINGS",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                venueInfo: {
                  ground: "Brabourne Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 61,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 119,
                    wickets: 1,
                    overs: 10.3,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 115,
                    wickets: 10,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Thu, 21 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 46046,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "33rd Match",
                matchFormat: "T20",
                startDate: "1650549600000",
                endDate: "1650549600000",
                state: "complete",
                status: "Chennai Super Kings won by 3 wkts",
                team1: {
                  teamId: 62,
                  teamName: "MUMBAI INDIANS",
                  teamSName: "MI",
                  imageId: 225645,
                },
                team2: {
                  teamId: 58,
                  teamName: "CHENNAI SUPER KINGS",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                venueInfo: {
                  ground: "Dr DY Patil Sports Academy",
                  city: "Navi Mumbai ",
                  timezone: "+05:30",
                },
                currBatTeamId: 58,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 155,
                    wickets: 7,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 156,
                    wickets: 7,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 22 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 46051,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "34th Match",
                matchFormat: "T20",
                startDate: "1650636000000",
                endDate: "1650636000000",
                state: "complete",
                status: "Rajasthan Royals won by 15 runs",
                team1: {
                  teamId: 61,
                  teamName: "DELHI CAPITALS",
                  teamSName: "DC",
                  imageId: 225644,
                },
                team2: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                venueInfo: {
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 64,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 207,
                    wickets: 8,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 222,
                    wickets: 2,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 23 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 46056,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "35th Match",
                matchFormat: "T20",
                startDate: "1650708000000",
                endDate: "1650708000000",
                state: "complete",
                status: "Gujarat Titans won by 8 runs",
                team1: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                team2: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                venueInfo: {
                  ground: "Dr DY Patil Sports Academy",
                  city: "Navi Mumbai ",
                  timezone: "+05:30",
                },
                currBatTeamId: 971,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 148,
                    wickets: 8,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 156,
                    wickets: 9,
                    overs: 20,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 46061,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "36th Match",
                matchFormat: "T20",
                startDate: "1650722400000",
                endDate: "1650722400000",
                state: "complete",
                status: "Sunrisers Hyderabad won by 9 wkts",
                team1: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                team2: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                venueInfo: {
                  ground: "Brabourne Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 255,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 68,
                    wickets: 10,
                    overs: 16.1,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 72,
                    wickets: 1,
                    overs: 8,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 24 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 46066,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "37th Match",
                matchFormat: "T20",
                startDate: "1650808800000",
                endDate: "1650808800000",
                state: "complete",
                status: "Lucknow Super Giants won by 36 runs",
                team1: {
                  teamId: 966,
                  teamName: "LUCKNOW SUPER GIANTS",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                team2: {
                  teamId: 62,
                  teamName: "MUMBAI INDIANS",
                  teamSName: "MI",
                  imageId: 225645,
                },
                venueInfo: {
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 966,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 168,
                    wickets: 6,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 132,
                    wickets: 8,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 25 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 46071,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "38th Match",
                matchFormat: "T20",
                startDate: "1650895200000",
                endDate: "1650895200000",
                state: "complete",
                status: "Punjab Kings won by 11 runs",
                team1: {
                  teamId: 65,
                  teamName: "PUNJAB KINGS",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                team2: {
                  teamId: 58,
                  teamName: "CHENNAI SUPER KINGS",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                venueInfo: {
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 65,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 187,
                    wickets: 4,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 176,
                    wickets: 6,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Tue, 26 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 46076,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "39th Match",
                matchFormat: "T20",
                startDate: "1650981600000",
                endDate: "1650981600000",
                state: "complete",
                status: "Rajasthan Royals won by 29 runs",
                team1: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                team2: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                venueInfo: {
                  ground: "Maharashtra Cricket Association Stadium",
                  city: "Pune",
                  timezone: "+05:30",
                },
                currBatTeamId: 64,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 115,
                    wickets: 10,
                    overs: 19.3,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 144,
                    wickets: 8,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 27 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 46081,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "40th Match",
                matchFormat: "T20",
                startDate: "1651068000000",
                endDate: "1651068000000",
                state: "complete",
                status: "Gujarat Titans won by 5 wkts",
                team1: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                team2: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                venueInfo: {
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 971,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 199,
                    wickets: 5,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 195,
                    wickets: 6,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Thu, 28 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 46086,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "41st Match",
                matchFormat: "T20",
                startDate: "1651154400000",
                endDate: "1651154400000",
                state: "complete",
                status: "Delhi Capitals won by 4 wkts",
                team1: {
                  teamId: 61,
                  teamName: "DELHI CAPITALS",
                  teamSName: "DC",
                  imageId: 225644,
                },
                team2: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                venueInfo: {
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 61,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 150,
                    wickets: 6,
                    overs: 19,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 146,
                    wickets: 9,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 29 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 46091,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "42nd Match",
                matchFormat: "T20",
                startDate: "1651240800000",
                endDate: "1651240800000",
                state: "complete",
                status: "Lucknow Super Giants won by 20 runs",
                team1: {
                  teamId: 65,
                  teamName: "PUNJAB KINGS",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                team2: {
                  teamId: 966,
                  teamName: "LUCKNOW SUPER GIANTS",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                venueInfo: {
                  ground: "Maharashtra Cricket Association Stadium",
                  city: "Pune",
                  timezone: "+05:30",
                },
                currBatTeamId: 966,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 133,
                    wickets: 8,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 153,
                    wickets: 8,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 30 Apr 2022",
          match: [
            {
              matchInfo: {
                matchId: 46096,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "43rd Match",
                matchFormat: "T20",
                startDate: "1651312800000",
                endDate: "1651312800000",
                state: "complete",
                status: "Gujarat Titans won by 6 wkts",
                team1: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                team2: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                venueInfo: {
                  ground: "Brabourne Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 971,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 174,
                    wickets: 4,
                    overs: 19.3,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 170,
                    wickets: 6,
                    overs: 20,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 46101,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "44th Match",
                matchFormat: "T20",
                startDate: "1651327200000",
                endDate: "1651327200000",
                state: "complete",
                status: "Mumbai Indians won by 5 wkts",
                team1: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                team2: {
                  teamId: 62,
                  teamName: "MUMBAI INDIANS",
                  teamSName: "MI",
                  imageId: 225645,
                },
                venueInfo: {
                  ground: "Dr DY Patil Sports Academy",
                  city: "Navi Mumbai ",
                  timezone: "+05:30",
                },
                currBatTeamId: 62,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 158,
                    wickets: 6,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 161,
                    wickets: 5,
                    overs: 19.2,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 01 May 2022",
          match: [
            {
              matchInfo: {
                matchId: 46106,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "45th Match",
                matchFormat: "T20",
                startDate: "1651399200000",
                endDate: "1651399200000",
                state: "complete",
                status: "Lucknow Super Giants won by 6 runs",
                team1: {
                  teamId: 61,
                  teamName: "DELHI CAPITALS",
                  teamSName: "DC",
                  imageId: 225644,
                },
                team2: {
                  teamId: 966,
                  teamName: "LUCKNOW SUPER GIANTS",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                venueInfo: {
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 966,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 189,
                    wickets: 7,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 195,
                    wickets: 3,
                    overs: 20,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 46111,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "46th Match",
                matchFormat: "T20",
                startDate: "1651413600000",
                endDate: "1651413600000",
                state: "complete",
                status: "Chennai Super Kings won by 13 runs",
                team1: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                team2: {
                  teamId: 58,
                  teamName: "CHENNAI SUPER KINGS",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                venueInfo: {
                  ground: "Maharashtra Cricket Association Stadium",
                  city: "Pune",
                  timezone: "+05:30",
                },
                currBatTeamId: 58,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 189,
                    wickets: 6,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 202,
                    wickets: 2,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 02 May 2022",
          match: [
            {
              matchInfo: {
                matchId: 46116,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "47th Match",
                matchFormat: "T20",
                startDate: "1651500000000",
                endDate: "1651500000000",
                state: "complete",
                status: "Kolkata Knight Riders won by 7 wkts",
                team1: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                team2: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                venueInfo: {
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 63,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 158,
                    wickets: 3,
                    overs: 19.1,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 152,
                    wickets: 5,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Tue, 03 May 2022",
          match: [
            {
              matchInfo: {
                matchId: 46121,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "48th Match",
                matchFormat: "T20",
                startDate: "1651586400000",
                endDate: "1651586400000",
                state: "complete",
                status: "Punjab Kings won by 8 wkts",
                team1: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                team2: {
                  teamId: 65,
                  teamName: "PUNJAB KINGS",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                venueInfo: {
                  ground: "Dr DY Patil Sports Academy",
                  city: "Navi Mumbai ",
                  timezone: "+05:30",
                },
                currBatTeamId: 65,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 143,
                    wickets: 8,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 145,
                    wickets: 2,
                    overs: 16,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 04 May 2022",
          match: [
            {
              matchInfo: {
                matchId: 46126,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "49th Match",
                matchFormat: "T20",
                startDate: "1651672800000",
                endDate: "1651672800000",
                state: "complete",
                status: "Royal Challengers Bangalore won by 13 runs",
                team1: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                team2: {
                  teamId: 58,
                  teamName: "CHENNAI SUPER KINGS",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                venueInfo: {
                  ground: "Maharashtra Cricket Association Stadium",
                  city: "Pune",
                  timezone: "+05:30",
                },
                currBatTeamId: 59,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 173,
                    wickets: 8,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 160,
                    wickets: 8,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Thu, 05 May 2022",
          match: [
            {
              matchInfo: {
                matchId: 46131,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "50th Match",
                matchFormat: "T20",
                startDate: "1651759200000",
                endDate: "1651759200000",
                state: "complete",
                status: "Delhi Capitals won by 21 runs",
                team1: {
                  teamId: 61,
                  teamName: "DELHI CAPITALS",
                  teamSName: "DC",
                  imageId: 225644,
                },
                team2: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                venueInfo: {
                  ground: "Brabourne Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 61,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 207,
                    wickets: 3,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 186,
                    wickets: 8,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 06 May 2022",
          match: [
            {
              matchInfo: {
                matchId: 46136,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "51st Match",
                matchFormat: "T20",
                startDate: "1651845600000",
                endDate: "1651845600000",
                state: "complete",
                status: "Mumbai Indians won by 5 runs",
                team1: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                team2: {
                  teamId: 62,
                  teamName: "MUMBAI INDIANS",
                  teamSName: "MI",
                  imageId: 225645,
                },
                venueInfo: {
                  ground: "Brabourne Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 62,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 172,
                    wickets: 5,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 177,
                    wickets: 6,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 07 May 2022",
          match: [
            {
              matchInfo: {
                matchId: 46141,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "52nd Match",
                matchFormat: "T20",
                startDate: "1651917600000",
                endDate: "1651917600000",
                state: "complete",
                status: "Rajasthan Royals won by 6 wkts",
                team1: {
                  teamId: 65,
                  teamName: "PUNJAB KINGS",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                team2: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                venueInfo: {
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 64,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 189,
                    wickets: 5,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 190,
                    wickets: 4,
                    overs: 19.4,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 46146,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "53rd Match",
                matchFormat: "T20",
                startDate: "1651932000000",
                endDate: "1651932000000",
                state: "complete",
                status: "Lucknow Super Giants won by 75 runs",
                team1: {
                  teamId: 966,
                  teamName: "LUCKNOW SUPER GIANTS",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                team2: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                venueInfo: {
                  ground: "Maharashtra Cricket Association Stadium",
                  city: "Pune",
                  timezone: "+05:30",
                },
                currBatTeamId: 966,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 176,
                    wickets: 7,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 101,
                    wickets: 10,
                    overs: 14.3,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 08 May 2022",
          match: [
            {
              matchInfo: {
                matchId: 46151,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "54th Match",
                matchFormat: "T20",
                startDate: "1652004000000",
                endDate: "1652004000000",
                state: "complete",
                status: "Royal Challengers Bangalore won by 67 runs",
                team1: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                team2: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                venueInfo: {
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 59,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 125,
                    wickets: 10,
                    overs: 19.2,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 192,
                    wickets: 3,
                    overs: 20,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 46156,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "55th Match",
                matchFormat: "T20",
                startDate: "1652018400000",
                endDate: "1652018400000",
                state: "complete",
                status: "Chennai Super Kings won by 91 runs",
                team1: {
                  teamId: 58,
                  teamName: "CHENNAI SUPER KINGS",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                team2: {
                  teamId: 61,
                  teamName: "DELHI CAPITALS",
                  teamSName: "DC",
                  imageId: 225644,
                },
                venueInfo: {
                  ground: "Dr DY Patil Sports Academy",
                  city: "Navi Mumbai ",
                  timezone: "+05:30",
                },
                currBatTeamId: 58,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 208,
                    wickets: 6,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 117,
                    wickets: 10,
                    overs: 17.4,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 09 May 2022",
          match: [
            {
              matchInfo: {
                matchId: 46161,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "56th Match",
                matchFormat: "T20",
                startDate: "1652104800000",
                endDate: "1652104800000",
                state: "complete",
                status: "Kolkata Knight Riders won by 52 runs",
                team1: {
                  teamId: 62,
                  teamName: "MUMBAI INDIANS",
                  teamSName: "MI",
                  imageId: 225645,
                },
                team2: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                venueInfo: {
                  ground: "Dr DY Patil Sports Academy",
                  city: "Navi Mumbai ",
                  timezone: "+05:30",
                },
                currBatTeamId: 63,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 113,
                    wickets: 10,
                    overs: 17.3,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 165,
                    wickets: 9,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Tue, 10 May 2022",
          match: [
            {
              matchInfo: {
                matchId: 46166,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "57th Match",
                matchFormat: "T20",
                startDate: "1652191200000",
                endDate: "1652191200000",
                state: "complete",
                status: "Gujarat Titans won by 62 runs",
                team1: {
                  teamId: 966,
                  teamName: "LUCKNOW SUPER GIANTS",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                team2: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                venueInfo: {
                  ground: "Maharashtra Cricket Association Stadium",
                  city: "Pune",
                  timezone: "+05:30",
                },
                currBatTeamId: 971,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 82,
                    wickets: 10,
                    overs: 13.5,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 144,
                    wickets: 4,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 11 May 2022",
          match: [
            {
              matchInfo: {
                matchId: 46171,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "58th Match",
                matchFormat: "T20",
                startDate: "1652277600000",
                endDate: "1652277600000",
                state: "complete",
                status: "Delhi Capitals won by 8 wkts",
                team1: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                team2: {
                  teamId: 61,
                  teamName: "DELHI CAPITALS",
                  teamSName: "DC",
                  imageId: 225644,
                },
                venueInfo: {
                  ground: "Dr DY Patil Sports Academy",
                  city: "Navi Mumbai ",
                  timezone: "+05:30",
                },
                currBatTeamId: 61,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 160,
                    wickets: 6,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 161,
                    wickets: 2,
                    overs: 18.1,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Thu, 12 May 2022",
          match: [
            {
              matchInfo: {
                matchId: 46176,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "59th Match",
                matchFormat: "T20",
                startDate: "1652364000000",
                endDate: "1652364000000",
                state: "complete",
                status: "Mumbai Indians won by 5 wkts",
                team1: {
                  teamId: 58,
                  teamName: "CHENNAI SUPER KINGS",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                team2: {
                  teamId: 62,
                  teamName: "MUMBAI INDIANS",
                  teamSName: "MI",
                  imageId: 225645,
                },
                venueInfo: {
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 62,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 97,
                    wickets: 10,
                    overs: 16,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 103,
                    wickets: 5,
                    overs: 14.5,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 13 May 2022",
          match: [
            {
              matchInfo: {
                matchId: 46181,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "60th Match",
                matchFormat: "T20",
                startDate: "1652450400000",
                endDate: "1652450400000",
                state: "complete",
                status: "Punjab Kings won by 54 runs",
                team1: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                team2: {
                  teamId: 65,
                  teamName: "PUNJAB KINGS",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                venueInfo: {
                  ground: "Brabourne Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 65,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 155,
                    wickets: 9,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 209,
                    wickets: 9,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 14 May 2022",
          match: [
            {
              matchInfo: {
                matchId: 46186,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "61st Match",
                matchFormat: "T20",
                startDate: "1652536800000",
                endDate: "1652536800000",
                state: "complete",
                status: "Kolkata Knight Riders won by 54 runs",
                team1: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                team2: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                venueInfo: {
                  ground: "Maharashtra Cricket Association Stadium",
                  city: "Pune",
                  timezone: "+05:30",
                },
                currBatTeamId: 63,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 177,
                    wickets: 6,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 123,
                    wickets: 8,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 15 May 2022",
          match: [
            {
              matchInfo: {
                matchId: 46191,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "62nd Match",
                matchFormat: "T20",
                startDate: "1652608800000",
                endDate: "1652608800000",
                state: "complete",
                status: "Gujarat Titans won by 7 wkts",
                team1: {
                  teamId: 58,
                  teamName: "CHENNAI SUPER KINGS",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                team2: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                venueInfo: {
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 971,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 133,
                    wickets: 5,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 137,
                    wickets: 3,
                    overs: 19.1,
                  },
                },
              },
            },
            {
              matchInfo: {
                matchId: 46196,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "63rd Match",
                matchFormat: "T20",
                startDate: "1652623200000",
                endDate: "1652623200000",
                state: "complete",
                status: "Rajasthan Royals won by 24 runs",
                team1: {
                  teamId: 966,
                  teamName: "LUCKNOW SUPER GIANTS",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                team2: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                venueInfo: {
                  ground: "Brabourne Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 64,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 154,
                    wickets: 8,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 178,
                    wickets: 6,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Mon, 16 May 2022",
          match: [
            {
              matchInfo: {
                matchId: 46201,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "64th Match",
                matchFormat: "T20",
                startDate: "1652709600000",
                endDate: "1652709600000",
                state: "complete",
                status: "Delhi Capitals won by 17 runs",
                team1: {
                  teamId: 65,
                  teamName: "PUNJAB KINGS",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                team2: {
                  teamId: 61,
                  teamName: "DELHI CAPITALS",
                  teamSName: "DC",
                  imageId: 225644,
                },
                venueInfo: {
                  ground: "Dr DY Patil Sports Academy",
                  city: "Navi Mumbai ",
                  timezone: "+05:30",
                },
                currBatTeamId: 61,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 142,
                    wickets: 9,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 159,
                    wickets: 7,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Tue, 17 May 2022",
          match: [
            {
              matchInfo: {
                matchId: 46206,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "65th Match",
                matchFormat: "T20",
                startDate: "1652796000000",
                endDate: "1652796000000",
                state: "complete",
                status: "Sunrisers Hyderabad won by 3 runs",
                team1: {
                  teamId: 62,
                  teamName: "MUMBAI INDIANS",
                  teamSName: "MI",
                  imageId: 225645,
                },
                team2: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                venueInfo: {
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 255,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 190,
                    wickets: 7,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 193,
                    wickets: 6,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 18 May 2022",
          match: [
            {
              matchInfo: {
                matchId: 46211,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "66th Match",
                matchFormat: "T20",
                startDate: "1652882400000",
                endDate: "1652882400000",
                state: "complete",
                status: "Lucknow Super Giants won by 2 runs",
                team1: {
                  teamId: 63,
                  teamName: "KOLKATA KNIGHT RIDERS",
                  teamSName: "KKR",
                  imageId: 225646,
                },
                team2: {
                  teamId: 966,
                  teamName: "LUCKNOW SUPER GIANTS",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                venueInfo: {
                  ground: "Dr DY Patil Sports Academy",
                  city: "Navi Mumbai ",
                  timezone: "+05:30",
                },
                currBatTeamId: 966,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 208,
                    wickets: 8,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 210,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Thu, 19 May 2022",
          match: [
            {
              matchInfo: {
                matchId: 46216,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "67th Match",
                matchFormat: "T20",
                startDate: "1652968800000",
                endDate: "1652968800000",
                state: "complete",
                status: "Royal Challengers Bangalore won by 8 wkts",
                team1: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                team2: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                venueInfo: {
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 59,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 170,
                    wickets: 2,
                    overs: 18.4,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 168,
                    wickets: 5,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 20 May 2022",
          match: [
            {
              matchInfo: {
                matchId: 46221,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "68th Match",
                matchFormat: "T20",
                startDate: "1653055200000",
                endDate: "1653055200000",
                state: "complete",
                status: "Rajasthan Royals won by 5 wkts",
                team1: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                team2: {
                  teamId: 58,
                  teamName: "CHENNAI SUPER KINGS",
                  teamSName: "CSK",
                  imageId: 225641,
                },
                venueInfo: {
                  ground: "Brabourne Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 64,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 151,
                    wickets: 5,
                    overs: 19.4,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 150,
                    wickets: 6,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Sat, 21 May 2022",
          match: [
            {
              matchInfo: {
                matchId: 46226,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "69th Match",
                matchFormat: "T20",
                startDate: "1653141600000",
                endDate: "1653141600000",
                state: "complete",
                status: "Mumbai Indians won by 5 wkts",
                team1: {
                  teamId: 62,
                  teamName: "MUMBAI INDIANS",
                  teamSName: "MI",
                  imageId: 225645,
                },
                team2: {
                  teamId: 61,
                  teamName: "DELHI CAPITALS",
                  teamSName: "DC",
                  imageId: 225644,
                },
                venueInfo: {
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 62,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 160,
                    wickets: 5,
                    overs: 19.1,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 159,
                    wickets: 7,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 22 May 2022",
          match: [
            {
              matchInfo: {
                matchId: 46231,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "70th Match",
                matchFormat: "T20",
                startDate: "1653228000000",
                endDate: "1653228000000",
                state: "complete",
                status: "Punjab Kings won by 5 wkts",
                team1: {
                  teamId: 255,
                  teamName: "SUNRISERS HYDERABAD",
                  teamSName: "SRH",
                  imageId: 225649,
                },
                team2: {
                  teamId: 65,
                  teamName: "PUNJAB KINGS",
                  teamSName: "PBKS",
                  imageId: 225648,
                },
                venueInfo: {
                  ground: "Wankhede Stadium",
                  city: "Mumbai",
                  timezone: "+05:30",
                },
                currBatTeamId: 65,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 157,
                    wickets: 8,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 160,
                    wickets: 5,
                    overs: 15.1,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Tue, 24 May 2022",
          match: [
            {
              matchInfo: {
                matchId: 47584,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "Qualifier 1",
                matchFormat: "T20",
                startDate: "1653400800000",
                endDate: "1653400800000",
                state: "complete",
                status: "Gujarat Titans won by 7 wkts",
                team1: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                team2: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                venueInfo: {
                  ground: "Eden Gardens",
                  city: "Kolkata",
                  timezone: "+05:30",
                },
                currBatTeamId: 971,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 191,
                    wickets: 3,
                    overs: 19.3,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 188,
                    wickets: 6,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Wed, 25 May 2022",
          match: [
            {
              matchInfo: {
                matchId: 47591,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "Eliminator",
                matchFormat: "T20",
                startDate: "1653487200000",
                endDate: "1653487200000",
                state: "complete",
                status: "Royal Challengers Bangalore won by 14 runs",
                team1: {
                  teamId: 966,
                  teamName: "LUCKNOW SUPER GIANTS",
                  teamSName: "LSG",
                  imageId: 389444,
                },
                team2: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                venueInfo: {
                  ground: "Eden Gardens",
                  city: "Kolkata",
                  timezone: "+05:30",
                },
                currBatTeamId: 59,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 193,
                    wickets: 6,
                    overs: 20,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 207,
                    wickets: 4,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Fri, 27 May 2022",
          match: [
            {
              matchInfo: {
                matchId: 47598,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "Qualifier 2",
                matchFormat: "T20",
                startDate: "1653660000000",
                endDate: "1653660000000",
                state: "complete",
                status: "Rajasthan Royals won by 7 wkts",
                team1: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                team2: {
                  teamId: 59,
                  teamName: "ROYAL CHALLENGERS BENGALURU",
                  teamSName: "RCB",
                  imageId: 225643,
                },
                venueInfo: {
                  ground: "Narendra Modi Stadium",
                  city: "Ahmedabad",
                  timezone: "+05:30",
                },
                currBatTeamId: 64,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 161,
                    wickets: 3,
                    overs: 18.1,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 157,
                    wickets: 8,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
      {
        matchDetailsMap: {
          key: "Sun, 29 May 2022",
          match: [
            {
              matchInfo: {
                matchId: 47605,
                seriesId: 4061,
                seriesName: "Indian Premier League 2022",
                matchDesc: "Final",
                matchFormat: "T20",
                startDate: "1653834600000",
                endDate: "1653834600000",
                state: "complete",
                status: "Gujarat Titans won by 7 wkts",
                team1: {
                  teamId: 971,
                  teamName: "GUJARAT TITANS",
                  teamSName: "GT",
                  imageId: 235085,
                },
                team2: {
                  teamId: 64,
                  teamName: "RAJASTHAN ROYALS",
                  teamSName: "RR",
                  imageId: 225647,
                },
                venueInfo: {
                  ground: "Narendra Modi Stadium",
                  city: "Ahmedabad",
                  timezone: "+05:30",
                },
                currBatTeamId: 971,
                isTimeAnnounced: true,
              },
              matchScore: {
                team1Score: {
                  inngs1: {
                    inningsId: 2,
                    runs: 133,
                    wickets: 3,
                    overs: 18.1,
                  },
                },
                team2Score: {
                  inngs1: {
                    inningsId: 1,
                    runs: 130,
                    wickets: 9,
                    overs: 20,
                  },
                },
              },
            },
          ],
          seriesId: 4061,
        },
      },
    ],
    appIndex: {
      seoTitle:
        "Indian Premier League 2022 live scores, schedule and results - Cricbuzz | Cricbuzz.com",
      webURL: "www.cricbuzz.com/cricket-series/",
    },
  };

  // Some data have two matches so sorting out the data with single match
  let filterData = data.matchDetails.filter(
    (singleMatch) => singleMatch["matchDetailsMap"]
  );

  async function FetchMatchesData() {
    const url = "https://cricbuzz-cricket.p.rapidapi.com/series/v1/7607";

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
        "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);

      // Some data have two matches so sorting out the data with single match
      let filterData = result.matchDetails.filter(
        (singleMatch) => singleMatch["matchDetailsMap"]
      );
      setMatchesData(filterData);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    FetchMatchesData();
    console.log(FetchMatchesData);
    // setMatchesData(filterData);
  }, []);

  return (
    <div className="flex flex-wrap w-full">
      {/* <div>Rohan || Cricket App</div> */}

      {matchesData.map(({ matchDetailsMap: { match, key: date } }) =>
        match.map(
          (
            // First we are destructuring the data in the map function
            {
              matchInfo: {
                team1: {
                  teamSName: team1Name,
                  teamName: team1longName,
                  imageId: team1Image,
                },
                team2: {
                  teamSName: team2Name,
                  // eslint-disable-next-line no-unused-vars
                  teamName: team2longName,
                  imageId: team2Image,
                },
                status,
                matchId,
                matchDesc,
                state,
                // matchFormat,
              },
              matchScore,
            }
          ) => (
            // Here we are plotting the data in the map function

            // eslint-disable-next-line react/jsx-key
            <Link to={`/matchDetails/${matchId}`} className="w-[50%] h-[160px]">
              {/* <h2>
                  {team1Name} vs {teamSName} | {status} | {key}
                </h2> */}
              <div className="bg-white  hover:bg-gray-200/60 lg:p-3 text-black border p-3 flex flex-col gap-4">
                <div className="flex justify-between">
                  <p>{matchDesc}</p>
                  <p>{date.split(" 2024")[0]}</p>
                </div>
                <div>
                  <div className="flex justify-between my-1">
                    <div className="flex gap-4 ">
                      <img
                        className="w-6 object-contain h-6"
                        src={`https://res.cloudinary.com/digkgdovw/image/upload/v1715267905/iplTeamLogo/${team1Image}`}
                        alt=""
                      />
                      <p>{team1Name}</p>
                    </div>

                    {matchScore?.team1Score ? (
                      <p>
                        {" "}
                        {matchScore?.team1Score?.inngs1?.runs}/
                        {matchScore?.team1Score?.inngs1?.wickets} (
                        {matchScore?.team1Score?.inngs1?.overs})
                      </p>
                    ) : null}
                  </div>

                  <div className="flex justify-between  my-1">
                    <div className="flex gap-4">
                      <img
                        className="w-6 object-contain h-6"
                        src={`https://res.cloudinary.com/digkgdovw/image/upload/v1715267905/iplTeamLogo/${team2Image}`}
                        alt=""
                      />
                      <p>{team2Name}</p>
                    </div>

                    {matchScore?.team2Score ? (
                      <p>
                        {" "}
                        {matchScore?.team2Score?.inngs1?.runs}/
                        {matchScore?.team2Score?.inngs1?.wickets} (
                        {matchScore?.team2Score?.inngs1?.overs})
                      </p>
                    ) : null}
                  </div>
                </div>
                <p className="font-thin">
                  {state === "Upcoming"
                    ? status
                    : `${
                        status.split(" won")[0] === team1longName
                          ? team2Name
                          : team1Name
                      } won${status.split(" won")[1]}`}
                </p>
              </div>
            </Link>
          )
        )
      )}
    </div>
  );
}

export default Home;

{
  // // single api object to plot to understand the structure
  // matchDetails: [
  //     {
  //       matchDetailsMap: {
  //         key: "Sat, 26 Mar 2022",
  //         match: [
  //           {
  //             matchInfo: {
  //               matchId: 45886,
  //               seriesId: 4061,
  //               seriesName: "Indian Premier League 2022",
  //               matchDesc: "1st Match",
  //               matchFormat: "T20",
  //               startDate: "1648303200000",
  //               endDate: "1648303200000",
  //               state: "complete",
  //               status: "Kolkata Knight Riders won by 6 wkts",
  //               team1: {
  //                 teamId: 58,
  //                 teamName: "CHENNAI SUPER KINGS",
  //                 teamSName: "CSK",
  //                 imageId: 225641,
  //               },
  //               team2: {
  //                 teamId: 63,
  //                 teamName: "KOLKATA KNIGHT RIDERS",
  //                 teamSName: "KKR",
  //                 imageId: 225646,
  //               },
  //               venueInfo: {
  //                 ground: "Wankhede Stadium",
  //                 city: "Mumbai",
  //                 timezone: "+05:30",
  //               },
  //               currBatTeamId: 63,
  //               isTimeAnnounced: true,
  //             },
  //             matchScore: {
  //               team1Score: {
  //                 inngs1: {
  //                   inningsId: 1,
  //                   runs: 131,
  //                   wickets: 5,
  //                   overs: 20,
  //                 },
  //               },
  //               team2Score: {
  //                 inngs1: {
  //                   inningsId: 2,
  //                   runs: 133,
  //                   wickets: 4,
  //                   overs: 18.3,
  //                 },
  //               },
  //             },
  //           },
  //         ],
  //         seriesId: 4061,
  //       },
  //     },
  //     {
  //       adDetail: {
  //         name: "native_news_index_random_1",
  //         layout: "native_large",
  //         position: 1,
  //       },
  //     },
}
