// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
  Appear,
  Link,
  S
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import CodeSlide from 'spectacle-code-slide';
import preloader from "spectacle/lib/utils/preloader";

const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif'),
  thinking: require('../assets/thinking.gif'),
  testWatchMode: require('../assets/interactiveJest.gif'),
  nurseMessage: require('../assets/nurse.png'),
  tired: require('../assets/tired.gif'),
  test_runner: require("../assets/test_runner.png"),
  config: require("../assets/config.png"),
  dir_structure: require("../assets/dir_structure.png")
};

// Require CSS
require('normalize.css');

const code = {
  blank_card: require("raw-loader!../assets/blank_card.example"),
  blank_card_test: require("raw-loader!../assets/blank_card_test.example"),
  get_nurse_message: require("raw-loader!../assets/get_nurse_message.example"),
  nurse_message_test: require("raw-loader!../assets/nurse_message_test.example"),
  detox_test: require("raw-loader!../assets/detox.example")
};

const theme = createTheme(
  {
    primary: 'black',
    secondary: 'white',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Meet My New Friend
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
            Testing
          </Text>
        </Slide>
        <Slide>
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
             Preeti Wadhwani
          </Text>
          <Text textColor="secondary">Mobile Developer @CurveTomorrow</Text>
        </Slide>

        {/* Introduction */}
        <Slide>
          <Heading size={3} caps lineHeight={1} textColor="secondary">
            Why Testing?
          </Heading>
          <Image src={images.thinking} width={500} />
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <List>
            <Appear>
              <ListItem>Refactor with Confidence</ListItem>
            </Appear>
            <Appear>
              <div>
              <ListItem>Lead to Better Design</ListItem>
              <Notes>Write the test first, then write the code that satisfies the test. This not only leads to less buggy code but also to better design, because when you have to structure code in a testable way, you end up making smaller, simpler functions that have fewer dependencies.</Notes>
              </div>
            </Appear>
            <Appear>
              <ListItem>Nothing else matters more than the end user experience</ListItem>
            </Appear>
          </List>
          <Appear>
            <Text textColor="secondary">
              But How?
            </Text>
          </Appear>
          <Appear>
            <Text textColor="secondary">
              Let's See the Examples..
            </Text>
          </Appear>
        </Slide>

        {/* Snapshot Testing */}
      
        <CodeSlide
            transition={["fade"]}
            lang="json"
            color="white"
            textSize=".6em"
            textAlign= "left"
            showLineNumbers={false}
            code={code.blank_card}
            ranges={[
              { loc: [5, 13] },
              { loc: [0,0], title: "Snapshot Testing"}
        ]}/>


        <CodeSlide
            transition={["fade"]}
            lang="json"
            color="white"
            textSize=".6em"
            textAlign= "left"
            showLineNumbers={false}
            code={code.blank_card_test}
            ranges={[
              { loc: [3, 4] },
              { loc: [5, 11], title: "Snapshot Test" },
              { loc: [12, 13], title: "Running Test" },
              { loc: [19, 46]},
              { loc: [14, 15], title: "Updating Snapshot" }, 
        ]}/>

        <Slide transition={["fade"]}>
          <Text textColor="secondary">yarn test --watch</Text>
          <Image src={images.testWatchMode} width={900} />
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Some Tips
          </Heading>
          <List>
          <Appear>
            <ListItem>Committing short, focused assertions</ListItem>
          </Appear>
          <Appear>
            <ListItem>Have a good code review culture</ListItem>
          </Appear> 
          <Appear>
            <ListItem>Describe the test with meaning</ListItem>
          </Appear>
          </List>
        </Slide>


        {/* More about TDD */}

        <Slide transition={["fade"]}>
          <Image src={images.nurseMessage} width={300} />
        </Slide>  

        <CodeSlide
            transition={["fade"]}
            lang="json"
            color="white"
            textSize=".6em"
            textAlign= "left"
            showLineNumbers={false}
            code={code.get_nurse_message}
            ranges={[
              { loc: [8, 17] },
              { loc: [45, 52] },
              { loc: [68, 77] },
        ]}/>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <List>
          <Appear>
            <ListItem>Breaking Down Problem in Small Units</ListItem>
          </Appear>
          <Appear>
            <ListItem>Better Architecture, Better Documentation</ListItem>
          </Appear> 
          <Appear>
            <ListItem>Make you Productive Developer</ListItem>
          </Appear>
          </List>
        </Slide>


        <CodeSlide
            transition={["fade"]}
            lang="json"
            color="white"
            textSize=".6em"
            textAlign= "left"
            showLineNumbers={false}
            code={code.nurse_message_test}
            ranges={[
              { loc: [14, 30], title: "The Test" },
              { loc: [1, 3] },
              { loc: [7, 13] }
        ]}/>


        {/* E2E Testing */}

        <Slide transition={["fade"]}>
           <Appear>
            <Text textColor="secondary">Time to Release the App 🚀</Text>
           </Appear>
           <Appear>
            <div>
              <Heading size={6} caps lineHeight={1} textColor="secondary">
                But Manually Testing everything is tedious
              </Heading>
              <Image src={images.tired} width={600} />
            </div>
           </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Detox - End-to-End Testing Framework
          </Heading>
          <List>
          <Appear>
            <ListItem>E2E Tests for iOS</ListItem>
          </Appear>
          <Appear>
            <ListItem>Important Workflows</ListItem>
          </Appear> 
          </List>

          <Appear>
            <Image src={images.test_runner} width={600} />
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Setting Up
          </Heading>
          <List>
          <Appear>
            <ListItem>AppleSimulatorUtils</ListItem>
          </Appear>
          <Appear>
            <ListItem>Detox command line tools</ListItem>
          </Appear> 
          <Appear>
            <ListItem>Add Detox config to package.json</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Install Detox
            <Link href="https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md">
              <Text textColor="secondary" textSize=".8em">
              <S type="underline">Detox Getting Started Guide</S>
              </Text>
            </Link>
            </ListItem>
          </Appear>
          </List>

          <Appear>
            <Image src={images.config} width={1000} />
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            More Setup
          </Heading>
          <Link href="https://github.com/wix/Detox/issues/237">
              <Text textColor="secondary">
              <S type="underline">Cucumber support</S>
              </Text>
          </Link>
          <Appear>
            <Image src={images.dir_structure} width={350} />
          </Appear>
        </Slide>

        <CodeSlide
            transition={["fade"]}
            lang="json"
            color="white"
            textSize=".6em"
            textAlign= "left"
            showLineNumbers={false}
            code={code.detox_test}
            ranges={[
              { loc: [0, 1] },
              { loc: [1,4]},
              { loc: [4,18]}
        ]}/>

        <Slide transition={['fade']}>
          <Heading size={5} textColor="secondary" caps>
            Tests In Action
          </Heading>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={6} textColor="secondary" caps>
            Useful Links
          </Heading>
          <List>
          <ListItem><Link href="https://bit.ly/2rrwjf7">Testing React Native</Link></ListItem>
          <ListItem><Link href="https://bit.ly/2IQxjVS">Learning to test React Native - Series</Link></ListItem>
          </List>
          <Appear>
            <div>
              <Heading size={6} textColor="secondary" caps>
                Keep in touch!
              </Heading>
              <Text textColor="secondary" textSize=".6em">👩‍💻 @pwadhwani2592</Text>
              <Text textColor="secondary" textSize=".6em">📧 pwadhwani2592@gmail.com</Text>
            </div>
           </Appear>
           <Appear>
            <Heading size={2} textColor="secondary" caps>
              Any Questions?
            </Heading>
          </Appear>
        </Slide>
      </Deck>
    );
  }
}
