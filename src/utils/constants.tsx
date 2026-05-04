import { Dimensions } from "react-native";
import images from "./images";

export const HEIGHT =  Dimensions.get('window').height
export const WIDTH =  Dimensions.get('window').width
export const widgetPadding = 16
export const onboardingData = [
    {
        key: '1',
        title: 'Crafting Perfect Weddings With Love And Precision',
        description: 'Specializing in unforgettable weddings, blending creativity, attention to detail, and love for a flawless, memorable event.',
        backgroundColor: '#FF6B6B',
        image: images.onboarding1
    },
    {
        key: '2',
        title: 'Bringing Your Events to Life with Seamless Management',
        description: 'We plan, organize, and execute flawless events, ensuring unforgettable experiences with seamless coordination and professionalism.',
        backgroundColor: '#4ECDC4',
        image: images.onboarding2
    },
    {
        key: '3',
        title: 'Creating Unforgettable Event Experiences',
        description: 'We design, plan, and execute unforgettable events with precision, creativity, and seamless coordination for lasting memories.',
        backgroundColor: '#1A535C',
        image: images.onboarding3
    },
];

export const events =[
    {
        image:images.wedd,
        title:'Weddings',
          route:'Services'
    },
    {
        image:images.gath,
        title:'Gatherings',
          route:'Services'
    },
    {
        image:images.event,
        title:'Events',
        route:'Services'
    },

] 

export const categories =[
    {
        image:images.eventBrand,
        title:'Event Branding And Promotional Items',
        route:'CategoryItem'
    },
    {
        image:images.coporateGiveaway,
        title:'Corporate & Giveaways',
        route:'CategoryItem'
    },
    {
        image:images.eventDesign,
        title:'Event Design & Setup',
        route:'CategoryItem'
    },
    // {
    //     image:images.transportation,
    //     title:'Transportation',
    // },
    // {
    //     image:images.catering,
    //     title:'3',
    // },
    // {
    //     image:images.business,
    //     title:'4',
    // },
]

export const categoryItem =[
    {
        image:images.brochure,
        title:'Brochure',
        desc:'Professional event brochures with custom layouts. Upload branding or let MaridAI design.'
    },
    {
        image:images.bracelets,
        title:'Certificates',
        desc:'Elegant participation or award certificates. Personalize seals and logos with MaridAIsupport.',
    },
    {
        image:images.tentCards,
        title:'ID Bracelets Tags',
        desc:'Branded wristbands for secure access. Upload your logo or use MaridAI to customize.',
    },
    {
        image:images.paperBag,
        title:'Sticker & Printable',
        desc:'Versatile branded stickers and labels. Attach designs or let MaridAI recommend layouts.'
    },
]


export const serviceSub=[
    {
        title:'Banners ',

    },
    {
        title:'Booths ',

    },
    {
        title:'Door Arches ',

    },
    {
        title:'Forex Cubes ',

    },
    {
        title:'Roll-ups ',

    },
    {
        title:'Stages ',

    },
    // {
    //     title:'Charity & Fundraising ',

    // },
    // {
    //     title:'Birthday Parties ',

    // },
    // {title:'Exhibitions & Trade Shows '},
    // {title:'Workshops & Training'},

]

export const chatModule=[
    {
        title:'Events',

    },
    {
        title:'Weddings ',

    },
    {
        title:'Gathering ',

    },
 
]