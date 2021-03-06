import * as types from '../constants/actionTypes';

const initialState = {
  personalDisplay: false,
  bioDisplay: false,
  modalDisplay: false,
  projectDisplay: false,
  modalNumber: 0,
  contentURL: ["filler", "statics/watchMo.png", "statics/SnakeDEMO.jpg", "filler", "statics/mapNice.png", "statics/MartialArts.jpg", "statics/ComputerBuild.jpg", "filler", "statics/EHilton.jpg", "statics/TechLogos.png"],
  demoLinks: ["filler", "http://apisomorphic.com/", "https://eh1537.github.io/SNAKEDEMO/"],
  modalText: [
    "filler",
    `WatchMo, made with the lovely Devs of APIsomorphic, is a "set it and forget it" GraphQL resolver response checker.  It stores this information to be displayed graphically.|
    I worked full-stack on this project for an intensive month-long period, and still touch upon it weekly.  I was called the Grump Debugger, since I served as a second pair of eyes for everyone else on the team.|
    My primary work was adjusting D3 to be more responsive to window size, getting the data that the back end collected from GQL endpoints to be shaped correctly for front-end use, and aiding wherever I could on the front or back.|
    I also was someone who would ask "Hey, how can I help? on a daily basis, giving people a break if need be to work on something else.|
    We are launched on NPM, please see our website and GitHub for the source code.|`,
    `A humble little Snake game constructed entirely from vanilla JS, HTML, and CSS.  Lots of silly DOM manipulation, and a wee bit of jQuery.  Decided to build it around a Dragon Ball Z theme.  Please turn down the volume, there is music and sound effects.|
    The snake in question is the household pet – Monty.  Everyone in the house is either allergic to cats or allergic to dogs, so we got a very obnoxious ball python instead.  She’s very curious, and the one time she’s escaped her cage, she broke a bowl by knocking it out of a cabinet.|
    `,
    "filler",
    `I've always enjoyed improving things, especially as a surprise or a gift.|
    A friend was running a D&D game for her friends, she had been using this little scrawled paper map for over a year, adding to it, erasing it raw and frayed, and starting over.|
    I found some textured paper, a felt tip pen, and had 2 hours in an airport and an hour at Microsoft HQ, and decided to draw something that came out of the appendix of a cheesy adventure novel.|
    Her and her players loved it, I even got a thank you card!|`,
    `Martial arts, specifically  TaeKwonDo, and HapKiDo, was a part of my life for nearly 20 years.  It's also the reason why I have the joints of someone twice my age.|
    I was always a better teacher and throwing dummy than a fighter.  I guess it pays to be average height and weight.|
    There was always a certain level of meditation and Zen when getting thrown around.|
    I taught people from straight beginner into TKD metalists and black belts of their own. Some even became teachers themselves.|`,
    `I started building computers when I was 5.  Dad would bring home old DOS and Windows 3.1/95 machines from the computer lab and say "If you get them to work, they're yours.|
    With every build my cabling gets better, less hiccups, less reading the manual and following your intuition.|
    I've become obsessed with small form factor cases, seeing how much horsepower you can cram into a small package, they also look cool.|`,
    "filler",
    `I am a software engineer, an eclectic nerd, and I deeply enjoy taking things apart, fixing them, and putting it back together again.  This can be hardware, software, or a piece of machinery.|
    My journey has taken me into the worlds of IT, physics, mechanical engineering, finance, retail, and blue collar factory work.  I like to tell people I sold dirt at one point.  Folks I’ve shared office space with crack that I’ve worked every job before 30.  That’s almost true.|
    I’ve worked in small family owned businesseses and large corporations and educational entities.  I live and thrive in small fast paced environments, but take comfort in bureaucracies, compliance, and procedure.  I always make a point to become acquaintances with as many people in the company as possible, from custodians to VPs and C-level officers and owners, even if they aren’t in the same group or department.  They all have insights in how things work, stories to tell, skills to pass on.|`,
    `My techstack includes JavaScript, Node.js, React with Hooks, Redux, and SQL/NoSQL databases.  I’ve worked in Python during my physics days for number crunching, and I built tools in C# and Windows Forms to aid in my work.  I’ve also dabbled in C# within the Unity game engine.|
    I always like to learn new things as well as take a deep dive in something that I’m familiar with.  It’s fun to be a jack of all trades and a subject matter expert at the same time.|`]
}

const aReducer = (state = initialState, action) => {
  console.log(action)
  let copyState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case types.AN_ACTION: {

    }
    case types.SHOW_PROJECTS: {
      console.log(copyState.projectDisplay)
      let projectDisplay = !copyState.projectDisplay
      let bioDisplay = false;
      let personalDisplay = false;
      console.log(projectDisplay)
      return {
        ...state,
        bioDisplay,
        personalDisplay,
        projectDisplay
      }

    }
    case types.SHOW_PERSONAL: {
      console.log(copyState.personalDisplay)
      let personalDisplay = !copyState.personalDisplay
      let bioDisplay = false;
      let projectDisplay = false;
      console.log(personalDisplay)
      return {
        ...state,
        bioDisplay,
        personalDisplay,
        projectDisplay,
      }

    }
    case types.SHOW_BIO: {
      console.log(copyState.personalDisplay)
      let bioDisplay = !copyState.bioDisplay
      let personalDisplay = false;
      let projectDisplay = false;
      console.log(bioDisplay)
      return {
        ...state,
        bioDisplay,
        personalDisplay,
        projectDisplay,
      }
    }

    case types.SHOW_MODAL: {
      console.log(action.payload)
      console.log(copyState.modalDisplay)
      let modalDisplay = !copyState.modalDisplay
      let modalNumber = action.payload
      return {
        ...state,
        modalDisplay,
        modalNumber
      }
    }

    default:
      return state;
  }
}


export default aReducer;