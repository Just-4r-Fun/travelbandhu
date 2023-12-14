const accessKey = "ECgW-iIrlC6m3tBzxq9K9vDdBDwejJMldUUF4K7jUYo";
const apiUrl = "https://api.unsplash.com/";
const searchEndpoint = "search/photos";
export const getPlaceImage = async (place: string) => {
  const response = await fetch(
    `${apiUrl}${searchEndpoint}?client_id=${accessKey}&query=${place}`
  );
  const data = await response.json();
  //   const data = mockData;
  return data;
};

export type PlacesResponseType = typeof mockData;

const mockData = {
  total: 1153,
  total_pages: 116,
  results: [
    {
      id: "y97sM41-g9k",
      slug: "brown-concrete-building-during-daytime-y97sM41-g9k",
      created_at: "2020-10-21T06:36:37Z",
      updated_at: "2023-12-13T13:18:55Z",
      promoted_at: null,
      width: 5966,
      height: 3977,
      color: "#f3f3d9",
      blur_hash: "L_I4#1s:t6f6~WofoffQ-;bIWVj[",
      description: null,
      alt_description: "brown concrete building during daytime",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHwxfHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHwxfHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHwxfHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHwxfHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHwxfHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1603262110263-fb0112e7cc33",
      },
      links: {
        self: "https://api.unsplash.com/photos/brown-concrete-building-during-daytime-y97sM41-g9k",
        html: "https://unsplash.com/photos/brown-concrete-building-during-daytime-y97sM41-g9k",
        download:
          "https://unsplash.com/photos/y97sM41-g9k/download?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHwxfHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA",
        download_location:
          "https://api.unsplash.com/photos/y97sM41-g9k/download?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHwxfHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA",
      },
      likes: 38,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {
        "architecture-interior": {
          status: "rejected",
        },
      },
      user: {
        id: "G_2lw5uMGOU",
        updated_at: "2023-11-22T01:20:38Z",
        username: "soakedinnirvana",
        name: "Dexter Fernandes",
        first_name: "Dexter",
        last_name: "Fernandes",
        twitter_username: "SoakedInNirvana",
        portfolio_url: "https://www.instagram.com/soakedinnirvana/",
        bio: "Graphic Designer, Freelance portrait photographer, concept portraits actually.\r\nLoves to travel, take some landscape pictures too.",
        location: "mumbai,India",
        links: {
          self: "https://api.unsplash.com/users/soakedinnirvana",
          html: "https://unsplash.com/@soakedinnirvana",
          photos: "https://api.unsplash.com/users/soakedinnirvana/photos",
          likes: "https://api.unsplash.com/users/soakedinnirvana/likes",
          portfolio: "https://api.unsplash.com/users/soakedinnirvana/portfolio",
          following: "https://api.unsplash.com/users/soakedinnirvana/following",
          followers: "https://api.unsplash.com/users/soakedinnirvana/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1614632248373-8f342592c330image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium:
            "https://images.unsplash.com/profile-1614632248373-8f342592c330image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large:
            "https://images.unsplash.com/profile-1614632248373-8f342592c330image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
        },
        instagram_username: "BleachedHuman",
        total_collections: 1,
        total_likes: 65,
        total_photos: 132,
        total_promoted_photos: 16,
        accepted_tos: true,
        for_hire: true,
        social: {
          instagram_username: "BleachedHuman",
          portfolio_url: "https://www.instagram.com/soakedinnirvana/",
          twitter_username: "SoakedInNirvana",
          paypal_email: null,
        },
      },
      tags: [
        {
          type: "search",
          title: "jaipur",
        },
        {
          type: "search",
          title: "india",
        },
        {
          type: "search",
          title: "architecture",
        },
      ],
    },
    {
      id: "3EwYQ09ZHh8",
      slug: "multicolored-hallway-rope-3EwYQ09ZHh8",
      created_at: "2019-05-12T19:55:20Z",
      updated_at: "2023-12-13T19:08:00Z",
      promoted_at: null,
      width: 2215,
      height: 4032,
      color: "#c0c0c0",
      blur_hash: "LWINpqtRR+WW8^M|R+j[f-t7afae",
      description: null,
      alt_description: "multicolored hallway rope",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1557690756-62754e561982?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHwyfHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1557690756-62754e561982?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHwyfHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1557690756-62754e561982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHwyfHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1557690756-62754e561982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHwyfHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1557690756-62754e561982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHwyfHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1557690756-62754e561982",
      },
      links: {
        self: "https://api.unsplash.com/photos/multicolored-hallway-rope-3EwYQ09ZHh8",
        html: "https://unsplash.com/photos/multicolored-hallway-rope-3EwYQ09ZHh8",
        download:
          "https://unsplash.com/photos/3EwYQ09ZHh8/download?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHwyfHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA",
        download_location:
          "https://api.unsplash.com/photos/3EwYQ09ZHh8/download?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHwyfHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA",
      },
      likes: 101,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      user: {
        id: "_zNrsU1AVkA",
        updated_at: "2023-09-12T13:45:05Z",
        username: "harshjain1",
        name: "Harsh Jain",
        first_name: "Harsh",
        last_name: "Jain",
        twitter_username: "jainharsh3488",
        portfolio_url: null,
        bio: "I click, and I write. ",
        location: null,
        links: {
          self: "https://api.unsplash.com/users/harshjain1",
          html: "https://unsplash.com/@harshjain1",
          photos: "https://api.unsplash.com/users/harshjain1/photos",
          likes: "https://api.unsplash.com/users/harshjain1/likes",
          portfolio: "https://api.unsplash.com/users/harshjain1/portfolio",
          following: "https://api.unsplash.com/users/harshjain1/following",
          followers: "https://api.unsplash.com/users/harshjain1/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1650614047268-653893db7d50?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium:
            "https://images.unsplash.com/profile-1650614047268-653893db7d50?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large:
            "https://images.unsplash.com/profile-1650614047268-653893db7d50?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
        },
        instagram_username: "merakiforwords",
        total_collections: 0,
        total_likes: 2,
        total_photos: 45,
        total_promoted_photos: 0,
        accepted_tos: true,
        for_hire: false,
        social: {
          instagram_username: "merakiforwords",
          portfolio_url: null,
          twitter_username: "jainharsh3488",
          paypal_email: null,
        },
      },
      tags: [
        {
          type: "search",
          title: "jaipur",
        },
        {
          type: "search",
          title: "india",
        },
        {
          type: "search",
          title: "patrika gate",
        },
      ],
    },
    {
      id: "ZgbzOZW9U3o",
      slug: "people-walking-on-snow-covered-field-near-brown-concrete-building-during-daytime-ZgbzOZW9U3o",
      created_at: "2020-09-09T14:20:22Z",
      updated_at: "2023-12-14T02:18:26Z",
      promoted_at: null,
      width: 2864,
      height: 5093,
      color: "#f3a640",
      blur_hash: "LhLfmks.Ndf+*0s.oLWrGcoLoej[",
      description: "Amber Fort #3",
      alt_description:
        "people walking on snow covered field near brown concrete building during daytime",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1599661046289-e31897846e41?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHwzfHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1599661046289-e31897846e41?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHwzfHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1599661046289-e31897846e41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHwzfHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1599661046289-e31897846e41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHwzfHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1599661046289-e31897846e41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHwzfHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1599661046289-e31897846e41",
      },
      links: {
        self: "https://api.unsplash.com/photos/people-walking-on-snow-covered-field-near-brown-concrete-building-during-daytime-ZgbzOZW9U3o",
        html: "https://unsplash.com/photos/people-walking-on-snow-covered-field-near-brown-concrete-building-during-daytime-ZgbzOZW9U3o",
        download:
          "https://unsplash.com/photos/ZgbzOZW9U3o/download?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHwzfHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA",
        download_location:
          "https://api.unsplash.com/photos/ZgbzOZW9U3o/download?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHwzfHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA",
      },
      likes: 175,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {
        nature: {
          status: "approved",
          approved_on: "2020-09-10T13:52:29Z",
        },
      },
      user: {
        id: "M_g-n3ntzRM",
        updated_at: "2023-11-14T08:27:25Z",
        username: "meric",
        name: "Meriç Dağlı",
        first_name: "Meriç",
        last_name: "Dağlı",
        twitter_username: "mericda",
        portfolio_url: "http://www.mericdagli.com",
        bio: "Designer",
        location: "San Francisco, CA",
        links: {
          self: "https://api.unsplash.com/users/meric",
          html: "https://unsplash.com/@meric",
          photos: "https://api.unsplash.com/users/meric/photos",
          likes: "https://api.unsplash.com/users/meric/likes",
          portfolio: "https://api.unsplash.com/users/meric/portfolio",
          following: "https://api.unsplash.com/users/meric/following",
          followers: "https://api.unsplash.com/users/meric/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1606816423520-ddf1988e2c56image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium:
            "https://images.unsplash.com/profile-1606816423520-ddf1988e2c56image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large:
            "https://images.unsplash.com/profile-1606816423520-ddf1988e2c56image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
        },
        instagram_username: "mericda",
        total_collections: 11,
        total_likes: 75,
        total_photos: 271,
        total_promoted_photos: 128,
        accepted_tos: true,
        for_hire: false,
        social: {
          instagram_username: "mericda",
          portfolio_url: "http://www.mericdagli.com",
          twitter_username: "mericda",
          paypal_email: null,
        },
      },
      tags: [
        {
          type: "search",
          title: "castle",
        },
        {
          type: "search",
          title: "fort",
        },
        {
          type: "landing_page",
          title: "scenery",
          source: {
            ancestry: {
              type: {
                slug: "wallpapers",
                pretty_slug: "HD Wallpapers",
              },
              category: {
                slug: "nature",
                pretty_slug: "Nature",
              },
              subcategory: {
                slug: "scenery",
                pretty_slug: "Scenery",
              },
            },
            title: "Hd scenery wallpapers",
            subtitle: "Download free scenery wallpapers",
            description:
              "Choose from a curated selection of scenery wallpapers for your mobile and desktop screens. Always free on Unsplash.",
            meta_title:
              "Scenery Wallpapers: Free HD Download [500+ HQ] | Unsplash",
            meta_description:
              "Choose from hundreds of free scenery wallpapers. Download HD wallpapers for free on Unsplash.",
            cover_photo: {
              id: "txtWlEUyW2Y",
              slug: "brown-mountain-under-clear-blue-sky-txtWlEUyW2Y",
              created_at: "2017-07-17T20:21:51Z",
              updated_at: "2023-12-11T19:01:56Z",
              promoted_at: "2017-07-19T12:00:45Z",
              width: 6000,
              height: 4000,
              color: "#d9d9f3",
              blur_hash: "L{Ez8JR.WCaxyGaeWVa$RjWCoJjt",
              description: null,
              alt_description: "brown mountain under clear blue sky",
              breadcrumbs: [],
              urls: {
                raw: "https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc?ixlib=rb-4.0.3",
                full: "https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
                regular:
                  "https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                small:
                  "https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                thumb:
                  "https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
                small_s3:
                  "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1500322969630-a26ab6eb64cc",
              },
              links: {
                self: "https://api.unsplash.com/photos/brown-mountain-under-clear-blue-sky-txtWlEUyW2Y",
                html: "https://unsplash.com/photos/brown-mountain-under-clear-blue-sky-txtWlEUyW2Y",
                download: "https://unsplash.com/photos/txtWlEUyW2Y/download",
                download_location:
                  "https://api.unsplash.com/photos/txtWlEUyW2Y/download",
              },
              likes: 383,
              liked_by_user: false,
              current_user_collections: [],
              sponsorship: null,
              topic_submissions: {},
              premium: false,
              plus: false,
              user: {
                id: "qC-urTD_62E",
                updated_at: "2023-12-10T19:29:59Z",
                username: "huguesdb",
                name: "Hugues de BUYER-MIMEURE",
                first_name: "Hugues",
                last_name: "de BUYER-MIMEURE",
                twitter_username: null,
                portfolio_url: "http://instagram.com/huguesdbm/",
                bio: "Hi, I'm a french photographer with Sony Alpha 7IV based in Lyon, France.",
                location: "Lyon",
                links: {
                  self: "https://api.unsplash.com/users/huguesdb",
                  html: "https://unsplash.com/@huguesdb",
                  photos: "https://api.unsplash.com/users/huguesdb/photos",
                  likes: "https://api.unsplash.com/users/huguesdb/likes",
                  portfolio:
                    "https://api.unsplash.com/users/huguesdb/portfolio",
                  following:
                    "https://api.unsplash.com/users/huguesdb/following",
                  followers:
                    "https://api.unsplash.com/users/huguesdb/followers",
                },
                profile_image: {
                  small:
                    "https://images.unsplash.com/profile-1500389500141-d453d040335c?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                  medium:
                    "https://images.unsplash.com/profile-1500389500141-d453d040335c?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                  large:
                    "https://images.unsplash.com/profile-1500389500141-d453d040335c?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
                },
                instagram_username: "huguesdbm",
                total_collections: 0,
                total_likes: 43,
                total_photos: 64,
                total_promoted_photos: 15,
                accepted_tos: true,
                for_hire: false,
                social: {
                  instagram_username: "huguesdbm",
                  portfolio_url: "http://instagram.com/huguesdbm/",
                  twitter_username: null,
                  paypal_email: null,
                },
              },
            },
          },
        },
      ],
    },
    {
      id: "6rDbvXzIVpQ",
      slug: "man-in-white-and-green-long-sleeve-shirt-standing-near-brown-concrete-building-during-daytime-6rDbvXzIVpQ",
      created_at: "2016-10-27T17:04:00Z",
      updated_at: "2023-12-14T00:01:04Z",
      promoted_at: null,
      width: 5760,
      height: 3840,
      color: "#8c7359",
      blur_hash: "LNFiPutmOsa0TzE2%MnhT}RQV?V?",
      description: null,
      alt_description:
        "man in white and green long sleeve shirt standing near brown concrete building during daytime",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw0fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1477587458883-47145ed94245?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw0fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1477587458883-47145ed94245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw0fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1477587458883-47145ed94245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw0fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1477587458883-47145ed94245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw0fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1477587458883-47145ed94245",
      },
      links: {
        self: "https://api.unsplash.com/photos/man-in-white-and-green-long-sleeve-shirt-standing-near-brown-concrete-building-during-daytime-6rDbvXzIVpQ",
        html: "https://unsplash.com/photos/man-in-white-and-green-long-sleeve-shirt-standing-near-brown-concrete-building-during-daytime-6rDbvXzIVpQ",
        download:
          "https://unsplash.com/photos/6rDbvXzIVpQ/download?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw0fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA",
        download_location:
          "https://api.unsplash.com/photos/6rDbvXzIVpQ/download?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw0fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA",
      },
      likes: 210,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      user: {
        id: "1YOANzajJlY",
        updated_at: "2023-09-13T02:11:44Z",
        username: "msaditya9",
        name: "Aditya Siva",
        first_name: "Aditya",
        last_name: "Siva",
        twitter_username: null,
        portfolio_url: "https://www.flickr.com/photos/aditya_dittu",
        bio: "The greatest passion in my life is to look through camera and capture the best moments around\r\nme. I started my passion since 2009 and now I have strong grip over my current engagements as Nature, wildlife and fashion photography",
        location: "Philadelphia, PA, USA",
        links: {
          self: "https://api.unsplash.com/users/msaditya9",
          html: "https://unsplash.com/@msaditya9",
          photos: "https://api.unsplash.com/users/msaditya9/photos",
          likes: "https://api.unsplash.com/users/msaditya9/likes",
          portfolio: "https://api.unsplash.com/users/msaditya9/portfolio",
          following: "https://api.unsplash.com/users/msaditya9/following",
          followers: "https://api.unsplash.com/users/msaditya9/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1477590380254-f907512430c7?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium:
            "https://images.unsplash.com/profile-1477590380254-f907512430c7?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large:
            "https://images.unsplash.com/profile-1477590380254-f907512430c7?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
        },
        instagram_username: "msaditya9",
        total_collections: 0,
        total_likes: 0,
        total_photos: 18,
        total_promoted_photos: 5,
        accepted_tos: false,
        for_hire: false,
        social: {
          instagram_username: "msaditya9",
          portfolio_url: "https://www.flickr.com/photos/aditya_dittu",
          twitter_username: null,
          paypal_email: null,
        },
      },
      tags: [
        {
          type: "search",
          title: "jaipur",
        },
        {
          type: "search",
          title: "india",
        },
        {
          type: "search",
          title: "hawa mahal road",
        },
      ],
    },
    {
      id: "3P1G67zNyCI",
      slug: "birds-flying-over-the-lake-during-daytime-3P1G67zNyCI",
      created_at: "2016-10-27T16:57:28Z",
      updated_at: "2023-12-13T21:01:00Z",
      promoted_at: null,
      width: 5760,
      height: 3840,
      color: "#f3f3f3",
      blur_hash: "LpIr+?RjM{xu?wSMkCs:OYNGofxa",
      description: null,
      alt_description: "birds flying over the lake during daytime",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1477586957327-847a0f3f4fe3?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw1fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1477586957327-847a0f3f4fe3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw1fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1477586957327-847a0f3f4fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw1fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1477586957327-847a0f3f4fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw1fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1477586957327-847a0f3f4fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw1fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1477586957327-847a0f3f4fe3",
      },
      links: {
        self: "https://api.unsplash.com/photos/birds-flying-over-the-lake-during-daytime-3P1G67zNyCI",
        html: "https://unsplash.com/photos/birds-flying-over-the-lake-during-daytime-3P1G67zNyCI",
        download:
          "https://unsplash.com/photos/3P1G67zNyCI/download?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw1fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA",
        download_location:
          "https://api.unsplash.com/photos/3P1G67zNyCI/download?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw1fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA",
      },
      likes: 174,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {
        nature: {
          status: "approved",
          approved_on: "2020-04-06T14:20:18Z",
        },
      },
      user: {
        id: "1YOANzajJlY",
        updated_at: "2023-09-13T02:11:44Z",
        username: "msaditya9",
        name: "Aditya Siva",
        first_name: "Aditya",
        last_name: "Siva",
        twitter_username: null,
        portfolio_url: "https://www.flickr.com/photos/aditya_dittu",
        bio: "The greatest passion in my life is to look through camera and capture the best moments around\r\nme. I started my passion since 2009 and now I have strong grip over my current engagements as Nature, wildlife and fashion photography",
        location: "Philadelphia, PA, USA",
        links: {
          self: "https://api.unsplash.com/users/msaditya9",
          html: "https://unsplash.com/@msaditya9",
          photos: "https://api.unsplash.com/users/msaditya9/photos",
          likes: "https://api.unsplash.com/users/msaditya9/likes",
          portfolio: "https://api.unsplash.com/users/msaditya9/portfolio",
          following: "https://api.unsplash.com/users/msaditya9/following",
          followers: "https://api.unsplash.com/users/msaditya9/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1477590380254-f907512430c7?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium:
            "https://images.unsplash.com/profile-1477590380254-f907512430c7?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large:
            "https://images.unsplash.com/profile-1477590380254-f907512430c7?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
        },
        instagram_username: "msaditya9",
        total_collections: 0,
        total_likes: 0,
        total_photos: 18,
        total_promoted_photos: 5,
        accepted_tos: false,
        for_hire: false,
        social: {
          instagram_username: "msaditya9",
          portfolio_url: "https://www.flickr.com/photos/aditya_dittu",
          twitter_username: null,
          paypal_email: null,
        },
      },
      tags: [
        {
          type: "search",
          title: "jaipur",
        },
        {
          type: "search",
          title: "architecture",
        },
        {
          type: "search",
          title: "jal mahal",
        },
      ],
    },
    {
      id: "WCgioEcEVNc",
      slug: "hawa-mahal-india-at-daytime-WCgioEcEVNc",
      created_at: "2018-04-20T13:24:28Z",
      updated_at: "2023-12-13T14:05:14Z",
      promoted_at: null,
      width: 4470,
      height: 7130,
      color: "#c0c0d9",
      blur_hash: "LUKwnV%~x]oz*0kCV?adkqROV?f6",
      description: "Hawa Mahal, pink palace, Jaipur",
      alt_description: "Hawa Mahal, India at daytime",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw2fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw2fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw2fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw2fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw2fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1524230507669-5ff97982bb5e",
      },
      links: {
        self: "https://api.unsplash.com/photos/hawa-mahal-india-at-daytime-WCgioEcEVNc",
        html: "https://unsplash.com/photos/hawa-mahal-india-at-daytime-WCgioEcEVNc",
        download:
          "https://unsplash.com/photos/WCgioEcEVNc/download?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw2fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA",
        download_location:
          "https://api.unsplash.com/photos/WCgioEcEVNc/download?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw2fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA",
      },
      likes: 1166,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {
        nature: {
          status: "approved",
          approved_on: "2020-04-06T14:20:17Z",
        },
      },
      user: {
        id: "IFcEhJqem0Q",
        updated_at: "2023-12-14T07:55:43Z",
        username: "anniespratt",
        name: "Annie Spratt",
        first_name: "Annie",
        last_name: "Spratt",
        twitter_username: "anniespratt",
        portfolio_url: "https://www.anniespratt.com",
        bio: "Photographer from England, sharing my digital, film + vintage slide scans.  \r\n",
        location: "New Forest National Park, UK",
        links: {
          self: "https://api.unsplash.com/users/anniespratt",
          html: "https://unsplash.com/@anniespratt",
          photos: "https://api.unsplash.com/users/anniespratt/photos",
          likes: "https://api.unsplash.com/users/anniespratt/likes",
          portfolio: "https://api.unsplash.com/users/anniespratt/portfolio",
          following: "https://api.unsplash.com/users/anniespratt/following",
          followers: "https://api.unsplash.com/users/anniespratt/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1648828806223-1852f704c58aimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium:
            "https://images.unsplash.com/profile-1648828806223-1852f704c58aimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large:
            "https://images.unsplash.com/profile-1648828806223-1852f704c58aimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
        },
        instagram_username: "anniespratt",
        total_collections: 51,
        total_likes: 14459,
        total_photos: 20099,
        total_promoted_photos: 2944,
        accepted_tos: true,
        for_hire: false,
        social: {
          instagram_username: "anniespratt",
          portfolio_url: "https://www.anniespratt.com",
          twitter_username: "anniespratt",
          paypal_email: null,
        },
      },
      tags: [
        {
          type: "search",
          title: "architecture",
        },
        {
          type: "search",
          title: "building",
        },
        {
          type: "search",
          title: "facade",
        },
      ],
    },
    {
      id: "SRAUI9X4Ep8",
      slug: "birds-near-cathedral-SRAUI9X4Ep8",
      created_at: "2019-06-25T18:13:34Z",
      updated_at: "2023-12-14T01:08:39Z",
      promoted_at: null,
      width: 5912,
      height: 3962,
      color: "#d9d9d9",
      blur_hash: "LkI~PnIpxGxaPWNGs9of00juWBoe",
      description: null,
      alt_description: "birds near cathedral",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1561486008-1011a284acfb?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw3fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1561486008-1011a284acfb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw3fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1561486008-1011a284acfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw3fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1561486008-1011a284acfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw3fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1561486008-1011a284acfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw3fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1561486008-1011a284acfb",
      },
      links: {
        self: "https://api.unsplash.com/photos/birds-near-cathedral-SRAUI9X4Ep8",
        html: "https://unsplash.com/photos/birds-near-cathedral-SRAUI9X4Ep8",
        download:
          "https://unsplash.com/photos/SRAUI9X4Ep8/download?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw3fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA",
        download_location:
          "https://api.unsplash.com/photos/SRAUI9X4Ep8/download?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw3fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA",
      },
      likes: 57,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      user: {
        id: "LhP3iHqQT7U",
        updated_at: "2023-12-10T18:06:09Z",
        username: "cpt_grumpysailor",
        name: "VED",
        first_name: "VED",
        last_name: null,
        twitter_username: null,
        portfolio_url: null,
        bio: "Hey.! I'm ved a guy with his camera and on his journey\r\nTwo things about me include,  my whisky stirred and my laptop full charge\r\nCheers...!",
        location: null,
        links: {
          self: "https://api.unsplash.com/users/cpt_grumpysailor",
          html: "https://unsplash.com/@cpt_grumpysailor",
          photos: "https://api.unsplash.com/users/cpt_grumpysailor/photos",
          likes: "https://api.unsplash.com/users/cpt_grumpysailor/likes",
          portfolio:
            "https://api.unsplash.com/users/cpt_grumpysailor/portfolio",
          following:
            "https://api.unsplash.com/users/cpt_grumpysailor/following",
          followers:
            "https://api.unsplash.com/users/cpt_grumpysailor/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-1554489901591-5258a665d143?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium:
            "https://images.unsplash.com/profile-1554489901591-5258a665d143?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large:
            "https://images.unsplash.com/profile-1554489901591-5258a665d143?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
        },
        instagram_username: "thefirstguyfromthelast",
        total_collections: 0,
        total_likes: 23,
        total_photos: 54,
        total_promoted_photos: 5,
        accepted_tos: true,
        for_hire: true,
        social: {
          instagram_username: "thefirstguyfromthelast",
          portfolio_url: null,
          twitter_username: null,
          paypal_email: null,
        },
      },
      tags: [
        {
          type: "search",
          title: "jaipur",
        },
        {
          type: "search",
          title: "india",
        },
        {
          type: "search",
          title: "albert museum",
        },
      ],
    },
    {
      id: "c5GwtYCHgE8",
      slug: "brown-concrete-building-under-blue-sky-during-daytime-c5GwtYCHgE8",
      created_at: "2021-06-23T22:17:31Z",
      updated_at: "2023-12-13T15:30:09Z",
      promoted_at: null,
      width: 2826,
      height: 3768,
      color: "#59a6d9",
      blur_hash: "LXJ5ig{dXTNa-=vybwn%gPwGofbb",
      description: 'Hawa Mahal - "The Palace of Winds"',
      alt_description: "brown concrete building under blue sky during daytime",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1624486635462-f562f9f287e2?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw4fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1624486635462-f562f9f287e2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw4fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1624486635462-f562f9f287e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw4fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1624486635462-f562f9f287e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw4fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1624486635462-f562f9f287e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw4fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1624486635462-f562f9f287e2",
      },
      links: {
        self: "https://api.unsplash.com/photos/brown-concrete-building-under-blue-sky-during-daytime-c5GwtYCHgE8",
        html: "https://unsplash.com/photos/brown-concrete-building-under-blue-sky-during-daytime-c5GwtYCHgE8",
        download:
          "https://unsplash.com/photos/c5GwtYCHgE8/download?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw4fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA",
        download_location:
          "https://api.unsplash.com/photos/c5GwtYCHgE8/download?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw4fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA",
      },
      likes: 24,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      user: {
        id: "qdo8jaNeWAQ",
        updated_at: "2023-09-15T05:09:07Z",
        username: "helenaamoore",
        name: "Lena Moore",
        first_name: "Lena",
        last_name: "Moore",
        twitter_username: null,
        portfolio_url: null,
        bio: "📍Nevada\r\nDigital and film photographer based in Las Vegas, Nevada, shooting worldwide. Specializing in portrait, candid, and landscape photography. Shot on Canon EOS Rebel T6 and Canon T50 (Kodak Portra 400 Color Negative Film).",
        location: null,
        links: {
          self: "https://api.unsplash.com/users/helenaamoore",
          html: "https://unsplash.com/@helenaamoore",
          photos: "https://api.unsplash.com/users/helenaamoore/photos",
          likes: "https://api.unsplash.com/users/helenaamoore/likes",
          portfolio: "https://api.unsplash.com/users/helenaamoore/portfolio",
          following: "https://api.unsplash.com/users/helenaamoore/following",
          followers: "https://api.unsplash.com/users/helenaamoore/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-fb-1624116540-9ade8a58df97.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium:
            "https://images.unsplash.com/profile-fb-1624116540-9ade8a58df97.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large:
            "https://images.unsplash.com/profile-fb-1624116540-9ade8a58df97.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
        },
        instagram_username: "helenaamoore",
        total_collections: 0,
        total_likes: 8,
        total_photos: 26,
        total_promoted_photos: 1,
        accepted_tos: true,
        for_hire: true,
        social: {
          instagram_username: "helenaamoore",
          portfolio_url: null,
          twitter_username: null,
          paypal_email: null,
        },
      },
      tags: [
        {
          type: "search",
          title: "jaipur",
        },
        {
          type: "search",
          title: "india",
        },
        {
          type: "search",
          title: "rajasthan",
        },
      ],
    },
    {
      id: "qnO1zuuRN7Q",
      slug: "brown-concrete-building-during-daytime-qnO1zuuRN7Q",
      created_at: "2020-10-10T14:25:17Z",
      updated_at: "2023-12-14T04:18:04Z",
      promoted_at: null,
      width: 6016,
      height: 4000,
      color: "#c0d9d9",
      blur_hash: "LrH_uoWqX-Wq?wj]tRj[t,ayRPay",
      description: "Patrika Gate",
      alt_description: "brown concrete building during daytime",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1602339752474-f77aa7bcaecd?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw5fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1602339752474-f77aa7bcaecd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw5fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1602339752474-f77aa7bcaecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw5fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1602339752474-f77aa7bcaecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw5fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1602339752474-f77aa7bcaecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw5fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1602339752474-f77aa7bcaecd",
      },
      links: {
        self: "https://api.unsplash.com/photos/brown-concrete-building-during-daytime-qnO1zuuRN7Q",
        html: "https://unsplash.com/photos/brown-concrete-building-during-daytime-qnO1zuuRN7Q",
        download:
          "https://unsplash.com/photos/qnO1zuuRN7Q/download?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw5fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA",
        download_location:
          "https://api.unsplash.com/photos/qnO1zuuRN7Q/download?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHw5fHxqYWlwdXJ8ZW58MHx8fHwxNzAyNTQ0NzQ5fDA",
      },
      likes: 44,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      user: {
        id: "I1mWkX9xLoA",
        updated_at: "2022-10-07T15:36:05Z",
        username: "b_satyam",
        name: "Satyam Bhardwaj",
        first_name: "Satyam",
        last_name: "Bhardwaj",
        twitter_username: null,
        portfolio_url: null,
        bio: "Just Keep Clicking ",
        location: "Delhi, India",
        links: {
          self: "https://api.unsplash.com/users/b_satyam",
          html: "https://unsplash.com/@b_satyam",
          photos: "https://api.unsplash.com/users/b_satyam/photos",
          likes: "https://api.unsplash.com/users/b_satyam/likes",
          portfolio: "https://api.unsplash.com/users/b_satyam/portfolio",
          following: "https://api.unsplash.com/users/b_satyam/following",
          followers: "https://api.unsplash.com/users/b_satyam/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-fb-1512718019-e4a317361fbb.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium:
            "https://images.unsplash.com/profile-fb-1512718019-e4a317361fbb.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large:
            "https://images.unsplash.com/profile-fb-1512718019-e4a317361fbb.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
        },
        instagram_username: "b.satyam",
        total_collections: 2,
        total_likes: 0,
        total_photos: 8,
        total_promoted_photos: 0,
        accepted_tos: true,
        for_hire: false,
        social: {
          instagram_username: "b.satyam",
          portfolio_url: null,
          twitter_username: null,
          paypal_email: null,
        },
      },
      tags: [
        {
          type: "search",
          title: "jaipur",
        },
        {
          type: "search",
          title: "india",
        },
        {
          type: "search",
          title: "rajasthan",
        },
      ],
    },
    {
      id: "P0a6TT0CvKg",
      slug: "orange-wall-paint-building-near-on-mountain-and-body-of-water-photo-P0a6TT0CvKg",
      created_at: "2017-09-06T13:52:42Z",
      updated_at: "2023-12-14T03:02:13Z",
      promoted_at: "2017-09-07T17:49:20Z",
      width: 3000,
      height: 2000,
      color: "#262640",
      blur_hash: "LGB.yW$,4-NFx|$%ekNGETS1f#kC",
      description:
        "Jal Mahal: A timeless beauty surrounded by water and history.",
      alt_description:
        "orange wall paint building near on mountain and body of water photo",
      breadcrumbs: [],
      urls: {
        raw: "https://images.unsplash.com/photo-1504705759706-c5ee7158f8bb?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHwxMHx8amFpcHVyfGVufDB8fHx8MTcwMjU0NDc0OXww&ixlib=rb-4.0.3",
        full: "https://images.unsplash.com/photo-1504705759706-c5ee7158f8bb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHwxMHx8amFpcHVyfGVufDB8fHx8MTcwMjU0NDc0OXww&ixlib=rb-4.0.3&q=85",
        regular:
          "https://images.unsplash.com/photo-1504705759706-c5ee7158f8bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHwxMHx8amFpcHVyfGVufDB8fHx8MTcwMjU0NDc0OXww&ixlib=rb-4.0.3&q=80&w=1080",
        small:
          "https://images.unsplash.com/photo-1504705759706-c5ee7158f8bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHwxMHx8amFpcHVyfGVufDB8fHx8MTcwMjU0NDc0OXww&ixlib=rb-4.0.3&q=80&w=400",
        thumb:
          "https://images.unsplash.com/photo-1504705759706-c5ee7158f8bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHwxMHx8amFpcHVyfGVufDB8fHx8MTcwMjU0NDc0OXww&ixlib=rb-4.0.3&q=80&w=200",
        small_s3:
          "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1504705759706-c5ee7158f8bb",
      },
      links: {
        self: "https://api.unsplash.com/photos/orange-wall-paint-building-near-on-mountain-and-body-of-water-photo-P0a6TT0CvKg",
        html: "https://unsplash.com/photos/orange-wall-paint-building-near-on-mountain-and-body-of-water-photo-P0a6TT0CvKg",
        download:
          "https://unsplash.com/photos/P0a6TT0CvKg/download?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHwxMHx8amFpcHVyfGVufDB8fHx8MTcwMjU0NDc0OXww",
        download_location:
          "https://api.unsplash.com/photos/P0a6TT0CvKg/download?ixid=M3w1NDA3NjZ8MHwxfHNlYXJjaHwxMHx8amFpcHVyfGVufDB8fHx8MTcwMjU0NDc0OXww",
      },
      likes: 207,
      liked_by_user: false,
      current_user_collections: [],
      sponsorship: null,
      topic_submissions: {},
      user: {
        id: "7ck7gKLQo4g",
        updated_at: "2023-09-13T00:10:15Z",
        username: "rvshekhar10",
        name: "Ravi Shekhar",
        first_name: "Ravi",
        last_name: "Shekhar",
        twitter_username: "rvshekhar10",
        portfolio_url: "https://www.facebook.com/rvshekhar10/",
        bio: "Just another guy with camera. Available for shoots, Contact for collaboration in any way",
        location: "New Delhi",
        links: {
          self: "https://api.unsplash.com/users/rvshekhar10",
          html: "https://unsplash.com/@rvshekhar10",
          photos: "https://api.unsplash.com/users/rvshekhar10/photos",
          likes: "https://api.unsplash.com/users/rvshekhar10/likes",
          portfolio: "https://api.unsplash.com/users/rvshekhar10/portfolio",
          following: "https://api.unsplash.com/users/rvshekhar10/following",
          followers: "https://api.unsplash.com/users/rvshekhar10/followers",
        },
        profile_image: {
          small:
            "https://images.unsplash.com/profile-fb-1504705723-5f0a08516c36.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
          medium:
            "https://images.unsplash.com/profile-fb-1504705723-5f0a08516c36.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
          large:
            "https://images.unsplash.com/profile-fb-1504705723-5f0a08516c36.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
        },
        instagram_username: "rvshekhar10",
        total_collections: 0,
        total_likes: 0,
        total_photos: 24,
        total_promoted_photos: 2,
        accepted_tos: true,
        for_hire: true,
        social: {
          instagram_username: "rvshekhar10",
          portfolio_url: "https://www.facebook.com/rvshekhar10/",
          twitter_username: "rvshekhar10",
          paypal_email: null,
        },
      },
      tags: [
        {
          type: "search",
          title: "jaipur",
        },
        {
          type: "search",
          title: "india",
        },
        {
          type: "search",
          title: "jal mahal",
        },
      ],
    },
  ],
};
