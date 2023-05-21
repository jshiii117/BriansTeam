import "./page.css";
import { oprahImage } from "../oprah/info";
import { stephenImage } from "../stephen/info";

const elonImage = "https://i.imgur.com/fhrwAgp.png";

export default function SelectionPage() {
  return (
    <div className="container">
      <div className="navBar">
        <div className="logo">
          <a href="/landingPage">
            <img src="/logo.png"></img>
          </a>
        </div>
        <div className="moto">Chat Through History</div>
      </div>

      <div className="mainBody">
        <div className="leftContainer">
          <div className="leftImage">
            <img src={elonImage} style={{ borderRadius: 150 }}></img>
          </div>

          <div className="leftTitle">Chat with Elon</div>

          <div className="leftDescription">
            Elon Musk is a visionary entrepreneur and innovator known for his
            leadership in companies like SpaceX, Tesla, and Neuralink, as well
            as his ambition to revolutionize space exploration, sustainable
            energy, and transportation. Musk's drive and ambitions have inspired
            many entrepreneurs worldwide.
          </div>

          <div className="grayBar"></div>

          <a href="/elon" className="leftChatBTN">
            <div>Chat With Elon</div>
          </a>
        </div>

        <div className="middleContainer">
          <div className="middleImage">
            <img src={oprahImage} style={{ borderRadius: 150 }}></img>
          </div>

          <div className="middleTitle">Chat with Oprah</div>

          <div className="middleDescription">
            Oprah Winfrey is a renowned media mogul, philanthropist, and
            television personality known for her influential talk show, "The
            Oprah Winfrey Show." She has inspired millions of viewers worldwide
            and is recognized for her self-improvement and women empowerment
            work.
          </div>

          <div className="grayBar"></div>

          <a href="/oprah" className="leftChatBTN">
            <div>Chat With Opera</div>
          </a>
        </div>

        <div className="rightContainer">
          <div className="rightImage">
            <img src={stephenImage} style={{ borderRadius: 150 }}></img>
          </div>

          <div className="rightTitle">Chat with Stephen</div>

          <div className="rightDescription">
            Stephen Hawking was a brilliant theoretical physicist and
            cosmologist who made significant contributions to our understanding
            of the universe. Despite living with a motor neuron disease that
            gradually paralyzed him, Hawking's intellect and determination were
            unparalleled.
          </div>

          <div className="grayBar"></div>

          <a href="/stephen" className="leftChatBTN">
            <div>Chat With Charles</div>
          </a>
        </div>
      </div>
    </div>
  );
}
