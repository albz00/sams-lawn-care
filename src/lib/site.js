// Shared site data used across pages and components.

export const owner = 'Nick Sams'
export const phone = '304-667-4480'
export const phoneHref = 'tel:+13046674480'
export const email = 'Samslawncare7267@gmail.com'

export const hours = [
  { day: 'Monday',    time: '7 AM – 7 PM' },
  { day: 'Tuesday',   time: '7 AM – 7 PM' },
  { day: 'Wednesday', time: '7 AM – 7 PM' },
  { day: 'Thursday',  time: '7 AM – 7 PM' },
  { day: 'Friday',    time: '7 AM – 7 PM' },
  { day: 'Saturday',  time: '7 AM – 7 PM' },
  { day: 'Sunday',    time: 'Closed' },
]
export const facebookUrl = 'https://www.facebook.com/people/Sams-Lawn-Care/100066570011620/'
export const clientLoginHref =
  'https://clienthub.getjobber.com/client_hubs/a87c84a8-eb21-41a2-899f-d85c592e6d59/login/new?source=share_login'

export const logo =
  'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/6516b86f-5e45-4ef9-ece5-e00967afd500/public'
export const heroImage =
  'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/46d0bfb0-088a-4ea6-ebf1-043e3cb31200/public'
export const heroServiceAreaMap =
  'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/9d7308f5-ba64-48be-d233-0b3bc24e3300/public'
export const testimonialMowerImage =
  'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/de51d073-be44-4fae-c654-7b0529ccee00/public'

// homeGallery is the curated image grid shown on the home page work section.
// Independently managed so the home page can showcase the newest/best photos.
export const homeGallery = [
  'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/02175b46-fadf-4b32-10fe-4b96d9f85800/public',  // Sams branded trailer — featured
  'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/cb1fcc73-6a1f-420d-828d-4c81959fac00/public',  // Large brick home mowed lawn
  'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/73c0cc2c-0788-4b8a-7730-6080e128b300/public',  // Landscaped brick home front
  'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/04d583a2-5b4e-4c2d-98af-1e260f90e200/public',  // Snow plow truck
  'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/a27ec01b-9e71-40e1-aae1-9634fe48d300/public',  // Topiary mulch beds
  'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/22f3d13a-45e4-4677-0c34-73af55a25800/public',  // Striped spring lawn
  'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/a42011da-2ebc-4e51-23f1-8b4ad993c200/public',  // Commercial facility mowing
  'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/1510d760-770d-4a1f-3b51-5d6b76180600/public',  // Skid steer snow removal
  'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/03f6d578-d208-44d9-4159-f5db9c9eac00/public',  // Night landscape lighting
]

// gallery[0-4] are referenced by index throughout the codebase — do not reorder.
export const gallery = [
  'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/74f5e255-f330-4238-93a2-874ce0499500/public',  // [0] landscaping beds
  'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/942c057d-0b46-4d2b-fa43-aa6708239800/public',  // [1] lawn maintenance
  'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/4811f94d-1f83-4ba4-fb70-8c336ed1d800/public',  // [2] mulch install
  'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/952c691d-1e48-4045-31ae-b6d37d4a7000/public',  // [3] trimming & edging
  'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/bab02907-bb02-4055-d7cb-c496a21df100/public',  // [4] mowing patterns
]

export const services = [
  {
    title: 'Mowing',
    slug: 'mowing',
    description:
      'Clean, consistent cuts on a schedule that works for you. Residential and commercial properties of every size.',
    details: [
      'Weekly and bi-weekly mowing routes',
      'Residential and commercial properties',
      'Clippings handled and hard surfaces blown clean',
      'Consistent crews who learn your property',
    ],
    image: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/cb1fcc73-6a1f-420d-828d-4c81959fac00/public',
    imageAlt: 'Large brick home with perfectly mowed and striped lawn by Sams Lawn Care',
  },
  {
    title: 'Trimming & Edging',
    slug: 'trimming-edging',
    description:
      'Sharp lines along walkways, driveways, and beds, the finishing detail that sets a property apart.',
    details: [
      'Crisp edges along walkways and driveways',
      'String trimming around fences, trees, and beds',
      'Detail work included with every mowing visit',
      'A finished look that stands out from the street',
    ],
    image: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/ee5f1730-35d8-4ecd-1535-5a2586136900/public',
    imageAlt: 'Perfectly trimmed tall privacy hedge by Sams Lawn Care',
  },
  {
    title: 'Landscaping',
    slug: 'landscaping',
    description:
      'Bed design, planting, and cleanups that refresh your property and keep it looking its best all season.',
    details: [
      'Bed design, planting, and refreshes',
      'Spring and fall property cleanups',
      'Shrub and hedge trimming',
      'One-time projects or seasonal upkeep',
    ],
    image: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/73c0cc2c-0788-4b8a-7730-6080e128b300/public',
    imageAlt: 'Beautiful landscaped brick home with manicured beds by Sams Lawn Care',
  },
  {
    title: 'Mulching',
    slug: 'mulching',
    description:
      'Fresh mulch installation that protects your plants, defines your beds, and gives everything a clean, finished look.',
    details: [
      'Fresh mulch delivered and installed',
      'Bed edging and weed barrier prep',
      'Color and material options to match your property',
      'Protects plants and locks in moisture',
    ],
    image: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/a27ec01b-9e71-40e1-aae1-9634fe48d300/public',
    imageAlt: 'Freshly mulched landscaping beds with shaped shrubs by Sams Lawn Care',
  },
  {
    title: 'Snow Removal',
    slug: 'snow-removal',
    description:
      'Dependable winter service to keep your driveways and walkways clear and safe when the weather turns.',
    details: [
      'Driveway and parking area clearing',
      'Walkway shoveling and de-icing',
      'Fast response when storms roll through',
      'Seasonal and per-visit options',
    ],
    image: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/04d583a2-5b4e-4c2d-98af-1e260f90e200/public',
    imageAlt: 'Snow plow truck clearing property for Sams Lawn Care',
  },
  {
    title: 'Leaf Removal',
    slug: 'leaf-removal',
    description:
      'Fast, thorough fall cleanups using professional vacuum equipment so your lawn heads into winter clean and healthy.',
    details: [
      'Full-property leaf collection and removal',
      'Professional truck-mounted vacuum system',
      'Beds, lawns, and hard surfaces cleared',
      'One-time cleanups or recurring fall visits',
    ],
    image: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/dd71f93f-a4a9-42c9-bcf1-7d11eb5b7800/public',
    imageAlt: 'Professional leaf vacuum equipment for fall cleanup by Sams Lawn Care',
  },
  {
    title: 'Field Mowing',
    slug: 'field-mowing',
    description:
      'Large-area mowing for rural properties, fields, hillsides, and commercial lots — handled with the right equipment for the job.',
    details: [
      'Rural fields and steep hillsides',
      'Skid steer and heavy-duty mowing equipment',
      'Large commercial and residential lots',
      'Seasonal or one-time service',
    ],
    image: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/0e8cb254-c30f-4a5b-3453-ba5d39398300/public',
    imageAlt: 'John Deere skid steer mowing steep rural hillside for Sams Lawn Care',
  },
]

// serviceShowcase rotates on the home page services section.
// Uses new images only — gallery[0-4] are already shown in the home page work grid below.
export const serviceShowcase = [
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/cb1fcc73-6a1f-420d-828d-4c81959fac00/public',
    alt: 'Large brick home with manicured striped lawn by Sams Lawn Care',
    caption: 'Precision mowing that makes every property stand out.',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/a27ec01b-9e71-40e1-aae1-9634fe48d300/public',
    alt: 'Freshly mulched beds with shaped shrubs by Sams Lawn Care',
    caption: 'Fresh mulch and shaped shrubs for a polished, finished look.',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/73c0cc2c-0788-4b8a-7730-6080e128b300/public',
    alt: 'Beautifully landscaped brick home by Sams Lawn Care',
    caption: 'Full-service landscaping that transforms your curb appeal.',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/04d583a2-5b4e-4c2d-98af-1e260f90e200/public',
    alt: 'Snow plow truck clearing a property by Sams Lawn Care',
    caption: 'Reliable snow removal — we show up when others stay home.',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/22f3d13a-45e4-4677-0c34-73af55a25800/public',
    alt: 'Striped mowed lawn with blooming pink tree by Sams Lawn Care',
    caption: 'Clean cuts that make your lawn shine every week.',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/1510d760-770d-4a1f-3b51-5d6b76180600/public',
    alt: 'John Deere skid steer plowing snow from commercial lot by Sams Lawn Care',
    caption: 'Heavy-duty snow clearing for commercial properties.',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/ed8527ef-c2a7-424e-503e-89f655ee1600/public',
    alt: 'Residential mowing with clean stripe patterns by Sams Lawn Care',
    caption: 'Detailed residential mowing — every stripe counts.',
  },
]

export const googleLogo =
  'https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
export const googleReviewsUrl = 'https://www.google.com/search?q=Sams+Lawn+Care+Lewisburg+WV'

export const testimonials = [
  {
    name: 'Merriweather Franklin',
    rating: '★★★★★',
    text: 'I have been using Sams Lawn Care for a few years now and they do a fantastic job! My lawn is always looking nice thanks to them. They also mulched all my flower beds so that they look pristine. It makes me and my neighbors happy! Highly recommend!',
  },
  {
    name: 'Eddie',
    rating: '★★★★★',
    text: 'Highly recommended and absolutely amazing to work with! Responds fast and goes above and beyond to help you accomplish what you are looking for! 10/10.',
  },
  {
    name: 'Jenny Curry',
    rating: '★★★★★',
    text: 'I have used Sams Lawn Care three times this winter due to the amount of snow and drifting I have on my driveway! Nick returns your calls and was able to come quickly and clean off my driveway and parking area at my home. If you are in need of snow removal in the winter or lawn care in the warmer months I would highly recommend!',
  },
]

export const allReviews = [
  {
    name: 'Merriweather Franklin',
    rating: '★★★★★',
    timeAgo: '3 years ago',
    text: "I've been using Sams Lawn Care for a few years now and they do a fantastic job! My lawn is always looking nice thanks to them. They also mulched all my flower beds so that they look pristine. It makes me (and my neighbors) happy! Highly recommend!",
  },
  {
    name: 'B J Reynolds',
    rating: '★★★★★',
    timeAgo: '7 months ago',
    text: 'Nick did a great job cutting our very steep field, we are extremely happy with his company and will have him next time it needs cutting.',
  },
  {
    name: 'Kendal Hoard',
    rating: '★★★★★',
    timeAgo: '5 months ago',
    text: "Recently hired Sams Snowplowing for the first time, and I couldn't be happier with the service. They arrived promptly after the snowfall and did an excellent job clearing my driveway and sidewalk. Their communication was excellent.",
  },
  {
    name: 'Jenny Curry',
    rating: '★★★★★',
    timeAgo: 'a year ago',
    text: "I have used Sam's Lawn Care three times this winter due to the amount of snow and drifting I have on my driveway! Nick returns your calls and was able to come quickly and clean off my driveway and parking area at my home. Highly recommend!",
  },
  {
    name: 'Justin Windon',
    rating: '★★★★★',
    timeAgo: 'a year ago',
    text: 'Sam Lawn Care did an amazing job on my lawn! They were professional, punctual, and left my yard looking perfect. I highly recommend their services!',
  },
  {
    name: 'Eddie',
    rating: '★★★★★',
    timeAgo: '8 months ago',
    text: 'Highly recommended and absolutely amazing to work with! Responds fast and goes above and beyond to help you accomplish what you are looking for! 10/10',
  },
  {
    name: 'Chris Harrah',
    rating: '★★★★★',
    timeAgo: 'a year ago',
    text: "If you're needing any lawn care done at all this is your company! I've had Nick come out and help with multiple projects already! When he tells you he's going to be there, he will be there!",
  },
  {
    name: 'Karen Isabell',
    rating: '★★★★★',
    timeAgo: '2 years ago',
    text: 'Our lawn was in terrible shape. Sams Lawn Care added us to their schedule quickly. They cleaned up our yard nicely and they were easy to work with.',
  },
  {
    name: 'Michele Lightner',
    rating: '★★★★★',
    timeAgo: '2 years ago',
    text: 'I finally found someone to mow weekly and my lawn looks great. Staff was very professional.',
  },
  {
    name: 'Ben Barry',
    rating: '★★★★★',
    timeAgo: 'a year ago',
    text: 'I have used this company since my arrival in May of 2023. They are very responsive — most recently their effort to clear snow when they showed up and others did not. They have been used to cut our grass and for leaf removal. I highly recommend them.',
  },
  {
    name: 'Melanie Zopp',
    rating: '★★★★★',
    timeAgo: '9 months ago',
    text: 'Fantastic work. Responds promptly, extremely fair pricing. Would highly recommend!',
  },
  {
    name: 'Ben Wiley',
    rating: '★★★★★',
    timeAgo: 'a year ago',
    text: 'Sams Lawn Care LLC offers an excellent list of services and is always very fair and trustworthy! Highly recommend!',
  },
  {
    name: 'D Woods',
    rating: '★★★★★',
    timeAgo: '5 years ago',
    text: 'Sam does a wonderfully professional job. He has great attention to detail. Our lawn looks amazing all the time.',
  },
  {
    name: 'Adam Nelson',
    rating: '★★★★★',
    timeAgo: 'a year ago',
    text: 'Professional service & showed up in a timely manner to remove our leaves. Will use them again!',
  },
  {
    name: 'ATRE Corp',
    rating: '★★★★★',
    timeAgo: '5 years ago',
    text: 'Thank you for mowing my grass while I was sick. My yard looks so good. Wow!',
  },
  {
    name: 'Josh Brothers',
    rating: '★★★★★',
    timeAgo: 'a year ago',
    text: 'Nicholas did a great job!',
  },
  {
    name: 'Kathie Holland',
    rating: '★★★★★',
    timeAgo: '3 years ago',
    text: 'Very quick response and job well done. Really pleased with the job.',
  },
  {
    name: 'Michael McClung',
    rating: '★★★★★',
    timeAgo: '3 years ago',
    text: 'Excellent work. Highly recommend.',
  },
]

export const workGallery = [
  // — Mowing —
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/cb1fcc73-6a1f-420d-828d-4c81959fac00/public',
    alt: 'Large brick luxury home with manicured striped lawn by Sams Lawn Care',
    caption: 'Precision mowing — luxury residential',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/ed8527ef-c2a7-424e-503e-89f655ee1600/public',
    alt: 'Residential mowing with clean stripes by Sams Lawn Care',
    caption: 'Residential mowing stripes',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/bd2a33e9-8236-48f9-59aa-e963317c3d00/public',
    alt: 'Large striped residential lawn maintained by Sams Lawn Care',
    caption: 'Large lot mowing',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/a42011da-2ebc-4e51-23f1-8b4ad993c200/public',
    alt: 'Commercial facility with perfectly mowed lawn by Sams Lawn Care',
    caption: 'Commercial facility mowing',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/22f3d13a-45e4-4677-0c34-73af55a25800/public',
    alt: 'Striped mowed lawn with blooming pink tree by Sams Lawn Care',
    caption: 'Spring lawn care',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/39d5e938-3592-4d55-b3ae-ed202de76600/public',
    alt: 'Mowed lawn with cherry blossom tree by Sams Lawn Care',
    caption: 'Clean cuts every visit',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/64103dd0-0779-428e-6c4b-35d45d6a0500/public',
    alt: 'White colonial estate with manicured lawn by Sams Lawn Care',
    caption: 'Estate lawn maintenance',
  },
  {
    src: gallery[4],
    alt: 'Large mowed lawn with clean patterns by Sams Lawn Care',
    caption: 'Mowing patterns done right',
  },
  // — Landscaping —
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/73c0cc2c-0788-4b8a-7730-6080e128b300/public',
    alt: 'Beautifully landscaped brick home with manicured beds by Sams Lawn Care',
    caption: 'Full landscaping refresh',
  },
  {
    src: gallery[0],
    alt: 'Residential landscaping and bed work by Sams Lawn Care',
    caption: 'Bed design and planting',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/1ba93601-5e9f-4139-7f65-dc00f4274100/public',
    alt: 'Lush green backyard maintained by Sams Lawn Care',
    caption: 'Backyard maintenance',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/b8484e51-7d83-4ce6-338f-bd5195fa3f00/public',
    alt: 'Excavator removing shrubs and doing landscaping work by Sams Lawn Care',
    caption: 'Shrub removal and bed rework',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/8bb3d0b8-1f52-427a-4a77-9ffb5cf46a00/public',
    alt: 'Excavator performing commercial landscaping work by Sams Lawn Care',
    caption: 'Commercial landscaping project',
  },
  // — Mulching —
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/a27ec01b-9e71-40e1-aae1-9634fe48d300/public',
    alt: 'Freshly mulched beds with shaped topiary shrubs by Sams Lawn Care',
    caption: 'Fresh mulch and topiary',
  },
  {
    src: gallery[2],
    alt: 'Fresh mulch installation by Sams Lawn Care',
    caption: 'Mulch install — bed edging',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/c81889eb-d049-49c4-45bc-7f37b0a66e00/public',
    alt: 'Circular commercial mulch bed by Sams Lawn Care',
    caption: 'Commercial mulch install',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/245a7de0-93c6-46d7-a057-4efcbc6f2f00/public',
    alt: 'Commercial parking lot median mulching by Sams Lawn Care',
    caption: 'Commercial median mulching',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/a8edf9c5-9101-4f24-a398-fe542afe7a00/public',
    alt: 'Commercial tree island mulch bed by Sams Lawn Care',
    caption: 'Tree island mulch install',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/127b1310-c1f5-4d96-8181-ec7145736800/public',
    alt: 'Large mulch delivery for landscaping project by Sams Lawn Care',
    caption: 'Bulk mulch delivery and install',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/733341bc-c813-4aff-d6b9-880a143f5400/public',
    alt: 'Skid steer spreading rock and gravel for landscaping by Sams Lawn Care',
    caption: 'Gravel and rock spreading',
  },
  // — Trimming & Edging —
  {
    src: gallery[3],
    alt: 'Trimmed and edged property by Sams Lawn Care',
    caption: 'Trimming and edging detail',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/56c6d89e-28fc-4623-d54e-9eba507eab00/public',
    alt: 'Shaped and trimmed shrubs in commercial setting by Sams Lawn Care',
    caption: 'Commercial shrub shaping',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/ee5f1730-35d8-4ecd-1535-5a2586136900/public',
    alt: 'Tall privacy hedge trimmed flat and precise by Sams Lawn Care',
    caption: 'Privacy hedge trimming',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/a185642c-5aa2-42a0-1517-e9ca679ee000/public',
    alt: 'Dense hedge wall trimmed precisely by Sams Lawn Care',
    caption: 'Large hedge wall maintenance',
  },
  // — Field & Rural Mowing —
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/42c14b84-e80b-41c5-aeb0-5fc88d995c00/public',
    alt: 'Rural field mowing by Sams Lawn Care',
    caption: 'Rural field mowing',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/f611d4c5-6f4c-4030-da64-d5eefcd6d300/public',
    alt: 'Rolling hillside field mowing by Sams Lawn Care',
    caption: 'Hillside field mowing',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/dac0f546-7255-4569-c4d2-87c81ed9ba00/public',
    alt: 'Large rural property mowing by Sams Lawn Care',
    caption: 'Large rural acreage mowing',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/0e8cb254-c30f-4a5b-3453-ba5d39398300/public',
    alt: 'Skid steer mowing steep hillside field by Sams Lawn Care',
    caption: 'Steep hillside field cutting',
  },
  // — Snow Removal —
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/04d583a2-5b4e-4c2d-98af-1e260f90e200/public',
    alt: 'Snow plow truck clearing a property by Sams Lawn Care',
    caption: 'Snow plowing — plow truck',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/1510d760-770d-4a1f-3b51-5d6b76180600/public',
    alt: 'John Deere skid steer plowing snow from parking lot by Sams Lawn Care',
    caption: 'Skid steer snow removal',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/2ff7b039-d70e-42d5-aec2-0e0c9e704000/public',
    alt: 'Truck with BOSS snow spreader treating parking lot by Sams Lawn Care',
    caption: 'Snow treatment and de-icing',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/271cb2d0-0314-4c03-8e5e-28e6420a2100/public',
    alt: 'Full snow removal fleet ready to work for Sams Lawn Care',
    caption: 'Full snow removal fleet',
  },
  {
    src: gallery[1],
    alt: 'Well-maintained property through all seasons by Sams Lawn Care',
    caption: 'Year-round property care',
  },
  // — Leaf Removal —
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/dd71f93f-a4a9-42c9-bcf1-7d11eb5b7800/public',
    alt: 'Professional leaf vacuum truck for fall cleanup by Sams Lawn Care',
    caption: 'Fall leaf removal',
  },
  // — Drainage & Other —
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/c53c7070-d333-4c92-d66d-cd4941f4d800/public',
    alt: 'Gravel drainage installation by Sams Lawn Care',
    caption: 'Drainage and gravel work',
  },
  // — Night Lighting & Specialty —
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/03f6d578-d208-44d9-4159-f5db9c9eac00/public',
    alt: 'Luxury brick home with landscape lighting and manicured lawn at night',
    caption: 'Night landscape lighting result',
  },
  // — Equipment & Crew —
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/02175b46-fadf-4b32-10fe-4b96d9f85800/public',
    alt: 'Sams Lawn Care branded truck and enclosed trailer',
    caption: 'Sams Lawn Care — fully equipped and ready',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/a2200f8d-6bab-4d82-79cb-58ff1d229900/public',
    alt: 'Sams Lawn Care truck and trailer on a job site',
    caption: 'On the job across the Greenbrier Valley',
  },
  {
    src: 'https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/d846df51-723c-479f-e1e3-06c4e8ce0400/public',
    alt: 'Sams Lawn Care crew member operating John Deere skid steer',
    caption: 'Professional crew, professional equipment',
  },
]
