var imageRoot = 'https://raw.githubusercontent.com/washingtontrails/mapboxstory-pasayten-boundary/main/src/images/';
var config = {
    style: 'mapbox://styles/rachelwendling/cl5slgfrg000015qk821yy7ha',
    accessToken: 'pk.eyJ1IjoicmFjaGVsd2VuZGxpbmciLCJhIjoiY2w1c2pobTRhMGFxcTNrbWk5dGprdml0NCJ9.SWxfhiYFmD0C2x2ClwIkwQ',
    showMarkers: false,
    theme: 'light',
    use3dTerrain: true,
    title: '',
    logo: '',
    subtitle: '',
    introVideoURL: 'https://raw.githubusercontent.com/washingtontrails/mapboxstory-pasayten-boundary/main/src/Lost%20Trails.mp4',
    byline: '',
    footer: 'Thank you to our members and volunteers for making this work possible. <a href="https://www.wta.org/losttrails">Learn more about our work on lost trails and get involved at wta.org/losttrails.</a>',
    chapters: [
        {
            id: 'pasayten',
            alignment: 'center',
            title: '',
            image: imageRoot + 'Lesamiz.jpeg',
            imageCredit: 'Rachel Wendling',
            description: 'Just east of the Cascade crest lies the 531,000-acre Pasayten Wilderness. Spanning from the rolling Okanogan Highlands to the craggy North Cascades Peaks — the Pasayten offers miles of expansive views, rolling tundra, glacier carved peaks and unbeatable backpacking opportunities. The wilderness contains nearly 150 mountain peaks higher than 7,500 feet, over 160 bodies of water and the largest population of lynx in the lower 48.',
            location: {
              center: [-120.48902, 48.79047],
              zoom: 9.86,
              pitch: 0.50,
              bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'Pasayten Wilderness',
                    opacity: 0.4
                },
                {
                    layer: 'Boundary Trail',
                    opacity: 0
                },
                {
                    layer: 'Horseshoe Basin',
                    opacity: 0
                },
                {
                    layer: 'Windy Peak',
                    opacity: 0
                },
                {
                    layer: 'Chewuch Trail',
                    opacity: 0
                },
                {
                    layer: 'Andrews Creek',
                    opacity: 0
                },
                {
                    layer: 'Lake Creek',
                    opacity: 0
                },
                {
                    layer: 'Larch Creek',
                    opacity: 0
                },
                {
                    layer: 'Hidden Lakes',
                    opacity: 0
                },
                {
                    layer: 'Middle Fork',
                    opacity: 0
                },
                {
                    layer: 'West Fork',
                    opacity: 0
                }
            ],
            onChapterExit: [
              {
                  layer: 'Pasayten Wilderness',
                  opacity: 0.4
              },
              {
                  layer: 'Boundary Trail',
                  opacity: 0
              },
              {
                  layer: 'Horseshoe Basin',
                  opacity: 0
              },
              {
                  layer: 'Windy Peak',
                  opacity: 0
              },
              {
                  layer: 'Chewuch Trail',
                  opacity: 0
              },
              {
                  layer: 'Andrews Creek',
                  opacity: 0
              },
              {
                  layer: 'Lake Creek',
                  opacity: 0
              },
              {
                  layer: 'Larch Creek',
                  opacity: 0
              },
              {
                  layer: 'Hidden Lakes',
                  opacity: 0
              },
              {
                  layer: 'Middle Fork',
                  opacity: 0
              },
              {
                  layer: 'West Fork',
                  opacity: 0
              }
            ]
        },
        {
            id: 'pasayten2',
            alignment: 'left',
            title: '',
            image: imageRoot + 'Wildfire.jpg',
            imageCredit: 'Rachel Wendling',
            description: 'The Pasayten offers <a href="https://www.wta.org/go-outside/hikes?region=49aff77512c523f32ae13d889f6969c9&subregion=425fd9e8fd7edb23fc53782f16c2ea05">countless hike opportunities</a>, but a lack of sufficient Forest Service funding alongside catastrophic wildfire damage have left sections of the wilderness nearly impossible to navigate. Bridges have burned away, fallen trees littered the trail — upwards of 1,000 in some stretches — while erosion and brush have encroached any memory of the trail corridor.',
            location: {
              center: [-120.48902, 48.79047],
              zoom: 9.86,
              pitch: 0.50,
              bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'Pasayten Wilderness',
                    opacity: 0
                },
                {
                    layer: 'Wildfires',
                    opacity: 0.6
                },
                {
                    layer: 'Boundary Trail',
                    opacity: 0
                },
                {
                    layer: 'Horseshoe Basin',
                    opacity: 0
                },
                {
                    layer: 'Windy Peak',
                    opacity: 0
                },
                {
                    layer: 'Chewuch Trail',
                    opacity: 0
                },
                {
                    layer: 'Andrews Creek',
                    opacity: 0
                },
                {
                    layer: 'Lake Creek',
                    opacity: 0
                },
                {
                    layer: 'Larch Creek',
                    opacity: 0
                },
                {
                    layer: 'Hidden Lakes',
                    opacity: 0
                },
                {
                    layer: 'Middle Fork',
                    opacity: 0
                },
                {
                    layer: 'West Fork',
                    opacity: 0
                }
            ],
            onChapterExit: [
              {
                  layer: 'Pasayten Wilderness',
                  opacity: 0
              },
              {
                  layer: 'Boundary Trail',
                  opacity: 0
              },
              {
                  layer: 'Wildfires',
                  opacity: 0
              },
              {
                  layer: 'Horseshoe Basin',
                  opacity: 0
              },
              {
                  layer: 'Windy Peak',
                  opacity: 0
              },
              {
                  layer: 'Chewuch Trail',
                  opacity: 0
              },
              {
                  layer: 'Andrews Creek',
                  opacity: 0
              },
              {
                  layer: 'Lake Creek',
                  opacity: 0
              },
              {
                  layer: 'Larch Creek',
                  opacity: 0
              },
              {
                  layer: 'Hidden Lakes',
                  opacity: 0
              },
              {
                  layer: 'Middle Fork',
                  opacity: 0
              },
              {
                  layer: 'West Fork',
                  opacity: 0
              }
            ]
        },
        {
            id: 'boundary',
            alignment: '',
            title: '',
            image: imageRoot + 'Boundary Trail.jpg',
            imageCredit: 'Rachel Wendling',
            description: 'The backbone of this wilderness is the 80-mile long Boundary Trail — a stunning route <a href="https://www.wta.org/go-hiking/hikes/pacific-northwest-trail-pasayten-traverse">spanning the length of the Pasayten</a> and coinciding with the larger Pacific Northwest National Scenic Trail that connects the Rocky Mountains of Montana to the sandy shores of Washington\'s coast. When WTA launched our <a href="https://www.wta.org/our-work/lost-trails-found">Lost Trails Found campaign</a> in 2017, we knew the Boundary Trail and its many access points would be a priority for our work. The Pasayten is a special place to so many — and we\'ve been working on-the-ground and in Congress to ensure its trails remain accessible to those who seek them.',
            location: {
              center: [-120.48902, 48.79047],
              zoom: 9.86,
              pitch: 0.50,
              bearing: 0.00
            },
            onChapterEnter: [
              {
                  layer: 'Pasayten Wilderness',
                  opacity: 0
              },
              {
                  layer: 'Boundary Trail',
                  opacity: 1
              },
              {
                  layer: 'Horseshoe Basin',
                  opacity: 0
              },
              {
                  layer: 'Windy Peak',
                  opacity: 0
              },
              {
                  layer: 'Chewuch Trail',
                  opacity: 0
              },
              {
                  layer: 'Andrews Creek',
                  opacity: 0
              },
              {
                  layer: 'Lake Creek',
                  opacity: 0
              },
              {
                  layer: 'Larch Creek',
                  opacity: 0
              },
              {
                  layer: 'Hidden Lakes',
                  opacity: 0
              },
              {
                  layer: 'Middle Fork',
                  opacity: 0
              },
              {
                  layer: 'West Fork',
                  opacity: 0
              }
            ],
            onChapterExit: [
              {
                  layer: 'Pasayten Wilderness',
                  opacity: 0
              },
              {
                  layer: 'Boundary Trail',
                  opacity: 1
              },
              {
                  layer: 'Horseshoe Basin',
                  opacity: 0
              },
              {
                  layer: 'Windy Peak',
                  opacity: 0
              },
              {
                  layer: 'Chewuch Trail',
                  opacity: 0
              },
              {
                  layer: 'Andrews Creek',
                  opacity: 0
              },
              {
                  layer: 'Lake Creek',
                  opacity: 0
              },
              {
                  layer: 'Larch Creek',
                  opacity: 0
              },
              {
                  layer: 'Hidden Lakes',
                  opacity: 0
              },
              {
                  layer: 'Middle Fork',
                  opacity: 0
              },
              {
                  layer: 'West Fork',
                  opacity: 0
              }
            ]
        },
        {
            id: 'boundary3',
            alignment: '',
            title: '',
            image: imageRoot + 'Partners.jpg',
            imageCredit: 'Rachel Wendling',
            description: 'We’re taking a look back at the work WTA has accomplished since making the Pasayten Wilderness one of our priority locations — and what more is needed to restore sustainable access to this backcountry destination. Tackling trails in the Pasayten is no small feat and we’ve been fortunate to work alongside several other organizations working to ensure the Boundary Trail and its primary access points remain open to hikers. The Pacific Northwest Trail Association (PNTA), Back Country Horsemen of Washington (BCHW) and Pacific Crest Trail Association (PCTA) in addition to the land managers — the Okanogan-Wenatchee National Forest — have all played an integral part in maintaining these trails.',
            location: {
              center: [-120.48902, 48.79047],
              zoom: 9.86,
              pitch: 0.50,
              bearing: 0.00
            },
            onChapterEnter: [
              {
                  layer: 'Pasayten Wilderness',
                  opacity: 0
              },
              {
                  layer: 'Boundary Trail',
                  opacity: 1
              },
              {
                  layer: 'Horseshoe Basin',
                  opacity: 0
              },
              {
                  layer: 'Windy Peak',
                  opacity: 0
              },
              {
                  layer: 'Chewuch Trail',
                  opacity: 0
              },
              {
                  layer: 'Andrews Creek',
                  opacity: 0
              },
              {
                  layer: 'Lake Creek',
                  opacity: 0
              },
              {
                  layer: 'Larch Creek',
                  opacity: 0
              },
              {
                  layer: 'Hidden Lakes',
                  opacity: 0
              },
              {
                  layer: 'Middle Fork',
                  opacity: 0
              },
              {
                  layer: 'West Fork',
                  opacity: 0
              }
            ],
            onChapterExit: [
              {
                  layer: 'Pasayten Wilderness',
                  opacity: 0
              },
              {
                  layer: 'Boundary Trail',
                  opacity: 1
              },
              {
                  layer: 'Horseshoe Basin',
                  opacity: 0
              },
              {
                  layer: 'Windy Peak',
                  opacity: 0
              },
              {
                  layer: 'Chewuch Trail',
                  opacity: 0
              },
              {
                  layer: 'Andrews Creek',
                  opacity: 0
              },
              {
                  layer: 'Lake Creek',
                  opacity: 0
              },
              {
                  layer: 'Larch Creek',
                  opacity: 0
              },
              {
                  layer: 'Hidden Lakes',
                  opacity: 0
              },
              {
                  layer: 'Middle Fork',
                  opacity: 0
              },
              {
                  layer: 'West Fork',
                  opacity: 0
              }
            ]
        },
        {
            id: 'horseshoebasin1',
            alignment: 'left',
            title: 'Horseshoe Basin',
            image: imageRoot + 'Horseshoe Basin 1.jpeg',
            imageCredit: '<a href="https://www.wta.org/go-hiking/trip-reports/trip_report.2019-06-17.2005565718">Kris B</a>',
            description: 'Starting at the eastern edge of the Pasayten Wilderness, nearly touching the Canadian border, lies Horseshoe Basin. Starting at over 6,000 feet in elevation, Horseshoe Basin is a favorite among WTA volunteers who want to soak in the quiet, expansive views and catch sight of elusive bears, moose or bighorn sheep. The first stretch of the trail was hit by the Tripod Fire in 2006, which charred the forest and left the trail tread in disrepair.',
            location: {
              center: [-119.91992, 48.93536],
              zoom: 14.15,
              pitch: 45.00,
              bearing: -14.40
            },
            onChapterEnter: [
              {
                  layer: 'Pasayten Wilderness',
                  opacity: 0
              },
              {
                  layer: 'Boundary Trail',
                  opacity: 1
              },
              {
                  layer: 'Horseshoe Basin',
                  opacity: 1
              },
              {
                  layer: 'Windy Peak',
                  opacity: 0
              },
              {
                  layer: 'Chewuch Trail',
                  opacity: 0
              },
              {
                  layer: 'Andrews Creek',
                  opacity: 0
              },
              {
                  layer: 'Lake Creek',
                  opacity: 0
              },
              {
                  layer: 'Larch Creek',
                  opacity: 0
              },
              {
                  layer: 'Hidden Lakes',
                  opacity: 0
              },
              {
                  layer: 'Middle Fork',
                  opacity: 0
              },
              {
                  layer: 'West Fork',
                  opacity: 0
              }
            ],
            onChapterExit: [
              {
                  layer: 'Pasayten Wilderness',
                  opacity: 0
              },
              {
                  layer: 'Boundary Trail',
                  opacity: 1
              },
              {
                  layer: 'Horseshoe Basin',
                  opacity: 1
              },
              {
                  layer: 'Windy Peak',
                  opacity: 0
              },
              {
                  layer: 'Chewuch Trail',
                  opacity: 0
              },
              {
                  layer: 'Andrews Creek',
                  opacity: 0
              },
              {
                  layer: 'Lake Creek',
                  opacity: 0
              },
              {
                  layer: 'Larch Creek',
                  opacity: 0
              },
              {
                  layer: 'Hidden Lakes',
                  opacity: 0
              },
              {
                  layer: 'Middle Fork',
                  opacity: 0
              },
              {
                  layer: 'West Fork',
                  opacity: 0
              }
            ]
        },
        {
            id: 'horseshoebasin2',
            alignment: 'right',
            title: '',
            image: imageRoot + 'Horseshoe Basin 2.jpg',
            imageCredit: 'Beth Macinko',
            description: 'WTA supported backcountry trips here from 2017-2019, overhauling many of the drainage structures to better withstand future storms and prevent trail washouts in the area. Our crews installed numerous waterbars, turnpikes, retaining walls and drain dips throughout, all of which work to divert rainwater off the trail surface and keep erosion at bay. Through the burn zone, we cleared dozens of logs and miles of brush to keep the trail corridor open and accessible.',
            location: {
                center: [-119.93783, 48.98049],
                zoom: 14.2,
                pitch: 45,
                bearing: 0
            },
            rotateAnimation: true,
            onChapterEnter: [
              {
                  layer: 'Pasayten Wilderness',
                  opacity: 0
              },
              {
                  layer: 'Boundary Trail',
                  opacity: 1
              },
              {
                  layer: 'Horseshoe Basin',
                  opacity: 1
              },
              {
                  layer: 'Windy Peak',
                  opacity: 0
              },
              {
                  layer: 'Chewuch Trail',
                  opacity: 0
              },
              {
                  layer: 'Andrews Creek',
                  opacity: 0
              },
              {
                  layer: 'Lake Creek',
                  opacity: 0
              },
              {
                  layer: 'Larch Creek',
                  opacity: 0
              },
              {
                  layer: 'Hidden Lakes',
                  opacity: 0
              },
              {
                  layer: 'Middle Fork',
                  opacity: 0
              },
              {
                  layer: 'West Fork',
                  opacity: 0
              }
            ],
            onChapterExit: [
              {
                  layer: 'Pasayten Wilderness',
                  opacity: 0
              },
              {
                  layer: 'Boundary Trail',
                  opacity: 1
              },
              {
                  layer: 'Horseshoe Basin',
                  opacity: 1
              },
              {
                  layer: 'Windy Peak',
                  opacity: 0
              },
              {
                  layer: 'Chewuch Trail',
                  opacity: 0
              },
              {
                  layer: 'Andrews Creek',
                  opacity: 0
              },
              {
                  layer: 'Lake Creek',
                  opacity: 0
              },
              {
                  layer: 'Larch Creek',
                  opacity: 0
              },
              {
                  layer: 'Hidden Lakes',
                  opacity: 0
              },
              {
                  layer: 'Middle Fork',
                  opacity: 0
              },
              {
                  layer: 'West Fork',
                  opacity: 0
              }
            ]
        },
        {
            id: 'windypeak1',
            alignment: 'left',
            title: 'Windy Peak',
            image: imageRoot + 'Windy Peak 1.jpg',
            imageCredit: 'Owen Vogeli',
            description: 'Just a stone’s throw west of Horseshoe is the Windy Peak trail; a high-altitude trail with jawdropping views into the Pasayten. The peak itself tops out at 8100 feet, and on a clear day, hikers can see into the entire wilderness and up to Mount Baker. Just like its neighbor to the east, Windy Peak was hit by the 2006 Tripod Fire, so you’ll need to tackle blowdowns and rough rocky tread to reach those views.',
            location: {
              center: [-119.97087, 48.92811],
              zoom: 13.55,
              pitch: 45.00,
              bearing: -4.20
            },
            onChapterEnter: [
              {
                  layer: 'Pasayten Wilderness',
                  opacity: 0
              },
              {
                  layer: 'Boundary Trail',
                  opacity: 1
              },
              {
                  layer: 'Horseshoe Basin',
                  opacity: 0
              },
              {
                  layer: 'Windy Peak',
                  opacity: 1
              },
              {
                  layer: 'Chewuch Trail',
                  opacity: 0
              },
              {
                  layer: 'Andrews Creek',
                  opacity: 0
              },
              {
                  layer: 'Lake Creek',
                  opacity: 0
              },
              {
                  layer: 'Larch Creek',
                  opacity: 0
              },
              {
                  layer: 'Hidden Lakes',
                  opacity: 0
              },
              {
                  layer: 'Middle Fork',
                  opacity: 0
              },
              {
                  layer: 'West Fork',
                  opacity: 0
              }
            ],
            onChapterExit: [
              {
                  layer: 'Pasayten Wilderness',
                  opacity: 0
              },
              {
                  layer: 'Boundary Trail',
                  opacity: 1
              },
              {
                  layer: 'Horseshoe Basin',
                  opacity: 0
              },
              {
                  layer: 'Windy Peak',
                  opacity: 1
              },
              {
                  layer: 'Chewuch Trail',
                  opacity: 0
              },
              {
                  layer: 'Andrews Creek',
                  opacity: 0
              },
              {
                  layer: 'Lake Creek',
                  opacity: 0
              },
              {
                  layer: 'Larch Creek',
                  opacity: 0
              },
              {
                  layer: 'Hidden Lakes',
                  opacity: 0
              },
              {
                  layer: 'Middle Fork',
                  opacity: 0
              },
              {
                  layer: 'West Fork',
                  opacity: 0
              }
            ]
        },
        {
            id: 'windypeak2',
            alignment: 'right',
            title: '',
            image: imageRoot + 'Windy Peak 2.jpg',
            imageCredit: 'Owen Vogeli',
            description: 'In 2020,  we sent a modified volunteer vacation out to this breathtaking location and worked to redefine the trail surface in the notoriously rocky area. The trail had become almost invisible in places, but our crew etched in a clear route around the Clutch Creek and Windy Creek junctions. They also removed over a dozen large boulders and tripping hazards from the trail along the rocky ridgeline.',
            location: {
              center: [-119.96852, 48.90488],
              zoom: 13.40,
              pitch: 45.00,
              bearing: 44.80
            },
            onChapterEnter: [
              {
                  layer: 'Pasayten Wilderness',
                  opacity: 0
              },
              {
                  layer: 'Boundary Trail',
                  opacity: 1
              },
              {
                  layer: 'Horseshoe Basin',
                  opacity: 0
              },
              {
                  layer: 'Windy Peak',
                  opacity: 1
              },
              {
                  layer: 'Chewuch Trail',
                  opacity: 0
              },
              {
                  layer: 'Andrews Creek',
                  opacity: 0
              },
              {
                  layer: 'Lake Creek',
                  opacity: 0
              },
              {
                  layer: 'Larch Creek',
                  opacity: 0
              },
              {
                  layer: 'Hidden Lakes',
                  opacity: 0
              },
              {
                  layer: 'Middle Fork',
                  opacity: 0
              },
              {
                  layer: 'West Fork',
                  opacity: 0
              }
            ],
            onChapterExit: [
              {
                  layer: 'Pasayten Wilderness',
                  opacity: 0
              },
              {
                  layer: 'Boundary Trail',
                  opacity: 1
              },
              {
                  layer: 'Horseshoe Basin',
                  opacity: 0
              },
              {
                  layer: 'Windy Peak',
                  opacity: 1
              },
              {
                  layer: 'Chewuch Trail',
                  opacity: 0
              },
              {
                  layer: 'Andrews Creek',
                  opacity: 0
              },
              {
                  layer: 'Lake Creek',
                  opacity: 0
              },
              {
                  layer: 'Larch Creek',
                  opacity: 0
              },
              {
                  layer: 'Hidden Lakes',
                  opacity: 0
              },
              {
                  layer: 'Middle Fork',
                  opacity: 0
              },
              {
                  layer: 'West Fork',
                  opacity: 0
              }
            ]
        },
        {
            id: 'chewuch1',
            alignment: 'left',
            title: 'Chewuch Trail',
            image: imageRoot + 'Chewuch 1.jpg',
            imageCredit: 'Owen Vogeli',
            description: 'Many consider the Chewuch Trail to be the crown jewel of the Pasayten. It creates a perfect lollipop loop with direct access to the remnants of the Tungsten Mine and the iconic Cathedral Amphitheater along the Boundary Trail. In 2003, the Farewell Fire burned nearly all of the trail, leaving just a few pockets of shade and living forest. Nearly 20 years on, the forest is recovering nicely, but dead trees continue to fall, and overenthusiastic brush continues to crowd the trail corridor.',
            location: {
              center: [-120.19146, 48.98285],
              zoom: 14.89,
              pitch: 45.00,
              bearing: -40.00
            },
            rotateAnimation: true,
            onChapterEnter: [
              {
                  layer: 'Pasayten Wilderness',
                  opacity: 0
              },
              {
                  layer: 'Boundary Trail',
                  opacity: 1
              },
              {
                  layer: 'Horseshoe Basin',
                  opacity: 1
              },
              {
                  layer: 'Windy Peak',
                  opacity: 1
              },
              {
                  layer: 'Chewuch Trail',
                  opacity: 0
              },
              {
                  layer: 'Andrews Creek',
                  opacity: 0
              },
              {
                  layer: 'Lake Creek',
                  opacity: 0
              },
              {
                  layer: 'Larch Creek',
                  opacity: 0
              },
              {
                  layer: 'Hidden Lakes',
                  opacity: 0
              },
              {
                  layer: 'Middle Fork',
                  opacity: 0
              },
              {
                  layer: 'West Fork',
                  opacity: 0
              }
            ],
            onChapterExit: [
              {
                  layer: 'Pasayten Wilderness',
                  opacity: 0
              },
              {
                  layer: 'Boundary Trail',
                  opacity: 1
              },
              {
                  layer: 'Horseshoe Basin',
                  opacity: 1
              },
              {
                  layer: 'Windy Peak',
                  opacity: 1
              },
              {
                  layer: 'Chewuch Trail',
                  opacity: 1
              },
              {
                  layer: 'Andrews Creek',
                  opacity: 0
              },
              {
                  layer: 'Lake Creek',
                  opacity: 0
              },
              {
                  layer: 'Larch Creek',
                  opacity: 0
              },
              {
                  layer: 'Hidden Lakes',
                  opacity: 0
              },
              {
                  layer: 'Middle Fork',
                  opacity: 0
              },
              {
                  layer: 'West Fork',
                  opacity: 0
              }
            ]
        },
        {
            id: 'chewuch2',
            alignment: 'right',
            title: '',
            image: imageRoot + 'Chewuch 2.jpg',
            imageCredit: 'Zachary Toliver',
            description: 'With such stunning scenery, it’s no wonder that WTA has returned to this spot often. In 2019, WTA partnered with Northwest Youth Corps to station a crew in the area for 6 weeks who focused extensively on brushing and tread improvements around the Cathedral Driveway turnoff. And in 2021, our Lost Trails Found crew spent 8 days backpacking the 44-mile loop with tools in tow and cleared out every last fallen tree from their path — a whopping 447.',
            location: {
              center: [-120.17543, 48.95129],
              zoom: 13.48,
              pitch: 45.00,
              bearing: -64.00
            },
            onChapterEnter: [
              {
                  layer: 'Pasayten Wilderness',
                  opacity: 0
              },
              {
                  layer: 'Boundary Trail',
                  opacity: 1
              },
              {
                  layer: 'Horseshoe Basin',
                  opacity: 1
              },
              {
                  layer: 'Windy Peak',
                  opacity: 1
              },
              {
                  layer: 'Chewuch Trail',
                  opacity: 1
              },
              {
                  layer: 'Andrews Creek',
                  opacity: 0
              },
              {
                  layer: 'Lake Creek',
                  opacity: 0
              },
              {
                  layer: 'Larch Creek',
                  opacity: 0
              },
              {
                  layer: 'Hidden Lakes',
                  opacity: 0
              },
              {
                  layer: 'Middle Fork',
                  opacity: 0
              },
              {
                  layer: 'West Fork',
                  opacity: 0
              }
            ],
            onChapterExit: [
              {
                  layer: 'Pasayten Wilderness',
                  opacity: 0
              },
              {
                  layer: 'Boundary Trail',
                  opacity: 1
              },
              {
                  layer: 'Horseshoe Basin',
                  opacity: 1
              },
              {
                  layer: 'Windy Peak',
                  opacity: 1
              },
              {
                  layer: 'Chewuch Trail',
                  opacity: 1
              },
              {
                  layer: 'Andrews Creek',
                  opacity: 0
              },
              {
                  layer: 'Lake Creek',
                  opacity: 0
              },
              {
                  layer: 'Larch Creek',
                  opacity: 0
              },
              {
                  layer: 'Hidden Lakes',
                  opacity: 0
              },
              {
                  layer: 'Middle Fork',
                  opacity: 0
              },
              {
                  layer: 'West Fork',
                  opacity: 0
              }
            ]
        },
        {
            id: 'andrews1',
            alignment: 'left',
            title: 'Andrews Creek',
            image: imageRoot + 'Andrews Creek 1.jpeg',
            imageCredit: 'Rachel Wendling',
            description: 'Andrews Creek is a peak baggers delight, often used as an access point to summit Remmel, Mountain, Peepsight Mountain, Andrews Peak and more. After nearly 16 miles of burned forest, hikers reach Spanish Camp — an oasis of green surrounding a quaint Forest Service cabin that was spared from the flames of the Diamond Creek Fire in 2017. Just a 45-min drive north of Winthrop, this remains a popular entry point to the wilderness.',
            location: {
              center: [-120.23817, 48.96303],
              zoom: 15.52,
              pitch: 80.00,
              bearing: 30.40
            },
            onChapterEnter: [
              {
                  layer: 'Pasayten Wilderness',
                  opacity: 0
              },
              {
                  layer: 'Boundary Trail',
                  opacity: 1
              },
              {
                  layer: 'Horseshoe Basin',
                  opacity: 1
              },
              {
                  layer: 'Windy Peak',
                  opacity: 1
              },
              {
                  layer: 'Chewuch Trail',
                  opacity: 1
              },
              {
                  layer: 'Andrews Creek',
                  opacity: 1
              },
              {
                  layer: 'Lake Creek',
                  opacity: 0
              },
              {
                  layer: 'Larch Creek',
                  opacity: 0
              },
              {
                  layer: 'Hidden Lakes',
                  opacity: 0
              },
              {
                  layer: 'Middle Fork',
                  opacity: 0
              },
              {
                  layer: 'West Fork',
                  opacity: 0
              }
            ],
            onChapterExit: [
              {
                  layer: 'Pasayten Wilderness',
                  opacity: 0
              },
              {
                  layer: 'Boundary Trail',
                  opacity: 1
              },
              {
                  layer: 'Horseshoe Basin',
                  opacity: 1
              },
              {
                  layer: 'Windy Peak',
                  opacity: 1
              },
              {
                  layer: 'Chewuch Trail',
                  opacity: 1
              },
              {
                  layer: 'Andrews Creek',
                  opacity: 1
              },
              {
                  layer: 'Lake Creek',
                  opacity: 0
              },
              {
                  layer: 'Larch Creek',
                  opacity: 0
              },
              {
                  layer: 'Hidden Lakes',
                  opacity: 0
              },
              {
                  layer: 'Middle Fork',
                  opacity: 0
              },
              {
                  layer: 'West Fork',
                  opacity: 0
              }
            ]
        },
        {
            id: 'andrews2',
            alignment: 'right',
            title: '',
            image: imageRoot + 'Andrews Creek 2.jpg',
            description: 'In 2018, WTA and several of our partners ventured out to Andrews Creek to address a multitude of issues. From our base camp at Spanish Camp, WTA’s backcountry volunteer crew logged out the trail south to Andrews Pass and east to the Cathedral junction.  and joined forces with a Forest Service crew to complete a reroute around a large eroded gully. Meanwhile, our friends at BCHW, PNTA and PCTA worked across southern sections of the trail to rebuild burnt bridges and brush back overgrowth.',
            imageCredit: 'Rachel Wendling',
            location: {
              center: [-120.20282, 48.90954],
              zoom: 14.04,
              pitch: 45.00,
              bearing: -39.20
            },
            onChapterEnter: [
              {
                  layer: 'Pasayten Wilderness',
                  opacity: 0
              },
              {
                  layer: 'Boundary Trail',
                  opacity: 1
              },
              {
                  layer: 'Horseshoe Basin',
                  opacity: 1
              },
              {
                  layer: 'Windy Peak',
                  opacity: 1
              },
              {
                  layer: 'Chewuch Trail',
                  opacity: 1
              },
              {
                  layer: 'Andrews Creek',
                  opacity: 1
              },
              {
                  layer: 'Lake Creek',
                  opacity: 0
              },
              {
                  layer: 'Larch Creek',
                  opacity: 0
              },
              {
                  layer: 'Hidden Lakes',
                  opacity: 0
              },
              {
                  layer: 'Middle Fork',
                  opacity: 0
              },
              {
                  layer: 'West Fork',
                  opacity: 0
              }
            ],
            onChapterExit: [
              {
                  layer: 'Pasayten Wilderness',
                  opacity: 0
              },
              {
                  layer: 'Boundary Trail',
                  opacity: 1
              },
              {
                  layer: 'Horseshoe Basin',
                  opacity: 1
              },
              {
                  layer: 'Windy Peak',
                  opacity: 1
              },
              {
                  layer: 'Chewuch Trail',
                  opacity: 1
              },
              {
                  layer: 'Andrews Creek',
                  opacity: 1
              },
              {
                  layer: 'Lake Creek',
                  opacity: 0
              },
              {
                  layer: 'Larch Creek',
                  opacity: 0
              },
              {
                  layer: 'Hidden Lakes',
                  opacity: 0
              },
              {
                  layer: 'Middle Fork',
                  opacity: 0
              },
              {
                  layer: 'West Fork',
                  opacity: 0
              }
            ]
        },
        {
            id: 'lakecreek1',
            alignment: 'left',
            title: 'Lake Creek',
            image: imageRoot + 'Lake Creek 1.jpg',
            imageCredit: 'Margot Ferencz',
            description: 'Lake Creek offers early-season wildflowers amidst the recovery from the devastating 2003 Farewell wildfire. Only a few standing islands of fir trees were left behind, but pioneering penstemon, paintbrush, fireweed and clematis are now filling the gaps. The first five miles to the far end of Black Lake are well-maintained and make for a pleasant day hike or overnight, but beyond that point, it becomes an exercise in skilled route finding as the trail conditions deteriorate quickly.',
            location: {
              center: [-120.18105, 48.80644],
              zoom: 11.79,
              pitch: 45.00,
              bearing: -40.00
            },
            onChapterEnter: [
              {
                  layer: 'Pasayten Wilderness',
                  opacity: 0
              },
              {
                  layer: 'Boundary Trail',
                  opacity: 1
              },
              {
                  layer: 'Horseshoe Basin',
                  opacity: 0
              },
              {
                  layer: 'Windy Peak',
                  opacity: 0
              },
              {
                  layer: 'Chewuch Trail',
                  opacity: 0
              },
              {
                  layer: 'Andrews Creek',
                  opacity: 0
              },
              {
                  layer: 'Lake Creek',
                  opacity: 1
              },
              {
                  layer: 'Larch Creek',
                  opacity: 0
              },
              {
                  layer: 'Hidden Lakes',
                  opacity: 0
              },
              {
                  layer: 'Middle Fork',
                  opacity: 0
              },
              {
                  layer: 'West Fork',
                  opacity: 0
              }
            ],
            onChapterExit: [
              {
                  layer: 'Pasayten Wilderness',
                  opacity: 0
              },
              {
                  layer: 'Boundary Trail',
                  opacity: 1
              },
              {
                  layer: 'Horseshoe Basin',
                  opacity: 0
              },
              {
                  layer: 'Windy Peak',
                  opacity: 0
              },
              {
                  layer: 'Chewuch Trail',
                  opacity: 0
              },
              {
                  layer: 'Andrews Creek',
                  opacity: 0
              },
              {
                  layer: 'Lake Creek',
                  opacity: 1
              },
              {
                  layer: 'Larch Creek',
                  opacity: 0
              },
              {
                  layer: 'Hidden Lakes',
                  opacity: 0
              },
              {
                  layer: 'Middle Fork',
                  opacity: 0
              },
              {
                  layer: 'West Fork',
                  opacity: 0
              }
            ]
         },
         {
             id: 'lakecreek2',
             alignment: 'right',
             title: '',
             image: imageRoot + 'Lake Creek 2.jpg',
             imageCredit: 'David Johnson',
             description: 'In 2022, our crews visited Lake Creek for the first time in a decade and worked on a smattering of improvements. Over 3.5 miles of the trail were cleared of heavy brush, 40 logs were cut and removed from the trail corridor and 20 boulders shimmied out of the trail tread. Plenty of logs remain to the north of the lakes for a future trip.',
             location: {
               center: [-120.19224, 48.83918],
               zoom: 12.86,
               pitch: 45.00,
               bearing: 0.00
             },
             onChapterEnter: [
               {
                   layer: 'Pasayten Wilderness',
                   opacity: 0
               },
               {
                   layer: 'Boundary Trail',
                   opacity: 1
               },
               {
                   layer: 'Horseshoe Basin',
                   opacity: 1
               },
               {
                   layer: 'Windy Peak',
                   opacity: 1
               },
               {
                   layer: 'Chewuch Trail',
                   opacity: 1
               },
               {
                   layer: 'Andrews Creek',
                   opacity: 1
               },
               {
                   layer: 'Lake Creek',
                   opacity: 1
               },
               {
                   layer: 'Larch Creek',
                   opacity: 0
               },
               {
                   layer: 'Hidden Lakes',
                   opacity: 0
               },
               {
                   layer: 'Middle Fork',
                   opacity: 0
               },
               {
                   layer: 'West Fork',
                   opacity: 0
               }
             ],
             onChapterExit: [
               {
                   layer: 'Pasayten Wilderness',
                   opacity: 0
               },
               {
                   layer: 'Boundary Trail',
                   opacity: 1
               },
               {
                   layer: 'Horseshoe Basin',
                   opacity: 1
               },
               {
                   layer: 'Windy Peak',
                   opacity: 1
               },
               {
                   layer: 'Chewuch Trail',
                   opacity: 1
               },
               {
                   layer: 'Andrews Creek',
                   opacity: 1
               },
               {
                   layer: 'Lake Creek',
                   opacity: 1
               },
               {
                   layer: 'Larch Creek',
                   opacity: 0
               },
               {
                   layer: 'Hidden Lakes',
                   opacity: 0
               },
               {
                   layer: 'Middle Fork',
                   opacity: 0
               },
               {
                   layer: 'West Fork',
                   opacity: 0
               }
             ]
          },
          {
              id: 'larchcreek1',
              alignment: 'right',
              title: 'Larch Creek',
              image: imageRoot + 'Larch Creek 1.jpeg',
              imageCredit: '<a href="https://www.wta.org/go-hiking/trip-reports/tripreport-2007092700">Perry</a>',
              description: 'In 2017, the Larch Creek trail was set ablaze by the devastating Diamond Creek fire. The most desperate need on this trail is tread repair. With such little vegetation remaining, post-fire erosion made the trail dangerous and almost impassible in places.',
              location: {
                center: [-120.35008, 48.83457],
                zoom: 13.78,
                pitch: 61.99,
                bearing: -56.24
              },
              onChapterEnter: [
                {
                    layer: 'Pasayten Wilderness',
                    opacity: 0
                },
                {
                    layer: 'Boundary Trail',
                    opacity: 1
                },
                {
                    layer: 'Horseshoe Basin',
                    opacity: 1
                },
                {
                    layer: 'Windy Peak',
                    opacity: 1
                },
                {
                    layer: 'Chewuch Trail',
                    opacity: 1
                },
                {
                    layer: 'Andrews Creek',
                    opacity: 1
                },
                {
                    layer: 'Lake Creek',
                    opacity: 1
                },
                {
                    layer: 'Larch Creek',
                    opacity: 1
                },
                {
                    layer: 'Hidden Lakes',
                    opacity: 0
                },
                {
                    layer: 'Middle Fork',
                    opacity: 0
                },
                {
                    layer: 'West Fork',
                    opacity: 0
                }
              ],
              onChapterExit: [
                {
                    layer: 'Pasayten Wilderness',
                    opacity: 0
                },
                {
                    layer: 'Boundary Trail',
                    opacity: 1
                },
                {
                    layer: 'Horseshoe Basin',
                    opacity: 1
                },
                {
                    layer: 'Windy Peak',
                    opacity: 1
                },
                {
                    layer: 'Chewuch Trail',
                    opacity: 1
                },
                {
                    layer: 'Andrews Creek',
                    opacity: 1
                },
                {
                    layer: 'Lake Creek',
                    opacity: 1
                },
                {
                    layer: 'Larch Creek',
                    opacity: 1
                },
                {
                    layer: 'Hidden Lakes',
                    opacity: 0
                },
                {
                    layer: 'Middle Fork',
                    opacity: 0
                },
                {
                    layer: 'West Fork',
                    opacity: 0
                }
              ]
           },
           {
               id: 'larchcreek2',
               alignment: 'left',
               title: '',
               image: imageRoot + 'Larch Creek 2.jpg',
               imageCredit: 'Erica Pan',
               description: 'Due to the severity of the burn, Larch Creek requires annual logouts as charred trees continue to fall over the trail corridor. WTA sent our backcountry crew in 2020 and 2022 to address the number of fallen trees and overhaul sections of the tread. Our latest crew logged out nearly 6 miles of the trail, building upon the work of Back Country Horsemen volunteers before us.',
               location: {
                 center: [-120.37125, 48.86540],
                 zoom: 13.45,
                 pitch: 21.49,
                 bearing: -26.64
               },
               onChapterEnter: [
                 {
                     layer: 'Pasayten Wilderness',
                     opacity: 0
                 },
                 {
                     layer: 'Boundary Trail',
                     opacity: 1
                 },
                 {
                     layer: 'Horseshoe Basin',
                     opacity: 1
                 },
                 {
                     layer: 'Windy Peak',
                     opacity: 1
                 },
                 {
                     layer: 'Chewuch Trail',
                     opacity: 1
                 },
                 {
                     layer: 'Andrews Creek',
                     opacity: 1
                 },
                 {
                     layer: 'Lake Creek',
                     opacity: 1
                 },
                 {
                     layer: 'Larch Creek',
                     opacity: 1
                 },
                 {
                     layer: 'Hidden Lakes',
                     opacity: 0
                 },
                 {
                     layer: 'Middle Fork',
                     opacity: 0
                 },
                 {
                     layer: 'West Fork',
                     opacity: 0
                 }
               ],
               onChapterExit: [
                 {
                     layer: 'Pasayten Wilderness',
                     opacity: 0
                 },
                 {
                     layer: 'Boundary Trail',
                     opacity: 1
                 },
                 {
                     layer: 'Horseshoe Basin',
                     opacity: 1
                 },
                 {
                     layer: 'Windy Peak',
                     opacity: 1
                 },
                 {
                     layer: 'Chewuch Trail',
                     opacity: 1
                 },
                 {
                     layer: 'Andrews Creek',
                     opacity: 1
                 },
                 {
                     layer: 'Lake Creek',
                     opacity: 1
                 },
                 {
                     layer: 'Larch Creek',
                     opacity: 1
                 },
                 {
                     layer: 'Hidden Lakes',
                     opacity: 0
                 },
                 {
                     layer: 'Middle Fork',
                     opacity: 0
                 },
                 {
                     layer: 'West Fork',
                     opacity: 0
                 }
               ]
            },
            {
                id: 'hiddenlakes1',
                alignment: 'left',
                title: 'Hidden Lakes',
                image: imageRoot + 'Hidden Lakes 1.jpeg',
                imageCredit: '<a href="https://www.wta.org/go-hiking/trip-reports/trip_report-2020-07-12-5846328585">LooandMoo</a>',
                description: 'Similar to Larch Creek, the Diamond Creek fire of 2017 swallowed the entire Hidden Lakes trail — burning everything from start to finish. Since the fire, hundreds of new blowdowns cover the trail every year, requiring dedicated annual maintenance to keep up. Although the forest was devastated, the lakes remain an idyllic destination — a series of sparkling blue pools tucked into a valley of ash.',
                location: {
                  center: [-120.49309, 48.91427],
                  zoom: 13.34,
                  pitch: 45.00,
                  bearing: 0.00
                },
                rotateAnimation: true,
                onChapterEnter: [
                  {
                      layer: 'Pasayten Wilderness',
                      opacity: 0
                  },
                  {
                      layer: 'Boundary Trail',
                      opacity: 1
                  },
                  {
                      layer: 'Horseshoe Basin',
                      opacity: 1
                  },
                  {
                      layer: 'Windy Peak',
                      opacity: 1
                  },
                  {
                      layer: 'Chewuch Trail',
                      opacity: 1
                  },
                  {
                      layer: 'Andrews Creek',
                      opacity: 1
                  },
                  {
                      layer: 'Lake Creek',
                      opacity: 1
                  },
                  {
                      layer: 'Larch Creek',
                      opacity: 1
                  },
                  {
                      layer: 'Hidden Lakes',
                      opacity: 1
                  },
                  {
                      layer: 'Middle Fork',
                      opacity: 0
                  },
                  {
                      layer: 'West Fork',
                      opacity: 0
                  }
                ],
                onChapterExit: [
                  {
                      layer: 'Pasayten Wilderness',
                      opacity: 0
                  },
                  {
                      layer: 'Boundary Trail',
                      opacity: 1
                  },
                  {
                      layer: 'Horseshoe Basin',
                      opacity: 1
                  },
                  {
                      layer: 'Windy Peak',
                      opacity: 1
                  },
                  {
                      layer: 'Chewuch Trail',
                      opacity: 1
                  },
                  {
                      layer: 'Andrews Creek',
                      opacity: 1
                  },
                  {
                      layer: 'Lake Creek',
                      opacity: 1
                  },
                  {
                      layer: 'Larch Creek',
                      opacity: 1
                  },
                  {
                      layer: 'Hidden Lakes',
                      opacity: 1
                  },
                  {
                      layer: 'Middle Fork',
                      opacity: 0
                  },
                  {
                      layer: 'West Fork',
                      opacity: 0
                  }
                ]
             },
             {
                 id: 'hiddenlakes2',
                 alignment: 'right',
                 title: '',
                 image: imageRoot + 'Hidden Lakes 2.jpg',
                 imageCredit: 'Ginevra Moore',
                 description: 'In 2022, we hit the trail with back-to-back trips. An early season backcountry response team cleared several hundred downed trees along the first few miles, and a week later, one of our Lost Trails Found crews picked up where they left off. During their 8-day hitch, the Lost Trails Found crew hit a new record of logs removed for WTA — 1,601 in just over a mile of trail.',
                 location: {
                   center: [-120.37354, 48.81666],
                   zoom: 12.73,
                   pitch: 45.00,
                   bearing: -64.00
                 },
                 onChapterEnter: [
                   {
                       layer: 'Pasayten Wilderness',
                       opacity: 0
                   },
                   {
                       layer: 'Boundary Trail',
                       opacity: 1
                   },
                   {
                       layer: 'Horseshoe Basin',
                       opacity: 1
                   },
                   {
                       layer: 'Windy Peak',
                       opacity: 1
                   },
                   {
                       layer: 'Chewuch Trail',
                       opacity: 1
                   },
                   {
                       layer: 'Andrews Creek',
                       opacity: 1
                   },
                   {
                       layer: 'Lake Creek',
                       opacity: 1
                   },
                   {
                       layer: 'Larch Creek',
                       opacity: 1
                   },
                   {
                       layer: 'Hidden Lakes',
                       opacity: 1
                   },
                   {
                       layer: 'Middle Fork',
                       opacity: 0
                   },
                   {
                       layer: 'West Fork',
                       opacity: 0
                   }
                 ],
                 onChapterExit: [
                   {
                       layer: 'Pasayten Wilderness',
                       opacity: 0
                   },
                   {
                       layer: 'Boundary Trail',
                       opacity: 1
                   },
                   {
                       layer: 'Horseshoe Basin',
                       opacity: 1
                   },
                   {
                       layer: 'Windy Peak',
                       opacity: 1
                   },
                   {
                       layer: 'Chewuch Trail',
                       opacity: 1
                   },
                   {
                       layer: 'Andrews Creek',
                       opacity: 1
                   },
                   {
                       layer: 'Lake Creek',
                       opacity: 1
                   },
                   {
                       layer: 'Larch Creek',
                       opacity: 1
                   },
                   {
                       layer: 'Hidden Lakes',
                       opacity: 1
                   },
                   {
                       layer: 'Middle Fork',
                       opacity: 0
                   },
                   {
                       layer: 'West Fork',
                       opacity: 0
                   }
                 ]
              },
              {
                  id: 'robinson1',
                  alignment: 'right',
                  title: 'Robinson Creek',
                  image: imageRoot + 'Robinson Creek 1.jpeg',
                  imageCredit: 'Jill Simmons',
                  description: 'Robinson Creek, also known as the Middle Fork Pasayten River, always makes for a fun visit. From the Robinson Creek cut-off at Harts Pass, hikers meander for 15 miles through river valleys and over Robinson Pass before reaching the historic Pasayten airstrip —  a wide, flat meadow with an idyllic wood cabin. From here, hikers can continue onward to the Boundary Trail or turn around to complete a stunning loop with the lofty Buckskin Ridge Trail. Robinson Creek has been mostly spared from wildfire, so plenty of lush forest views remain.',
                  location: {
                    center: [-120.63042, 48.80041],
                    zoom: 13.61,
                    pitch: 71.50,
                    bearing: 9.60
                  },
                  rotateAnimation: true,
                  onChapterEnter: [
                    {
                        layer: 'Pasayten Wilderness',
                        opacity: 0
                    },
                    {
                        layer: 'Boundary Trail',
                        opacity: 1
                    },
                    {
                        layer: 'Horseshoe Basin',
                        opacity: 1
                    },
                    {
                        layer: 'Windy Peak',
                        opacity: 1
                    },
                    {
                        layer: 'Chewuch Trail',
                        opacity: 1
                    },
                    {
                        layer: 'Andrews Creek',
                        opacity: 1
                    },
                    {
                        layer: 'Lake Creek',
                        opacity: 1
                    },
                    {
                        layer: 'Larch Creek',
                        opacity: 1
                    },
                    {
                        layer: 'Hidden Lakes',
                        opacity: 1
                    },
                    {
                        layer: 'Middle Fork',
                        opacity: 1
                    },
                    {
                        layer: 'West Fork',
                        opacity: 0
                    }
                  ],
                  onChapterExit: [
                    {
                        layer: 'Pasayten Wilderness',
                        opacity: 0
                    },
                    {
                        layer: 'Boundary Trail',
                        opacity: 1
                    },
                    {
                        layer: 'Horseshoe Basin',
                        opacity: 1
                    },
                    {
                        layer: 'Windy Peak',
                        opacity: 1
                    },
                    {
                        layer: 'Chewuch Trail',
                        opacity: 1
                    },
                    {
                        layer: 'Andrews Creek',
                        opacity: 1
                    },
                    {
                        layer: 'Lake Creek',
                        opacity: 1
                    },
                    {
                        layer: 'Larch Creek',
                        opacity: 1
                    },
                    {
                        layer: 'Hidden Lakes',
                        opacity: 1
                    },
                    {
                        layer: 'Middle Fork',
                        opacity: 1
                    },
                    {
                        layer: 'West Fork',
                        opacity: 0
                    }
                  ]
               },
               {
                   id: 'robinson2',
                   alignment: 'right',
                   title: '',
                   image: imageRoot + 'Robinson Creek 2.jpg',
                   imageCredit: 'Lisa Black',
                   description: 'Despite evading the flames, Robinson Creek still requires regular maintenance to keep water at bay and blowdowns in check. Seasonal storms continue to knock down even healthy trees, so in 2016, a strenuous BCRT crew headed out on a 50-mile loop to clear trees, working alongside Forest Service crews to cut out over 200 trees from Robinson Creek. And in 2018, one of our intrepid youth volunteer vacation crews ventured out along Robinson to rebuild some key water management structures — including check steps, which help slow down water runoff and prevent trail erosion.',
                   location: {
                     center: [-120.63189, 48.91844],
                     zoom: 14.81,
                     pitch: 45.00,
                     bearing: 13.60
                   },
                   onChapterEnter: [
                     {
                         layer: 'Pasayten Wilderness',
                         opacity: 0
                     },
                     {
                         layer: 'Boundary Trail',
                         opacity: 1
                     },
                     {
                         layer: 'Horseshoe Basin',
                         opacity: 1
                     },
                     {
                         layer: 'Windy Peak',
                         opacity: 1
                     },
                     {
                         layer: 'Chewuch Trail',
                         opacity: 1
                     },
                     {
                         layer: 'Andrews Creek',
                         opacity: 1
                     },
                     {
                         layer: 'Lake Creek',
                         opacity: 1
                     },
                     {
                         layer: 'Larch Creek',
                         opacity: 1
                     },
                     {
                         layer: 'Hidden Lakes',
                         opacity: 1
                     },
                     {
                         layer: 'Middle Fork',
                         opacity: 1
                     },
                     {
                         layer: 'West Fork',
                         opacity: 0
                     }
                   ],
                   onChapterExit: [
                     {
                         layer: 'Pasayten Wilderness',
                         opacity: 0
                     },
                     {
                         layer: 'Boundary Trail',
                         opacity: 1
                     },
                     {
                         layer: 'Horseshoe Basin',
                         opacity: 1
                     },
                     {
                         layer: 'Windy Peak',
                         opacity: 1
                     },
                     {
                         layer: 'Chewuch Trail',
                         opacity: 1
                     },
                     {
                         layer: 'Andrews Creek',
                         opacity: 1
                     },
                     {
                         layer: 'Lake Creek',
                         opacity: 1
                     },
                     {
                         layer: 'Larch Creek',
                         opacity: 1
                     },
                     {
                         layer: 'Hidden Lakes',
                         opacity: 1
                     },
                     {
                         layer: 'Middle Fork',
                         opacity: 1
                     },
                     {
                         layer: 'West Fork',
                         opacity: 0
                     }
                   ]
                },
                {
                    id: 'westfork1',
                    alignment: 'left',
                    title: 'West Fork Pasayten',
                    image: imageRoot + 'West Fork 1.jpg',
                    imageCredit: 'Toni Voorhies',
                    description: 'The West Fork Pasayten River is the final entry point to the Boundary Trail before the Pacific Crest Trail. Starting from Slate Peak, the West Fork meanders through a deep valley with bursts of meadows for 14 miles before reaching the junction with the Boundary Trail. If it were in better condition, this would be an ideal route for creating long loops with the PCT or Buckskin Ridge — but as is, a severe lack of maintenance has left the route too difficult to complete. Hundreds (if not thousands) of fallen trees block the way.',
                    location: {
                      center: [-120.70063, 48.79193],
                      zoom: 12.96,
                      pitch: 61.27,
                      bearing: 0.00
                    },
                    onChapterEnter: [
                      {
                          layer: 'Pasayten Wilderness',
                          opacity: 0
                      },
                      {
                          layer: 'Boundary Trail',
                          opacity: 1
                      },
                      {
                          layer: 'Horseshoe Basin',
                          opacity: 1
                      },
                      {
                          layer: 'Windy Peak',
                          opacity: 1
                      },
                      {
                          layer: 'Chewuch Trail',
                          opacity: 1
                      },
                      {
                          layer: 'Andrews Creek',
                          opacity: 1
                      },
                      {
                          layer: 'Lake Creek',
                          opacity: 1
                      },
                      {
                          layer: 'Larch Creek',
                          opacity: 1
                      },
                      {
                          layer: 'Hidden Lakes',
                          opacity: 1
                      },
                      {
                          layer: 'Middle Fork',
                          opacity: 1
                      },
                      {
                          layer: 'West Fork',
                          opacity: 1
                      }
                    ],
                    onChapterExit: [
                      {
                          layer: 'Pasayten Wilderness',
                          opacity: 0
                      },
                      {
                          layer: 'Boundary Trail',
                          opacity: 1
                      },
                      {
                          layer: 'Horseshoe Basin',
                          opacity: 1
                      },
                      {
                          layer: 'Windy Peak',
                          opacity: 1
                      },
                      {
                          layer: 'Chewuch Trail',
                          opacity: 1
                      },
                      {
                          layer: 'Andrews Creek',
                          opacity: 1
                      },
                      {
                          layer: 'Lake Creek',
                          opacity: 1
                      },
                      {
                          layer: 'Larch Creek',
                          opacity: 1
                      },
                      {
                          layer: 'Hidden Lakes',
                          opacity: 1
                      },
                      {
                          layer: 'Middle Fork',
                          opacity: 1
                      },
                      {
                          layer: 'West Fork',
                          opacity: 1
                      }
                    ]
                 },
                 {
                     id: 'westfork2',
                     alignment: 'right',
                     title: '',
                     image: '',
                     imageCredit: '',
                     description: 'This past summer, one of our Lost Trails Found crews headed out for a logout on the early stretches of this trail, and they managed to clear the first 6.5 miles. During their stay, they cut and removed 120 fallen logs from the trail — some nearly 3 feet in diameter. Even with this work, hundreds of fallen logs remain on the northern stretch, making it difficult to hike in its entirety.',
                     location: {
                       center: [-120.70738, 48.82301],
                       zoom: 14.11,
                       pitch: 35.27,
                       bearing: 40.00
                     },
                     onChapterEnter: [
                       {
                           layer: 'Pasayten Wilderness',
                           opacity: 0
                       },
                       {
                           layer: 'Boundary Trail',
                           opacity: 1
                       },
                       {
                           layer: 'Horseshoe Basin',
                           opacity: 1
                       },
                       {
                           layer: 'Windy Peak',
                           opacity: 1
                       },
                       {
                           layer: 'Chewuch Trail',
                           opacity: 1
                       },
                       {
                           layer: 'Andrews Creek',
                           opacity: 1
                       },
                       {
                           layer: 'Lake Creek',
                           opacity: 1
                       },
                       {
                           layer: 'Larch Creek',
                           opacity: 1
                       },
                       {
                           layer: 'Hidden Lakes',
                           opacity: 1
                       },
                       {
                           layer: 'Middle Fork',
                           opacity: 1
                       },
                       {
                           layer: 'West Fork',
                           opacity: 1
                       }
                     ],
                     onChapterExit: [
                       {
                           layer: 'Pasayten Wilderness',
                           opacity: 0
                       },
                       {
                           layer: 'Boundary Trail',
                           opacity: 1
                       },
                       {
                           layer: 'Horseshoe Basin',
                           opacity: 1
                       },
                       {
                           layer: 'Windy Peak',
                           opacity: 1
                       },
                       {
                           layer: 'Chewuch Trail',
                           opacity: 1
                       },
                       {
                           layer: 'Andrews Creek',
                           opacity: 1
                       },
                       {
                           layer: 'Lake Creek',
                           opacity: 1
                       },
                       {
                           layer: 'Larch Creek',
                           opacity: 1
                       },
                       {
                           layer: 'Hidden Lakes',
                           opacity: 1
                       },
                       {
                           layer: 'Middle Fork',
                           opacity: 1
                       },
                       {
                           layer: 'West Fork',
                           opacity: 1
                       }
                     ]
                  },
                  {
                      id: 'conclusion1',
                      alignment: 'center',
                      title: '',
                      image: '',
                      imageCredit: '',
                      description: 'The Pasayten is a special place to so many hikers — whether you take a day hike up to Black Lake or build a weeklong route connecting several valleys and passes, you’ll find a wilderness experience unlike any other in Washington. But, as wildfire season continues to grow longer and hotter across Washington, locations like the Pasayten are in desperate need of long-term investments to ensure future generations can enjoy these benefits.',
                      location: {
                        center: [-120.48902, 48.79047],
                        zoom: 9.86,
                        pitch: 0.50,
                        bearing: 0.00
                      },
                      onChapterEnter: [
                        {
                            layer: 'Pasayten Wilderness',
                            opacity: 0
                        },
                        {
                            layer: 'Boundary Trail',
                            opacity: 1
                        },
                        {
                            layer: 'Horseshoe Basin',
                            opacity: 1
                        },
                        {
                            layer: 'Windy Peak',
                            opacity: 1
                        },
                        {
                            layer: 'Chewuch Trail',
                            opacity: 1
                        },
                        {
                            layer: 'Andrews Creek',
                            opacity: 1
                        },
                        {
                            layer: 'Lake Creek',
                            opacity: 1
                        },
                        {
                            layer: 'Larch Creek',
                            opacity: 1
                        },
                        {
                            layer: 'Hidden Lakes',
                            opacity: 1
                        },
                        {
                            layer: 'Middle Fork',
                            opacity: 1
                        },
                        {
                            layer: 'West Fork',
                            opacity: 1
                        }
                      ],
                      onChapterExit: [
                        {
                            layer: 'Pasayten Wilderness',
                            opacity: 0
                        },
                        {
                            layer: 'Boundary Trail',
                            opacity: 1
                        },
                        {
                            layer: 'Horseshoe Basin',
                            opacity: 1
                        },
                        {
                            layer: 'Windy Peak',
                            opacity: 1
                        },
                        {
                            layer: 'Chewuch Trail',
                            opacity: 1
                        },
                        {
                            layer: 'Andrews Creek',
                            opacity: 1
                        },
                        {
                            layer: 'Lake Creek',
                            opacity: 1
                        },
                        {
                            layer: 'Larch Creek',
                            opacity: 1
                        },
                        {
                            layer: 'Hidden Lakes',
                            opacity: 1
                        },
                        {
                            layer: 'Middle Fork',
                            opacity: 1
                        },
                        {
                            layer: 'West Fork',
                            opacity: 1
                        }
                      ]
                   },
                   {
                       id: 'conclusion2',
                       alignment: 'center',
                       title: '',
                       image: '',
                       imageCredit: '',
                       description: 'WTA’s Lost Trails Found campaign works to retain and increase access to Washington’s stunning wild places by restoring trails at risk of disappearing. We know the value that places like the Pasayten Wilderness provide and we look forward to continuing our work to save access to these and other lost trails across the state. Follow along with all of our work across the backcountry at <a href="https://www.wta.org/losttrails">www.wta.org/losttrails</a> and support our work at <a href="https:www.wta.org/savelostttrails">www.wta.org/savelostttrails</a>.',
                       location: {
                         center: [-120.48902, 48.79047],
                         zoom: 9.86,
                         pitch: 0.50,
                         bearing: 0.00
                       },
                       onChapterEnter: [
                         {
                             layer: 'Pasayten Wilderness',
                             opacity: 0
                         },
                         {
                             layer: 'Boundary Trail',
                             opacity: 1
                         },
                         {
                             layer: 'Horseshoe Basin',
                             opacity: 1
                         },
                         {
                             layer: 'Windy Peak',
                             opacity: 1
                         },
                         {
                             layer: 'Chewuch Trail',
                             opacity: 1
                         },
                         {
                             layer: 'Andrews Creek',
                             opacity: 1
                         },
                         {
                             layer: 'Lake Creek',
                             opacity: 1
                         },
                         {
                             layer: 'Larch Creek',
                             opacity: 1
                         },
                         {
                             layer: 'Hidden Lakes',
                             opacity: 1
                         },
                         {
                             layer: 'Middle Fork',
                             opacity: 1
                         },
                         {
                             layer: 'West Fork',
                             opacity: 1
                         }
                       ],
                       onChapterExit: [
                         {
                             layer: 'Pasayten Wilderness',
                             opacity: 0
                         },
                         {
                             layer: 'Boundary Trail',
                             opacity: 1
                         },
                         {
                             layer: 'Horseshoe Basin',
                             opacity: 1
                         },
                         {
                             layer: 'Windy Peak',
                             opacity: 1
                         },
                         {
                             layer: 'Chewuch Trail',
                             opacity: 1
                         },
                         {
                             layer: 'Andrews Creek',
                             opacity: 1
                         },
                         {
                             layer: 'Lake Creek',
                             opacity: 1
                         },
                         {
                             layer: 'Larch Creek',
                             opacity: 1
                         },
                         {
                             layer: 'Hidden Lakes',
                             opacity: 1
                         },
                         {
                             layer: 'Middle Fork',
                             opacity: 1
                         },
                         {
                             layer: 'West Fork',
                             opacity: 1
                         }
                       ]
                    }
    ]
};
