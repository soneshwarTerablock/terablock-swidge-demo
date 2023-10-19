import './App.css';
import {TB_SDK} from "terablock-swidge"
import "terablock-swidge/dist/index.css"

function App() {

  // styles for swidget component
  const style = {width: "400px", height: "650px", textAlign: "left"};

  // styles for the main component for the background
  const bgStyles = {width: "100%", background: "white"};

  // select specific tokens by given tokenIds can refer it by coingecko but will shown only those tokens wihich are available in this sdk from the selected once
  const fromTokens=["terablock", "ethereum", "binancecoin"];
  const toTokens=["tether", "terablock", "matic-network"];

  // select specific chain by giving chainId from the available chains mentioned in the docs
  const fromChains = [1,56];
  const toChains = [56, 137];

  // can give background url to change background
  const background = "https://media.tenor.com/o23PLsTxPLoAAAAd/wallpaper.gif";

  //can pass the provider as well in the same way as all parameters but if not provided it already have a default provider also works smooth and fine.

  return (
    <div className="App">
      <TB_SDK.TBSwidget color="teal" style={style} bgStyles={bgStyles} fromTokens={fromTokens} toTokens={toTokens} fromChains={fromChains} toChains={toChains} background={background}/>
    </div>
  );
}

export default App;
