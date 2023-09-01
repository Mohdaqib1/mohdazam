import "./App.css";
import icon from "./Icon.png";
import logof from "./facebook.png";
import logoi from "./instagram.jfif";
import logog from "./github.png";
// import logoh from "./heroku.png";
import logot from "./twiter.png";
import logogm from "./gmail.png";

function App() {
  return (
    <div style={{}}>
      <div
        style={{
          height: "37%",
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        <div
          style={{
            width: "fit-content",
            alignItem: "end",
            display: "flex",
            justifyContent: "end",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "135px",
              height: "155px",
              borderRadius: "100%",
              margin: "5px",
            }}
          >
            <img src={icon} />
          </div>
          <div
            style={{
              width: "fit-content",
              height: "fit-content",
              textAlign: "center",
              fontWeight: "600",
              padding: "5px",
            }}
          >
            Mohd Azam
          </div>
          <div
            style={{
              width: "fit-content",
              height: "40px",
              textAlign: "center",
            }}
          >
            Business Man
          </div>
        </div>
      </div>

      <div
        style={{
          height: "63%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "275px",
            height: "calc(100% - 50px)",
            // marginBottom: "40px",
            // border: "1px solid red",
          }}
        >
          <div
            style={{
              fontWeight: "600",
              padding: "5px",
              paddingTop: "30px",
              height: "fit-content",
            }}
          >
            Video Creator & Business Enthusiast
          </div>
          <p style={{ padding: "5px", height: "fit-content" }}>
            Welcome to my portfolio! I'm Mohd Azam, a dynamic professional who
            wears two hats: a seasoned businessperson and a passionate video
            creator. With a diverse skill set that combines strategic acumen
            with creative storytelling, I bring a unique perspective to every
            project.
          </p>
        </div>
        <div
          style={{
            height: "50px",
          }}
        >
          <footer>
            <div className="foo">
              {/* <h1>Thank you for Watching my Protfolio...</h1>
              <h2>Find me on social media..</h2> */}
              <div className="foo-im">
                <a href="">
                  {" "}
                  <img className="foo-img" src={logof}></img>
                </a>
                <a href="">
                  <img className="foo-img" src={logoi}></img>
                </a>
                {/* <a href="https://github.com/Mohdaqib1/api-todo-app">
                  <img className="foo-img" src={logog}></img>
                </a> */}
                <a href="">
                  <img className="foo-img" src={logogm}></img>
                </a>
                {/* <a href="https://dashboard.heroku.com/apps">
                  <img className="foo-img" src={logoh}></img>
                </a> */}
                <a href="">
                  <img className="foo-img" src={logot}></img>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
