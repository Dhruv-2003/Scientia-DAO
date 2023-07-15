import Layout from "../src/components/Layout";
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Loading from "../src/components/Loading";

const xdcApothem = {
  id: 51,
  name: "Apothem-Network (TestNet)",
  network: "XDC Apothem Network (TestNet)",
  nativeCurrency: {
    decimals: 18,
    name: "XDC-Network",
    symbol: "XDC",
  },
  rpcUrls: {
    default: {
      http: ["https://erpc.apothem.network"],
    },
  },
  blockExplorers: {
    default: {
      name: "Apothem Explorer",
      url: "https://explorer.apothem.network/",
    },
  },
  testnet: true,
};

const xdcMainnet = {
  id: 50,
  name: "Xinfin MainNet",
  network: "Xinfin Network MainNet",
  nativeCurrency: {
    decimals: 18,
    name: "XDC Network",
    symbol: "XDC",
  },
  rpcUrls: {
    default: {
      http: ["https://erpc.apothem.network"],
    },
  },
  blockExplorers: {
    default: {
      name: "Xinfin Scan",
      url: "https://explorer.xinfin.network/",
    },
  },
  testnet: false,
};

function MyApp({ Component, pageProps }) {
  const { chains, provider } = configureChains(
    [xdcApothem],
    [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
  );
  const { connectors } = getDefaultWallets({
    appName: "Scientia DAO",
    chains,
  });
  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default MyApp;
